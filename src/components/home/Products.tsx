import Footer from "../footer/Footer";
import main_css from './Products.module.css'
import {ProductsProps} from "../../interface/productsInterface";
import {OneProductInterface} from '../../interface/oneProductInterface'
import {SelectionLineContainer} from "../selectionLine/SelectionLineContainer";
import {OneSelectedProductContainer} from "../oneProduct/OneProductContainer";
import {OneProductCartInterface} from "../../interface/oneSelectedProductInterface";
import loading_icon from '../../assets/loading_icon.svg'
import {useState} from "react";

const Products = (props: ProductsProps) => {
    const [skip, setSkip] = useState(10)
    const addProducts = () => {
        props.addBatchOfProducts(skip)
        setSkip(skip + 10)
    };

    return (
        <div className={main_css.root}>
            <header className={main_css.header}>
                <SelectionLineContainer/>
            </header>
            <section>
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
                {props.loaderIcon ?
                    <section className={main_css.loading}>
                        <img src={loading_icon} alt={'loading'}/>
                        <button onClick={addProducts}>show more</button>
                    </section>
                    : null}
            </section>
            <footer className={main_css.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

export default Products