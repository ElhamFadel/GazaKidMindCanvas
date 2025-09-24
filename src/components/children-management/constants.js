// Mock data for groups
export const groupsData = [
  { name: 'اسم المجموعة', count: 12 },
  { name: 'اسم المجموعة', count: 12 },
  { name: 'اسم المجموعة', count: 12 },
  { name: 'اسم المجموعة', count: 12 },
];

// Mock data for children
export const childrenData = [
  { id: 4, name: 'ليلى', age: 8, status: 'منخفض', statusColor: '#34d399', riskLevel: 'قلق', gender: 'أنثى', lastAnalysis: '01-03-2025', drawingsCount: 4 },
  { id: 5, name: 'حسن', age: 10, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'ضغط نفسي', gender: 'ذكر', lastAnalysis: '15-04-2025', drawingsCount: 5 },
  { id: 6, name: 'سارة', age: 11, status: 'مرتفع', statusColor: '#ef4444', riskLevel: 'توتر', gender: 'أنثى', lastAnalysis: '20-05-2025', drawingsCount: 6 },
  { id: 7, name: 'محمد', age: 15, status: 'عالي جداً', statusColor: '#dc2626', riskLevel: 'أعراض قلق', gender: 'ذكر', lastAnalysis: '30-06-2025', drawingsCount: 7 },
  { id: 8, name: 'هدى', age: 5, status: 'منخفض جداً', statusColor: '#10b981', riskLevel: 'استقرار نفسي', gender: 'أنثى', lastAnalysis: '25-07-2025', drawingsCount: 8 },
  { id: 9, name: 'عمر', age: 14, status: 'مرتفع', statusColor: '#ef4444', riskLevel: 'قلق مزمن', gender: 'ذكر', lastAnalysis: '10-08-2025', drawingsCount: 9 },
  { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 },
  { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 },
  { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 },
  { id: 10, name: 'ليان', age: 9, status: 'متوسط', statusColor: '#f59e0b', riskLevel: 'إجهاد', gender: 'أنثى', lastAnalysis: '02-09-2025', drawingsCount: 10 }
];

// Chart data
export const chartData = [
  { date: 'Oct', mohamed: -2.5, leila: -4, waleed: -5 },
  { date: 'Jul\n5', mohamed: -2, leila: -3, waleed: -4 },
  { date: 'Jul\n10', mohamed: -1.5, leila: -2.5, waleed: -3.5 },
  { date: '15 يوليو', mohamed: -0.5, leila: -1, waleed: -2.5 },
  { date: 'Jul\n20', mohamed: 0.5, leila: 0, waleed: -1.5 },
  { date: 'Jul\n25', mohamed: 1.5, leila: 1, waleed: -0.5 },
  { date: 'Aug', mohamed: 2.5, leila: 2, waleed: 0.5 },
  { date: 'Aug\n5', mohamed: 3.5, leila: 3, waleed: 1.5 }
];

// Mental health indicators
export const mentalHealthIndicators = [
  { 
    status: 'حالة عاطفية سلبية - تُظهر مؤشرات قلق، حزن أو اضطراب عاطفي', 
    value: '100- ال 1-', 
    color: '#ef4444'
  },
  { 
    status: 'حالة محايدة - لا توجد إشارات واضحة على تحسن أو تدهور', 
    value: '0', 
    color: '#9ca3af'
  },
  { 
    status: 'حالة عاطفية إيجابية - تحسن ملحوظ متقدم واستقرار أو متحسنة', 
    value: '100+ ال 1+', 
    color: '#10b981'
  }
];