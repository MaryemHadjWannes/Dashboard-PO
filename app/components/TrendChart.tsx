"use client";
import React, { useEffect, useRef } from 'react';

interface TrendChartProps {
  data: {
    title: string;
    subtitle: string;
    months: string[];
    primaryData: number[];
    secondaryData: number[];
    currentPoint: {
      month: string;
      value: number;
      label: string;
    };
  };
}

const TrendChart: React.FC<TrendChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const padding = 40;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    // Find max value for scaling
    const maxValue = Math.max(...data.primaryData, ...data.secondaryData) * 1.2;
    
    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // Draw horizontal grid lines
    for (let i = 0; i <= 4; i++) {
      const y = padding + (chartHeight * i) / 4;
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
    }
    ctx.stroke();
    
    // Draw month labels
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6b7280';
    ctx.font = '12px sans-serif';
    
    const xStep = chartWidth / (data.months.length - 1);
    data.months.forEach((month, i) => {
      const x = padding + i * xStep;
      ctx.fillText(month, x, height - padding / 2);
    });
    
    // Draw primary line
    ctx.beginPath();
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 3;
    
    data.primaryData.forEach((value, i) => {
      const x = padding + i * xStep;
      const y = padding + chartHeight - (value / maxValue) * chartHeight;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    
    // Draw secondary line
    ctx.beginPath();
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 3;
    
    data.secondaryData.forEach((value, i) => {
      const x = padding + i * xStep;
      const y = padding + chartHeight - (value / maxValue) * chartHeight;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    
    // Draw current point highlight
    const currentMonthIndex = data.months.indexOf(data.currentPoint.month);
    if (currentMonthIndex !== -1) {
      const x = padding + currentMonthIndex * xStep;
      const y = padding + chartHeight - (data.currentPoint.value / maxValue) * chartHeight;
      
      // Draw green pill shape for label
      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      const pillWidth = 60;
      const pillHeight = 24;
      ctx.roundRect(x - pillWidth / 2, y - 40, pillWidth, pillHeight, 12);
      ctx.fill();
      
      // Draw label text
      ctx.fillStyle = 'white';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText(data.currentPoint.label, x, y - 25);
      
      // Draw point
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, 2 * Math.PI);
      ctx.fillStyle = '#22c55e';
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
  }, [data]);
  
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <h3 className="text-3xl font-bold">{data.title}</h3>
        <p className="text-gray-500 text-sm">{data.subtitle}</p>
      </div>
      
      <div className="h-64 w-full">
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={300} 
          className="w-full h-full"
        ></canvas>
      </div>
    </div>
  );
};

// Polyfill for roundRect if not supported
if (!CanvasRenderingContext2D.prototype.roundRect) {
  CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    
    const r = radius as number; // Ensures it's treated as a number

    this.beginPath();
    this.moveTo(x + r, y);
    this.lineTo(x + width - r, y);
    this.quadraticCurveTo(x + width, y, x + width, y + r);
    this.lineTo(x + width, y + height - r);
    this.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
    this.lineTo(x + r, y + height);
    this.quadraticCurveTo(x, y + height, x, y + height - r);
    this.lineTo(x, y + r);
    this.quadraticCurveTo(x, y, x + r, y);
    this.closePath();

    
    return this;
  };
}

export default TrendChart;