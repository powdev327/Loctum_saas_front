#!/usr/bin/env node

/**
 * Find components that need translation support
 */

const fs = require('fs');
const path = require('path');

function findTSXFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findTSXFiles(fullPath, files);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function analyzeComponent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasUseTranslation = content.includes('useTranslation');
    const hasHardcodedText = /["'][A-Za-z\s]{3,}["']/.test(content);
    
    return {
      path: filePath,
      hasUseTranslation,
      hasHardcodedText,
      needsTranslation: hasHardcodedText && !hasUseTranslation
    };
  } catch (error) {
    return null;
  }
}

function main() {
  console.log('🔍 Finding components that need translation support...\n');
  
  const srcDir = path.join(process.cwd(), 'src');
  const tsxFiles = findTSXFiles(srcDir);
  
  const results = tsxFiles
    .map(analyzeComponent)
    .filter(result => result && result.needsTranslation)
    .sort((a, b) => a.path.localeCompare(b.path));
  
  console.log(`Found ${results.length} components that need translation support:\n`);
  
  results.forEach(result => {
    const relativePath = result.path.replace(process.cwd() + '/', '');
    console.log(`❌ ${relativePath}`);
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`- Total TSX/JSX files: ${tsxFiles.length}`);
  console.log(`- Need translation: ${results.length}`);
  console.log(`- Already translated: ${tsxFiles.length - results.length}`);
}

main();