import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import Dashboard from './components/Dashboard';
import ChildrenManagement from './components/ChildrenManagement';
import ChildProfile from './components/ChildProfile';
import Settings from './components/Settings';

// Create RTL theme
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans Arabic',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/children" element={<ChildrenManagement />} />
          <Route path="/child/:childId" element={<ChildProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
