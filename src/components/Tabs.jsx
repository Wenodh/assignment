import React, { useState } from 'react';

const Tabs = (props) => {
    const [activeTab, setActiveTab] = useState(props.activeTab);
    const styles = {
        outer: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '46px',
            marginBottom: '16px',
            borderRadius: '4px',
        },
        button: {
            width: '200px',
            height: '40px',
            backgroundColor: '#D7DFE9',
            border: '1px solid #D7DFE9',
        },
        active: {
            width: '200px',
            height: '40px',
            backgroundColor: '#0B69FF',
            fontColor: 'White',
            border: '1px solid #D7DFE9',
            color: 'white',
        },
    };
    return (
        <div style={styles.outer}>
            <button
                style={activeTab === 0 ? styles.active : styles.button}
                onClick={() => {
                    props.func(0);
                    setActiveTab(0);
                }}
            >
                Resources
            </button>
            <button
                style={activeTab === 1 ? styles.active : styles.button}
                onClick={() => {
                    props.func(1);
                    setActiveTab(1);
                }}
            >
                Requests
            </button>
            <button
                style={activeTab === 2 ? styles.active : styles.button}
                onClick={() => {
                    props.func(2);
                    setActiveTab(2);
                }}
            >
                Users
            </button>
        </div>
    );
};

export default Tabs;
