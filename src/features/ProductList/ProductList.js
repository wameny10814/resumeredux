import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCart,plus,deduction } from '../counter/CartSlice'
import { useNavigate } from 'react-router-dom';


import Nav from '../Nav';
import banner from '../imgs/banner.png';
import styles from '../styles/ProductList.module.css'
import { useState,useEffect } from 'react';

import { Col, Divider, Row,Pagination } from 'antd';

function ProductList() {
    //useSelector 取值;useDispatch設定值
    const count = useSelector(state => state.counter.value)
    const Data = useSelector(state => state.cartTotal.value)
    
    let FakeData = [
        {
            "name": "原味波堤",
            "price": 35,
            "id": "1",
            "src": '',
            "description": "經典原味甜甜圈，鬆軟香甜，帶有一絲淡淡的奶香味，是任何時間都能享用的安心美味。"
        },
        {
            "name": "豆漿波堤",
            "price": 40,
            "id": "2",
            "src": '',
            "description": "將豆漿的天然風味融入柔軟的波堤中，健康與美味並存，讓人每一口都回味無窮。"
        },
        {
            "name": "草莓波堤",
            "price": 40,
            "id": "3",
            "src": 'strawberry',
            "description": "酸甜的草莓醬，覆蓋在鬆軟的波堤上，色澤鮮豔，口感清新，每一口都充滿草莓的香氣。"
        },
        {
            "name": "焦糖巧克力波堤",
            "price": 50,
            "id": "4",
            "src": 'chocolate',
            "description": "濃郁的巧克力結合酥脆的焦糖層，甜蜜與苦甜交織，帶來無法抵擋的多層次口感。"
        },
        {
            "name": "宇治抹茶波堤",
            "price": 45,
            "id": "5",
            "src": 'mocha',
            "description": "選用宇治抹茶粉製作，抹茶的濃郁與波堤的柔軟完美結合，口感清新，餘韻悠長。"
        },
        {
            "name": "白巧克力波堤",
            "price": 45,
            "id": "6",
            "src": 'whitechoco',
            "description": "北海道鮮奶油與濃郁白巧克力相結合，香甜細膩，入口即化，帶來絕對的甜蜜享受。"
        },
        {
            "name": "藍莓波堤",
            "price": 42,
            "id": "7",
            "src": 'chocolate',
            "description": "酸甜藍莓果醬完美覆蓋波堤，口感濃郁，果香四溢，讓人每一口都感受到滿滿的果實風味。"
        },
        {
            "name": "椰子波堤",
            "price": 40,
            "id": "8",
            "src": 'chocolate',
            "description": "椰子絲覆蓋在波堤上，濃郁的椰香與鬆軟的口感結合，帶來充滿熱帶風情的美味享受。"
        },
        {
            "name": "檸檬波堤",
            "price": 38,
            "id": "9",
            "src": 'chocolate',
            "description": "清新檸檬風味的甜甜圈，酸甜適中，令人感受到夏日的清爽，為口味帶來一絲新鮮的活力。"
        },
        {
            "name": "咖啡波堤",
            "price": 50,
            "id": "10",
            "src": 'chocolate',
            "description": "濃郁的咖啡風味與波堤的甜美完美融合，為咖啡愛好者量身打造的經典甜點。"
        },
        {
            "name": "蜂蜜波堤",
            "price": 35,
            "id": "11",
            "src": 'chocolate',
            "description": "天然蜂蜜覆蓋的波堤，甜而不膩，香甜適中，讓人感受到大自然的純粹與美味。"
        },
        {
            "name": "抹茶紅豆波堤",
            "price": 48,
            "id": "12",
            "src": 'chocolate',
            "description": "宇治抹茶與日式紅豆的完美搭配，帶來獨特的東方風味，每一口都充滿濃厚的和風情懷。"
        },
        {
            "name": "花生波堤",
            "price": 42,
            "id": "13",
            "src": 'chocolate',
            "description": "香濃的花生醬覆蓋波堤，脆脆的花生顆粒增添口感，每一口都是濃郁的花生風味。"
        },
        {
            "name": "楓糖波堤",
            "price": 45,
            "id": "14",
            "src": 'chocolate',
            "description": "楓糖醬的濃郁甜香，與鬆軟波堤的口感相得益彰，帶來加拿大風情的美味享受。"
        },
        {
            "name": "香蕉巧克力波堤",
            "price": 50,
            "id": "15",
            "src": 'chocolate',
            "description": "香甜的香蕉片與濃郁巧克力結合，打造出絕妙的味覺體驗，讓人每一口都充滿驚喜。"
        },
        {
            "name": "牛奶波堤",
            "price": 38,
            "id": "16",
            "src": 'chocolate',
            "description": "濃醇的牛奶風味融入波堤，細膩的口感與甜蜜的滋味，適合全家人一起享用。"
        },
        {
            "name": "紅豆波堤",
            "price": 40,
            "id": "17",
            "src": 'chocolate',
            "description": "日式紅豆內餡與波堤的結合，甜而不膩，柔軟的口感中帶有濃郁的豆香。"
        },
        {
            "name": "芒果波堤",
            "price": 45,
            "id": "18",
            "src": 'chocolate',
            "description": "新鮮芒果果肉與波堤的結合，清甜多汁，讓人每一口都能感受到夏日的熱情與甜美。"
        },
        {
            "name": "楓糖核桃波堤",
            "price": 50,
            "id": "19",
            "src": 'chocolate',
            "description": "香脆的核桃顆粒與甜美的楓糖完美結合，帶來層次豐富的口感和濃郁的風味享受。"
        },
        {
            "name": "芝麻波堤",
            "price": 40,
            "id": "20",
            "src": 'chocolate',
            "description": "滿滿的芝麻香氣，與酥脆的波堤相得益彰，營養豐富，口感獨特，讓人愛不釋口。"
        }
    ];

    const [scrollTop,setScrollerTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            setScrollerTop(scrollTop / 100);
            console.log('scrollTop',scrollTop/100 + '%');
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // 清理事件監聽器
        }
    }, [])

    const changeclassname = function(){
        if(scrollTop ===0){
            return styles.classshow0

        }else if(scrollTop >0){
            
            return styles.classshowup
        
        }
    }

    const {
        REACT_APP_FETCHORIGIN,
      } = process.env;

    let facktwo = [];

    const navigate= useNavigate();
    

    const goToDetail = (id)=>{
        navigate(`${id}`);
    }

    const [currentpage, setCurrentPage] = useState(1);
    const [productsdata, setProductData] = useState([]);


    const dispatch = useDispatch()

    const getcurrentproductlist = function(page){

        // console.log('Current page:', page);

        setCurrentPage(page);

        const apidata = {currentpage:page}

    

    fetch(`${REACT_APP_FETCHORIGIN}/admin2/getproductlist`, {
        method: 'POST',
        body: JSON.stringify(apidata),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((r) => r.json())
        .then((result) => {
          console.log(result);
          setProductData(result.data);
          facktwo = result.data;
        });
    
    }

    useEffect(() => {
        getcurrentproductlist(1);
      },[]);



    return (
        <>

            <div className={changeclassname()}>
                <Nav ></Nav>
            </div>
            <div className={styles.ProductListSec}>

                <div className={styles.bannerSec}>
                    <img className={styles.bannerimg} src={banner}></img>
                </div>

                <Row gutter={[0, 24]}>
                    {productsdata.map((v, i) => {
                        return (

                        <Col span={8} key={v.sid}>
                            <div  className={styles.ProducSec}>
                                <div className={styles.ProductimgSec} onClick={() => goToDetail(v.sid)}>
                                    <img src={`${REACT_APP_FETCHORIGIN}/uploads/${v.pic}`} alt={`uploaded-${i}`} className={styles.Productimg}></img>
                                </div>
                                <div className={styles.ProducDetail}>
                                    <p>品項: {v.name}</p>
                                    <p>價格: {v.price}</p>
                                </div>
                                <div style={{textAlign:'center'}}>
                                    <button className={styles.addtoCart} onClick={() => dispatch(addCart({
                                        name: v.name,
                                        price: v.price,
                                        id: v.sid,
                                        key:Data[Data.length - 1].id * 1 + 5,
                                        quantity: 1,
                                        total: v.price*1,
                                    }))}>加入購物車</button>
                                </div>
                            </div>
                        </Col>

                        )
                    })
                    }
                </Row>

                <div className={styles.paginationsec}>
                    <Pagination  defaultCurrent={1} total={FakeData.length} onChange={getcurrentproductlist} />
                </div>

            </div>

        </>
    )
}

export default ProductList
