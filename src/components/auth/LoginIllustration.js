import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const LoginIllustration = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  return (
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
  );
};

export default LoginIllustration;