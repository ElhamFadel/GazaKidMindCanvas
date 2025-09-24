import React from 'react';
import { Box, Paper } from '@mui/material';
import FiltersSection from './FiltersSection';
import TableView from './TableView';
import GridView from './GridView';
import Pagination from './Pagination';

const ChildrenTable = ({
  childrenData,
  viewMode,
  searchQuery,
  genderFilter,
  statusFilter,
  sortFilter,
  onSearchChange,
  onGenderChange,
  onStatusChange,
  onSortChange,
  onViewModeChange
}) => {
  return (
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
        <FiltersSection
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          sortFilter={sortFilter}
          onSortChange={onSortChange}
          statusFilter={statusFilter}
          onStatusChange={onStatusChange}
          genderFilter={genderFilter}
          onGenderChange={onGenderChange}
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
        />

        {/* Content Area - Toggle between Table and Grid */}
        {viewMode === 'list' ? (
          <TableView childrenData={childrenData} />
        ) : (
          <GridView childrenData={childrenData} />
        )}

        <Pagination
          currentPage={1}
          totalPages={10}
          totalItems={100}
          itemsPerPage={10}
          onPreviousPage={() => console.log('Previous page')}
          onNextPage={() => console.log('Next page')}
        />
      </Paper>
    </Box>
  );
};

export default ChildrenTable;