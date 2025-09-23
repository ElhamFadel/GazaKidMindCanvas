import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Avatar,
  Grid,
  Tab,
  Tabs,
  Card,
  Chip,
  IconButton,
  Button,
  LinearProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Slider,
  Drawer,
  TextField,
  InputAdornment
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  MoreVert,
  Edit,
  CalendarMonth,
  LocationOn,
  PsychologyOutlined,
  WarningAmberOutlined,
  TrendingUp,
  TrendingDown,
  Close,
  CloudUpload,
  CalendarToday
} from '@mui/icons-material';
import DashboardLayout from './DashboardLayout';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const PrettoSlider = styled(Slider)({
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    top: '50%',
    transform: 'translate(calc(-50% + 16px), -50%)',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const ChildProfile = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openAddDrawingModal, setOpenAddDrawingModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [drawingDate, setDrawingDate] = useState('');
  const [drawingBehavior, setDrawingBehavior] = useState('');
  const [drawingTopic, setDrawingTopic] = useState('');
  const [emotionalState, setEmotionalState] = useState(50);
  const navigate = useNavigate();
  const location = useLocation();
  const { childId } = useParams();
  
  // State for sliders
  const [emotionalStatus, setEmotionalStatus] = useState({
    anxiety: 60,
    sadness: 30,
    happiness: 75
  });

  // Mock data
  const childData = {
    name: 'عبدالله',
    birthDate: '2018-2-12',
    age: 'ذكر',
    registrationDate: '25 أغسطس 2024 - 10:30 صباحاً',
    supervisor: 'ليلى محمد',
    school: 'المدرسة الأساسية',
    class: 'الصف المدرسي الخامس'
  };

  // Recent drawings data
  const recentDrawings = [
    { id: 1, date: '2024/10/15', image: '/drawing1.jpg' },
    { id: 2, date: '2024/10/10', image: '/drawing2.jpg' },
    { id: 3, date: '2024/10/05', image: '/drawing3.jpg' }
  ];

  // Psychological state history
  const psychologicalHistory = [
    {
      date: 'الإثنين، 25 أغسطس 2024 - 10:30 صباحاً',
      status: 'سعيد',
      color: '#34d399',
      analysis: 'الرسم الحالي يعكس حالة إيجابية بشكل عام، حيث يظهر الطفل تعبيرات أكثر إيقاعاً وتفاصيل مؤثرة في الرسم. هذا يشير إلى تحور بالأمتنظار النفسي وارتياح عاطفي في الفترة الأخيرة.'
    },
    {
      date: 'السابق',
      status: 'قلق',
      color: '#f59e0b',
      analysis: 'التحليل السابق'
    }
  ];

  // Recommendations data
  const recommendations = [
    {
      title: 'تشجيع',
      description: 'ستحتصن بتشجيع نشاط في إبداع أبناء الطفل حتى هذا الأسوة لمرير قدرته على التعبير عن مشاعرة. خاصة بعد ملاحظة تحسن في الرسومات الأخيرة.',
      type: 'positive'
    },
    {
      title: 'تنبيه',
      description: 'لا يُنصح بوضع مثيرة في الرسومات تشير إلى وجود نوتر داخلي، من الأفضل مناقشة هذا الأمر مع الطفل بشكل غير مباشر خلال الجلسة القادمة.',
      type: 'warning'
    },
    {
      title: 'أفعل',
      description: 'استمر في تسجيل الملاحظات اليومية المرتبطة بكل رسمة في بناء تحور أكمل صورة عمل نطور الحالة النفسية للطفل على المدى البعيد.',
      type: 'action'
    }
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Check navigation state and open add drawing modal or set active tab
  React.useEffect(() => {
    if (location.state?.openAddDrawing) {
      setOpenAddDrawingModal(true);
      // Clear the state after handling
      navigate(location.pathname, { replace: true, state: {} });
    } else if (location.state?.activeTab !== undefined) {
      setActiveTab(location.state.activeTab);
      // Clear the state after handling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <DashboardLayout>
      <Box sx={{ p: 3, pr: '270px' }}>
        {/* Header Section */}
        <Box sx={{ mb: 3 }}>
          <Button
            onClick={() => navigate('/children')}
            sx={{ mb: 2, color: '#6b7280', '&:hover': { backgroundColor: 'transparent' } }}
          >
            ← عودة
          </Button>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937' }}>
            إدارة الأطفال · عبدالله
          </Typography>
        </Box>

        {/* Tabs */}
        <Paper elevation={0} sx={{ mb: 3, borderBottom: '1px solid #e5e7eb' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            textColor="primary"
            indicatorColor="primary"
            sx={{
              '& .MuiTab-root': {
                textTransform: 'none',
                fontWeight: 500,
                color: '#6b7280',
                '&.Mui-selected': {
                  color: '#3b82f6',
                  fontWeight: 600
                }
              }
            }}
          >
            <Tab label="نظرة عامة" />
            <Tab label="سجل الرسومات" />
            <Tab label="التوصيات الذكية" />
          </Tabs>
        </Paper>

        {/* Content based on active tab */}
        {activeTab === 0 && (
          <Grid container spacing={3}>
            {/* Right Column - Profile Info */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', borderRadius: 1.5, mb: 3 }}>
                {/* Profile Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        bgcolor: '#e5e7eb',
                        color: '#6b7280',
                        fontSize: '1.5rem'
                      }}
                    >
                      {childData.name[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
                        {childData.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarMonth sx={{ fontSize: 16 }} />
                        {childData.birthDate} · {childData.age}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton size="small">
                    <MoreVert sx={{ fontSize: 20 }} />
                  </IconButton>
                </Box>

                {/* Registration Info */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>
                    تاريخ التسجيل
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#1f2937' }}>
                    {childData.registrationDate}
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Additional Info */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      إدارة الأطفال
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#1f2937' }}>
                      {childData.supervisor}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      المدرسة
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#1f2937' }}>
                      {childData.school}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      الحالة النفسية
                    </Typography>
                    <Chip
                      label="ملف"
                      size="small"
                      icon={<PsychologyOutlined sx={{ fontSize: 16 }} />}
                      sx={{
                        backgroundColor: '#dbeafe',
                        color: '#2563eb',
                        fontWeight: 600,
                        '& .MuiChip-icon': {
                          color: '#2563eb'
                        }
                      }}
                    />
                  </Box>
                </Box>

                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<Edit />}
                  onClick={() => setOpenAddDrawingModal(true)}
                  sx={{
                    mt: 3,
                    textTransform: 'none',
                    borderColor: '#e5e7eb',
                    color: '#374151',
                    '&:hover': {
                      borderColor: '#d1d5db',
                      backgroundColor: '#f9fafb'
                    }
                  }}
                >
                  إضافة رسمة جديدة
                </Button>
              </Paper>
            </Grid>

            {/* Left Column - Content */}
            <Grid item xs={12} md={8}>
              {/* Recent Drawings */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 2 }}>
                  آخر 3 رسومات
                </Typography>
                <Grid container spacing={2}>
                  {recentDrawings.map((drawing) => (
                    <Grid item xs={4} key={drawing.id}>
                      <Card
                        elevation={0}
                        sx={{
                          border: '1px solid #e5e7eb',
                          borderRadius: 1.5,
                          overflow: 'hidden',
                          cursor: 'pointer',
                          '&:hover': {
                            borderColor: '#d1d5db',
                            boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
                          }
                        }}
                      >
                        <Box
                          sx={{
                            height: 120,
                            backgroundColor: '#f3f4f6',
                            backgroundImage: 'url(/scribble.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <Box sx={{ p: 1.5, textAlign: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#6b7280' }}>
                            {drawing.date}
                          </Typography>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Button
                    variant="text"
                    sx={{
                      textTransform: 'none',
                      color: '#3b82f6',
                      fontSize: '0.875rem'
                    }}
                  >
                    عرض كل الرسومات
                  </Button>
                </Box>
              </Box>

              {/* Current Psychological State */}
              <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', borderRadius: 1.5, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 3 }}>
                  تطور الحالة بمرور الوقت
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
                  خط زمني يوضح تغير الحالة بناءً على الرسومات السابقة (إن وجدت)
                </Typography>
                
                {/* Status Sliders */}
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        خائف
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: '#ef4444' }}>
                        😔
                      </Typography>
                    </Box>
                    <PrettoSlider
                      value={emotionalStatus.anxiety}
                      onChange={(e, newValue) => setEmotionalStatus({...emotionalStatus, anxiety: newValue})}
                      sx={{ color: '#ef4444' }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        حزين
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: '#f59e0b' }}>
                        😟
                      </Typography>
                    </Box>
                    <PrettoSlider
                      value={emotionalStatus.sadness}
                      onChange={(e, newValue) => setEmotionalStatus({...emotionalStatus, sadness: newValue})}
                      sx={{ color: '#f59e0b' }}
                    />
                  </Box>
                  
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        سعيد
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500, color: '#10b981' }}>
                        😊
                      </Typography>
                    </Box>
                    <PrettoSlider
                      value={emotionalStatus.happiness}
                      onChange={(e, newValue) => setEmotionalStatus({...emotionalStatus, happiness: newValue})}
                      sx={{ color: '#10b981' }}
                    />
                  </Box>
                </Box>

                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<TrendingUp />}
                  sx={{
                    textTransform: 'none',
                    borderColor: '#e5e7eb',
                    color: '#374151',
                    '&:hover': {
                      borderColor: '#d1d5db',
                      backgroundColor: '#f9fafb'
                    }
                  }}
                >
                  تطور الحالة بمرور الوقت
                </Button>
              </Paper>

              {/* History */}
              <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', borderRadius: 1.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937' }}>
                    تاريخ السجل
                  </Typography>
                  <Chip
                    label="سعيد 😊"
                    size="small"
                    sx={{
                      backgroundColor: '#d1fae5',
                      color: '#065f46',
                      fontWeight: 600
                    }}
                  />
                </Box>

                {/* Timeline */}
                <List>
                  {psychologicalHistory.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: item.color
                            }}
                          />
                          <Typography variant="caption" sx={{ color: '#6b7280' }}>
                            {item.date}
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 3, pl: 1, borderLeft: index < psychologicalHistory.length - 1 ? '2px solid #e5e7eb' : 'none', pb: 2 }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 1 }}>
                            الحالة النفسية
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.7 }}>
                            {item.analysis}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant="text"
                  sx={{
                    textTransform: 'none',
                    color: '#3b82f6',
                    mt: 2
                  }}
                >
                  عرض التحليل الكامل
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}

        {activeTab === 1 && (
          <Typography>سجل الرسومات</Typography>
        )}

        {activeTab === 2 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 3 }}>
                التوصيات الذكية
              </Typography>
              {recommendations.map((rec, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  sx={{
                    p: 3,
                    mb: 2,
                    border: '1px solid #e5e7eb',
                    borderRadius: 1.5,
                    borderLeft: `4px solid ${rec.type === 'positive' ? '#3b82f6' : rec.type === 'warning' ? '#f59e0b' : '#10b981'}`
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    {rec.type === 'warning' && <WarningAmberOutlined sx={{ color: '#f59e0b', fontSize: 20 }} />}
                    <Typography variant="body1" sx={{ fontWeight: 600, color: '#1f2937' }}>
                      {rec.type === 'positive' ? '⚪' : rec.type === 'warning' ? '⚪' : '⚪'} {rec.title}:
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.7 }}>
                    {rec.description}
                  </Typography>
                </Paper>
              ))}
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mt: 3 }}>
                إضافة ملاحظة
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>

      {/* Add Drawing Drawer */}
      <Drawer
        anchor="left"
        open={openAddDrawingModal}
        onClose={() => setOpenAddDrawingModal(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 400,
            boxSizing: 'border-box',
            backgroundColor: '#f9fafb',
            borderRight: '1px solid #e5e7eb'
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
              إضافة رسمة جديدة
            </Typography>
            <IconButton onClick={() => setOpenAddDrawingModal(false)} size="small">
              <Close />
            </IconButton>
          </Box>

          {/* Upload Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1.5 }}>
              رفع الرسمة
            </Typography>
            <Box
              component="label"
              sx={{
                border: '2px dashed #e5e7eb',
                borderRadius: 2,
                p: 3,
                textAlign: 'center',
                backgroundColor: '#fff',
                cursor: 'pointer',
                display: 'block',
                '&:hover': {
                  borderColor: '#d1d5db',
                  backgroundColor: '#f9fafb'
                }
              }}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setUploadedFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
              <CloudUpload sx={{ fontSize: 40, color: '#9ca3af', mb: 1 }} />
              <Typography variant="body2" sx={{ color: '#6b7280', mb: 0.5 }}>
                استيراد الملفات
              </Typography>
              <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                اسحب وأفلت الملفات هنا أو انقر لرفع
              </Typography>
              {uploadedFile && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>
                    {uploadedFile.name}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

          {/* Drawing Information */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
              معلومات الرسمة
            </Typography>
            {/* Date Field */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                تاريخ الرسمة
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                value={drawingDate}
                onChange={(e) => setDrawingDate(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CalendarMonth sx={{ fontSize: 18, color: '#9ca3af' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e5e7eb',
                    },
                    '&:hover fieldset': {
                      borderColor: '#d1d5db',
                    },
                  }
                }}
              />
            </Box>
          </Box>

          {/* Notes Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
              ملاحظات تُفيد تحليل الرسمة
            </Typography>
            
            {/* Behavior Observation */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                هل لاحظت أي سلوك أو تفاعل أثناء الرسم؟
              </Typography>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                value={drawingBehavior}
                onChange={(e) => setDrawingBehavior(e.target.value)}
                sx={{
                  backgroundColor: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e5e7eb',
                    },
                    '&:hover fieldset': {
                      borderColor: '#d1d5db',
                    },
                  }
                }}
              />
              <Typography variant="caption" sx={{ color: '#6b7280', mt: 0.5, display: 'block', fontSize: '0.75rem' }}>
                صف سلوك الطفل خلال تنفيذ الرسمة إن وجدت ملاحظات واضحة.<br/>
                مثال: "كان يُمسك القلم بشدة"، أو "رسم بسرعة وبلا تركيز"
              </Typography>
            </Box>

            {/* Drawing Topic */}
            <Box>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                هل قَلِق من الطفل موضوع معين للرسم؟
              </Typography>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                value={drawingTopic}
                onChange={(e) => setDrawingTopic(e.target.value)}
                sx={{
                  backgroundColor: '#fff',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#e5e7eb',
                    },
                    '&:hover fieldset': {
                      borderColor: '#d1d5db',
                    },
                  }
                }}
              />
              <Typography variant="caption" sx={{ color: '#6b7280', mt: 0.5, display: 'block', fontSize: '0.75rem' }}>
                يُرجى توضيح إن كانت الرسمة موجهة (بموضوع محدد) أم حرة.<br/>
                مثال: "قلبت منه أن يرسم عائلته"، أو "كانت الرسمة حرة تماماً"
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Emotional State Slider */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
              تطور الحالة بمرور الوقت
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 2, fontSize: '0.75rem' }}>
              حط زمني يوضح تغير الحالة بناءً على الرسومات السابقة (إن وجدت)
            </Typography>
            <Box sx={{
              backgroundColor: '#fff',
              borderRadius: 2,
              p: 2,
              border: '1px solid #e5e7eb'
            }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
                  حزين
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
                  سعيد
                </Typography>
              </Box>
              <Slider
                value={emotionalState}
                onChange={(e, newValue) => setEmotionalState(newValue)}
                track={false}
                sx={{
                  height: 8,
                  '& .MuiSlider-rail': {
                    background: 'linear-gradient(to right, #ef4444, #f59e0b, #10b981)',
                    opacity: 1,
                    height: 8
                  },
                  '& .MuiSlider-thumb': {
                    width: 24,
                    height: 24,
                    backgroundColor: '#3b82f6',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    '&:before': {
                      display: 'none'
                    },
                    '&:hover': {
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                    }
                  }
                }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography sx={{ fontSize: '1.25rem' }}>😢</Typography>
                <Typography sx={{ fontSize: '1.25rem' }}>😐</Typography>
                <Typography sx={{ fontSize: '1.25rem' }}>😊</Typography>
              </Box>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setOpenAddDrawingModal(false)}
              sx={{
                color: '#6b7280',
                borderColor: '#e5e7eb',
                textTransform: 'none',
                '&:hover': {
                  borderColor: '#d1d5db',
                  backgroundColor: '#f9fafb'
                }
              }}
            >
              إلغاء
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#3b82f6',
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#2563eb',
                  boxShadow: 'none',
                }
              }}
            >
              تحليل الآن
            </Button>
          </Box>
        </Box>
      </Drawer>
    </DashboardLayout>
  );
};

export default ChildProfile;