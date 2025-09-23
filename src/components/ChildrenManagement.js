import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  Stack,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  Drawer,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Dialog,
  DialogContent,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  GroupOutlined,
  Search,
  Add,
  ViewList,
  GridView,
  SortOutlined,
  KeyboardArrowDown,
  MoreHoriz,
  Close,
  CloudUpload,
  CalendarMonth,
  ExpandMore
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import DashboardLayout from './DashboardLayout';
import { useNavigate, useLocation } from 'react-router-dom';

const ChildrenManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedChildren, setSelectedChildren] = useState(['وليد', 'محمد', 'ليلا']);
  const [viewMode, setViewMode] = useState('list');
  const [genderFilter, setGenderFilter] = useState('الجنس');
  const [statusFilter, setStatusFilter] = useState('الحالة');
  const [sortFilter, setSortFilter] = useState('درجة الخطر');
  const [searchQuery, setSearchQuery] = useState('');
  const [openAddChild, setOpenAddChild] = useState(false);
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [openSelectChildDialog, setOpenSelectChildDialog] = useState(false);
  const [openRecommendationsDialog, setOpenRecommendationsDialog] = useState(false);
  
  // Form state for new group
  const [newGroup, setNewGroup] = useState({
    name: '',
    color: '#ff9800',
    selectedChildren: []
  });
  
  // Form state for new child
  const [newChild, setNewChild] = useState({
    fullName: '',
    birthDate: '',
    gender: '',
    responsiblePerson: '',
    currentStatus: '',
    notes: ''
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [expandedSection, setExpandedSection] = useState(false);

  // Check navigation state and open appropriate modal
  React.useEffect(() => {
    if (location.state?.openAddChild) {
      setOpenAddChild(true);
      // Clear the state after handling
      navigate(location.pathname, { replace: true, state: {} });
    } else if (location.state?.openUploadDrawing) {
      setOpenSelectChildDialog(true);
      // Clear the state after handling
      navigate(location.pathname, { replace: true, state: {} });
    } else if (location.state?.openRecommendations) {
      setOpenRecommendationsDialog(true);
      // Clear the state after handling
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      setUploadedImage(file);
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
      }, 2000);
    }
  };

  // Groups data
  const groups = [
    { name: 'اسم المجموعة', count: 12 },
    { name: 'اسم المجموعة', count: 12 },
    { name: 'اسم المجموعة', count: 12 },
    { name: 'اسم المجموعة', count: 12 },
  ];

  // Chart data
  const chartData = [
    { date: 'Oct', mohamed: -2.5, leila: -4, waleed: -5 },
    { date: 'Jul\n5', mohamed: -2, leila: -3, waleed: -4 },
    { date: 'Jul\n10', mohamed: -1.5, leila: -2.5, waleed: -3.5 },
    { date: '15 يوليو', mohamed: -0.5, leila: -1, waleed: -2.5 },
    { date: 'Jul\n20', mohamed: 0.5, leila: 0, waleed: -1.5 },
    { date: 'Jul\n25', mohamed: 1.5, leila: 1, waleed: -0.5 },
    { date: 'Aug', mohamed: 2.5, leila: 2, waleed: 0.5 },
    { date: 'Aug\n5', mohamed: 3.5, leila: 3, waleed: 1.5 }
  ];

  // Children data
  const childrenData = [
    { id: 4, name: 'ليلى', age: 8, status: 'منخفض', statusColor: '#34d399', riskLevel: 'قلق', gender: 'أنثى', lastAnalysis: '01-03-2025', drawingsCount: 4 },
    { id: 5, name: 'حسن', age: 10, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'ضغط نفسي', gender: 'ذكر', lastAnalysis: '15-04-2025', drawingsCount: 5 },
    { id: 6, name: 'سارة', age: 11, status: 'مرتفع', statusColor: '#ef4444', riskLevel: 'توتر', gender: 'أنثى', lastAnalysis: '20-05-2025', drawingsCount: 6 },
    { id: 7, name: 'محمد', age: 15, status: 'عالي جداً', statusColor: '#dc2626', riskLevel: 'أعراض قلق', gender: 'ذكر', lastAnalysis: '30-06-2025', drawingsCount: 7 },
    { id: 8, name: 'هدى', age: 5, status: 'منخفض جداً', statusColor: '#10b981', riskLevel: 'استقرار نفسي', gender: 'أنثى', lastAnalysis: '25-07-2025', drawingsCount: 8 },
    { id: 9, name: 'عمر', age: 14, status: 'مرتفع', statusColor: '#ef4444', riskLevel: 'قلق مزمن', gender: 'ذكر', lastAnalysis: '10-08-2025', drawingsCount: 9 },
    { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 },
    { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 },
    { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 },
    { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 }
  ];

  // Mental health indicators
  const mentalHealthIndicators = [
    { 
      status: 'حالة عاطفية سلبية - تُظهر مؤشرات قلق، حزن أو اضطراب عاطفي', 
      value: '100- ال 1-', 
      color: '#ef4444'
    },
    { 
      status: 'حالة محايدة - لا توجد إشارات واضحة على تحسن أو تدهور', 
      value: '0', 
      color: '#9ca3af'
    },
    { 
      status: 'حالة عاطفية إيجابية - تحسن ملحوظ متقدم واستقرار أو متحسنة', 
      value: '100+ ال 1+', 
      color: '#10b981'
    }
  ];

  return (
    <DashboardLayout>
      <Box sx={{ p: 3, pr: '270px' }}> {/* Add padding-right to account for sidebar */}
        {/* Header Section */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937' }}>
            إدارة الأطفال
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setOpenAddChild(true)}
            sx={{
              backgroundColor: '#3b82f6',
              textTransform: 'none',
              borderRadius: 1.5,
              px: 3,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#2563eb',
                boxShadow: 'none',
              }
            }}
          >
            إضافة طفل جديد
          </Button>
        </Box>

        {/* Groups Section */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
              مجموعات الأطفال
            </Typography>
            <Button
              variant="text"
              startIcon={<Add />}
              onClick={() => setOpenAddGroup(true)}
              sx={{
                color: '#3b82f6',
                textTransform: 'none',
                fontSize: '0.813rem',
                '&:hover': { backgroundColor: 'transparent' }
              }}
            >
              إضافة مجموعة جديدة
            </Button>
          </Box>
          <Grid container spacing={2}>
            {groups.map((group, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    backgroundColor: '#f9fafb',
                    border: '1px solid #e5e7eb',
                    borderRadius: 1.5,
                    p: 2,
                    textAlign: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#f3f4f6',
                      borderColor: '#d1d5db'
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: '#e5e7eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto',
                      mb: 1
                    }}
                  >
                    <GroupOutlined sx={{ color: '#6b7280', fontSize: 20 }} />
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937', fontSize: '0.813rem' }}>
                    {group.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.688rem' }}>
                    {group.count} طفل
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

  
          {/* Right Column - Children Table */}
          <Box sx={{ padding: 2, mt: 3 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: 1.5,
                overflow: 'hidden'
              }}
            >
              {/* Filters Section */}
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    size="small"
                    placeholder="بحث"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ fontSize: 18, color: '#9ca3af' }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      flex: 1,
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#f9fafb',
                        fontSize: '0.813rem',
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

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937', fontSize: '0.813rem' }}>
                    تصفية حسب
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Select
                      value={sortFilter}
                      onChange={(e) => setSortFilter(e.target.value)}
                      size="small"
                      displayEmpty
                      startAdornment={<SortOutlined sx={{ fontSize: 14, mr: 0.5, color: '#6b7280' }} />}
                      sx={{
                        fontSize: '0.688rem',
                        backgroundColor: '#f9fafb',
                        '& .MuiSelect-select': {
                          py: 0.5,
                          pr: 3
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#e5e7eb',
                        }
                      }}
                    >
                      <MenuItem value="درجة الخطر">درجة الخطر</MenuItem>
                      <MenuItem value="الأحدث">الأحدث</MenuItem>
                      <MenuItem value="الأقدم">الأقدم</MenuItem>
                    </Select>
                    <Select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      size="small"
                      sx={{
                        fontSize: '0.688rem',
                        backgroundColor: '#f9fafb',
                        '& .MuiSelect-select': {
                          py: 0.5
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#e5e7eb',
                        }
                      }}
                    >
                      <MenuItem value="الحالة">الحالة</MenuItem>
                      <MenuItem value="مستقرة">مستقرة</MenuItem>
                      <MenuItem value="قلق">قلق</MenuItem>
                    </Select>
                    <Select
                      value={genderFilter}
                      onChange={(e) => setGenderFilter(e.target.value)}
                      size="small"
                      sx={{
                        fontSize: '0.688rem',
                        backgroundColor: '#f9fafb',
                        '& .MuiSelect-select': {
                          py: 0.5
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#e5e7eb',
                        }
                      }}
                    >
                      <MenuItem value="الجنس">الجنس</MenuItem>
                      <MenuItem value="ذكر">ذكر</MenuItem>
                      <MenuItem value="أنثى">أنثى</MenuItem>
                    </Select>
                    <Box sx={{ display: 'flex', backgroundColor: '#f9fafb', borderRadius: 0.5, border: '1px solid #e5e7eb' }}>
                      <IconButton 
                        size="small" 
                        onClick={() => setViewMode('list')}
                        sx={{ 
                          color: viewMode === 'list' ? '#3b82f6' : '#6b7280',
                          backgroundColor: viewMode === 'list' ? '#eff6ff' : 'transparent',
                          borderRadius: 0.5,
                          p: 0.5
                        }}
                      >
                        <ViewList sx={{ fontSize: 16 }} />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        onClick={() => setViewMode('grid')}
                        sx={{ 
                          color: viewMode === 'grid' ? '#3b82f6' : '#6b7280',
                          backgroundColor: viewMode === 'grid' ? '#eff6ff' : 'transparent',
                          borderRadius: 0.5,
                          p: 0.5
                        }}
                      >
                        <GridView sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Content Area - Toggle between Table and Grid */}
              {viewMode === 'list' ? (
                <TableContainer sx={{ maxHeight: 480 }}>
                  <Table size="small" stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>
                          <MoreHoriz sx={{ fontSize: 16 }} />
                        </TableCell>
                        <TableCell sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>الاسم الكامل</TableCell>
                        <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>العمر</TableCell>
                        <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>الحالة النفسية</TableCell>
                        <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>درجة الخطر</TableCell>
                        <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>الجنس</TableCell>
                        <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>اخر تحليل</TableCell>
                        <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', fontWeight: 500, py: 1.5, backgroundColor: '#f9fafb' }}>عدد الرسومات</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {childrenData.map((child, index) => (
                        <TableRow
                          key={`${child.id}-${index}`}
                          sx={{
                            '&:hover': { backgroundColor: '#f9fafb', cursor: 'pointer' },
                            borderBottom: index === childrenData.length - 1 ? 'none' : '1px solid #f3f4f6'
                          }}
                          onClick={() => navigate(`/child/${child.id}`)}
                        >
                          <TableCell align="center" sx={{ py: 1.25 }}>
                            <IconButton size="small" sx={{ p: 0.5 }}>
                              <MoreHoriz sx={{ fontSize: 16, color: '#9ca3af' }} />
                            </IconButton>
                          </TableCell>
                          <TableCell sx={{ py: 1.25 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                              <Avatar sx={{ width: 22, height: 22, bgcolor: '#e5e7eb', fontSize: '0.563rem' }}>
                                {child.name[0]}
                              </Avatar>
                              <Typography variant="body2" sx={{ fontSize: '0.688rem', fontWeight: 500 }}>
                                {child.name}
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ fontSize: '0.688rem', py: 1.25 }}>{child.age}</TableCell>
                          <TableCell align="center" sx={{ py: 1.25 }}>
                            <Chip
                              label={child.status}
                              size="small"
                              sx={{
                                backgroundColor: `${child.statusColor}15`,
                                color: child.statusColor,
                                fontWeight: 600,
                                fontSize: '0.563rem',
                                height: 18
                              }}
                            />
                          </TableCell>
                          <TableCell align="center" sx={{ fontSize: '0.688rem', py: 1.25 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                              {child.riskLevel}
                              <span style={{ color: child.statusColor, fontSize: '0.5rem' }}>●</span>
                            </Box>
                          </TableCell>
                          <TableCell align="center" sx={{ fontSize: '0.688rem', py: 1.25 }}>{child.gender}</TableCell>
                          <TableCell align="center" sx={{ fontSize: '0.688rem', color: '#6b7280', py: 1.25 }}>
                            {child.lastAnalysis}
                          </TableCell>
                          <TableCell align="center" sx={{ fontSize: '0.688rem', py: 1.25 }}>{child.drawingsCount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
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
              )}

              {/* Pagination */}
              <Box sx={{ p: 2, borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.688rem' }}>
                  1 — 10 من 100 طفل
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.688rem' }}>
                    1 من 10 صفحات
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Button variant="text" size="small" sx={{ color: '#6b7280', minWidth: 40, fontSize: '0.688rem', px: 1, py: 0.5 }}>السابق</Button>
                    <Button variant="text" size="small" sx={{ color: '#6b7280', minWidth: 40, fontSize: '0.688rem', px: 1, py: 0.5 }}>التالي</Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* Add Child Drawer */}
      <Drawer
        anchor="left"
        open={openAddChild}
        onClose={() => setOpenAddChild(false)}
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
              إضافة طفل جديد
            </Typography>
            <IconButton onClick={() => setOpenAddChild(false)} size="small">
              <Close />
            </IconButton>
          </Box>

          {/* Personal Image Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1.5 }}>
              الصورة الشخصية
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
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <CloudUpload sx={{ fontSize: 40, color: '#9ca3af', mb: 1 }} />
              <Typography variant="body2" sx={{ color: '#6b7280', mb: 0.5 }}>
                Import Files
              </Typography>
              <Typography variant="caption" sx={{ color: '#9ca3af' }}>
                Drag and drop files here or click to upload
              </Typography>
              {uploadedImage && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>
                    {uploadedImage.name}
                  </Typography>
                  {isUploading && (
                    <Typography variant="caption" sx={{ color: '#3b82f6', display: 'block' }}>
                      Preprocessing...
                    </Typography>
                  )}
                </Box>
              )}
            </Box>
          </Box>

          {/* Child Information Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
              معلومات الطفل
            </Typography>
            
            {/* Full Name */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                الاسم الكامل
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={newChild.fullName}
                onChange={(e) => setNewChild({...newChild, fullName: e.target.value})}
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

            {/* Gender */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                النوع (ذكر / أنثى)
              </Typography>
              <Select
                fullWidth
                size="small"
                value={newChild.gender}
                onChange={(e) => setNewChild({...newChild, gender: e.target.value})}
                displayEmpty
                IconComponent={ExpandMore}
                sx={{
                  backgroundColor: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#e5e7eb',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#d1d5db',
                  }
                }}
              >
                <MenuItem value="">اختر</MenuItem>
                <MenuItem value="ذكر">ذكر</MenuItem>
                <MenuItem value="أنثى">أنثى</MenuItem>
              </Select>
            </Box>

            {/* Birth Date */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                تاريخ الميلاد / العمر
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                value={newChild.birthDate}
                onChange={(e) => setNewChild({...newChild, birthDate: e.target.value})}
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

            {/* Responsible Person */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                المرشد المسؤول
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={newChild.responsiblePerson}
                onChange={(e) => setNewChild({...newChild, responsiblePerson: e.target.value})}
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

            {/* Current Psychological Status */}
            <Box sx={{ mb: 2 }}>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                الوضع النفسي الحالي
              </Typography>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                value={newChild.currentStatus}
                onChange={(e) => setNewChild({...newChild, currentStatus: e.target.value})}
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

          <Divider sx={{ my: 3 }} />

          {/* Additional Information Section */}
          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: expandedSection ? 2 : 0,
                cursor: 'pointer'
              }}
              onClick={() => setExpandedSection(!expandedSection)}
            >
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151' }}>
                معلومات إضافية (اختيارية)
              </Typography>
              <IconButton
                size="small"
                sx={{
                  transform: expandedSection ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s'
                }}
              >
                <ExpandMore />
              </IconButton>
            </Box>

            {/* Collapsible Content */}
            {expandedSection && (
              <Box sx={{ mt: 2 }}>
                {/* Initial Notes */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
                    ملاحظات أولية
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    multiline
                    rows={3}
                    value={newChild.notes}
                    onChange={(e) => setNewChild({...newChild, notes: e.target.value})}
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
            )}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => setOpenAddChild(false)}
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
              startIcon={<Add />}
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
              إضافة الطفل
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Add Group Dialog */}
      <Dialog
        open={openAddGroup}
        onClose={() => setOpenAddGroup(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 0
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937', flex: 1, textAlign: 'center' }}>
              إضافة مجموعة أطفال
            </Typography>
            <IconButton onClick={() => setOpenAddGroup(false)} size="small">
              <KeyboardArrowDown sx={{ transform: 'rotate(90deg)' }} />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ color: '#6b7280', textAlign: 'center', mb: 3, fontSize: '0.875rem' }}>
            أنشئ مجموعة جديدة لتصنيف الأطفال وتنظيم حسب<br />
            حالاتهم النفسية أو نوع الدعم الذي يتلقونه.
          </Typography>

          {/* Group Name */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1, fontSize: '0.875rem' }}>
              اسم المجموعة
            </Typography>
            <TextField
              fullWidth
              placeholder="أدخل اسم المجموعة"
              value={newGroup.name}
              onChange={(e) => setNewGroup({...newGroup, name: e.target.value})}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f9fafb',
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

          {/* Group Color */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1, fontSize: '0.875rem' }}>
              لون المجموعة
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {['#ff9800', '#f44336', '#4caf50', '#2196f3', '#9c27b0', '#795548'].map((color) => (
                <Box
                  key={color}
                  onClick={() => setNewGroup({...newGroup, color})}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    backgroundColor: color,
                    cursor: 'pointer',
                    border: newGroup.color === color ? '3px solid #1f2937' : '1px solid #e5e7eb',
                    transition: 'all 0.2s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }
                  }}
                />
              ))}
            </Box>
            <Typography variant="caption" sx={{ color: '#ff9800', mt: 1, display: 'block', fontSize: '0.75rem' }}>
              سيتم استخدام هذا اللون لتمييز المجموعة
            </Typography>
          </Box>

          {/* Select Children */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1, fontSize: '0.875rem' }}>
              حدد الأطفال
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 2, fontSize: '0.75rem' }}>
              يُمكنك اختيار أطفال لإضافتهم مباشرة إلى هذه المجموعة لتسهيل متابعتهم.
            </Typography>
            
            <Paper
              variant="outlined"
              sx={{
                maxHeight: 200,
                overflow: 'auto',
                backgroundColor: '#f9fafb',
                border: '1px solid #e5e7eb'
              }}
            >
              <List dense>
                {childrenData.map((child) => (
                  <ListItem
                    key={child.id}
                    sx={{
                      py: 0.5,
                      '&:hover': {
                        backgroundColor: '#f3f4f6'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Checkbox
                        edge="start"
                        checked={newGroup.selectedChildren.includes(child.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewGroup({
                              ...newGroup,
                              selectedChildren: [...newGroup.selectedChildren, child.id]
                            });
                          } else {
                            setNewGroup({
                              ...newGroup,
                              selectedChildren: newGroup.selectedChildren.filter(id => id !== child.id)
                            });
                          }
                        }}
                        sx={{
                          color: '#e5e7eb',
                          '&.Mui-checked': {
                            color: '#3b82f6',
                          },
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={child.name}
                      primaryTypographyProps={{
                        fontSize: '0.875rem',
                        fontWeight: 500
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>

          {/* Create Button */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<Add />}
            onClick={() => {
              // Handle group creation
              console.log('Creating group:', newGroup);
              setOpenAddGroup(false);
              // Reset form
              setNewGroup({
                name: '',
                color: '#ff9800',
                selectedChildren: []
              });
            }}
            sx={{
              backgroundColor: '#3b82f6',
              textTransform: 'none',
              py: 1.5,
              fontSize: '0.875rem',
              fontWeight: 600,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#2563eb',
                boxShadow: 'none',
              }
            }}
          >
            إنشاء المجموعة
          </Button>
        </Box>
      </Dialog>

      {/* Select Child Dialog for Upload Drawing */}
      <Dialog
        open={openSelectChildDialog}
        onClose={() => setOpenSelectChildDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 0
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
              اختر طفل لرفع رسمة جديدة
            </Typography>
            <IconButton onClick={() => setOpenSelectChildDialog(false)} size="small">
              <Close />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ color: '#6b7280', mb: 3, textAlign: 'center' }}>
            يرجى اختيار الطفل الذي تريد رفع رسمة جديدة له
          </Typography>

          {/* Children List */}
          <Paper
            variant="outlined"
            sx={{
              maxHeight: 400,
              overflow: 'auto',
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb'
            }}
          >
            <List>
              {childrenData.map((child) => (
                <ListItem
                  key={child.id}
                  button
                  onClick={() => {
                    navigate(`/child/${child.id}`, { state: { openAddDrawing: true } });
                    setOpenSelectChildDialog(false);
                  }}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f3f4f6'
                    }
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#e5e7eb', fontSize: '0.875rem' }}>
                      {child.name[0]}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={child.name}
                    secondary={`${child.age} عام`}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                    secondaryTypographyProps={{
                      fontSize: '0.75rem'
                    }}
                  />
                  <Box>
                    <Chip
                      label={child.status}
                      size="small"
                      sx={{
                        backgroundColor: `${child.statusColor}15`,
                        color: child.statusColor,
                        fontWeight: 600,
                        fontSize: '0.625rem',
                        height: 20
                      }}
                    />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Cancel Button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setOpenSelectChildDialog(false)}
            sx={{
              mt: 3,
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
        </Box>
      </Dialog>

      {/* Select Child Dialog for Recommendations */}
      <Dialog
        open={openRecommendationsDialog}
        onClose={() => setOpenRecommendationsDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 0
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
              اختر طفل لعرض التوصيات الذكية
            </Typography>
            <IconButton onClick={() => setOpenRecommendationsDialog(false)} size="small">
              <Close />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ color: '#6b7280', mb: 3, textAlign: 'center' }}>
            يرجى اختيار الطفل الذي تريد عرض التوصيات الذكية الخاصة به
          </Typography>

          {/* Children List */}
          <Paper
            variant="outlined"
            sx={{
              maxHeight: 400,
              overflow: 'auto',
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb'
            }}
          >
            <List>
              {childrenData.map((child) => (
                <ListItem
                  key={child.id}
                  button
                  onClick={() => {
                    navigate(`/child/${child.id}`, { state: { activeTab: 2 } });
                    setOpenRecommendationsDialog(false);
                  }}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f3f4f6'
                    }
                  }}
                >
                  <ListItemIcon>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: '#e5e7eb', fontSize: '0.875rem' }}>
                      {child.name[0]}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={child.name}
                    secondary={`${child.age} عام`}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                    secondaryTypographyProps={{
                      fontSize: '0.75rem'
                    }}
                  />
                  <Box>
                    <Chip
                      label={child.status}
                      size="small"
                      sx={{
                        backgroundColor: `${child.statusColor}15`,
                        color: child.statusColor,
                        fontWeight: 600,
                        fontSize: '0.625rem',
                        height: 20
                      }}
                    />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Cancel Button */}
          <Button
            variant="outlined"
            fullWidth
            onClick={() => setOpenRecommendationsDialog(false)}
            sx={{
              mt: 3,
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
        </Box>
      </Dialog>
    </DashboardLayout>
  );
};

export default ChildrenManagement;