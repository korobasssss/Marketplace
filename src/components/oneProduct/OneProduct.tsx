import oneProduct_css from './OneProduct.module.css'
import iphonebig from '../../assets/iphonebig.svg'
import starblue_icon from '../../assets/starblue_icon.svg'
import buy_icon from '../../assets/buy_icon.svg'
import {useState} from "react";
const OneProduct = () => {
    const [isButtonReadMorePressed, setButtonReadMorePressed] = useState(false)

    return (
        <div className={oneProduct_css.root}>
            <header className={oneProduct_css.header}>
                <div className={oneProduct_css.sale}>12.96%</div>
                <div>off sale</div>
            </header>
            <main className={oneProduct_css.productPhoto}>
                <img src={iphonebig} alt={'product'}/>
            </main>
            <footer className={oneProduct_css.info}>
                <section className={oneProduct_css.idkWhatIsiT}> {/* todo переименовать потом класс*/}
                    <img src={starblue_icon} alt={'blue star icon'}/>
                    <div>4.69</div>
                </section>
                <div>Apple iPhone 9</div>
                <section className={oneProduct_css.shortInfo}>
                    <p className={oneProduct_css.aboutProduct}>An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple An apple mobile which is nothing like apple</p>
                    <button className={oneProduct_css.readMore}>Read more</button>
                </section>
                <section className={oneProduct_css.price}>
                    <button className={oneProduct_css.buttonAddToCart}>
                        <img src={buy_icon} alt={'buy icon'}/>
                        $549
                    </button>
                    <div className={oneProduct_css.priceWithoutSale}>$685</div>
                </section>
            </footer>
        </div>
    )
}

export default OneProduct