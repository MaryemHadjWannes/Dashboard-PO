"use client";

import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import PlantsList from "../components/PlantsList";
import TrendChart from "../components/TrendChart";
import Sidebar from "../components/Sidebar"; // Import the Sidebar component
import CustomCalendar from "../components/Calendar"; // Import the Calendar component
import Alerts from "../components/Alerts"; // Import the Alerts component

export default function Dashboard() {
  const currentMonth = new Date()
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  console.log(currentMonth); // Output: "FEB"

  const statsData = {
    valid: 7,
    pending: 5,
    expiring: 3,
    contributionInfo: "Active Contribution",
  };

  const plantsData = [
    {
      id: 1,
      name: "HydroDuoX Facility",
      type: "Hydrogen",
      address: "California/USA",
      riskScore: 80,
    },
    {
      id: 2,
      name: "VerdaH2 Hub",
      type: "Ammonia",
      address: "Amsterdam/Nederland",
      riskScore: 20,
    },
  ];

  const trendData = {
    title: "20,000",
    subtitle: "TOTAL PROGRESS",
    months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    primaryData: [15000, 18000, 16000, 22000, 15000, 20000],
    secondaryData: [10000, 12000, 11000, 13000, 10000, 15000],
    currentPoint: {
      month: "MAR",
      value: 16000,
      label: "GOOD",
    },
  };

  const alerts = [
    {
      title: "CertifyH™ Scheme expires in 2 days",
      severity: "high",
      timestamp: "10:30 AM",
    },
    {
      title: "New regulation update available",
      severity: "medium",
      timestamp: "08:45 AM",
    },
  ];

  // Get the current date
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex w-full h-full bg-blue-50">
      {/* Add the Sidebar component */}
      <Sidebar />

      <div className="flex flex-col w-full p-6">
        <DashboardHeader title="Main Dashboard" />

        <div className="grid grid-cols-12 gap-6 mt-6">
          {/* Main content area */}
          <div className="col-span-12 lg:col-span-8">
            <DashboardStats stats={statsData} />

            <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Plants</h2>
              <PlantsList plants={plantsData} />
            </div>

            <div className="bg-white rounded-lg p-6 mt-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-semibold mb-4">Risk Profile</h2>
                </div>
              </div>
              <TrendChart data={trendData} />
            </div>
          </div>

          {/* Right sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Calendar box */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                
                <span className="text-sm font-medium">{currentDate}</span>
              </div>

              {/* Calendar component */}
              <CustomCalendar />
            </div>

            {/* Alerts box */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              
              <Alerts alerts={alerts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}