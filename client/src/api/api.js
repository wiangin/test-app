import axios from 'axios';

export const sendMessageApi = async (message) => {
    try {
         await axios.post('http://localhost:3001/message', message);
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
}