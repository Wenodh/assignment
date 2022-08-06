import React, { useEffect, useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './resource.css';

import BreadCrumb from '../../components/BreadCrumb';
import ResourceCard from '../../components/ResourceCard';
import SearchBar from '../../components/SearchBar';
import { GetResourcesDetailsById } from '../../services/restApi';
import { updateResourceItem } from './../../services/restApi';

const Resource = () => {
    let navigate = useNavigate();
    let { id, tag } = useParams();
    const [data, setData] = useState();
    const [selectedRow, setSelectedRow] = useState(0);
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
    }, [id]);
    const handleUpdate = () => {
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
        updateResourceItem()
            .then((res) => {
                console.log(res);
                toast.success('Updated successfully', conditions);
            })
            .catch((err) => {
                toast.error('Something went wrong', conditions);
            });
    };
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
            <ToastContainer />
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
                    <button className="btn blueBtn" onClick={handleUpdate}>
                        UPDATE
                    </button>
                    <div className="search">
                        <p>Items</p>
                        <SearchBar />
                        {/* <div className="searchBox">
                            <img className="searchIcon" src={search} alt="" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="searchInput"
                            />
                        </div> */}
                    </div>

                    <div style={{ height: 450, width: '100%' }}>
                        <DataGrid
                            bgcolor={'#FFFFFF'}
                            color={'#FFFFFF'}
                            rows={rows}
                            columns={columns}
                            pageSize={6}
                            rowsPerPageOptions={[6]}
                            checkboxSelection
                            onSelectionModelChange={(row) =>
                                setSelectedRow(row.length)
                            }
                        />
                        <button
                            className={
                                selectedRow > 0
                                    ? 'btn disableBtn'
                                    : 'btn successBtn'
                            }
                            onClick={handleNav}
                        >
                            ADD ITEM
                        </button>
                        <button
                            className={
                                selectedRow > 0
                                    ? 'ml btn deleteBtn'
                                    : 'ml btn disableBtn'
                            }
                        >
                            DELETE
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Resource;
