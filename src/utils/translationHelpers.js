// Translation helpers for dynamic lists
export const getTranslatedIndustries = (t) => {
  return [
    t('industries.nursingHomeCare'),
    t('industries.generalMedicine'),
    t('industries.dentalCare'),
    t('industries.pharmacy'),
    t('industries.other')
  ];
};

export const getTranslatedProfessionalRoles = (t) => {
  return {
    [t('industries.nursingHomeCare')]: [
      t('professionalRoles.registeredNurse'),
      t('professionalRoles.licensedPracticalNurse'),
      t('professionalRoles.nursePractitioner'),
      t('professionalRoles.homeCareNurse'),
      t('professionalRoles.healthcareAide')
    ],
    [t('industries.generalMedicine')]: [
      t('professionalRoles.familyPhysician')
    ],
    [t('industries.dentalCare')]: [
      t('professionalRoles.generalDentist'),
      t('professionalRoles.specialistDentist'),
      t('professionalRoles.dentalHygienist'),
      t('professionalRoles.dentalAssistant'),
      t('professionalRoles.dentalSecretary')
    ],
    [t('industries.pharmacy')]: [
      t('professionalRoles.pharmacyTechnician'),
      t('professionalRoles.pharmacist'),
      t('professionalRoles.assistantOutsideQuebec'),
      t('professionalRoles.technicianOutsideQuebec'),
      t('professionalRoles.pharmacyClerk')
    ]
  };
};

export const getTranslatedInstitutionTypes = (t) => {
  return [
    t('institutionTypes.privateClinic'),
    t('institutionTypes.pharmacy'),
    t('institutionTypes.recruitmentAgency')
  ];
};

export const getTranslatedClinicSpecialties = (t) => {
  return [
    t('clinicSpecialties.dental'),
    t('clinicSpecialties.nursing'),
    t('clinicSpecialties.familyPhysician')
  ];
};

export const getTranslatedPharmacyTypes = (t) => {
  return [
    t('pharmacyTypes.communityPharmacy'),
    t('pharmacyTypes.hospitalPharmacy'),
    t('pharmacyTypes.chainPharmacy')
  ];
};

// Helper functions to convert between translated and original values
export const getOriginalIndustryValue = (translatedValue, t) => {
  const industries = {
    [t('industries.nursingHomeCare')]: 'Nursing & Home Care',
    [t('industries.generalMedicine')]: 'General Medicine',
    [t('industries.dentalCare')]: 'Dental Care',
    [t('industries.pharmacy')]: 'Pharmacy',
    [t('industries.other')]: 'Other'
  };
  return industries[translatedValue] || translatedValue;
};

export const getOriginalRoleValue = (translatedValue, t) => {
  const roles = {
    [t('professionalRoles.registeredNurse')]: 'Registered Nurse (RN)',
    [t('professionalRoles.licensedPracticalNurse')]: 'Licensed Practical Nurse (LPN) / Registered Practical Nurse (RPN)',
    [t('professionalRoles.nursePractitioner')]: 'Nurse Practitioner (NP)',
    [t('professionalRoles.homeCareNurse')]: 'Home Care Nurse',
    [t('professionalRoles.healthcareAide')]: 'Healthcare Aide / Personal Support Worker (PSW)',
    [t('professionalRoles.familyPhysician')]: 'Family Physician / General Practitioner',
    [t('professionalRoles.generalDentist')]: 'General Dentist',
    [t('professionalRoles.specialistDentist')]: 'Specialist Dentist (Orthodontist, Endodontist, Periodontist, Pediatric Dentist, Prosthodontist, Oral and Maxillofacial Surgeon)',
    [t('professionalRoles.dentalHygienist')]: 'Dental Hygienist',
    [t('professionalRoles.dentalAssistant')]: 'Dental Assistant',
    [t('professionalRoles.dentalSecretary')]: 'Dental Secretary',
    [t('professionalRoles.pharmacyTechnician')]: 'Pharmacy Technician (ATP) - Quebec only',
    [t('professionalRoles.pharmacist')]: 'Pharmacist',
    [t('professionalRoles.assistantOutsideQuebec')]: 'Assistant - outside Quebec Only',
    [t('professionalRoles.technicianOutsideQuebec')]: 'Technician - outside Quebec Only',
    [t('professionalRoles.pharmacyClerk')]: 'Pharmacy Clerk'
  };
  return roles[translatedValue] || translatedValue;
};

export const getOriginalInstitutionValue = (translatedValue, t) => {
  const institutions = {
    [t('institutionTypes.privateClinic')]: 'Private Clinic/Practice',
    [t('institutionTypes.pharmacy')]: 'Pharmacy',
    [t('institutionTypes.recruitmentAgency')]: 'Recruitment Agency'
  };
  return institutions[translatedValue] || translatedValue;
};

export const getOriginalSpecialtyValue = (translatedValue, t) => {
  const specialties = {
    [t('clinicSpecialties.dental')]: 'Dental',
    [t('clinicSpecialties.nursing')]: 'Nursing',
    [t('clinicSpecialties.familyPhysician')]: 'Family Physician'
  };
  return specialties[translatedValue] || translatedValue;
};

export const getOriginalPharmacyValue = (translatedValue, t) => {
  const pharmacyTypes = {
    [t('pharmacyTypes.communityPharmacy')]: 'Community pharmacy',
    [t('pharmacyTypes.hospitalPharmacy')]: 'Hospital pharmacy',
    [t('pharmacyTypes.chainPharmacy')]: 'Chain pharmacy'
  };
  return pharmacyTypes[translatedValue] || translatedValue;
};