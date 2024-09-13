import React from 'react'
import { useParams  } from "react-router-dom"
import { useState,useEffect } from 'react'
import styles from '../styles/ProductDetail.module.css'
import { addCart,plus,deduction } from '../counter/CartSlice'

import { useSelector, useDispatch } from 'react-redux'

function ProductDetail() {
    let params = useParams()
   
    const Data = useSelector(state => state.cartTotal.value);
    // console.log('Data',Data);

    const dispatch = useDispatch();
    const [productsdata, setProductData] = useState([]);
    const [counting, setCounting] = useState(1);



    const joinToCart = () => {
        console.log('joinToCart');
    
        dispatch(
            addCart({
            name: productsdata[0].name,
            price: productsdata[0].price,
            id: params.productId,
            key: params.productId * 1 + 5,
            quantity: counting,
            total: counting * productsdata[0].price,
            })
        );
        };

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


    const Increase = function(){
        setCounting(counting+1);
    }

    const Decrease =function(){
        setCounting(counting-1);
    }

    useEffect(() => {
        getdetaildata();
    },[]);


  return (
    <>
    {productsdata.length==1?( 
        <div>
            <div className={styles.Productdetail}>
                <div className={styles.bannerSec}>
                    <img className={styles.bannerimg} src={`http://localhost:3500/uploads/${productsdata[0].pic}`} alt={`uploaded-${productsdata[0].pic}`}></img>
                </div>
                <div className={styles.detailflexs}>
                    <h3 id="name" className={styles.name}>{productsdata[0].name}</h3>
                    <h5 id="price" className={styles.price}> NT {productsdata[0].price}</h5>
                    <div className={styles.buttons}>
                        <button onClick={Increase} className={styles.countingBTN}>+</button>
                        <span className={styles.countingState}>{counting}</span>
                        
                        <button disabled={counting*1  <= 1}  onClick={Decrease} className={styles.countingBTN}>-</button>
                        
                    </div>

                    <div>
                        <h5 className={styles.des}>內容描述</h5>
                        <span>{productsdata[0].description}</span>
                    </div>
                    <div className={styles.addtocartsec}><button onClick={()=>joinToCart()} className={styles.addtocart}>加入購物車</button></div>
                </div>
            </div>
        </div>
        ):(<div></div>)}
       
    </>
    

  )
}

export default ProductDetail