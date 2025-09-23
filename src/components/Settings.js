import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Tab,
  Tabs,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { AddPhotoAlternateOutlined } from '@mui/icons-material';
import DashboardLayout from './DashboardLayout';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  
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
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: '#1f2937' }}>
            الإعدادات
          </Typography>

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
              <Box sx={{ p: 4 }}>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#1f2937' }}>
                    معلومات الدخول وإعدادات الأمان
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280' }}>
                    يمكنك من هنا تعديل بيانات الدخول الخاصة بك، وتحديث كلمة المرور لضمان حماية حساب المؤسسة.
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      البريد الإلكتروني
                    </Typography>
                    <TextField
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="أدخل البريد الإلكتروني"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      كلمة المرور الحالية
                    </Typography>
                    <TextField
                      fullWidth
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="أدخل كلمة المرور الحالية لحساب المؤسسة"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      كلمة المرور الجديدة
                    </Typography>
                    <TextField
                      fullWidth
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="اكتب كلمة المرور الجديدة (8 أحرف على الأقل)"
                      helperText="اكتب كلمة المرور الجديدة (8 أحرف على الأقل)"
                    />
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={handleCancel}
                      sx={{
                        px: 4,
                        borderColor: '#e5e7eb',
                        color: '#6b7280',
                        '&:hover': {
                          borderColor: '#d1d5db',
                          bgcolor: '#f9fafb',
                        },
                      }}
                    >
                      إلغاء
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleSaveAccountSettings}
                      sx={{
                        px: 4,
                        bgcolor: '#3b82f6',
                        '&:hover': {
                          bgcolor: '#2563eb',
                        },
                      }}
                    >
                      حفظ
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}

            {/* General Information Tab */}
            {activeTab === 0 && (
              <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                      شعار المؤسسة
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', mb: 2 }}>
                      يمكنك تحديث شعار المؤسسة في أي وقت برفع صورة جديدة، أو حذفه. يُفضل استخدام صورة واضحة بصيغة PNG أو JPG.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                      <Box
                        component="label"
                        htmlFor="logo-upload"
                        sx={{
                          width: 120,
                          height: 120,
                          border: '2px dashed #e5e7eb',
                          borderRadius: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          bgcolor: '#f9fafb',
                          '&:hover': {
                            borderColor: '#3b82f6',
                            bgcolor: '#f3f4f6',
                          },
                        }}
                      >
                        <input
                          id="logo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          style={{ display: 'none' }}
                        />
                        {selectedLogo ? (
                          <Box
                            component="img"
                            src={selectedLogo.preview}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              borderRadius: 1.5,
                            }}
                          />
                        ) : (
                          <AddPhotoAlternateOutlined sx={{ fontSize: 40, color: '#9ca3af' }} />
                        )}
                      </Box>
                      <Button
                        variant="outlined"
                        onClick={handleUpdateLogo}
                        sx={{
                          borderColor: '#10b981',
                          color: '#10b981',
                          '&:hover': {
                            borderColor: '#059669',
                            bgcolor: '#f0fdf4',
                          },
                        }}
                      >
                        تحديث
                      </Button>
                      <Button
                        variant="outlined"
                        onClick={handleDeleteLogo}
                        sx={{
                          borderColor: '#ef4444',
                          color: '#ef4444',
                          '&:hover': {
                            borderColor: '#dc2626',
                            bgcolor: '#fee2e2',
                          },
                        }}
                      >
                        حذف
                      </Button>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      اسم المؤسسة
                    </Typography>
                    <TextField
                      fullWidth
                      value={institutionName}
                      onChange={(e) => setInstitutionName(e.target.value)}
                      placeholder="مثال: مركز الأمل للتأهيل النفسي"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      متوسط عدد الأطفال
                    </Typography>
                    <FormControl fullWidth>
                      <Select
                        value={averageChildren}
                        onChange={(e) => setAverageChildren(e.target.value)}
                        displayEmpty
                        placeholder="اختر متوسط عدد الأطفال ..."
                      >
                        <MenuItem value="" disabled>
                          اختر متوسط عدد الأطفال ...
                        </MenuItem>
                        <MenuItem value="1-10">1-10</MenuItem>
                        <MenuItem value="11-25">11-25</MenuItem>
                        <MenuItem value="26-50">26-50</MenuItem>
                        <MenuItem value="51-100">51-100</MenuItem>
                        <MenuItem value="100+">أكثر من 100</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      رقم الترخيص
                    </Typography>
                    <TextField
                      fullWidth
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      placeholder="اكتب عدد الأطفال في المؤسسة"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      العنوان
                    </Typography>
                    <TextField
                      fullWidth
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="مثال: غزة - حي الرمال"
                    />
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
                      رقم التواصل الرئيسي
                    </Typography>
                    <TextField
                      fullWidth
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="0599 123 456"
                    />
                  </Box>
                </Box>
              </Box>
            )}
          </Paper>
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default Settings;