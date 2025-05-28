'use client';

import Topbar from "@/components/dashboard-company/Topbar";
import Sidebar from "@/components/dashboard-company/Sidebar";


export default function DashboardCompanyLayout({ 
  children,
}: { 
  children: React.ReactNode;
}) {


  return (
    <div className='flex h-screen bg-gray-50'>
            <Sidebar />

            <div className='flex flex-1 flex-col overflow-hidden'>
                <Topbar />

                <main className='overflow-y-auto'>{children}</main>
            </div>
  </div>
  )
}