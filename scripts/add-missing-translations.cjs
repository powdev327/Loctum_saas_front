#!/usr/bin/env node

/**
 * Add missing translations script
 * This script adds commonly used hardcoded text to translation files
 */

const fs = require('fs');
const path = require('path');

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

function main() {
  console.log('🚀 Adding missing translations...\n');
  addMissingTranslations();
  console.log('\n✨ Translation update complete!');
}

main();