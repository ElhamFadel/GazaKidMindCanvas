import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button
} from '@mui/material';

const AccountSettingsTab = ({
  email,
  setEmail,
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  onCancel,
  onSave
}) => {
  return (
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
            onClick={onCancel}
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
            onClick={onSave}
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
  );
};

export default AccountSettingsTab;