'use client';

import { usePathname } from 'next/navigation';

const DashboardHeader = () => {
    const pathname = usePathname();

    const getTitleFromPath = () => {
        const segments = pathname.split('/').filter(Boolean);
        const lastSegment = segments[segments.length - 1] || 'Dashboard';
        return lastSegment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (

<header className="flex justify-between items-center p-4 border-b bg-white">
<h1 className='font-inter text-xl font-semibold text-[#001433]'>
                {getTitleFromPath()}
            </h1>
<div className="flex items-center space-x-4">
  <button className="relative">
    🔔
    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
  </button>
  <div className="w-8 h-8 rounded-full bg-gray-300" />
</div>
</header>
    );
};

export default DashboardHeader;