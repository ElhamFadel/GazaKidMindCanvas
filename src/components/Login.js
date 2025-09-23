import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  Paper,
  Stack,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: 'ارفع رسمة الطفل بسهولة من أي جهاز',
      subtitle: 'تعتمد منصتنا على تحليل رسومات الأطفال باعتبارها وسيلة غير لفظية لفهم مشاعرهم.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', { email, password });
    // Redirect to dashboard after successful login
    navigate('/dashboard');
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
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4
          }}
        >
          {/* Login Form Section */}
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
                      onClick={(e) => {
                        e.preventDefault();
                        navigate('/forget-password');
                      }}
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
              </form>
            </Box>
          </Box>

          {/* Illustration Section */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'block' }
            }}
          >
            <Paper
              elevation={0}
              sx={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 4,
                p: 4,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box
                component="img"
                src="/Auth/Asessts/Rectangle 16.png"
                alt="Login Illustration"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1
                }}
              >
                {[0, 1, 2].map((index) => (
                  <Box
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: currentSlide === index ? 'primary.main' : 'grey.300',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}
                  />
                ))}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  mt: 3,
                  fontWeight: 'bold',
                  color: 'text.primary'
                }}
              >
                {slides[currentSlide].title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  color: 'text.secondary'
                }}
              >
                {slides[currentSlide].subtitle}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;