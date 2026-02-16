import type { 
  SalesData, 
  ProductPerformance, 
  CategorySales, 
  CustomerMetrics, 
  RegionalSales,
  DashboardMetrics 
} from './types';

// Generate daily sales data for the last 30 days
export const generateSalesData = (): SalesData[] => {
  const data: SalesData[] = [];
  const today = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const baseRevenue = 45000 + Math.random() * 20000;
    const weekendBoost = date.getDay() === 0 || date.getDay() === 6 ? 1.3 : 1;
    const revenue = baseRevenue * weekendBoost;
    const orders = Math.floor(revenue / (150 + Math.random() * 100));
    
    data.push({
      date: date.toISOString().split('T')[0],
      revenue: Math.round(revenue),
      orders,
      avgOrderValue: Math.round(revenue / orders)
    });
  }
  
  return data;
};

// Top selling products
export const productPerformance: ProductPerformance[] = [
  {
    id: 'P001',
    name: 'iPhone 15 Pro Max',
    category: 'Smartphones',
    sales: 342,
    revenue: 410400,
    stock: 45,
    trend: 'up'
  },
  {
    id: 'P002',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'Smartphones',
    sales: 289,
    revenue: 318900,
    stock: 62,
    trend: 'up'
  },
  {
    id: 'P003',
    name: 'MacBook Air M3',
    category: 'Laptops',
    sales: 156,
    revenue: 218400,
    stock: 23,
    trend: 'stable'
  },
  {
    id: 'P004',
    name: 'Sony WH-1000XM5',
    category: 'Audio',
    sales: 521,
    revenue: 182350,
    stock: 134,
    trend: 'up'
  },
  {
    id: 'P005',
    name: 'iPad Pro 12.9"',
    category: 'Tablets',
    sales: 187,
    revenue: 224400,
    stock: 31,
    trend: 'down'
  },
  {
    id: 'P006',
    name: 'Apple Watch Series 9',
    category: 'Wearables',
    sales: 412,
    revenue: 164800,
    stock: 89,
    trend: 'up'
  },
  {
    id: 'P007',
    name: 'Dell XPS 15',
    category: 'Laptops',
    sales: 143,
    revenue: 214500,
    stock: 18,
    trend: 'stable'
  },
  {
    id: 'P008',
    name: 'AirPods Pro 2',
    category: 'Audio',
    sales: 634,
    revenue: 158500,
    stock: 201,
    trend: 'up'
  }
];

// Sales by category
export const categorySales: CategorySales[] = [
  { category: 'Smartphones', revenue: 892000, percentage: 32 },
  { category: 'Laptops', revenue: 658000, percentage: 24 },
  { category: 'Audio', revenue: 489000, percentage: 18 },
  { category: 'Tablets', revenue: 356000, percentage: 13 },
  { category: 'Wearables', revenue: 245000, percentage: 9 },
  { category: 'Accessories', revenue: 112000, percentage: 4 }
];

// Customer metrics
export const customerMetrics: CustomerMetrics = {
  newCustomers: 1847,
  returningCustomers: 3254,
  totalCustomers: 5101,
  avgLifetimeValue: 1247
};

// Regional sales data
export const regionalSales: RegionalSales[] = [
  { region: 'North America', sales: 1245000, orders: 4832 },
  { region: 'Europe', sales: 987000, orders: 3921 },
  { region: 'Asia Pacific', sales: 756000, orders: 3156 },
  { region: 'Latin America', sales: 234000, orders: 1089 },
  { region: 'Middle East', sales: 189000, orders: 847 }
];

// Calculate dashboard metrics
export const calculateMetrics = (salesData: SalesData[]): DashboardMetrics => {
  const last30Days = salesData.slice(-30);
  const previous30Days = salesData.slice(-60, -30);
  
  const totalRevenue = last30Days.reduce((sum, day) => sum + day.revenue, 0);
  const totalOrders = last30Days.reduce((sum, day) => sum + day.orders, 0);
  const avgOrderValue = totalRevenue / totalOrders;
  
  const prevRevenue = previous30Days.reduce((sum, day) => sum + day.revenue, 0);
  const prevOrders = previous30Days.reduce((sum, day) => sum + day.orders, 0);
  
  const revenueGrowth = ((totalRevenue - prevRevenue) / prevRevenue) * 100;
  const orderGrowth = ((totalOrders - prevOrders) / prevOrders) * 100;
  
  return {
    totalRevenue: Math.round(totalRevenue),
    totalOrders,
    avgOrderValue: Math.round(avgOrderValue),
    conversionRate: 3.2,
    revenueGrowth: Math.round(revenueGrowth * 10) / 10,
    orderGrowth: Math.round(orderGrowth * 10) / 10
  };
};