'use client';

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    console.log("User", user)
  })

  const handleLogout = async () => {
    try {
        await logout();
    } catch (error) {
        console.error('Logout failed:', error);
    }
};

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <Link href="/" className="text-2xl font-bold text-green-600">SIPS</Link>
        <nav className="flex space-x-6 text-gray-600 font-medium">
                <Link href="/" className="text-green-600 border-b-2 border-green-600">
                    Find Companies
                </Link>
                <Link href="/talent" className="hover:text-green-600">
                    Find Talent
                </Link>
                <Link href="/about" className="hover:text-green-600">
                About Us</Link>
                {isAuthenticated && (
                    <Link href="/dashboard/post-job" className="hover:text-green-600">
                        Upload Job
                    </Link>
                )}
          </nav>
        <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="">
          Log Out
        </button>
        ) : (
          <>
          <Link href="/login"
          className="text-gray-600 hover:text-green-600"
        >
          Login
        </Link>
        <Link href="/signup"
          className="text-gray-600 hover:text-green-600"
        >
          Sign Up
        </Link>
        </>
        )}
      </div>
    </header>
  )
}

export default Header