'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
    name: string;
    path: string;
    icon: (color: string) => React.ReactNode;
    subcategories?: string[];
}

const navigationItems = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: (color: string) => (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M16 13H13C12.45 13 12 13.45 12 14V17C12 17.55 12.45 18 13 18H16C16.55 18 17 17.55 17 17V14C17 13.45 16.55 13 16 13ZM16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3ZM18 20H6C5.45 20 5 19.55 5 19V9H19V19C19 19.55 18.55 20 18 20Z'
                    fill={color}
                />
            </svg>
        ),

    },
    {
        name: 'Saved Companies',
        path: '/dashboard/saved-companies',
        icon: (color: string) => (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M23 8V18C23 19.1 22.1 20 21 20H5C4.45 20 4 19.55 4 19C4 18.45 4.45 18 5 18H21V8C21 7.45 21.45 7 22 7C22.55 7 23 7.45 23 8ZM4 16C2.34 16 1 14.66 1 13V7C1 5.34 2.34 4 4 4H16C17.66 4 19 5.34 19 7V14C19 15.1 18.1 16 17 16H4ZM7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7C8.34 7 7 8.34 7 10Z'
                    fill={color}
                />
            </svg>
        )
    },
    {
        name: 'Recommendations',
        path: '/dashboard/recommendations',
        icon: (color: string) => (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M23 8V18C23 19.1 22.1 20 21 20H5C4.45 20 4 19.55 4 19C4 18.45 4.45 18 5 18H21V8C21 7.45 21.45 7 22 7C22.55 7 23 7.45 23 8ZM4 16C2.34 16 1 14.66 1 13V7C1 5.34 2.34 4 4 4H16C17.66 4 19 5.34 19 7V14C19 15.1 18.1 16 17 16H4ZM7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7C8.34 7 7 8.34 7 10Z'
                    fill={color}
                />
            </svg>
        )
    },
    {
        name: 'Profile',
        path: '/dashboard/profile',
        icon: (color: string) => (
            <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M23 8V18C23 19.1 22.1 20 21 20H5C4.45 20 4 19.55 4 19C4 18.45 4.45 18 5 18H21V8C21 7.45 21.45 7 22 7C22.55 7 23 7.45 23 8ZM4 16C2.34 16 1 14.66 1 13V7C1 5.34 2.34 4 4 4H16C17.66 4 19 5.34 19 7V14C19 15.1 18.1 16 17 16H4ZM7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7C8.34 7 7 8.34 7 10Z'
                    fill={color}
                />
            </svg>
        )
    }
];

const Sidebar = () => {
    const pathname = usePathname();

    const isActive = (item: SidebarItem) => {
        if (pathname === item.path) return true;
        if (item.subcategories) {
            return item.subcategories.some(
                (subPath: string) =>
                    pathname === subPath ||
                    pathname.startsWith(`/dashboard${subPath}`)
            );
        }

        return false;
    };

    return (
        <div className='flex w-16 flex-col border-r border-gray-200 bg-white md:w-64'>
            <div className='border-b border-gray-200 px-8 py-4'>
                <Link href='/' className='text-xl font-bold text-blue-600'>
                    SIPS
                </Link>
            </div>

            <nav className='flex-1 space-y-8 pt-4'>
                {navigationItems.map((item: SidebarItem) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center gap-4 px-4 py-3 text-sm font-medium ${
                            isActive(item)
                                ? 'border-l-4 border-[#0066FF] text-[#0066FF]'
                                : 'text-[#6B7380]'
                        }`}
                    >
                        {item.icon(isActive(item) ? '#0066FF' : '#6B7380')}
                        <span className='hidden font-inter text-base font-semibold md:inline'>
                            {item.name}
                        </span>
                    </Link>
                ))}
            </nav>

            <div className='border-t border-gray-200 p-4'>
                <Link
                    href='/logout'
                    className='flex items-center gap-4 rounded px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100'
                >
                    <svg
                        width='18'
                        height='18'
                        viewBox='0 0 18 18'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M2.10352 2H8.10352C8.65352 2 9.10352 1.55 9.10352 1C9.10352 0.45 8.65352 0 8.10352 0H2.10352C1.00352 0 0.103516 0.9 0.103516 2V16C0.103516 17.1 1.00352 18 2.10352 18H8.10352C8.65352 18 9.10352 17.55 9.10352 17C9.10352 16.45 8.65352 16 8.10352 16H2.10352V2Z'
                            fill='#001433'
                        />
                        <path
                            d='M17.7535 8.65L14.9635 5.86C14.6435 5.54 14.1035 5.76 14.1035 6.21V8H7.10352C6.55352 8 6.10352 8.45 6.10352 9C6.10352 9.55 6.55352 10 7.10352 10H14.1035V11.79C14.1035 12.24 14.6435 12.46 14.9535 12.14L17.7435 9.35C17.9435 9.16 17.9435 8.84 17.7535 8.65Z'
                            fill='#001433'
                        />
                    </svg>
                    <span className='hidden font-inter text-base font-semibold md:inline'>
                        Logout
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;