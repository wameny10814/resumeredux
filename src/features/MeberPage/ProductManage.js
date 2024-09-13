import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart,plus,deduction } from '../counter/CartSlice'
import styles from '../styles/ProductManage.module.css'
import AddNewProduct from './AddNewProduct'
import { Col, Row } from 'antd';
import { Button, message, Popconfirm,Space ,Switch} from 'antd';
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
        if(openeditcom == 'add' || openeditcom == 'edit'){
            setOpenEditCom('');

        }else{
            

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

    }

    const deletetbn = function(sid){
        console.log('deletetbn',sid);
    }

    const confirm = (sid) => {
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
       <div className={styles.flexs}>
        <h2>Peaceful Donut 後台 -  商品管理</h2>
            <div>
                <Link to="/MemberCenter">
                    <button className={styles.linkbtn} >報表管理</button>
                </Link>
            </div>

       </div>

       <div className={styles.productform}>

       <div>
            <div className={styles.preducttable}>
                <Row>
                    <Col span={2} align="center"><h5 className={styles.tabletiles}>排序</h5></Col>
                    <Col span={4} align="center"><h5 className={styles.tabletiles}>品名</h5></Col>
                    <Col span={2} align="center"><h5 className={styles.tabletiles}>圖片</h5></Col>
                    <Col span={4} align="center"><h5 className={styles.tabletiles}>單價</h5></Col>
                    <Col span={4} align="center"><h5 className={styles.tabletiles}>分類</h5></Col>
                    <Col span={4} align="center"><h5 className={styles.tabletiles}>狀態</h5></Col>
                    <Col span={4} align="center"><h5 className={styles.tabletiles}>編輯</h5></Col>
                </Row>
                <div>
                    {productsdata.map((v,i) => {
                        return (

                        <Row key={i} className={styles.productitems}>
                            <Col span={2} align="center" ><span>{v.sid}</span></Col>
                            <Col span={4} align="center"><div className={styles.imgsec}><img className={styles.imgpercent} src={`http://localhost:3500/uploads/${v.pic}`} alt={`uploaded-${i}`} /></div></Col>
                            <Col span={2} align="center"><span>{v.name}</span></Col>
                           
                            <Col span={4} align="center"><span>{v.price}</span></Col>
                            <Col span={4} align="center"><span>{v.type}</span></Col>
                            <Col span={4} align="center"><Switch disabled checkedChildren="已上架" unCheckedChildren="下架中" checked={v.status === "1"}>{v.status}</Switch></Col>
                            <Col span={4} align="center">
                            <Space>
                            <Button type="primary" onClick={()=>openedit(v)}>編輯</Button>
                                <Popconfirm
                                    title="刪除商品"
                                    description="確認要刪除此商品嗎?"
                                    onConfirm={()=>confirm(v.sid)}
                                    okText="Yes"
                                    cancelText="No"
                                >
                                    <Button danger type="primary">刪除</Button>
                                </Popconfirm>

                            </Space>
                            </Col>
                        </Row>

                        )
                        
                    })}
                </div>
            </div>
        </div>
        <div className={styles.addsec}>
            <button onClick={opeadd} className={styles.addnewone}>新增商品</button>
        </div>
        {openeditcom === 'add' || openeditcom === 'edit'?(<AddNewProduct openeditcom={openeditcom} setOpenEditCom={setOpenEditCom} getsproducts={getsproducts} editinfo={editinfo} seteEditInfo={seteEditInfo}></AddNewProduct>):<></>}

       </div>
       
      
    
        
    </div>
)
}

export default ProductManage