import React from 'react'
import { useState, useContext, useRef,useEffect } from 'react';
import { Bar,Line,Doughnut,Bubble,Radar   } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Col, Divider, Row,Pagination } from 'antd';
import styles from '../styles/MemberCenter.module.css';

function MerberCenter() {
//for 初始畫面商品select option 的data
const [productsdata, setProductData] = useState([]);
const [selecteditem, setSelectedItem] = useState('');

let Color = ['#ADD8E6','#ecdfc8','#90be6d','#8ba8cb','#f9844a','#f9c74f','#d79771','#94C4EF','#43aa8b','#A8EBE9','#DCB1B2','#fc9f5b','#add8e6','#C0504D','#95e45a','#9d6fa9','#437d8f','#c77775','#d3b1dc','#d3b1dc','#2FC5F2','#FF7A77','#8DA979','#D973F3','#7175D7','#5AE478','#D0E200','#FFB7B5'];

const {
  REACT_APP_FETCHORIGIN,
} = process.env;

//處理初始畫面畫圖的時間區間

const [drawingdata, setDrawingData] = useState({
  startdate:'2024-01-01',
  enddate:'2024-01-01'
});

//畫bar的chatjs 設定
const [bardata,setBarData]=useState({

  labels: ["A", "B", "C", "D", "E","D", "E"],
  datasets: [
    {
      label: "label1",
      backgroundColor: Color,
      hoverBackgroundColor: "rgba(154,178,96,1)",
      //各品項數量，要對齊labels
      data: [510, 615, 1215, 1481, 1055,500,-1100],
    }]

})

const [linerdata,setLinerData]=useState({

  labels: ["A", "B", "C", "D", "E","D", "E"],
  datasets: [
    {
      label: "單品項銷售量",
      backgroundColor: Color,
      hoverBackgroundColor: "rgba(154,178,96,1)",
      //各品項數量，要對齊labels
      data: [510, 615, 1215, 1481, 1055,500,-1100],
    }]

})
const [generdata,setGenderData]=useState({

  labels: ["F", "M"],
  datasets: [
    {
      label: "銷售客群性別比",
      backgroundColor: Color,
      hoverBackgroundColor: "rgba(154,178,96,1)",
      //各品項數量，要對齊labels
      data: [510, 615, 1215, 1481, 1055,500,-1100],
    }]

})

const [agedata,setAgeData]=useState({

  labels: [],
  datasets: [
    {
      label: "銷售客群期間購買年齡比",
      backgroundColor: Color,
      hoverBackgroundColor: "rgba(154,178,96,1)",
      //各品項數量，要對齊labels
      data: [510, 615, 1215, 1481, 1055,500,-1100],
    }]

})

const [sectiondata,setSectionData]=useState({

  labels: [],
  datasets: [
    {
      label: "期間區域銷售數量趨勢圖",
      backgroundColor: Color,
      hoverBackgroundColor: "rgba(154,178,96,1)",
      //各品項數量，要對齊labels
      data: [510, 615, 1215, 1481, 1055,500,-1100],
    }]

});





const changeFields = (event) => {
  const id = event.target.id;
  const val = event.target.value;
  // console.log({ id, val });
  setDrawingData({ ...drawingdata, [id]: val });
  };
//拿初始畫面商品select option 的function
const getproductlist = function(){
    fetch(`${REACT_APP_FETCHORIGIN}/admin2/findproducttyps`, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      },
  })
  .then((r) => r.json())
  .then((result) => {
      console.log(result);
      if(result.success == true){
      setProductData(result.data);
    

      const today = new Date();
      let thismonth = today.getMonth()*1+1;
      let thisdate = today.getDate();
      if(thismonth<10){
        thismonth = `0${thismonth}`
      }
      if(thisdate<10){
        thisdate = `0${thisdate}`
      }
      
      const todayformatted = `${today.getFullYear()}-${thismonth}-${thisdate}`
      const firstdayofthisyear = `${today.getFullYear()}-01-01`;
  
      setDrawingData((prevState) => ({
        ...prevState,
        selectedproduct: result.data[0].name,
        startdate: firstdayofthisyear,
        enddate: todayformatted,
      }));

      drawreport();
      }else{
          console.log('err');
      }
  });
}

  //line 圖資料結構


