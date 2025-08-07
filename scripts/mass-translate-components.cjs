#!/usr/bin/env node

/**
 * Comprehensive Translation Management Script
 * This script combines all translation utilities into one tool:
 * 1. Find hardcoded text in components
 * 2. Add missing common translations
 * 3. Auto-add translation hooks to components
 * 4. Find untranslated components
 * 5. Mass translate priority components
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

// Priority components that should be translated first
const priorityComponents = [
  'src/Components/SectionTitle/SectionTitle.tsx',
  'src/Components/BrandSlider/BrandSlider.tsx',
  'src/Sections/Home/UsabilitySlider/UsabilitySlider.tsx',
  'src/Sections/Testimonials/TestimonialsOne.tsx',
  'src/Sections/Home/FaqHome/FaqHome.tsx',
  'src/Components/auth/SignInForm.tsx',
  'src/Components/auth/SignUpForm.tsx',
  'src/pages/sign-in.tsx',
  'src/pages/sign-up.tsx',
  'src/Sections/ContactUs/SayHello/SayHello.tsx',
  'src/Sections/OurServices/ServiceList/ServiceList.tsx',
  'src/Sections/OurServices/CoreFeature/CoreFeature.tsx',
  'src/Sections/Home/HomeMarketing/HomeMarketingSection.tsx',
  'src/pages/about-us.tsx',
  'src/pages/ContactUs.tsx',
  'src/pages/our-services.tsx'
];

// Common hardcoded text that needs translation
const commonTranslations = {
  en: {
    // Navigation and UI
    "Select language": "Select language",
    "English": "English",
    "Français": "Français",
    "Prev": "Previous",
    "Next": "Next",
    "Loading": "Loading",
    "Close": "Close",
    "Back": "Back",
    "Home": "Home",
    "About Us": "About Us",
    "Our Services": "Our Services",
    "Contact Us": "Contact Us",
    "Latest Blogs": "Latest Blogs",
    "Pricing Plans": "Pricing Plans",
    
    // Forms and inputs
    "Email address": "Email address",
    "Subscribe": "Subscribe",
    "Subscribe newsletter to get updates": "Subscribe newsletter to get updates",
    "Search": "Search",
    "Filter": "Filter",
    "Select": "Select",
    "Choose": "Choose",
    "Upload": "Upload",
    "Download": "Download",
    
    // Actions
    "Get started": "Get started",
    "Learn more": "Learn more",
    "Read more": "Read more",
    "View all": "View all",
    "Load more": "Load more",
    "Try again": "Try again",
    "Continue": "Continue",
    "Submit": "Submit",
    "Save": "Save",
    "Edit": "Edit",
    "Delete": "Delete",
    "Update": "Update",
    "Create": "Create",
    "Add": "Add",
    "Remove": "Remove",
    
    // Status messages
    "Success": "Success",
    "Error": "Error",
    "Warning": "Warning",
    "Please": "Please",
    "Thank you": "Thank you",
    "Welcome": "Welcome",
    "Sorry": "Sorry",
    
    // Common phrases
    "Countries Worldwide": "Countries Worldwide",
    "Registered User": "Registered Users",
    "Small & Big Companies": "Small & Big Companies",
    "Big & Small business trusted us": "Big & Small businesses trust us",
    
    // Integration
    "Integrate with the tools you already use": "Integrate with the tools you already use",
    "integration": "Integration"
  },
  fr: {
    // Navigation and UI
    "Select language": "Sélectionner la langue",
    "English": "Anglais",
    "Français": "Français",
    "Prev": "Précédent",
    "Next": "Suivant",
    "Loading": "Chargement",
    "Close": "Fermer",
    "Back": "Retour",
    "Home": "Accueil",
    "About Us": "À propos",
    "Our Services": "Nos Services",
    "Contact Us": "Contactez-nous",
    "Latest Blogs": "Derniers Articles",
    "Pricing Plans": "Plans Tarifaires",
    
    // Forms and inputs
    "Email address": "Adresse e-mail",
    "Subscribe": "S'abonner",
    "Subscribe newsletter to get updates": "Abonnez-vous à la newsletter pour recevoir des mises à jour",
    "Search": "Rechercher",
    "Filter": "Filtrer",
    "Select": "Sélectionner",
    "Choose": "Choisir",
    "Upload": "Télécharger",
    "Download": "Télécharger",
    
    // Actions
    "Get started": "Commencer",
    "Learn more": "En savoir plus",
    "Read more": "Lire la suite",
    "View all": "Voir tout",
    "Load more": "Charger plus",
    "Try again": "Réessayer",
    "Continue": "Continuer",
    "Submit": "Soumettre",
    "Save": "Enregistrer",
    "Edit": "Modifier",
    "Delete": "Supprimer",
    "Update": "Mettre à jour",
    "Create": "Créer",
    "Add": "Ajouter",
    "Remove": "Supprimer",
    
    // Status messages
    "Success": "Succès",
    "Error": "Erreur",
    "Warning": "Avertissement",
    "Please": "S'il vous plaît",
    "Thank you": "Merci",
    "Welcome": "Bienvenue",
    "Sorry": "Désolé",
    
    // Common phrases
    "Countries Worldwide": "Pays dans le monde",
    "Registered User": "Utilisateurs enregistrés",
    "Small & Big Companies": "Petites et grandes entreprises",
    "Big & Small business trusted us": "Les petites et grandes entreprises nous font confiance",
    
    // Integration
    "Integrate with the tools you already use": "Intégrez avec les outils que vous utilisez déjà",
    "integration": "Intégration"
  }
};

// Utility functions
function shouldIgnoreFile(filePath) {
  return ignoreDirs.some(dir => filePath.includes(dir));
}

function isReactFile(filePath) {
  return extensions.some(ext => filePath.endsWith(ext));
}

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

// 1. Find hardcoded text functionality
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

// 2. Add missing translations functionality
function addMissingTranslations() {
  const enPath = path.join(process.cwd(), 'src/translations/en/en.json');
  const frPath = path.join(process.cwd(), 'src/translations/fr/fr.json');
  
  try {
    // Read existing translations
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    const frData = JSON.parse(fs.readFileSync(frPath, 'utf8'));
    
    // Add missing common translations
    if (!enData.ui) {
      enData.ui = {};
    }
    if (!frData.ui) {
      frData.ui = {};
    }
    
    // Add UI translations
    Object.entries(commonTranslations.en).forEach(([key, value]) => {
      const camelKey = key.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
      if (!enData.ui[camelKey]) {
        enData.ui[camelKey] = value;
      }
    });
    
    Object.entries(commonTranslations.fr).forEach(([key, value]) => {
      const camelKey = key.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').replace(/\s+/g, '');
      if (!frData.ui[camelKey]) {
        frData.ui[camelKey] = value;
      }
    });
    
    // Write back to files
    fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
    fs.writeFileSync(frPath, JSON.stringify(frData, null, 2));
    
    console.log('✅ Successfully added missing translations');
    console.log(`📝 Added ${Object.keys(commonTranslations.en).length} UI translations`);
    
  } catch (error) {
    console.error('❌ Error adding translations:', error.message);
  }
}

// 3. Auto-translate components functionality
function addTranslationImport(content) {
  // Check if useTranslation is already imported
  if (content.includes('useTranslation')) {
    return content;
  }

  // Find the last import statement
  const importRegex = /import.*from.*['"];/g;
  const imports = content.match(importRegex);
  
  if (imports && imports.length > 0) {
    const lastImport = imports[imports.length - 1];
    const lastImportIndex = content.lastIndexOf(lastImport);
    const insertIndex = lastImportIndex + lastImport.length;
    
    const newImport = '\nimport { useTranslation } from "react-i18next";';
    return content.slice(0, insertIndex) + newImport + content.slice(insertIndex);
  }
  
  return content;
}

function addTranslationHook(content) {
  // Check if translation hook is already added
  if (content.includes('const { t } = useTranslation()')) {
    return content;
  }

  // Find component function declaration
  const componentRegex = /const\s+(\w+)\s*=\s*\(\s*[^)]*\s*\)\s*=>\s*{/;
  const match = content.match(componentRegex);
  
  if (match) {
    const hookLine = '\n  const { t } = useTranslation();\n';
    const insertIndex = match.index + match[0].length;
    return content.slice(0, insertIndex) + hookLine + content.slice(insertIndex);
  }
  
  return content;
}

function addTranslationSupport(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    const originalContent = content;

    // Check if already has translation support
    if (content.includes('useTranslation')) {
      console.log(`⏭️  Already has translation: ${filePath}`);
      return false;
    }

    // Add import
    content = addTranslationImport(content);
    
    // Add hook
    content = addTranslationHook(content);

    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Updated: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// 4. Find untranslated components functionality
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

// Main command functions
function findHardcodedTextCommand() {
  console.log('🔍 Scanning for hardcoded text in React components...');
  const srcDir = path.join(process.cwd(), 'src');
  
  if (!fs.existsSync(srcDir)) {
    console.error('❌ src directory not found. Please run this script from the project root.');
    return;
  }
  
  const findings = scanDirectory(srcDir);
  
  console.log('\n🔍 HARDCODED TEXT ANALYSIS REPORT\n');
  console.log('='.repeat(50));
  
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
  
  // Save detailed report to file
  const reportPath = path.join(process.cwd(), 'hardcoded-text-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(findings, null, 2));
  console.log(`\n💾 Detailed report saved to: ${reportPath}`);
}

function addMissingTranslationsCommand() {
  console.log('🚀 Adding missing translations...\n');
  addMissingTranslations();
  console.log('\n✨ Translation update complete!');
}

function autoTranslateCommand() {
  console.log('🚀 Starting auto-translation of components...\n');
  
  priorityComponents.forEach(componentPath => {
    addTranslationSupport(componentPath);
  });
  
  console.log('\n✨ Auto-translation complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Replace hardcoded text with t("translation.key")');
  console.log('2. Add corresponding keys to translation files');
  console.log('3. Test language switching');
}

function findUntranslatedCommand() {
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

function massTranslateCommand() {
  console.log('🚀 Mass translating priority components...\n');
  
  let updated = 0;
  
  priorityComponents.forEach(componentPath => {
    if (addTranslationSupport(componentPath)) {
      updated++;
    }
  });
  
  console.log(`\n✨ Mass translation complete!`);
  console.log(`📊 Updated ${updated} components`);
  console.log('\n📝 Next steps:');
  console.log('1. Replace hardcoded text with t("translation.key") in updated components');
  console.log('2. Add corresponding keys to translation files');
  console.log('3. Test language switching on all pages');
}

function showHelp() {
  console.log(`
🌐 Comprehensive Translation Management Tool

Usage: node scripts/mass-translate-components.cjs [command]

Commands:
  find-hardcoded     Find hardcoded text in components
  add-missing        Add missing common translations to translation files
  auto-translate     Auto-add translation hooks to priority components
  find-untranslated  Find components that need translation support
  mass-translate     Mass translate all priority components (default)
  help              Show this help message

Examples:
  node scripts/mass-translate-components.cjs
  node scripts/mass-translate-components.cjs find-hardcoded
  node scripts/mass-translate-components.cjs add-missing
  node scripts/mass-translate-components.cjs auto-translate
  node scripts/mass-translate-components.cjs find-untranslated

This tool combines all translation utilities:
- Scans for hardcoded text that needs translation
- Adds missing common translations to JSON files
- Automatically adds useTranslation hooks to components
- Identifies components that need translation support
- Mass processes priority components for translation
`);
}

// Main execution
function main() {
  const command = process.argv[2] || 'mass-translate';
  
  switch (command) {
    case 'find-hardcoded':
      findHardcodedTextCommand();
      break;
    case 'add-missing':
      addMissingTranslationsCommand();
      break;
    case 'auto-translate':
      autoTranslateCommand();
      break;
    case 'find-untranslated':
      findUntranslatedCommand();
      break;
    case 'mass-translate':
      massTranslateCommand();
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      console.log(`❌ Unknown command: ${command}`);
      console.log('Run "node scripts/mass-translate-components.cjs help" for usage information.');
      break;
  }
}

main();