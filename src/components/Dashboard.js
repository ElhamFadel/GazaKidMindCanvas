import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  IconButton,
  Button,
  Chip
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  CalendarToday,
  ChildCareOutlined,
  AssessmentOutlined,
  DrawOutlined,
  GroupOutlined,
  MoreVert
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import DashboardLayout from './DashboardLayout';

const Dashboard = () => {
  const [selectedChildren, setSelectedChildren] = useState(['وليد', 'محمد', 'ليلا']);

  // Statistics data
  const statistics = [
    {
      title: 'إجمالي عدد الأطفال',
      value: '232',
      change: -0.5,
      icon: <GroupOutlined sx={{ fontSize: 20 }} />,
      color: '#818cf8'
    },
    {
      title: 'عدد الأطفال الجدد',
      value: '232',
      change: 22,
      icon: <ChildCareOutlined sx={{ fontSize: 20 }} />,
      color: '#34d399'
    },
    {
      title: 'متوسط عدد التحليلات اليومية',
      value: '232',
      change: -0.5,
      icon: <AssessmentOutlined sx={{ fontSize: 20 }} />,
      color: '#a78bfa'
    },
    {
      title: 'عدد الرسومات التي تم رفعها',
      value: '232',
      change: -0.5,
      icon: <DrawOutlined sx={{ fontSize: 20 }} />,
      color: '#60a5fa'
    }
  ];

  // Chart data
  const chartData = [
    { date: 'Oct', mohamed: -2.5, leila: -4, waleed: -5 },
    { date: 'Jul 5', mohamed: -2, leila: -3, waleed: -4 },
    { date: 'Jul 10', mohamed: -1.5, leila: -2.5, waleed: -3.5 },
    { date: '15 يوليو', mohamed: -0.5, leila: -1, waleed: -2.5 },
    { date: 'Jul 20', mohamed: 0.5, leila: 0, waleed: -1.5 },
    { date: 'Jul 25', mohamed: 1.5, leila: 1, waleed: -0.5 },
    { date: 'Aug', mohamed: 2.5, leila: 2, waleed: 0.5 },
    { date: 'Aug 5', mohamed: 3.5, leila: 3, waleed: 1.5 }
  ];

  // Mental health indicators
  const mentalHealthIndicators = [
    { 
      status: 'حالة عاطفية إيجابية - تحسن ملحوظ متقدم واستقرار أو متحسنة', 
      value: '100+ ال 1+', 
      color: '#10b981',
      percentage: 100
    },
    { 
      status: 'حالة محايدة - لا توجد إشارات واضحة على تحسن أو تدهور', 
      value: '0', 
      color: '#9ca3af',
      percentage: 0
    },
    { 
      status: 'حالة عاطفية سلبية - تُظهر مؤشرات قلق، حزن أو اضطراب عاطفي', 
      value: '100- ال 1-', 
      color: '#ef4444',
      percentage: 100
    }
  ];

  const CircularProgress = ({ value, color }) => {
    const radius = 50;
    const strokeWidth = 8;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (Math.abs(value) / 100) * circumference;

    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#f3f4f6"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset, transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" component="div" sx={{ fontWeight: 600, fontSize: '0.875rem' }}>
            {value}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <DashboardLayout>
      <Box sx={{ p: 3, pr: '270px' }}> {/* Add padding-right to account for sidebar */}
        {/* Welcome Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937', mb: 0.5 }}>
            مرحباً بك من جديد [اسم المؤسسة]! 🔥
          </Typography>
          <Typography variant="body1" sx={{ color: '#6b7280', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            إليك لمحة سريعة عن حالة الأطفال – لأن كل متابعة تشرق
            <span style={{ color: '#10b981' }}>✓</span>
          </Typography>
        </Box>

        {/* Quick Actions */}
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button
            variant="text"
            startIcon={<CalendarToday sx={{ fontSize: 16 }} />}
            sx={{
              color: '#6b7280',
              textTransform: 'none',
              fontSize: '0.875rem',
              '&:hover': { backgroundColor: '#f3f4f6' }
            }}
          >
            ملخص الأسبوع
          </Button>
          <Button
            variant="text"
            sx={{
              color: '#818cf8',
              textTransform: 'none',
              fontSize: '0.875rem',
              '&:hover': { backgroundColor: '#f3f4f613' }
            }}
          >
            إضافة طفل جديد +
          </Button>
          <Button
            variant="text"
            sx={{
              color: '#818cf8',
              textTransform: 'none',
              fontSize: '0.875rem',
              '&:hover': { backgroundColor: '#f3f4f613' }
            }}
          >
            رفع رسمة جديدة +
          </Button>
        </Box>

        {/* Statistics Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {statistics.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 1.5,
                  position: 'relative',
                  overflow: 'visible'
                }}
              >
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    color: '#9ca3af',
                    padding: 0.5
                  }}
                >
                  <MoreVert fontSize="small" />
                </IconButton>
                <CardContent sx={{ p: 2.5, pr: 4 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${stat.color}15`,
                      color: stat.color,
                      mb: 2
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '0.813rem' }}>
                    {stat.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#1f2937' }}>
                      {stat.value}
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: stat.change > 0 ? '#10b981' : '#ef4444',
                        fontSize: '0.75rem',
                        fontWeight: 500
                      }}
                    >
                      {stat.change > 0 ? (
                        <span style={{ fontSize: '0.875rem' }}>↑</span>
                      ) : (
                        <span style={{ fontSize: '0.875rem' }}>↓</span>
                      )}
                      <Typography variant="caption" sx={{ fontWeight: 500, ml: 0.25 }}>
                        {Math.abs(stat.change)}%
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Chart Section */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 3,
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: 1.5
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1.125rem', color: '#1f2937' }}>
                تحليل التغيرات النفسية الزمنية للأطفال
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.813rem' }}>
                مراقبة تحسن أو تدهور الحالة النفسية للأطفال مع مرور الوقت بناءً على رسوماتهم
              </Typography>
            </Box>
            <Button
              variant="text"
              size="small"
              endIcon={<span style={{ fontSize: '0.75rem' }}>▼</span>}
              sx={{ 
                color: '#6b7280', 
                textTransform: 'none', 
                fontSize: '0.813rem',
                backgroundColor: '#f9fafb',
                px: 2,
                '&:hover': {
                  backgroundColor: '#f3f4f6'
                }
              }}
            >
              آخر 30 يوم
            </Button>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.813rem' }}>
                حدد الأطفال ( أحد الأقسى ٣ أطفال )
              </Typography>
              <Stack direction="row" spacing={1}>
                {['وليد', 'محمد', 'ليلا', 'يوم'].map((child) => (
                  <Chip
                    key={child}
                    label={child}
                    onClick={() => {
                      if (child !== 'يوم') {
                        setSelectedChildren(prev =>
                          prev.includes(child)
                            ? prev.filter(c => c !== child)
                            : [...prev, child]
                        );
                      }
                    }}
                    size="small"
                    sx={{
                      backgroundColor: selectedChildren.includes(child) ? '#7c3aed' : '#f3f4f6',
                      color: selectedChildren.includes(child) ? '#fff' : '#374151',
                      border: 'none',
                      '&:hover': {
                        backgroundColor: selectedChildren.includes(child) ? '#6d28d9' : '#e5e7eb'
                      },
                      fontSize: '0.75rem',
                      height: 26,
                      fontWeight: selectedChildren.includes(child) ? 600 : 400
                    }}
                  />
                ))}
              </Stack>
            </Box>
            <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
              الفترة الزمنية
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  tick={{ fill: '#9ca3af', fontSize: 11 }} 
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fill: '#9ca3af', fontSize: 11 }} 
                  axisLine={{ stroke: '#e5e7eb' }}
                  domain={[-10, 10]}
                  ticks={[-10, -5, 0, 5, 10]}
                />
                <Tooltip />
                <ReferenceArea x1="Jul 10" x2="Jul 20" fill="#fef3c7" fillOpacity={0.6} />
                <Line 
                  type="monotone" 
                  dataKey="mohamed" 
                  stroke="#f59e0b" 
                  strokeWidth={2} 
                  dot={{ fill: '#f59e0b', r: 3 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="leila" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  dot={{ fill: '#3b82f6', r: 3 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="waleed" 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                  dot={{ fill: '#8b5cf6', r: 3 }} 
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Legend below chart */}
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 2, backgroundColor: '#f59e0b' }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#374151' }}>
                  محمد : 12
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 2, backgroundColor: '#3b82f6' }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#374151' }}>
                  ليلى : 13
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 2, backgroundColor: '#8b5cf6' }} />
                <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#374151' }}>
                  وليد- 12 : حالة سالمة مستقرة
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Yellow notification box */}
          <Box
            sx={{
              mt: 3,
              p: 1.5,
              backgroundColor: '#fef3c7',
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1.5
            }}
          >
            <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem', color: '#78350f' }}>
              📅 15 يوليو
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
              <Typography variant="caption" sx={{ color: '#92400e', fontSize: '0.75rem' }}>علامات تحسن</Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: '#f59e0b', fontSize: '0.75rem' }}>محمد : 12</Typography>
              <Typography variant="caption" sx={{ color: '#92400e', fontSize: '0.75rem' }}>تماثل</Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: '#3b82f6', fontSize: '0.75rem' }}>ليلى : 13</Typography>
              <Typography variant="caption" sx={{ fontWeight: 600, color: '#8b5cf6', fontSize: '0.75rem' }}>وليد- 12</Typography>
              <Typography variant="caption" sx={{ color: '#92400e', fontSize: '0.75rem' }}>: حالة سالمة مستقرة</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Mental Health Indicators */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            backgroundColor: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: 1.5
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, fontSize: '1.125rem', color: '#1f2937' }}>
            مؤشر التحليل الناطقي
          </Typography>
          
          <Grid container spacing={4}>
            {mentalHealthIndicators.map((indicator, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <CircularProgress value={indicator.value} color={indicator.color} />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontSize: '0.75rem', 
                      color: '#6b7280', 
                      textAlign: 'center',
                      lineHeight: 1.6,
                      maxWidth: 280
                    }}
                  >
                    {indicator.status}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-end', 
            gap: 0.5, 
            mt: 3,
            pt: 2,
            borderTop: '1px solid #f3f4f6'
          }}>
            <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.688rem' }}>
              الإعدادات ©
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#3b82f6', cursor: 'pointer', fontSize: '0.688rem' }}
            >
              اسم الصحة name@mail.com
            </Typography>
          </Box>
        </Paper>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;