export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  avgOrderValue: number;
}

export interface ProductPerformance {
  id: string;
  name: string;
  category: string;
  sales: number;
  revenue: number;
  stock: number;
  trend: 'up' | 'down' | 'stable';
}

export interface CategorySales {
  category: string;
  revenue: number;
  percentage: number;
}

export interface CustomerMetrics {
  newCustomers: number;
  returningCustomers: number;
  totalCustomers: number;
  avgLifetimeValue: number;
}

export interface RegionalSales {
  region: string;
  sales: number;
  orders: number;
}

export interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  avgOrderValue: number;
  conversionRate: number;
  revenueGrowth: number;
  orderGrowth: number;
}