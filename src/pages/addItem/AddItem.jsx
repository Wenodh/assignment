import React, { useState } from 'react';

import './addItem.css';
import { toast, ToastContainer } from 'react-toastify';

import BreadCrumb from '../../components/BreadCrumb';
import image from '../../images/addItem.png';
import { AddResourceItem } from '../../services/restApi';

const AddItem = () => {
    const [itemName, setItemName] = useState('');
    const [link, setLink] = useState('');
    const [resourceName, setResourceName] = useState('');
    const [description, setDescription] = useState('');

    //toast parameters
    let conditions = {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    };
    //to add new item
    const handleSubmit = (e) => {
        e.preventDefault();
        AddResourceItem()
            .then((res) => {
                setDescription('');
                setItemName('');
                setLink('');
                setResourceName('');
                toast.success('Created successfully', conditions);
            })
            .catch((err) => {
                toast.error('Something went wrong', conditions);
            });
    };
    return (
        <div className="addItem">
            <div>
                <div className="back">
                    <BreadCrumb />
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <h2>Item Details</h2>
                    <label htmlFor="itemName">ITEM NAME</label>
                    <input
                        id="itemName"
                        name="itemName"
                        type="text"
                        minLength="5"
                        required
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                    />
                    <label htmlFor="link">LINK</label>
                    <input
                        id="link"
                        name="link"
                        type="text"
                        minLength="5"
                        required
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <label htmlFor="resourceName">RESOURCE NAME</label>
                    <input
                        id="resourceName"
                        name="resourceName"
                        type="text"
                        required
                        minLength="5"
                        value={resourceName}
                        onChange={(e) => setResourceName(e.target.value)}
                    />
                    <label htmlFor="description">DESCRIPTION</label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        cols="50"
                        required
                        minLength="50"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <button className="button" type="submit">
                        CREATE
                    </button>
                </form>
            </div>
            <img className="rightImg" src={image} alt="" />
            <ToastContainer />
        </div>
    );
};

export default AddItem;
