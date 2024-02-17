import Footer from "../footer/Footer";
import main_css from './Products.module.css'
import {ProductsProps} from "../../interface/productsInterface";
import {OneProductInterface} from '../../interface/oneProductInterface'
import {SelectionLineContainer} from "../selectionLine/SelectionLineContainer";
import {OneSelectedProductContainer} from "../oneProduct/OneProductContainer";

const Products = (props: ProductsProps) => {
    return (
        <div className={main_css.root}>
            <header className={main_css.header}>
                <SelectionLineContainer/>
            </header>
            <main className={main_css.products}>
                {props.products.map((oneProduct: OneProductInterface, index) => {
                    return <OneSelectedProductContainer key={index} product={oneProduct}/>
                })}
            </main>
            <footer className={main_css.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

export default Products