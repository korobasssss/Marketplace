import SelectionLine from "../selectionLine/SelectionLine";
import OneProduct from "../oneProduct/OneProduct";
import Footer from "../footer/Footer";
import main_css from './Products.module.css'

const Products = () => {
    return (
        <div className={main_css.root}>
            <header className={main_css.header}>
                <SelectionLine/>
            </header>
            <main className={main_css.products}>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
                <OneProduct/>
            </main>
            <footer className={main_css.footer}>
                <Footer/>
            </footer>
        </div>
    )
}

export default Products