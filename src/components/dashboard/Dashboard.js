import React, { useState } from 'react';
import { Box } from '@mui/material';
import DashboardLayout from '../DashboardLayout';
import WelcomeSection from './WelcomeSection';
import StatisticsSection from './StatisticsSection';
import PsychologicalChart from './PsychologicalChart';
import MentalHealthIndicators from './MentalHealthIndicators';

const Dashboard = () => {
  const [selectedChildren, setSelectedChildren] = useState(['وليد', 'محمد', 'ليلا']);

  return (
    <DashboardLayout>
      <Box sx={{ p: 3, pr: '270px' }}>
        <WelcomeSection />
        <StatisticsSection />
        <PsychologicalChart 
          selectedChildren={selectedChildren} 
          setSelectedChildren={setSelectedChildren} 
        />
        <MentalHealthIndicators />
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;