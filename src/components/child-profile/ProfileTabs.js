import React from 'react';
import { Paper, Tabs, Tab } from '@mui/material';

const ProfileTabs = ({ activeTab, onTabChange }) => {
  return (
    <Paper elevation={0} sx={{ mb: 3, borderBottom: '1px solid #e5e7eb' }}>
      <Tabs
        value={activeTab}
        onChange={onTabChange}
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
  );
};

export default ProfileTabs;