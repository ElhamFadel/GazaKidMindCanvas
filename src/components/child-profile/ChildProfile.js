import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DashboardLayout from '../DashboardLayout';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import ProfileInfo from './ProfileInfo';
import RecentDrawings from './RecentDrawings';
import PsychologicalStateSection from './PsychologicalStateSection';
import PsychologicalHistory from './PsychologicalHistory';
import RecommendationsSection from './RecommendationsSection';
import AddDrawingDrawer from './AddDrawingDrawer';

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
      navigate(location.pathname, { replace: true, state: {} });
    } else if (location.state?.activeTab !== undefined) {
      setActiveTab(location.state.activeTab);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <DashboardLayout>
      <Box sx={{ p: 3, pr: '270px' }}>
        <ProfileHeader childName={childData.name} />
        <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Content based on active tab */}
        {activeTab === 0 && (
          <Grid container spacing={3}>
            {/* Right Column - Profile Info */}
            <Grid item xs={12} md={4}>
              <ProfileInfo childData={childData} onAddDrawing={() => setOpenAddDrawingModal(true)} />
            </Grid>

            {/* Left Column - Content */}
            <Grid item xs={12} md={8}>
              <RecentDrawings drawings={recentDrawings} />
              <PsychologicalStateSection emotionalStatus={emotionalStatus} setEmotionalStatus={setEmotionalStatus} />
              <PsychologicalHistory history={psychologicalHistory} />
            </Grid>
          </Grid>
        )}

        {activeTab === 1 && (
          <Typography>سجل الرسومات</Typography>
        )}

        {activeTab === 2 && (
          <RecommendationsSection recommendations={recommendations} />
        )}
      </Box>

      <AddDrawingDrawer
        open={openAddDrawingModal}
        onClose={() => setOpenAddDrawingModal(false)}
        uploadedFile={uploadedFile}
        setUploadedFile={setUploadedFile}
        drawingDate={drawingDate}
        setDrawingDate={setDrawingDate}
        drawingBehavior={drawingBehavior}
        setDrawingBehavior={setDrawingBehavior}
        drawingTopic={drawingTopic}
        setDrawingTopic={setDrawingTopic}
        emotionalState={emotionalState}
        setEmotionalState={setEmotionalState}
      />
    </DashboardLayout>
  );
};

export default ChildProfile;