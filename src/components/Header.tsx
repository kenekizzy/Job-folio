'use client';

import { useState }  from 'react'
import Modal from './Modal'
import { LoginForm, SignUpForm } from './auth/AuthForm';
const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="text-2xl font-bold text-green-600">Jobelia</div>
        <nav className="flex space-x-6 text-gray-600 font-medium">
        <a className="text-green-600 border-b-2 border-green-600" href="#">Find Jobs</a>
        <a href="#">Find Talent</a>
        <a href="#">Upload Job</a>
        </nav>
        <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="text-gray-600 hover:text-green-600"
        >
          Login
        </button>
        <button
          onClick={() => setIsSignUpOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Sign Up
        </button>
      </div>

      <Modal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        title="Login"
      >
        <LoginForm />
      </Modal>

      <Modal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        title="Create Account"
      >
        <SignUpForm />
      </Modal>
    </header>
  )
}

export default Header