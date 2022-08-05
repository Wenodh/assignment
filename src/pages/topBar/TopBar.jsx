import React from 'react';
import './topBar.css';

import CircleImg from '../../components/CircleImg';
import logo from '../../images/NxtWave.png';

const TopBar = () => {
    return (
        <div className="topBar">
            <img className="logo" src={logo} alt="" />
            <CircleImg src={logo} size="40px" />
        </div>
    );
};

export default TopBar;
