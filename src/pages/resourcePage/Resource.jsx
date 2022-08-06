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
    const [selectedRow, setSelectedRow] = useState([]);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //fetching details of item using id
        setLoading(true);
        GetResourcesDetailsById(id)
            .then((res) => {
                setData(res.data);
                setRows(res.data.resource_items ?? []);
            })
            .catch((err) => alert(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    //updating an item present only shows success or failure toast
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
                // console.log(res);
                toast.success('Updated successfully', conditions);
            })
            .catch((err) => {
                toast.error('Something went wrong', conditions);
            });
    };

    //navigate to add new item page
    const handleNav = () => {
        let path = `/addItem/${tag}/${id}`;
        navigate(path);
    };

    // to delete selected rows in the table
    const handleDelete = () => {
        setRows(rows.filter((item) => !selectedRow.includes(item.id)));
        // console.log(rows.filter((item) => !selectedRow.includes(item.id)));
    };

    //table columns
    const columns = [
        { field: 'title', headerName: 'TITLE', width: 200 },
        { field: 'description', headerName: 'DESCRIPTION', width: 500 },
        { field: 'link', headerName: 'LINK', width: 300 },
    ];

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
                            rows={rows}
                            columns={columns}
                            pageSize={6}
                            rowsPerPageOptions={[6]}
                            checkboxSelection
                            onSelectionModelChange={(row) => {
                                setSelectedRow(row);
                            }}
                        />
                        <button
                            className={
                                selectedRow.length > 0
                                    ? 'btn disableBtn'
                                    : 'btn successBtn'
                            }
                            onClick={handleNav}
                        >
                            ADD ITEM
                        </button>
                        <button
                            className={
                                selectedRow.length > 0
                                    ? 'ml btn deleteBtn'
                                    : 'ml btn disableBtn'
                            }
                            onClick={handleDelete}
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
