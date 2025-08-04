#!/usr/bin/env node

/**
 * Script to find hardcoded text in React components
 * Usage: node scripts/find-hardcoded-text.js
 */

const fs = require('fs');
const path = require('path');

// Common English words that are likely hardcoded text
const commonWords = [
  'Sign in', 'Sign up', 'Login', 'Logout', 'Submit', 'Cancel', 'Save', 'Delete',
  'Edit', 'View', 'Close', 'Back', 'Next', 'Previous', 'Loading', 'Success',
  'Error', 'Warning', 'Email', 'Password', 'Name', 'Phone', 'Address',
  'Welcome', 'Home', 'About', 'Contact', 'Features', 'Pricing', 'Help',
  'Settings', 'Profile', 'Dashboard', 'Search', 'Filter', 'Sort', 'Add',
  'Remove', 'Update', 'Create', 'Confirm', 'Yes', 'No', 'OK', 'Cancel',
  'Please', 'Thank you', 'Sorry', 'Oops', 'Try again', 'Get started',
  'Learn more', 'Read more', 'Show more', 'Show less', 'View all',
  'See all', 'Load more', 'Refresh', 'Reload', 'Reset', 'Clear',
  'Select', 'Choose', 'Pick', 'Upload', 'Download', 'Import', 'Export',
  'Print', 'Share', 'Copy', 'Paste', 'Cut', 'Undo', 'Redo'
];

// File extensions to check
const extensions = ['.tsx', '.jsx', '.ts', '.js'];

// Directories to ignore
const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.next'];

function shouldIgnoreFile(filePath) {
  return ignoreDirs.some(dir => filePath.includes(dir));
}

function isReactFile(filePath) {
  return extensions.some(ext => filePath.endsWith(ext));
}

function findHardcodedText(content, filePath) {
  const findings = [];
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    
    // Skip lines that already use translation
    if (line.includes('{t(') || line.includes('useTranslation') || line.includes('import')) {
      return;
    }
    
    // Look for text in JSX elements
    const jsxTextRegex = />([^<>{]*[a-zA-Z][^<>{}]*)</g;
    let match;
    
    while ((match = jsxTextRegex.exec(line)) !== null) {
      const text = match[1].trim();
      
      // Skip empty text, numbers, or single characters
      if (!text || /^\d+$/.test(text) || text.length < 2) {
        continue;
      }
      
      // Skip common React/HTML attributes
      if (text.includes('className') || text.includes('style') || text.includes('src')) {
        continue;
      }
      
      // Check if it contains common English words
      const containsCommonWords = commonWords.some(word => 
        text.toLowerCase().includes(word.toLowerCase())
      );
      
      if (containsCommonWords || /^[A-Z][a-z]/.test(text)) {
        findings.push({
          file: filePath,
          line: lineNumber,
          text: text,
          fullLine: line.trim()
        });
      }
    }
    
    // Look for text in attributes like placeholder, title, alt
    const attributeRegex = /(placeholder|title|alt|aria-label)=["']([^"']+)["']/g;
    while ((match = attributeRegex.exec(line)) !== null) {
      const attribute = match[1];
      const text = match[2];
      
      if (text && text.length > 1 && !/^\d+$/.test(text)) {
        findings.push({
          file: filePath,
          line: lineNumber,
          text: text,
          fullLine: line.trim(),
          attribute: attribute
        });
      }
    }
  });
  
  return findings;
}

function scanDirectory(dir) {
  const findings = [];
  
  function scanRecursive(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      
      if (shouldIgnoreFile(fullPath)) {
        return;
      }
      
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanRecursive(fullPath);
      } else if (stat.isFile() && isReactFile(fullPath)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          const fileFindings = findHardcodedText(content, fullPath);
          findings.push(...fileFindings);
        } catch (error) {
          console.error(`Error reading file ${fullPath}:`, error.message);
        }
      }
    });
  }
  
  scanRecursive(dir);
  return findings;
}

function generateReport(findings) {
  console.log('\n🔍 HARDCODED TEXT ANALYSIS REPORT\n');
  console.log('=' .repeat(50));
  
  if (findings.length === 0) {
    console.log('✅ No hardcoded text found!');
    return;
  }
  
  // Group by file
  const byFile = {};
  findings.forEach(finding => {
    if (!byFile[finding.file]) {
      byFile[finding.file] = [];
    }
    byFile[finding.file].push(finding);
  });
  
  console.log(`📊 Found ${findings.length} potential hardcoded text instances in ${Object.keys(byFile).length} files\n`);
  
  Object.entries(byFile).forEach(([file, fileFindings]) => {
    console.log(`📄 ${file}`);
    console.log('-'.repeat(file.length + 2));
    
    fileFindings.forEach(finding => {
      console.log(`  Line ${finding.line}: "${finding.text}"`);
      if (finding.attribute) {
        console.log(`    (in ${finding.attribute} attribute)`);
      }
      console.log(`    Context: ${finding.fullLine}`);
      console.log('');
    });
  });
  
  // Summary by common patterns
  console.log('\n📈 SUMMARY BY COMMON PATTERNS\n');
  const patterns = {};
  findings.forEach(finding => {
    const text = finding.text.toLowerCase();
    commonWords.forEach(word => {
      if (text.includes(word.toLowerCase())) {
        if (!patterns[word]) patterns[word] = 0;
        patterns[word]++;
      }
    });
  });
  
  Object.entries(patterns)
    .sort(([,a], [,b]) => b - a)
    .forEach(([pattern, count]) => {
      console.log(`  "${pattern}": ${count} occurrences`);
    });
  
  console.log('\n💡 RECOMMENDATIONS\n');
  console.log('1. Replace hardcoded text with translation keys: {t("key")}');
  console.log('2. Add useTranslation hook: const { t } = useTranslation();');
  console.log('3. Add corresponding keys to translation files');
  console.log('4. Test in both languages');
  console.log('\nExample:');
  console.log('  Before: <button>Sign in</button>');
  console.log('  After:  <button>{t("header.login")}</button>');
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');

if (!fs.existsSync(srcDir)) {
  console.error('❌ src directory not found. Please run this script from the project root.');
  process.exit(1);
}

console.log('🔍 Scanning for hardcoded text in React components...');
console.log(`📁 Scanning directory: ${srcDir}`);

const findings = scanDirectory(srcDir);
generateReport(findings);

// Save detailed report to file
const reportPath = path.join(process.cwd(), 'hardcoded-text-report.json');
fs.writeFileSync(reportPath, JSON.stringify(findings, null, 2));
console.log(`\n💾 Detailed report saved to: ${reportPath}`);