#!/usr/bin/env node

/**
 * Mass translate components script
 * This script adds useTranslation hooks to key components
 */

const fs = require('fs');
const path = require('path');

// Key components that should be translated first
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
  'src/Sections/OurServices/CoreFeature/CoreFeature.tsx'
];

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
    const importRegex = /import.*from.*['"];/g;
    const imports = content.match(importRegex);
    
    if (imports && imports.length > 0) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      
      const newImport = '\nimport { useTranslation } from "react-i18next";';
      content = content.slice(0, insertIndex) + newImport + content.slice(insertIndex);
    }

    // Add hook
    const componentRegex = /const\s+(\w+)\s*=\s*\(\s*[^)]*\s*\)\s*=>\s*{/;
    const match = content.match(componentRegex);
    
    if (match) {
      const hookLine = '\n  const { t } = useTranslation();\n';
      const insertIndex = match.index + match[0].length;
      content = content.slice(0, insertIndex) + hookLine + content.slice(insertIndex);
    }

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

function main() {
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

main();