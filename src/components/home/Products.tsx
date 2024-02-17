import Footer from "../footer/Footer";
import main_css from './Products.module.css'
import {ProductsProps} from "../../interface/productsInterface";
import {OneProductInterface} from '../../interface/oneProductInterface'
import {SelectionLineContainer} from "../selectionLine/SelectionLineContainer";
import {OneSelectedProductContainer} from "../oneProduct/OneProductContainer";
import {OneProductCartInterface} from "../../interface/oneSelectedProductInterface";

const Products = (props: ProductsProps) => {
    return (
        <div className={main_css.root}>
            <header className={main_css.header}>
                <SelectionLineContainer/>
            </header>
            <main className={main_css.products}>
                {props.products.map((oneProduct: OneProductInterface, index) => {
                    let flag = false
                    props.cartProducts.map((oneProductInCart: OneProductCartInterface) => {
                        if (oneProductInCart.id === oneProduct.id) {
                            flag = true
                        }
                    })
                    return <OneSelectedProductContainer key={index} product={oneProduct}
                                                        isInCartProducts={flag}/>
                })}
            </main>
            <footer className={main_css.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

export default Products