import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Pagination = ({ currentPage = 1, totalPages = 10, totalItems = 100, itemsPerPage = 10, onPreviousPage, onNextPage }) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <Box sx={{ p: 2, borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.688rem' }}>
        {startItem} — {endItem} من {totalItems} طفل
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.688rem' }}>
          {currentPage} من {totalPages} صفحات
        </Typography>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Button 
            variant="text" 
            size="small" 
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            sx={{ 
              color: '#6b7280', 
              minWidth: 40, 
              fontSize: '0.688rem', 
              px: 1, 
              py: 0.5 
            }}
          >
            السابق
          </Button>
          <Button 
            variant="text" 
            size="small" 
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            sx={{ 
              color: '#6b7280', 
              minWidth: 40, 
              fontSize: '0.688rem', 
              px: 1, 
              py: 0.5 
            }}
          >
            التالي
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Pagination;