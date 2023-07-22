import React from 'react';
import './index.css'

type TopBarProps = {
  title: string;
  isButtonVisible: boolean;
  onClick?: () => void;
};

const TopBar: React.FC<TopBarProps> = ({ title, isButtonVisible, onClick }) => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>{title}</h1>
        
      </div>
      {isButtonVisible && <div className="nav-right">
        <button onClick={() => {onClick!()}}>Nova publicação</button>
      </div>}
    </div>
  );
};

export default TopBar;