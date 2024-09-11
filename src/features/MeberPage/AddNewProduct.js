import TextArea from 'antd/es/input/TextArea'
import styles from '../styles/Addnewproduct.module.css'
import React from 'react'
import { Col, Row,Switch  } from 'antd';
import { useState,useEffect } from 'react'


function AddNewProduct(props) {

    const [addproductdata, setAddProductData] = useState({status:false});
    const {openeditcom,setOpenEditCom,getsproducts,editinfo,seteEditInfo} =props;


    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        // console.log({ id, val });
        seteEditInfo({ ...editinfo, [id]: val });
    };

    const statusController = function(event){
        // const statusval = event.target.checked ? "1" : "0";  // 轉換為 "1" 或 "0"
        const statusval = event ? "1" : "0";
        seteEditInfo({ ...editinfo, status: statusval });
    }
 

    const addproduct = function(){
        console.log('addproduct',editinfo);
        
        let urlstring =''

        if(!editinfo.status){
            seteEditInfo({ ...editinfo, status: false });
        }

        if(openeditcom === 'add'){
            urlstring= 'addproducs';
        }else if(openeditcom === 'edit'){
            urlstring= 'editproducs';
        }

        fetch(`http://localhost:3500/admin2/${urlstring}`, {
            method: 'POST',
            body: JSON.stringify(editinfo),
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then((r) => r.json())
            .then((result) => {
                console.log(result);
    
                if(result.success === true){
                    console.log('result.success',result.success);
                    setOpenEditCom('');
                    getsproducts();
                    
    
                }else{
                    console.log('err',result);
                }
            });

    } 

    return (
        <div className={styles.addnewproduct}>

            <h2 className={styles.addnewtitle}>上架資料</h2>
            
            {/* <p>{openeditcom}</p>
            <p>{editinfo.name}</p> */}
            <Row >
                <Col span={8}>
                    <label>
                        <span className={styles.formtitle}>品名</span>
                        <input onChange={changeFields} id="name" value={editinfo.name} className={styles.inputstyles}></input>
                    </label>
                </Col>
                <Col span={8}>
                    <label>
                        <span className={styles.formtitle}>分類</span>
                        <input onChange={changeFields} id="type" value={editinfo.type} className={styles.inputstyles}></input>
                    </label>
                </Col>
                <Col span={8}>

                    <label>
                    <span className={styles.formtitle}>價格</span>
                    <input onChange={changeFields} id="price" value={editinfo.price} className={styles.inputstyles} type="number"></input>
                    </label>

                </Col>
            </Row>
            <Row className={styles.rowsstyles}>
                <Col span={8}>
                    <label>
                    <span className={styles.formtitle}>圖片</span>
                    <input onChange={changeFields} id="pic" value={Boolean(editinfo.status*1)} className={styles.inputstyles}></input>
                    </label>
                    
                </Col>
                <Col span={8}>
                    <label>
                    <span className={styles.formtitle}>狀態</span>
                
                    <Switch checked={editinfo.status === "1"} onChange={statusController}
                            id="status" checkedChildren="上架" unCheckedChildren="下架"></Switch>
                
                    </label>
                </Col>
            </Row>
            <Row>
                <Col span={24}>    
                    <span className={styles.formtitle}>描述</span>
                    <textarea className={styles.des} onChange={changeFields} id="description" value={editinfo.description} className={styles.textareastyles}></textarea>
                </Col>
            </Row>
            <div  className={styles.addsec}><button onClick={addproduct} className={styles.sumitbtn}>送出</button></div>
        </div>
    )
}

export default AddNewProduct