const drawreport = function(){


  if(!drawingdata.startdate || !drawingdata.enddate ){
    alert('請選擇時間區間')
  }
  fetch(`${REACT_APP_FETCHORIGIN}/admin2/filter`, {
    method: 'POST',
    body: JSON.stringify(drawingdata),
    headers: {
    'Content-Type': 'application/json',
    },
  })
  .then((r) => r.json())
  .then((result) => {
      console.log('result',result);
      if(result.success == true){
        setSelectedItem(result.selecteditem);
      setBarData({

        labels: result.barData.labels,
        datasets: [
          {
            label: "期間各項銷售量",
            backgroundColor: Color,
            hoverBackgroundColor: "rgba(154,178,96,1)",
            //各品項數量，要對齊labels
            data: result.barData.data,
          }]

      });

      

      setLinerData({

        labels: result.linerData.labels,
        datasets: [
          {
            label: "單品項銷售量",
            backgroundColor: Color,
            hoverBackgroundColor: "rgba(154,178,96,1)",
            //各品項數量，要對齊labels
            data: result.linerData.data,

          }]

      });

      setAgeData({

        labels: result.agesData.labels,
        datasets: [
          {
            label: "期間購買年齡比",
            backgroundColor: Color,
            hoverBackgroundColor: "rgba(154,178,96,1)",
            //各品項數量，要對齊labels
            data: result.agesData.data,
          }]

      });

      setSectionData({

        labels: result.sectionsData.labels,
        datasets: [
          {
            label: "期間區域銷售數量趨勢圖",
            backgroundColor: Color,
            hoverBackgroundColor: "rgba(154,178,96,1)",
            //各品項數量，要對齊labels
            data: result.sectionsData.data,
          }]
      });

      setGenderData({

        labels: result.genderData.labels,
        datasets: [
          {
            label: "性別比",
            backgroundColor: Color,
            hoverBackgroundColor: "rgba(154,178,96,1)",
            //各品項數量，要對齊labels
            data: result.genderData.data,
          }]



      });
      
      }else{
          console.log('err');
      }
  });
}



useEffect(() => {
  getproductlist();
},[]);

//setstate 是非同步，為了初始進入畫面可以抓到drawingdata的資料，故監聽drawingdata有資料的時候再開始畫圖
useEffect(() => {
  if (drawingdata.selectedproduct) {
    drawreport();
  }
}, [drawingdata]);
  

  return (
    <div className={styles.membercenter}>
        <div className={styles.flexs}>
          <h2>Peaceful Donut 後台 - 報表數據</h2>
          <div>
              <Link to="/ProductMange">
                <button className={styles.linkbtn}>商品管理</button>
              </Link>
          </div>
        </div>
        <div className={styles.searchingbar}>
          <label className={styles.lablesstyles}>
            時間一
            <input type="date"  className={styles.inputstyles}  onChange={changeFields} id="startdate" value={drawingdata.startdate}></input>
          </label>
          <label className={styles.lablesstyles}>
            時間二
            <input type="date" className={styles.inputstyles}  onChange={changeFields} id="enddate" value={drawingdata.enddate}></input>
          </label>
          <label className={styles.lablesstyles}>
            篩選品項
            <select name="pets" id="selectedproduct"   onChange={changeFields} className={styles.selectstyles}>
            <option disabled>請選擇商品</option>
            {productsdata.map((v, i) => {
                    return (
                      <option value={v.name} key={i}>{v.name}</option>
                    )
                })
            }
            </select>
          </label>

        </div>
        
        <div>
          <p className={styles.charttitles}>期間各項銷售量</p>
          <Bar type='bar'   data={bardata} />
        </div>
        <Row className={styles.rowsmid}>
            <Col span={7}> <p className={styles.charttitles}>{selecteditem}銷售圓餅圖</p><Doughnut  type='Doughnut'  data={linerdata} /></Col>
            
            <Col span={15} offset={2}><p className={styles.charttitles}>期間區域銷售數量趨勢圖</p><Line  type='line'  data={sectiondata}></Line></Col>
            
        </Row>

        <Row>
        
          <Col span={7}><p className={styles.charttitles}>期間購買男女比</p><Doughnut type='Doughnut'  data={generdata}></Doughnut></Col>
       
          <Col span={15} offset={2}><p className={styles.charttitles}>期間購買年齡比</p><Bar type='Bar'  data={agedata}></Bar></Col>
        </Row>

        
    </div>
  )
}

export default MerberCenter