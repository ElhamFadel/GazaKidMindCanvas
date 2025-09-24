import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Tab,
  Tabs,
} from '@mui/material';
import DashboardLayout from '../DashboardLayout';
import AccountSettingsTab from './AccountSettingsTab';
import GeneralInfoTab from './GeneralInfoTab';

const Settings = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  // Account Settings state
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  
  // General Information state
  const [institutionName, setInstitutionName] = useState('مثال: مركز الأمل للتأهيل النفسي');
  const [averageChildren, setAverageChildren] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [address, setAddress] = useState('مثال: غزة - حي الرمال');
  const [contactNumber, setContactNumber] = useState('0599 123 456');
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSaveAccountSettings = () => {
    // Handle save logic here
    console.log('Saving account settings...');
  };

  const handleCancel = () => {
    // Reset fields or navigate back
    setEmail('');
    setCurrentPassword('');
    setNewPassword('');
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedLogo({
          file: file,
          preview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateLogo = () => {
    // Handle logo update logic
    if (selectedLogo) {
      console.log('Updating logo...', selectedLogo.file);
    }
  };

  const handleDeleteLogo = () => {
    setSelectedLogo(null);
    // Reset the file input
    const fileInput = document.getElementById('logo-upload');
    if (fileInput) {
      fileInput.value = '';
    }
  };

  return (
    <DashboardLayout>
      <Box sx={{ p: 3, pr: '270px' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: '#1f2937' }}>
          الإعدادات
        </Typography>

        <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
          <Paper sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#f8fafc' }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                aria-label="settings tabs"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    color: '#6b7280',
                    '&.Mui-selected': {
                      color: '#1f2937',
                      fontWeight: 600,
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#3b82f6',
                  },
                }}
              >
                <Tab label="المعلومات العامة" />
                <Tab label="إعدادات الحساب" />
              </Tabs>
            </Box>

            {/* Account Settings Tab */}
            {activeTab === 1 && (
              <AccountSettingsTab
                email={email}
                setEmail={setEmail}
                currentPassword={currentPassword}
                setCurrentPassword={setCurrentPassword}
                newPassword={newPassword}
                setNewPassword={setNewPassword}
                onCancel={handleCancel}
                onSave={handleSaveAccountSettings}
              />
            )}

            {/* General Information Tab */}
            {activeTab === 0 && (
              <GeneralInfoTab
                selectedLogo={selectedLogo}
                institutionName={institutionName}
                setInstitutionName={setInstitutionName}
                averageChildren={averageChildren}
                setAverageChildren={setAverageChildren}
                licenseNumber={licenseNumber}
                setLicenseNumber={setLicenseNumber}
                address={address}
                setAddress={setAddress}
                contactNumber={contactNumber}
                setContactNumber={setContactNumber}
                onLogoUpload={handleLogoUpload}
                onLogoUpdate={handleUpdateLogo}
                onLogoDelete={handleDeleteLogo}
              />
            )}
          </Paper>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Settings;