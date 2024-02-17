import oneSelectedProduct_css from './OneSelectedProduct.module.css'
import plus_icon from '../../../assets/plus_icon.svg'
import minus_icon from '../../../assets/minus_icon.svg'
import trash_icon from '../../../assets/trash_icon.svg'
import {OneCartPropsComponent} from "../../../interface/oneSelectedProductInterface";

const OneSelectedProduct = (props: OneCartPropsComponent) => {
    return (
        <div className={oneSelectedProduct_css.root}>
            <section className={oneSelectedProduct_css.productImg}>
                <img src={props.oneProduct.thumbnail} alt={'product'}/>
            </section>
            <section className={oneSelectedProduct_css.dataProduct}>
                <div>{props.oneProduct.title}</div>
                <section className={oneSelectedProduct_css.addOrDeleteProduct}>
                    <button className={oneSelectedProduct_css.buttonPlusOrMinus} onClick={() => props.deleteOneCountProductFromCart()}>
                        <img src={minus_icon} alt={'minus icon'}/>
                    </button>
                    <div className={oneSelectedProduct_css.countProduct}>{props.oneProduct.count}</div>
                    <button className={oneSelectedProduct_css.buttonPlusOrMinus}  onClick={() => props.addOneCountProductToCart()}>
                        <img src={plus_icon} alt={'plus icon'}/>
                    </button>
                </section>
            </section>
            <section className={oneSelectedProduct_css.priceBox}>
                <div className={oneSelectedProduct_css.price}>$549</div>
            </section>
            <section className={oneSelectedProduct_css.select}>

            </section>
            <button className={oneSelectedProduct_css.deleteMark} onClick={() => props.deleteOneProductFromCart()}>
                <img src={trash_icon} alt={'trash icon'}/>
            </button>
        </div>
    )
}

export default OneSelectedProduct