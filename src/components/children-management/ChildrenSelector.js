import React from 'react';
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox
} from '@mui/material';

const ChildrenSelector = ({ childrenData, selectedChildren, onChildToggle }) => {
  return (
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
                  checked={selectedChildren.includes(child.id)}
                  onChange={() => onChildToggle(child.id)}
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
  );
};

export default ChildrenSelector;