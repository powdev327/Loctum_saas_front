/**
 * Translation Helper Utility
 * This utility helps identify and replace hardcoded text with translation keys
 */

import { useTranslation } from 'react-i18next';

// Hook for easy translation access
export const useT = () => {
  const { t, i18n } = useTranslation();
  
  return {
    t,
    i18n,
    currentLanguage: i18n.language,
    changeLanguage: (lang) => i18n.changeLanguage(lang),
    isEnglish: i18n.language === 'en',
    isFrench: i18n.language === 'fr'
  };
};

// Common translation keys for reuse
export const commonKeys = {
  // Actions
  submit: 'common.submit',
  cancel: 'common.cancel',
  save: 'common.save',
  delete: 'common.delete',
  edit: 'common.edit',
  view: 'common.view',
  close: 'common.close',
  back: 'common.back',
  next: 'common.next',
  previous: 'common.previous',
  
  // Status
  loading: 'common.loading',
  success: 'common.success',
  error: 'common.error',
  warning: 'common.warning',
  
  // Navigation
  home: 'header.home',
  login: 'header.login',
  signup: 'header.signup',
  features: 'header.features',
  pricing: 'header.pricing',
  contact: 'header.contact',
  
  // Forms
  email: 'common.email',
  password: 'common.password',
  name: 'common.name',
  phone: 'common.phone',
  address: 'common.address',
  
  // Time
  today: 'common.today',
  yesterday: 'common.yesterday',
  tomorrow: 'common.tomorrow',
  
  // Confirmation
  areYouSure: 'common.areYouSure',
  confirmDelete: 'common.confirmDelete',
  yes: 'common.yes',
  no: 'common.no'
};

// Helper function to check if text needs translation
export const needsTranslation = (text) => {
  // Check if text contains translation key pattern
  return !text.includes('t(') && !text.includes('{{') && typeof text === 'string';
};

// Helper to generate translation keys from text
export const generateTranslationKey = (text, section = 'common') => {
  if (!text || typeof text !== 'string') return '';
  
  const key = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '') // Remove special characters
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/_{2,}/g, '_') // Replace multiple underscores with single
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
  
  return `${section}.${key}`;
};

export default { useT, commonKeys, needsTranslation, generateTranslationKey };