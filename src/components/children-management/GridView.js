import React from 'react';
import {
  Grid,
  Card,
  Box,
  Typography,
  Chip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GridView = ({ childrenData }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, maxHeight: 480, overflowY: 'auto' }}>
      <Grid container spacing={3}>
        {childrenData.map((child, index) => (
          <Grid item xs={12} sm={6} md={3} key={`${child.id}-${index}`}>
            <Card
              elevation={0}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': {
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
              onClick={() => navigate(`/child/${child.id}`)}
            >
              {/* Child Image */}
              <Box
                sx={{
                  width: '100%',
                  height: 160,
                  backgroundColor: '#f3f4f6',
                  backgroundImage: `url('https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Card Content */}
              <Box sx={{ p: 2 }}>
                {/* Name and Age */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '1rem', color: '#1f2937' }}>
                    {child.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
                    {child.age} عام
                  </Typography>
                </Box>

                {/* Status Indicator */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: '#3b82f6'
                    }}
                  />
                  <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.688rem' }}>
                    فلق
                  </Typography>
                </Box>

                {/* Psychological State */}
                <Box sx={{ mb: 1 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.625rem', display: 'block', mb: 0.25 }}>
                    الحالة النفسية
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#1f2937', fontSize: '0.75rem', fontWeight: 500 }}>
                    {child.riskLevel}
                  </Typography>
                </Box>

                {/* Danger Level */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.625rem', display: 'block', mb: 0.25 }}>
                    درجة الخطر
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#1f2937', fontSize: '0.75rem', fontWeight: 500 }}>
                    {child.status}
                  </Typography>
                </Box>

                {/* Status Badge */}
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    label="محتفي"
                    size="small"
                    sx={{
                      backgroundColor: '#fef2f2',
                      color: '#ef4444',
                      fontWeight: 600,
                      fontSize: '0.688rem',
                      height: 24,
                      px: 2,
                      borderRadius: 1
                    }}
                  />
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridView;