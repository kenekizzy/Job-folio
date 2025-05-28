import React from 'react'
import { MdTrendingUp, MdWork, MdPeople, MdCalendarToday } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ElementType;
}

const Sidebar = () => {

    const pathname = usePathname();
    const sidebarItems: SidebarItem[] = [
      { name: 'Overview', path: '/dashboard-company', icon: MdTrendingUp },
      { name: 'Job Postings', path: '/dashboard-company/jobs', icon: MdWork },
      { name: 'Candidates', path: '/dashboard-company/candidates', icon: MdPeople },
      { name: 'Applications', path: '/dashboard-company/applications', icon: MdCalendarToday },
      { name: 'Analytics', path: '/dashboard-company/analytics', icon: MdTrendingUp }
    ];
  
    return (
      <div className="flex w-16 flex-col border-r border-gray-200 bg-white md:w-64">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-center h-16 border-b border-gray-200">
                    <h1 className="text-xl font-bold text-gray-800">Company Dashboard</h1>
                </div>
                
                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-3">
                        {sidebarItems.map((item) => {
                            const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
                            const Icon = item.icon;
                            
                            return (
                                <li key={item.path}>
                                    <Link
                                        href={item.path}
                                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                                            isActive
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        <Icon className={`h-5 w-5 mr-3 ${
                                            isActive ? 'text-blue-600' : 'text-gray-400'
                                        }`} />
                                        {item.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">SIPS</p>
                            <p className="text-xs text-gray-500">Admin Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

export default Sidebar