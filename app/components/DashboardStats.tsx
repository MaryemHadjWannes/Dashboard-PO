import React from 'react';

interface StatsProps {
  stats: {
    valid: number;
    pending: number;
    expiring: number;
    //contributionInfo: string;
  };
}

const DashboardStats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="stat-card">
        <div className="flex items-center">
          <div className="bg-blue-50 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <span className="block text-gray-500 text-sm">Valid</span>
            <span className="text-2xl font-bold">{stats.valid}</span>
          </div>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="flex items-center">
          <div className="bg-blue-50 p-2 rounded-full mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <span className="block text-gray-500 text-sm">Pending</span>
            <span className="text-2xl font-bold">{stats.pending}</span>
          </div>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="bg-red-50 p-2 rounded-full mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <span className="block text-gray-500 text-sm">Expiring</span>
              <span className="text-2xl font-bold">{stats.expiring}</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;