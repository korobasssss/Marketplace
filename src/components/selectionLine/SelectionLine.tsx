import search_icon from '../../assets/search_icon.svg'
import cart_icon from '../../assets/cart_icon.svg'
import close_icon from '../../assets/close_icon.svg'
import select_css from './SelectionLine.module.css'
import {useState} from "react";
import Cart from "../cart/Cart";
const SelectionLine = () => {
    const [isSearchButtonPressed, setSearchButtonPressed] = useState(false)
    const [isCartButtonPressed, setCartButtonPressed] = useState(false)

    return (
        <div className={select_css.root}>
            <section className={select_css.header}>
                <section className={select_css.searchOrCategory}>
                    <button className={isSearchButtonPressed ?
                        select_css.searchButton + ' ' + select_css.searchButtonWhenSearch :
                        select_css.searchButton} onClick={() => setSearchButtonPressed(true)}>
                        <img src={search_icon} alt={'search icon'}/>
                    </button>
                    {isSearchButtonPressed ?
                        <section className={select_css.search}>
                            <input placeholder={'Search...'}/>
                            <button><img src={close_icon} alt={'close icon'} onClick={() => setSearchButtonPressed(false)}/></button>
                        </section>
                        :
                        <section className={select_css.categories}>
                            <button className={select_css.oneCategory}>all</button>
                            <button className={select_css.oneCategory}>smartphones</button>
                            <button className={select_css.oneCategory}>laptops</button>
                            <button className={select_css.oneCategory}>fragrances</button>
                            <button className={select_css.oneCategory}>skincare</button>
                            <button className={select_css.oneCategory}>groceries</button>
                            <button className={select_css.oneCategory}>home-decoration</button>
                            <button className={select_css.oneCategory}>furniture</button>
                            <button className={select_css.oneCategory}>tops</button>
                            <button className={select_css.oneCategory}>womens-dresses</button>
                            <button className={select_css.oneCategory}>womens-shoes</button>
                            <button className={select_css.oneCategory}>mens-shirts</button>
                            <button className={select_css.oneCategory}>mens-shoes</button>
                            <button className={select_css.oneCategory}>mens-watches</button>
                            <button className={select_css.oneCategory}>womens-watches</button>
                            <button className={select_css.oneCategory}>womens-bags</button>
                            <button className={select_css.oneCategory}>womens-jewellery</button>
                            <button className={select_css.oneCategory}>sunglasses</button>
                            <button className={select_css.oneCategory}>automotive</button>
                            <button className={select_css.oneCategory}>motorcycle</button>
                            <button className={select_css.oneCategory}>lighting</button>
                        </section>
                    }

                </section>

                <button className={select_css.cart} onClick={() => setCartButtonPressed(true)}>
                    <img src={cart_icon} alt={'cart icon'}/>
                    <div className={select_css.cartText}>cart</div>
                </button>
                {isCartButtonPressed ?
                    <Cart isCartButtonPressed={isCartButtonPressed}
                          setCartButtonPressed={setCartButtonPressed}/>
                : null}
            </section>
        </div>
    )
}

export default SelectionLine