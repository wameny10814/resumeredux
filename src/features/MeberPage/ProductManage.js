import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart,plus,deduction } from '../counter/CartSlice'
import styles from '../styles/ProductManage.module.css'
import AddNewProduct from './AddNewProduct'
import { Col, Row } from 'antd';
import { Button, message, Popconfirm,Space } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function ProductManage() {

    const [productsdata, setProductData] = useState([]);
    const [openeditcom, setOpenEditCom] = useState('');
    const [editinfo, seteEditInfo] = useState({status:0});

    const getsproducts = function(){
        fetch('http://localhost:3500/admin2/getproducts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((r) => r.json())
        .then((result) => {
            console.log('res',result);

            if(result.success == true){
                setProductData(result.data);
                

            }else{
                console.log('err',result);
            }
        });

        
    }

    const openedit = function(item){
        setOpenEditCom('edit');
        seteEditInfo({...item});
    }
    const opeadd = function(){
        setOpenEditCom('add');
        //按下新增清空edit sate 讓子層input value為空
        seteEditInfo({
            status:false,
            name:'',
            price:'',
            description:'',
            type:''
        });
    }

    const deletetbn = function(sid){
        console.log('deletetbn',sid);
      
    }

    const confirm = (sid) => {
        console.log(sid);
        let data = {
            sid:sid
        }

        fetch('http://localhost:3500/admin2/deleteproducs', {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((r) => r.json())
            .then((result) => {
    
                if(result.success == true){
                    setOpenEditCom('');
                    getsproducts();
                    message.success('商品刪除完成');
                    
    
                }else{
                    console.log('err',result);
                }
            });
      };
 


    useEffect(() => {
        getsproducts();
    },[]);
    

    
    return (
    <div>
        <h2>商品管理</h2>
        <div>
            <Link to="/MemberCenter">
                <p >報表管理</p>
            </Link>
        </div>
        <div>
            <div>
                <Row>
                    <Col span={2} align="center"><h5>排序</h5></Col>
                    <Col span={6} align="center"><h5>品名</h5></Col>
                    <Col span={4} align="center"><h5>單價</h5></Col>
                    <Col span={4} align="center"><h5>分類</h5></Col>
                    <Col span={4} align="center"><h5>狀態</h5></Col>
                    <Col span={4} align="center"><h5>編輯</h5></Col>
                </Row>
                <div>
                    {productsdata.map((v,i) => {
                        return (

                        <Row key={i}>
                            <Col span={2} align="center" ><span>{v.sid}</span></Col>
                            <Col span={6} align="center"><span>{v.name}</span></Col>
                            <Col span={4} align="center"><span>{v.price}</span></Col>
                            <Col span={4} align="center"><span>{v.type}</span></Col>
                            <Col span={4} align="center"><span>{v.status}</span></Col>
                            <Col span={4} align="center">
                            <Space>
                            <Button onClick={()=>openedit(v)}>編輯</Button>
                                <Popconfirm
                                    title="刪除商品"
                                    description="確認要刪除此商品嗎?"
                                    onConfirm={()=>confirm(v.sid)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button danger>刪除</Button>
                                </Popconfirm>

                            </Space>
                               
                            </Col>
                        </Row>

                        )
                        
                    })}
                </div>
            </div>
        </div>
        <div>
            <button onClick={opeadd}>新增</button>
            <p>{openeditcom}</p>
        </div>
        {openeditcom === 'add' || openeditcom === 'edit'?(<AddNewProduct openeditcom={openeditcom} setOpenEditCom={setOpenEditCom} getsproducts={getsproducts} editinfo={editinfo} seteEditInfo={seteEditInfo}></AddNewProduct>):<></>}
    
        
    </div>
)
}

export default ProductManage