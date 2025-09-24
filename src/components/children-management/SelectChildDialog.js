import React from 'react';
import {
  Box,
  Dialog,
  Typography,
  IconButton,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Chip
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const SelectChildDialog = ({ 
  open, 
  onClose, 
  childrenData, 
  title,
  description,
  onSelectChild,
  navigateTo
}) => {
  const navigate = useNavigate();

  const handleChildSelect = (childId) => {
    if (onSelectChild) {
      onSelectChild(childId);
    }
    if (navigateTo) {
      navigate(navigateTo(childId));
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
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
            {title}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ color: '#6b7280', mb: 3, textAlign: 'center' }}>
          {description}
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
                onClick={() => handleChildSelect(child.id)}
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
          onClick={onClose}
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
  );
};

export default SelectChildDialog;