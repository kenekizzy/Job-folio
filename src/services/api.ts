const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

export const api = {
  verifyToken: async (token: string) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true };
    } catch (error) {
      throw new Error('Token verification failed');
    }
  },

  setUserRole: async (token: string, role: 'student' | 'company') => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, role };
    } catch (error) {
      throw new Error('Role selection failed');
    }
  }
};