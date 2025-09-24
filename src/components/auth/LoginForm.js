import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginFormFields from './LoginFormFields';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', { email, password });
    // Redirect to dashboard after successful login
    navigate('/dashboard');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate('/forget-password');
  };

  return (
    <Box sx={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 4
    }}>
      <Box
        sx={{
          p: 4,
          maxWidth: 380,
          width: '100%',
          mt: 8
        }}
      >
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            تسجيل الدخول إلى حسابك
          </Typography>
          <Typography variant="body2" color="text.secondary">
            مرحباً بك، سجل الدخول للمتابعة
          </Typography>
        </Box>

        <form onSubmit={handleLogin}>
          <LoginFormFields
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            rememberMe={rememberMe}
            setRememberMe={setRememberMe}
            onForgotPassword={handleForgotPassword}
            onSubmit={handleLogin}
          />
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;