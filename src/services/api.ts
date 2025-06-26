const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

interface Job {
  state: string;
  city: string[];
  course: string;
  companyName: string;
  address: string;
  courseGroup: string;
}

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
  },

  jobs: {
    getRandomJobs: async (): Promise<Job[]> => {
      try {
        const response = await fetch(`${API_BASE_URL}/v1/fetch-random-companies`);
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        return response.json();
      } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
      }
    }
  }
};