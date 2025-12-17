import axiosClient from '../axiosClient';

// Example service for API calls
export const exampleService = {
  // Example GET request
  getData: async () => {
    const response = await axiosClient.get('/data');
    return response.data;
  },

  // Example POST request
  createData: async (data: unknown) => {
    const response = await axiosClient.post('/data', data);
    return response.data;
  },

  // Example PUT request
  updateData: async (id: string, data: unknown) => {
    const response = await axiosClient.put(`/data/${id}`, data);
    return response.data;
  },

  // Example DELETE request
  deleteData: async (id: string) => {
    const response = await axiosClient.delete(`/data/${id}`);
    return response.data;
  },
};

