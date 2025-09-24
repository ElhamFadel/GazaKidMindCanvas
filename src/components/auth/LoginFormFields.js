import React from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  Button
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginFormFields = ({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  rememberMe,
  setRememberMe,
  onForgotPassword,
  onSubmit
}) => {
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Stack spacing={2}>
      <TextField
        fullWidth
        placeholder="البريد الإلكتروني"
        variant="outlined"
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: '#f8f9fa'
          }
        }}
      />

      <TextField
        fullWidth
        type={showPassword ? 'text' : 'password'}
        placeholder="••••••••••"
        variant="outlined"
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: '#f8f9fa'
          }
        }}
      />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              size="small"
            />
          }
          label={
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              تذكرني
            </Typography>
          }
          sx={{ margin: 0 }}
        />
        <Link
          component="button"
          variant="body2"
          type="button"
          onClick={onForgotPassword}
          underline="hover"
          sx={{ color: 'primary.main', cursor: 'pointer', fontSize: '0.875rem' }}
        >
          نسيت كلمة المرور؟
        </Link>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={onSubmit}
        sx={{
          borderRadius: 2,
          py: 1,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          background: '#1976d2',
          '&:hover': {
            background: '#1565c0'
          }
        }}
      >
        تسجيل الدخول
      </Button>
    </Stack>
  );
};

export default LoginFormFields;