import {CartInterface} from "../interface/cartInterface";
import cart_css from './Cart.module.css'
import cart_icon from "../../assets/cart_icon.svg";
import close_icon from "../../assets/close_icon.svg";
import OneSelectedProduct from "./oneSelectedProduct/OneSelectedProduct";

const Cart = (props: CartInterface) => {
    return (
        <div className={props.isCartButtonPressed ? '' : cart_css.close}>
            <div className={cart_css.route}>
                <section className={cart_css.overflay} onClick={() => props.setCartButtonPressed(false)}></section>
                <section className={cart_css.cartPlace}>
                    <section className={cart_css.cartMain}>
                        <header className={cart_css.header}>
                            <section className={cart_css.cart}>
                                <img src={cart_icon} alt={'cart icon'}/>
                                <div className={cart_css.cartText}>cart</div>
                            </section>
                            <button className={cart_css.cancel}><img src={close_icon} alt={'close icon'}
                                                                     onClick={() => props.setCartButtonPressed(false)}/>
                            </button>
                        </header>
                        <section className={cart_css.selectedProducts}>
                            <OneSelectedProduct/>
                            <OneSelectedProduct/>
                            <OneSelectedProduct/>
                            <OneSelectedProduct/>
                            <OneSelectedProduct/>
                        </section>
                        <footer className={cart_css.cartFooter}>
                            <section className={cart_css.prise}>
                                <div className={cart_css.productsCount}>4 position</div>
                                <div className={cart_css.productsFinalPrise}>$2196</div>
                            </section>
                            <button className={cart_css.buttonBack} onClick={() => props.setCartButtonPressed(false)}>
                                back to products
                            </button>
                            {/*<button className={cart_css.buttonBack}>*/}
                            {/*    place an order*/}
                            {/*</button>*/}
                        </footer>
                    </section>
                </section>
            </div>
        </div>


    )
}

export default Cart