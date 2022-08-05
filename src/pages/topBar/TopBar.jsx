import React from 'react';
import './topBar.css';

import { useNavigate } from 'react-router-dom';

import CircleImg from '../../components/CircleImg';
import logo from '../../images/NxtWave.png';

const TopBar = () => {
    let navigate = useNavigate();
    return (
        <div className="topBar">
            <img
                className="logo"
                src={logo}
                alt=""
                onClick={() => navigate('/')}
            />
            <CircleImg src={logo} size="40px" />
        </div>
    );
};

export default TopBar;
