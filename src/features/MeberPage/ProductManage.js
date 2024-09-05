import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart,plus,deduction } from '../counter/CartSlice'
import styles from '../styles/ProductManage.module.css'
import AddNewProduct from './AddNewProduct'
import { Col, Row } from 'antd'



function ProductManage() {

    const [productsdata, setProductData] = useState([]);
    const [openeditcom, setOpenEditCom] = useState('');
    const [editinfo, seteEditInfo] = useState({status:false});

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
        console.log('openedit',item);
        setOpenEditCom('edit');
        seteEditInfo(item);

        
    }
    const opeadd = function(){
        console.log('add');
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


    useEffect(() => {
        getsproducts();
    },[]);
    

    
    return (
    <div>
        <h2>商品管理</h2>
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
                            <Col span={2} align="center"><span>{v.sid}</span></Col>
                            <Col span={6} align="center"><span>{v.name}</span></Col>
                            <Col span={4} align="center"><span>{v.price}</span></Col>
                            <Col span={4} align="center"><span>{v.type}</span></Col>
                            <Col span={4} align="center"><span>{v.status}</span></Col>
                            <Col span={4} align="center">
                                <button onClick={()=>openedit(v)}>編輯</button>
                                <button>刪除</button>
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