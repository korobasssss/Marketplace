import oneSelectedProduct_css from './OneSelectedProduct.module.css'
import iphone from '../../../assets/iphone.svg'
import plus_icon from '../../../assets/plus_icon.svg'
import minus_icon from '../../../assets/minus_icon.svg'
import trash_icon from '../../../assets/trash_icon.svg'

const OneSelectedProduct = () => {
    return (
        <div className={oneSelectedProduct_css.root}>
            <section>
                <img src={iphone} alt={'product'}/>
            </section>
            <section className={oneSelectedProduct_css.dataProduct}>
                <div>Apple iPhone 9</div>
                <section className={oneSelectedProduct_css.addOrDeleteProduct}>
                    <button className={oneSelectedProduct_css.buttonPlusOrMinus}>
                        <img src={minus_icon} alt={'minus icon'}/>
                    </button>
                    <div className={oneSelectedProduct_css.countProduct}>1</div>
                    <button className={oneSelectedProduct_css.buttonPlusOrMinus}>
                        <img src={plus_icon} alt={'plus icon'}/>
                    </button>
                </section>
            </section>
            <section className={oneSelectedProduct_css.priceBox}>
                <div className={oneSelectedProduct_css.price}>$549</div>
            </section>
            <section className={oneSelectedProduct_css.select}>

            </section>
            <button className={oneSelectedProduct_css.deleteMark}>
                <img src={trash_icon} alt={'trash icon'}/>
            </button>
        </div>
    )
}

export default OneSelectedProduct