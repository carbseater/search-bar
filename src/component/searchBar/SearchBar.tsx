import React, { useEffect, useMemo, useRef, useState, KeyboardEvent, ChangeEvent } from 'react';
import { User } from '../../data/users';
import SearchBarPresenter from './SearchBarPresenter';
import { useUserList } from '../../hook/useUserList';

export default function SearchBar() {
  // Ref for the searchbar scroll container
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Custom hook to get users and toggle user selection
  const { usersList, toggleSelection } = useUserList();

  // State for input focus
  const [isFocused, setIsFocused] = useState(false);

  // State for search input value
  const [searchInput, setSearchInput] = useState('');

  // State to track if the user is in the process of deleting characters
  const [isUserDeleting, setIsUserDeleting] = useState(false);

  // State for selected users
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  // Effect to scroll to the end when selected users change
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
    }
  }, [selectedUsers]);

  // Function to set input focus
  const setInputFocus = () => setIsFocused(true);

  // Handler for search input change
  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    setIsUserDeleting(false);
  };

  // Function to select/add a new user
  const addNewUser = (user: User) => {
    setSearchInput('');
    setIsUserDeleting(false);
    setSelectedUsers((prevSelectedUsers) => [...prevSelectedUsers, user]);
    toggleSelection(user.id);
  };

  // Function to remove a selected user
  const removeUser = (user: User) => {
    setSelectedUsers((prevOrder) => prevOrder.filter((selectedUser) => selectedUser.id !== user.id));
    toggleSelection(user.id);
  };

  // Memoized filtered list based on search input and user list
  const filteredList = useMemo(() => {
    const searchKey = searchInput.toLowerCase();
    return usersList.filter(
      (user) => (user.name.toLowerCase().includes(searchKey) || user.email.toLowerCase().includes(searchKey)) && !user.isSelected
    );
  }, [searchInput, usersList]);

  // Handler for keyboard events (e.g., Backspace)
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && searchInput === '') {
      if (isUserDeleting && selectedUsers.length > 0) {
        removeUser(selectedUsers[selectedUsers.length - 1]);
      } else if (!isUserDeleting) {
        setIsUserDeleting(true);
      }
    }
  };

  return (
    <SearchBarPresenter
      ref={scrollContainerRef}
      selectedUsers={selectedUsers}
      isUserDeleting={isUserDeleting}
      searchInput={searchInput}
      handleSearchInput={handleSearchInput}
      setInputFocus={setInputFocus}
      handleKeyDown={handleKeyDown}
      removeUser={removeUser}
      addNewUser={addNewUser}
      filteredList={filteredList}
      isFocused={isFocused}
    />
  );
}
