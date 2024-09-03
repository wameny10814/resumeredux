import React from 'react'
import { useParams  } from "react-router-dom"
import whitechoco from '../imgs/whitechoco.png'
import styles from '../styles/ProductDetail.module.css'
import { addCart,plus,deduction } from '../counter/CartSlice'

import { useSelector, useDispatch } from 'react-redux'

function ProductDetail() {
    let params = useParams()
    // console.log('params',params.productId);

    const Data = useSelector(state => state.cartTotal.value);
    console.log('Data',Data);

    const dispatch = useDispatch()


    const joinToCart = ()=>{
        console.log('joinToCart');
    }

 
  return (
    <>
        <div>
            <div>
                <div className={styles.bannerSec}>
                    <img className={styles.bannerimg} src={whitechoco}></img>
                </div>
                <div>
                    <h3 id="name">Product name</h3>
                    <h5 id="price">NT 100</h5>
                    <div>
                        <button >+</button>
                        <span>1</span>
                        <button 
                        >-</button>
                    </div>

                    <div>
                        <h5>內容描述</h5>
                        <span> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infan</span>
                    </div>
                    <div onClick={()=>joinToCart()}>加入購物車</div>
                </div>
            </div>
        </div>
    </>
    

  )
}

export default ProductDetail