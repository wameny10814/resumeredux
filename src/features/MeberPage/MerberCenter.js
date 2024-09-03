import React from 'react'
import { useState, useContext, useRef,useEffect } from 'react';
import { Bar,Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

function MerberCenter() {

  const [productsdata, setProductData] = useState([]);

  const getproductlist = function(){
    console.log('getproductlist');


      fetch('http://localhost:3500/admin2/findproducttyps', {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then((r) => r.json())
    .then((result) => {
        console.log(result);
        if(result.success == true){

        console.log('result',result.data);

        setProductData(result.data);
        

            

        }else{
            console.log('err');
        }
    });
  }

  
  useEffect(() => {
    getproductlist();
  },[]);
  //bar 圖資料結構
  const chartData ={
    //水平軸，商品類別
    labels: ["A", "B", "C", "D", "E","D", "E"],
    datasets: [
      {
        label: "label1",
        backgroundColor: "rgba(154,178,96,0.5)",
        hoverBackgroundColor: "rgba(154,178,96,1)",
        data: [510, 615, 1215, 1481, 1055,500,-1100],
      }]
  }

    //line 圖資料結構
  const linerData ={
    labels: ["A", "B", "C", "D", "E","D", "E"],
    datasets: [
      {
        label: "label1",
        backgroundColor: "rgba(154,178,96,0.5)",
        hoverBackgroundColor: "rgba(154,178,96,1)",
        //各品項數量，要對齊labels
        data: [510, 615, 1215, 1481, 1055,500,-1100],
      }]
  }
  


  
  return (
    <div>
        <h2>Peaceful Donut 後台</h2>
        <h2>報表數據</h2>
        <label>
          時間一
          <input type="date"></input>
        </label>
        <label>
          時間二
          <input type="date"></input>
        </label>
        <label>
          篩選品項
          <select name="pets" id="product-select">
          {productsdata.map((v, i) => {
                  return (
                    <option value={v.name}>{v.name}</option>
                  )
              })
          }
          </select>
        </label>

        <div>
          <Bar type='bar'   data={chartData} />
        </div>
        <div>
          <Line type='line'  data={linerData} />
        </div>
        
    </div>
  )
}

export default MerberCenter