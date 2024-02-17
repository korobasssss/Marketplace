import cart_css from './Cart.module.css'
import cart_icon from "../../assets/cart_icon.svg";
import close_icon from "../../assets/close_icon.svg";
import {CartProps} from "../../interface/cartInterface";
import {OneProductCartInterface} from "../../interface/oneSelectedProductInterface";
import OneSelectedProductClass from "./oneSelectedProduct/OneSelectedProductClass";

const Cart = (props: CartProps) => {
    return (
        <div className={props.isCartButtonPressed ? '' : cart_css.close}>
            <div className={cart_css.route}>
                <section className={cart_css.overflay} onClick={() => props.setCartButtonPressed(false)}></section>
                <section className={cart_css.cartPlace}>
                    <section className={cart_css.cartMain}>
                        <header className={cart_css.header}>
                            <section className={cart_css.cart}>
                                <img src={cart_icon} alt={'cart icon'}/>
                                cart
                            </section>
                            <button className={cart_css.cancel}><img src={close_icon} alt={'close icon'}
                                                                     onClick={() => props.setCartButtonPressed(false)}/>
                            </button>
                        </header>
                        <section className={cart_css.selectedProducts}>
                            {props.cartProducts.length === 0 ?
                                <div className={cart_css.emptyCart}>cart is empty :(</div>
                                :
                                props.cartProducts.map((oneProduct : OneProductCartInterface, index) => {
                                return <OneSelectedProductClass key={index} addOneCountProductToCart={props.addOneCountProductToCart}
                                                                            deleteOneCountProductFromCart={props.deleteOneCountProductFromCart}
                                                                            deleteOneProductFromCart={props.deleteOneProductFromCart}
                                                                            oneProduct={oneProduct}/>
                            })}
                        </section>
                        <footer className={cart_css.cartFooter}>
                            <section className={cart_css.prise}>
                                <div className={cart_css.productsCount}>{props.count} position</div>
                                <div className={cart_css.productsFinalPrise}>${props.price}</div>
                            </section>
                            {props.count === 0 ?
                                <button className={cart_css.buttonBack} onClick={() => props.setCartButtonPressed(false)}>
                                    back to products
                                </button>
                            :
                                <button className={cart_css.buttonBack}>
                                    place an order
                                </button>
                            }
                        </footer>
                    </section>
                </section>
            </div>
        </div>


    )
}

export default Cart