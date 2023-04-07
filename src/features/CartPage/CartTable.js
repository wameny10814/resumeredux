import { Button, Table } from 'antd';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { dataDel } from '../counter/CartSlice'
import styles from '../styles/CartTable.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { div } from 'prelude-ls';
import emptycart from '../imgs/emptycart.svg';
import ArrowRight from '../imgs/arrowRight.svg';
//table 欄位名稱
const columns = [
    {
        title: '項次',
        dataIndex: 'id',
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
        dataIndex: 'quantity',
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
    const DataWithoutIniT = Data.filter((data) => data.id !== 0)
    const [DataList, setDataList] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const del = () => {
        dispatch(dataDel({ key: selectedRowKeys }));
        setSelectedRowKeys([]);

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
        console.log('datalist', DataList.length);
    }, []);

    return (
        <div>
            {
                Data.length === 1 ? (null) : (<div
                    style={{
                        marginBottom: 16,
                    }}
                >
                    <button style={{
                        marginBottom: 16,
                        border: 'none',
                        borderRadius: '30px',
                        backgroundColor: '#F2A99B',
                        color: 'white'
                    }} type="primary" onClick={del} disabled={!hasSelected} loading={loading}>
                        自購物車刪除
                    </button>
                    <span
                        style={{
                            marginLeft: 8,
                        }}
                    >
                        {hasSelected ? `已選擇 ${selectedRowKeys.length} 項` : ''}
                    </span>
                </div>)
            }

            {
                Data.length === 1 ? (
                    <div className={styles.forgotAddCart}>
                        <div className={styles.forgotAddCartpic}>
                            <div className={styles.forgotAddCartDirectFLEX} >
                                <span>Click to ProductList</span>
                                <div className={styles.forgotAddCartDirecpic}>
                                    <img  src={ArrowRight}></img>
                                </div>
                            </div>
                            <Link to="/ProductList">
                                <div className={styles.forgotAddCartlink}>
                                    <img src={emptycart}></img>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (<Table rowSelection={rowSelection} columns={columns} dataSource={DataWithoutIniT} />)
            }

        </div>
    );
};
export default CartTable;