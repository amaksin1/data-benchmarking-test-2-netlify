import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { ProductPerformance } from './types';

interface ProductTableProps {
  products: ProductPerformance[];
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} color="#10b981" />;
      case 'down':
        return <TrendingDown size={16} color="#ef4444" />;
      default:
        return <Minus size={16} color="#6b7280" />;
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock < 30) return { color: '#ef4444', label: 'Low' };
    if (stock < 100) return { color: '#f59e0b', label: 'Medium' };
    return { color: '#10b981', label: 'Good' };
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#111827',
        marginBottom: '20px'
      }}>
        Top Products
      </h3>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              borderBottom: '2px solid #e5e7eb'
            }}>
              <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }}>Product</th>
              <th style={{
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }}>Category</th>
              <th style={{
                textAlign: 'right',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }}>Sales</th>
              <th style={{
                textAlign: 'right',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }}>Revenue</th>
              <th style={{
                textAlign: 'center',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }}>Stock</th>
              <th style={{
                textAlign: 'center',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }}>Trend</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const stockStatus = getStockStatus(product.stock);
              return (
                <tr key={product.id} style={{
                  borderBottom: '1px solid #f3f4f6'
                }}>
                  <td style={{
                    padding: '16px 8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827'
                  }}>
                    {product.name}
                  </td>
                  <td style={{
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#6b7280'
                  }}>
                    {product.category}
                  </td>
                  <td style={{
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#111827',
                    textAlign: 'right',
                    fontWeight: '500'
                  }}>
                    {product.sales}
                  </td>
                  <td style={{
                    padding: '16px 8px',
                    fontSize: '14px',
                    color: '#111827',
                    textAlign: 'right',
                    fontWeight: '500'
                  }}>
                    ${product.revenue.toLocaleString()}
                  </td>
                  <td style={{
                    padding: '16px 8px',
                    textAlign: 'center'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500',
                      backgroundColor: `${stockStatus.color}15`,
                      color: stockStatus.color
                    }}>
                      {product.stock}
                    </span>
                  </td>
                  <td style={{
                    padding: '16px 8px',
                    textAlign: 'center'
                  }}>
                    {getTrendIcon(product.trend)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};