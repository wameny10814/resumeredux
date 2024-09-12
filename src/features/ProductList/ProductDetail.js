import React from 'react'
import { useParams  } from "react-router-dom"
import { useState,useEffect } from 'react'
import whitechoco from '../imgs/whitechoco.png'
import styles from '../styles/ProductDetail.module.css'
import { addCart,plus,deduction } from '../counter/CartSlice'

import { useSelector, useDispatch } from 'react-redux'

function ProductDetail() {
    let params = useParams()
   
    const Data = useSelector(state => state.cartTotal.value);
    // console.log('Data',Data);

    const dispatch = useDispatch();
    const [productsdata, setProductData] = useState([]);


    const joinToCart = ()=>{
        console.log('joinToCart');
    }

    const getdetaildata = function(){
    
        console.log('getdetaildata',params.productId);

        fetch(`http://localhost:3500/admin2/getproductdetail/${params.productId}`, {
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

    useEffect(() => {
        getdetaildata();
    },[]);


  return (
    <>
    {productsdata.length==1?( <div>
            <div>
                <div className={styles.bannerSec}>
                    <img className={styles.bannerimg} src={`http://localhost:3500/uploads/${productsdata[0].pic}`} alt={`uploaded-${productsdata[0].pic}`}></img>
                </div>
                <div>
                    <h3 id="name">{productsdata[0].name}</h3>
                    <h5 id="price">NT {productsdata[0].price}</h5>
                    <div>
                        <button >+</button>
                        <span>1</span>
                        <button 
                        >-</button>
                    </div>

                    <div>
                        <h5>內容描述</h5>
                        <span>{productsdata[0].description}</span>
                    </div>
                    <div onClick={()=>joinToCart()}>加入購物車</div>
                </div>
            </div>
        </div>):(<div>123</div>)}
       
    </>
    

  )
}

export default ProductDetail