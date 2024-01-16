import React from 'react';
import './Chip.css'
import { User } from '../../data/users';
import userIcon from '../../assets/user.png';
import { Avatar } from '../avatar/Avatar';

interface ChipProps {
  user: User;
  removeUser: (user: User) => void;
  disabled?: boolean;
  highlighted?: boolean;
}

const Chip: React.FC<ChipProps> = ({ user, removeUser, disabled, highlighted }) => {
  return (
    <div className={`selected__chip ${highlighted && 'chip__highlighted'}`}>
      {/* <div className="avatar">
        <img src={userIcon} id="user__icon" />
      </div> */}


      <Avatar letter={user.name[0].toUpperCase()} />
      <span id="username">
        {user.name}
      </span>

      <span id="closeButton" onClick={() => removeUser(user)}>X</span>
    </div>
  );
};

export default Chip;