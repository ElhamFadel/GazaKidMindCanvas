import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import Header from './children-management/Header';
import GroupsSection from './children-management/GroupsSection';
import ChildrenTable from './children-management/ChildrenTable';
import AddChildDrawer from './children-management/AddChildDrawer';
import AddGroupDialog from './children-management/AddGroupDialog';
import SelectChildDialog from './children-management/SelectChildDialog';
import { groupsData, childrenData } from './children-management/constants';

const ChildrenManagement = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [viewMode, setViewMode] = useState('list');
  const [genderFilter, setGenderFilter] = useState('الجنس');
  const [statusFilter, setStatusFilter] = useState('الحالة');
  const [sortFilter, setSortFilter] = useState('درجة الخطر');
  const [searchQuery, setSearchQuery] = useState('');
  const [openAddChild, setOpenAddChild] = useState(false);
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [openSelectChildDialog, setOpenSelectChildDialog] = useState(false);
  const [openRecommendationsDialog, setOpenRecommendationsDialog] = useState(false);

  // Check navigation state and open appropriate modal
  React.useEffect(() => {
    if (location.state?.openAddChild) {
      setOpenAddChild(true);
      navigate(location.pathname, { replace: true, state: {} });
    } else if (location.state?.openUploadDrawing) {
      setOpenSelectChildDialog(true);
      navigate(location.pathname, { replace: true, state: {} });
    } else if (location.state?.openRecommendations) {
      setOpenRecommendationsDialog(true);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  return (
    <DashboardLayout>
      <Box sx={{ p: 3, pr: '270px' }}>
        <Header onAddChild={() => setOpenAddChild(true)} />
        
        <GroupsSection 
          groups={groupsData} 
          onAddGroup={() => setOpenAddGroup(true)} 
        />
        
        <ChildrenTable
          childrenData={childrenData}
          viewMode={viewMode}
          searchQuery={searchQuery}
          genderFilter={genderFilter}
          statusFilter={statusFilter}
          sortFilter={sortFilter}
          onSearchChange={setSearchQuery}
          onGenderChange={setGenderFilter}
          onStatusChange={setStatusFilter}
          onSortChange={setSortFilter}
          onViewModeChange={setViewMode}
        />
      </Box>

      <AddChildDrawer 
        open={openAddChild} 
        onClose={() => setOpenAddChild(false)} 
      />

      <AddGroupDialog 
        open={openAddGroup} 
        onClose={() => setOpenAddGroup(false)} 
        childrenData={childrenData}
      />

      {/* Select Child Dialog for Upload Drawing */}
      <SelectChildDialog
        open={openSelectChildDialog}
        onClose={() => setOpenSelectChildDialog(false)}
        childrenData={childrenData}
        title="اختر طفل لرفع رسمة جديدة"
        description="يرجى اختيار الطفل الذي تريد رفع رسمة جديدة له"
        navigateTo={(childId) => ({
          pathname: `/child/${childId}`,
          state: { openAddDrawing: true }
        })}
      />

      {/* Select Child Dialog for Recommendations */}
      <SelectChildDialog
        open={openRecommendationsDialog}
        onClose={() => setOpenRecommendationsDialog(false)}
        childrenData={childrenData}
        title="اختر طفل لعرض التوصيات الذكية"
        description="يرجى اختيار الطفل الذي تريد عرض التوصيات الذكية الخاصة به"
        navigateTo={(childId) => ({
          pathname: `/child/${childId}`,
          state: { activeTab: 2 }
        })}
      />
    </DashboardLayout>
  );
};

export default ChildrenManagement;