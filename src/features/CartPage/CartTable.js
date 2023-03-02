import { Button, Table } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {dataDel} from '../counter/CartSlice'
//table 欄位名稱
const columns = [
    {
        title: '項次',
        dataIndex: 'key',
    },
    {
        title: '品名',
        dataIndex: 'name',
    },
    {
        title: '單價',
        dataIndex: 'price',
    },
    {
        title: '數量',
        dataIndex: 'count',
    },
    {
        title: '總價',
        dataIndex: 'total',
    },
];

const CartTable = () => {
    const Data = useSelector(state => state.cartTotal.value)
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const del = () => 
    {   
        dispatch(dataDel({key:selectedRowKeys}));
        console.log('Data: ', Data);
    }
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
        console.log('Data: ', Data);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <Button type="primary" onClick={del} disabled={!hasSelected} loading={loading}>
                    Reload
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table rowSelection={rowSelection} columns={columns} dataSource={Data} />
        </div>
    );
};
export default CartTable;