import { configureStore } from '@reduxjs/toolkit';
import usernameReducer from './username';
import messagesReducer from './message';
import chatlogReducer from './chatlog';

export default configureStore({
    reducer:{
        username: usernameReducer,
        messages: messagesReducer,
        chatlog: chatlogReducer,
    }
});