import React, { RefObject, ChangeEvent, KeyboardEvent, LegacyRef, forwardRef } from 'react';
import Chip from '../chip/Chip'
import { User } from '../../data/users';



interface SearchBarPresenterProps {
    ref: React.Ref<HTMLInputElement>
    selectedUsers: User[];
    isUserDeleting: boolean;
    searchInput: string;
    handleSearchInput: (event: ChangeEvent<HTMLInputElement>) => void;
    setInputFocus: () => void;
    handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
    removeUser: (user: User) => void;
    addNewUser: (user: User) => void;
    filteredList: User[];
    isFocused: boolean;
}

const SearchBarPresenter = forwardRef((
    {
        selectedUsers,
        isUserDeleting,
        searchInput,
        handleSearchInput,
        setInputFocus,
        handleKeyDown,
        removeUser,
        addNewUser,
        filteredList,
        isFocused,
    }: SearchBarPresenterProps,
    ref: any
) => {
    return (
        <div className="container" >
            <div ref={ref} className="search__input">
                {selectedUsers.map((user, index) => (
                    <Chip key={user.id} highlighted={index === selectedUsers.length - 1 && isUserDeleting} user={user} removeUser={removeUser} />
                ))}
                <input
                    value={searchInput}
                    onChange={handleSearchInput}
                    onFocus={setInputFocus}
                    onKeyDown={handleKeyDown}
                    placeholder="Search users..."
                />
            </div>
            <hr></hr>
            {isFocused && (
                <div className="search__results">
                    {filteredList.map((user) => (
                        <div key={user.id} onClick={() => addNewUser(user)} className="user">
                            {user.name}, {user.email}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default SearchBarPresenter;
