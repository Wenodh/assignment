import React, { useEffect, useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import './resource.css';
import { useNavigate } from 'react-router-dom';

import BreadCrumb from '../../components/BreadCrumb';
import ResourceCard from '../../components/ResourceCard';
import { GetResourcesDetailsById } from '../../services/restApi';
const Resource = () => {
    let navigate = useNavigate();
    let { id, tag } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        GetResourcesDetailsById(id)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => alert(err.message))
            .finally(() => setLoading(false));
    }, []);

    const handleNav = () => {
        let path = `/addItem/${tag}/${id}`;
        navigate(path);
    };
    const columns = [
        { field: 'title', headerName: 'TITLE', width: 200 },
        { field: 'description', headerName: 'DESCRIPTION', width: 500 },
        { field: 'link', headerName: 'LINK', width: 300 },
    ];
    const rows = data?.resource_items ?? [];
    return (
        <div className="body">
            {loading ? (
                <>loading...</>
            ) : (
                <>
                    <div style={{ paddingBottom: '32px' }}>
                        <BreadCrumb />
                    </div>
                    <ResourceCard
                        icon_url={data?.icon_url}
                        title={data?.title}
                        link={data?.link}
                        description={data?.description}
                    />
                    <button className="blueBtn">UPDATE</button>
                    <div className="search">
                        <p>Items</p>
                        <input />
                    </div>

                    <div style={{ height: 400, width: 1097 }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                        <button onClick={handleNav}>ADD ITEM</button>
                        <button>DELETE</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Resource;
