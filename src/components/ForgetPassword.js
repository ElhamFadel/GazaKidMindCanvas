import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    // After successful submission, you might navigate to a verification page
    // navigate('/reset-password-verify');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f2f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl',
        position: 'relative'
      }}
    >
      {/* Logo in top right */}
      <Box
        component="img"
        src="/Auth/Asessts/Logo.png"
        alt="GazaKidMindCanvas"
        sx={{
          position: 'absolute',
          top: 30,
          right: 30,
          width: 'auto',
          height: 60
        }}
      />
      
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={{
            p: 4,
            maxWidth: 450,
            width: '100%',
            mx: 'auto',
            backgroundColor: '#ffffff',
            borderRadius: 3,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold', 
                mb: 1.5,
                fontSize: '1.5rem'
              }}
            >
              إعادة تعيين كلمة المرور
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ 
                fontSize: '0.9rem',
                lineHeight: 1.8
              }}
            >
              يرجى إدخال عنوان البريد الإلكتروني المرتبط بحسابك، وسنرسل لك رابطًا لإعادة تعيين كلمة المرور.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                placeholder="البريد الإلكتروني"
                variant="outlined"
                size="medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    backgroundColor: '#f8f9fa',
                    '& fieldset': {
                      borderColor: '#e0e0e0'
                    },
                    '&:hover fieldset': {
                      borderColor: '#ccc'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1976d2'
                    }
                  },
                  '& .MuiInputBase-input': {
                    padding: '12px 14px',
                    fontSize: '0.95rem'
                  }
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: 2,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  background: '#1976d2',
                  boxShadow: 'none',
                  '&:hover': {
                    background: '#1565c0',
                    boxShadow: 'none'
                  }
                }}
              >
                إرسال
              </Button>
            </Stack>
          </form>

          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/login')}
              sx={{ 
                color: 'primary.main', 
                cursor: 'pointer', 
                fontSize: '0.875rem',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              العودة إلى تسجيل الدخول
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ForgetPassword;