import React, { useState } from 'react'
import { User, users } from '../data/users';

// Custom hook to manage the list of users and their selection status
export const useUserList = () => {
    // State to store the list of users with initial isSelected set to false
    const [usersList, setUsersList] = useState<User[]>(() =>
      users.map((user) => ({ ...user, isSelected: false }))
    );
  
    // Function to toggle the selection status of a user
    const toggleSelection = (userId: number) => {
      setUsersList((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId ? { ...user, isSelected: !user.isSelected } : user
        )
      );
    };
  
    return {
      usersList,
      toggleSelection,
    };
  };