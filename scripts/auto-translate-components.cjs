#!/usr/bin/env node

/**
 * Auto-translate components script
 * This script automatically adds useTranslation hooks to components that don't have them
 */

const fs = require('fs');
const path = require('path');

// Components that should have translation support
const componentsToTranslate = [
  'src/Sections/Home/HomeMarketing/HomeMarketingSection.tsx',
  'src/Sections/Home/UsabilitySlider/UsabilitySlider.tsx',
  'src/Sections/Testimonials/TestimonialsOne.tsx',
  'src/Components/BrandSlider/BrandSlider.tsx',
  'src/Sections/Home/FaqHome/FaqHome.tsx',
  'src/pages/sign-in.tsx',
  'src/pages/sign-up.tsx',
  'src/pages/about-us.tsx',
  'src/pages/ContactUs.tsx',
  'src/pages/our-services.tsx',
  'src/Components/auth/SignInForm.tsx',
  'src/Components/auth/SignUpForm.tsx'
];

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

function processComponent(filePath) {
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${filePath}`);
    return;
  }

  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    const originalContent = content;

    // Add import
    content = addTranslationImport(content);
    
    // Add hook
    content = addTranslationHook(content);

    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Updated: ${filePath}`);
    } else {
      console.log(`⏭️  Already has translation: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

function main() {
  console.log('🚀 Starting auto-translation of components...\n');
  
  componentsToTranslate.forEach(componentPath => {
    processComponent(componentPath);
  });
  
  console.log('\n✨ Auto-translation complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Replace hardcoded text with t("translation.key")');
  console.log('2. Add corresponding keys to translation files');
  console.log('3. Test language switching');
}

main();