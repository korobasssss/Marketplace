import SelectionLine from "../selectionLine/SelectionLine";
import Footer from "../footer/Footer";
import main_css from './Products.module.css'
import {ProductsProps} from "../interface/productsInterface";
import {OneProductInterface} from '../interface/oneProductInterface'
import OneProduct from "../oneProduct/OneProduct";

const Products = (props: ProductsProps) => {
    return (
        <div className={main_css.root}>
            <header className={main_css.header}>
                <SelectionLine/>
            </header>
            <main className={main_css.products}>
                {props.products.map((oneProduct: OneProductInterface) => {
                    return <OneProduct product={oneProduct}/>
                })}
            </main>
            <footer className={main_css.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

export default Products