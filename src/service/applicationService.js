
import apiService  from '../utill/httpUtil';

// Function to submit service name
const saveApplication = async (request) => {
  try {
    const response = apiService.post(`/submit-service`,request);
    return response.data; // Assuming the API responds with some data
  } catch (error) {
    console.error('Error submitting service name:', error);
    throw error; // Re-throw to handle it later
  }
};

export default {
    saveApplication,
};
