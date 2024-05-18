
import React, { createContext, useState, useContext } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [friendRequestCount, setFriendRequestCount] = useState(0);

    return (
        <NotificationContext.Provider value={{ friendRequestCount, setFriendRequestCount }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
