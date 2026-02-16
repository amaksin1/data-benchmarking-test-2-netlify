import { useState, useEffect } from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Users,
  Menu,
  X,
  BarChart3,
  Package
} from 'lucide-react';
import { MetricCard } from './MetricCard';
import { SalesChart } from './SalesChart';
import { CategoryChart } from './CategoryChart';
import { ProductTable } from './ProductTable';
import { RegionalSalesChart } from './RegionalSalesChart';
import {
  generateSalesData,
  productPerformance,
  categorySales,
  customerMetrics,
  regionalSales,
  calculateMetrics
} from './mockData';
import type { SalesData } from './types';

function App() {
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const data = generateSalesData();
    setSalesData(data);
  }, []);

  const metrics = salesData.length > 0 ? calculateMetrics(salesData) : {
    totalRevenue: 0,
    totalOrders: 0,
    avgOrderValue: 0,
    conversionRate: 0,
    revenueGrowth: 0,
    orderGrowth: 0
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <h1 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: '#111827',
                margin: 0
              }}>
                TechMart Analytics
              </h1>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: '4px 0 0 0'
              }}>
                E-commerce Dashboard
              </p>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              padding: '8px 16px',
              background: '#f3f4f6',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#6b7280'
            }}>
              Last 30 Days
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Main Content */}
        <main style={{
          flex: 1,
          padding: '24px'
        }}>
          {/* KPI Metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '24px'
          }}>
            <MetricCard
              title="Total Revenue"
              value={metrics.totalRevenue}
              change={metrics.revenueGrowth}
              icon={<DollarSign size={24} />}
              format="currency"
            />
            <MetricCard
              title="Total Orders"
              value={metrics.totalOrders}
              change={metrics.orderGrowth}
              icon={<ShoppingCart size={24} />}
              format="number"
            />
            <MetricCard
              title="Avg Order Value"
              value={metrics.avgOrderValue}
              icon={<TrendingUp size={24} />}
              format="currency"
            />
            <MetricCard
              title="Conversion Rate"
              value={metrics.conversionRate}
              icon={<Users size={24} />}
              format="percentage"
            />
          </div>

          {/* Charts Row 1 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px',
            marginBottom: '24px'
          }}>
            <div style={{ gridColumn: salesData.length > 0 ? 'span 2' : 'span 1' }}>
              <SalesChart data={salesData} />
            </div>
          </div>

          {/* Charts Row 2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '20px',
            marginBottom: '24px'
          }}>
            <CategoryChart data={categorySales} />
            <RegionalSalesChart data={regionalSales} />
          </div>

          {/* Product Table */}
          <ProductTable products={productPerformance} />

          {/* Customer Metrics */}
          <div style={{
            marginTop: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                New Customers
              </div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#111827' }}>
                {customerMetrics.newCustomers.toLocaleString()}
              </div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                Returning Customers
              </div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#111827' }}>
                {customerMetrics.returningCustomers.toLocaleString()}
              </div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                Total Customers
              </div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#111827' }}>
                {customerMetrics.totalCustomers.toLocaleString()}
              </div>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>
                Avg Lifetime Value
              </div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#111827' }}>
                ${customerMetrics.avgLifetimeValue.toLocaleString()}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;