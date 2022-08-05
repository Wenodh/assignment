import React from 'react';

import './addItem.css';
import BreadCrumb from '../../components/BreadCrumb';
import image from '../../images/addItem.png';
const AddItem = () => {
    return (
        <div className="addItem">
            <div>
                <div className="back">
                    <BreadCrumb />
                </div>
                <form className="form">
                    <h2>Item Details</h2>
                    <label>ITEM NAME</label>
                    <input />
                    <label>LINK</label>
                    <input />
                    <label>RESOURCE NAME</label>
                    <input />
                    <label>DESCRIPTION</label>
                    <input type="textarea" />
                    <button className="button">CREATE</button>
                </form>
            </div>
            <img className="rightImg" src={image} alt="" />
        </div>
    );
};

export default AddItem;
