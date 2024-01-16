import React, { useState } from 'react'
import { User, users } from '../data/users';

export const useUserList = () => {
    const [usersList, setUsersList] = useState<User[]>(() =>
        users.map((user) => ({ ...user, isSelected: false }))
    );
    const toggleSelection = (userId: number) => {
        setUsersList((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, isSelected: !user.isSelected } : user
            )
        );
    };

    return {
        usersList,
        toggleSelection
    }
}