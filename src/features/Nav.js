import React from 'react'
import styles from './styles/Nav.module.css';
import heart from '../features/imgs/heart.svg'
import { useSelector, useDispatch } from 'react-redux'


function Nav() {
    const cartTotal = useSelector(state => state.cartTotal.value)
    return (
        <div className={ styles.nav }>
            <div>LOGO</div>
            <div className={ styles.navList }>
                <div className={ styles.navListItem }>購物車</div>
                <div>
                   <div>
                       <img src={heart}></img>
                   </div>
                    <p>{cartTotal}</p>
                </div>
                <div className={ styles.navListItem }>商品一覽</div>
            </div>
        </div>
    )
}

export default Nav
