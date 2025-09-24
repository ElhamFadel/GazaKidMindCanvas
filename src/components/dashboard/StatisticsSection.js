import React from 'react';
import { Grid } from '@mui/material';
import {
  ChildCareOutlined,
  AssessmentOutlined,
  DrawOutlined,
  GroupOutlined
} from '@mui/icons-material';
import StatisticsCard from './StatisticsCard';

const StatisticsSection = () => {
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

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {statistics.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <StatisticsCard {...stat} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsSection;