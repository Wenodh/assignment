import { useEffect, useState } from 'react';

import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import Tabs from '../components/Tabs';
import { GetResources } from './../services/restApi';

const Home = () => {
    const [resources, setResources] = useState([]);
    const [requests, setRequests] = useState([]);
    const [users, setUsers] = useState([]);
    const [activeTab, setActiveTab] = useState(1);
    const changeActiveTab = (data) => {
        setActiveTab(data);
    };

    useEffect(() => {
        GetResources()
            .then((res) => {
                console.log(res);
                const data = res.data.reduce((group, product) => {
                    const { tag } = product;
                    group[tag] = group[tag] ?? [];
                    group[tag].push(product);
                    return group;
                }, {});
                setRequests(data?.request ?? []);
                setResources(data?.resource ?? []);
                setUsers(data?.user ?? []);
                console.log(data);
            })
            .catch((err) => alert(err.message));
    }, []);

    return (
        <div style={{ paddingLeft: '132px', paddingRight: '132px' }}>
            <Tabs func={changeActiveTab} activeTab={activeTab} />
            <div style={{ marginLeft: '16px' }}>
                <SearchBar />
            </div>
            {/* <input style={{ margin: '16px 0px 16px 148px' }} /> */}
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {activeTab === 0 &&
                    resources.map((resource) => (
                        <Card key={resource.id} data={resource} />
                    ))}
                {activeTab === 1 &&
                    requests.map((request) => <Card data={request} />)}
                {activeTab === 2 && users.map((user) => <Card data={user} />)}
            </div>
        </div>
    );
};

export default Home;
