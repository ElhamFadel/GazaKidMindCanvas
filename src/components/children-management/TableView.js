import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Typography,
  Chip,
  Avatar,
  IconButton
} from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const TableView = ({ childrenData }) => {
  const navigate = useNavigate();

  return (
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
  );
};

export default TableView;