import React from 'react';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './breadcrumb.css';
import back from '../icons/back.png';
const BreadCrumb = () => {
    let { tag } = useParams();
    let navigate = useNavigate();
    return (
        <div className="breadCrumb" onClick={() => navigate(-1)}>
            <img className="img" src={back} alt="" />
            <p>{tag[0].toUpperCase() + tag.slice(1)}</p>
        </div>
    );
};

export default BreadCrumb;
