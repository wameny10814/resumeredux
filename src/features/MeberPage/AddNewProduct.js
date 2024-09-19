import TextArea from 'antd/es/input/TextArea'
import styles from '../styles/Addnewproduct.module.css'
import React from 'react'
import { Col, Row,Switch  } from 'antd';
import { useState,useEffect,useRef } from 'react'
import  sssssssssss  from '../imgs/whitespace.png';


function AddNewProduct(props) {

    const [addproductdata, setAddProductData] = useState({status:false});
    const [change, setChange] = useState(false);
    const [imagePreview, setImagePreview] = useState(sssssssssss
    ); // 用於存儲圖片預覽的 URL
    const {openeditcom,setOpenEditCom,getsproducts,editinfo,seteEditInfo} =props;

    const picDemoclick = useRef('');
    const changeFields = (event) => {
        const id = event.target.id;
        const val = event.target.value;
        // console.log({ id, val });
        seteEditInfo({ ...editinfo, [id]: val });
    };

    const {
        REACT_APP_FETCHORIGIN,
      } = process.env;

    const statusController = function(event){
        // const statusval = event.target.checked ? "1" : "0";  // 轉換為 "1" 或 "0"
        const statusval = event ? "1" : "0";
        seteEditInfo({ ...editinfo, status: statusval });
    }

    // 當用戶選擇文件時更新狀態
    const handleFileChange = (event) => {
        console.log('event',event.target.files[0].size);
        if (event.target.files[0].sizee > 10 * 1024 * 1024) { // 檢查文件大小是否超過 10MB
            alert('文件太大，請選擇小於 10MB 的文件');
            return;
        }
        seteEditInfo({ ...editinfo, pic: event.target.files[0] });

        //前端預覽圖片
        const file = event.target.files[0];
        // 使用 FileReader 讀取文件內容
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result); // 設置圖片預覽 URL
        };
        reader.readAsDataURL(file); // 讀取文件

    };

    // 提交圖片
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('handleSubmit');
        // if (!editinfo.pic) return;

    };

    const changenewpic = function (){
        console.log('changenewpic');
        setChange(true);
        picDemoclick.current.click();
    }


    const addproduct = async function(event){
        console.log('addproduct',editinfo);
        event.preventDefault();
        let urlstring =''
        
        if(!editinfo.status){
            seteEditInfo({ ...editinfo, status: false });
        }

        if(openeditcom === 'add'){
            urlstring= 'addproducs';
        }else if(openeditcom === 'edit'){
            urlstring= 'editproducs';
        }

    try {
        const response1 = await fetch(`${REACT_APP_FETCHORIGIN}/admin2/${urlstring}`, {
            method: 'POST',
            body: JSON.stringify(editinfo), 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result1 = await response1.json();
        // console.log('result1',result1);

        // 如果第一個 add API 請求成功 ，進行文件上傳
        // 如果 updated api 請求成功 && 用戶要換照片
        if (change == true && result1.type == 'edited' || result1.success && result1.type == 'added' ) {
            
            const formData = new FormData();
            formData.append('image', editinfo.pic);
            console.log('name',editinfo.pic);
            let sidforFormdata;
            if(result1.type == 'added'){
                sidforFormdata = result1.sid;
            }else if(result1.type == 'edited'){
                sidforFormdata =  editinfo.sid;
            }

            formData.append('sid', sidforFormdata);

            for (var pair of formData.entries()) {
                console.log(pair[0] + ", " + pair[1]);
            }
            // 打文件上傳 API
            const response2 = await fetch(`${REACT_APP_FETCHORIGIN}/admin2/upload`, {
                method: 'POST',
                body: formData, 
            });
            const result2 = await response2.json();
//             console.log('文件上傳結果:', result2);

            // 處理上傳成功的情況
            if (result2.success) {
                setOpenEditCom('');
                getsproducts();
                setChange(false);
            } else {
                console.log('文件上傳錯誤:', result2);
            }
        }else if(result1.success){
            setOpenEditCom('');
            getsproducts();
            setChange(false);

        }
    } catch (error) {
        console.error('錯誤:', error);
    }

    } 


    return (
        <div className={styles.addnewproduct}>

            <h2 className={styles.addnewtitle}>上架資料</h2>
            
            <p>{openeditcom}</p>
            <form onSubmit={handleSubmit}>
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
                        <input type="file" className={styles.fileoriginal} onChange={handleFileChange} ref={picDemoclick} />
                    </label>
                    <button
                    onClick={changenewpic}>上傳圖片</button><span>{editinfo.pic?.name}</span>
                    <div className={styles.imgsec}><img className={styles.imgpercent} src={imagePreview ? imagePreview : `https://resumebackendpay.onrender.com/uploads/${editinfo.pic}`}  /></div>
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
            </form>
        </div>
    )
}

export default AddNewProduct
