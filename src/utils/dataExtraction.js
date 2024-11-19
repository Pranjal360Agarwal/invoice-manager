import axios from 'axios';

export const extractData = async(file) => {
    // Replace with actual API integration
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post('https://api.example.com/extract', formData);
        return response.data;
    } catch (error) {
        console.error('Error extracting data:', error);
        throw new Error('Failed to extract data.');
    }
};