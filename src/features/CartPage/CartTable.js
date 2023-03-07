import { Button, Table } from 'antd';
import { useState,useEffect } from 'react';
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
        title: '加項',
        dataIndex: 'incre',
    },
    {
        title: '數量',
        dataIndex: 'count',
    },
    {
        title: '減項',
        dataIndex: 'decre',
    },
    {
        title: '總價',
        dataIndex: 'total',
    },
];

const CartTable = () => {
    const Data = useSelector(state => state.cartTotal.value)
    const DataWithoutIniT = Data.filter((data) => data.key !== 0)
    const [DataList, setDataList] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const del = () => 
    {   
        dispatch(dataDel({key:selectedRowKeys}));
    }
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);

    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    useEffect(() => {
        setDataList(Data);
        console.log('datalist',DataList.length);
    }, []);
    
    return (
        <div>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                <button style={{
                    marginBottom: 16,
                    border:'none',
                    borderRadius:'30px',
                    backgroundColor:'#F2A99B',
                    color:'white'
                }} type="primary" onClick={del} disabled={!hasSelected} loading={loading}>
                    自購物車刪除
                </button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {/* {hasSelected ? `已選擇 ${selectedRowKeys.length} 項` : ''} */}
                </span>
            </div>
            {
                Data.length===1 ?(<p>購物車無資料</p>):( <Table rowSelection={rowSelection} columns={columns} dataSource={DataWithoutIniT} />)
            }
            {/* <Table rowSelection={rowSelection} columns={columns} dataSource={Data} /> */}
        
        </div>
    );
};
export default CartTable;