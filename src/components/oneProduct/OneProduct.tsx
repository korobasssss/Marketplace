import oneProduct_css from './OneProduct.module.css'
import starBlue_icon from '../../assets/starblue_icon.svg'
import buy_icon from '../../assets/buy_icon.svg'
import buy_iconBlue from '../../assets/buy_iconBlue.svg'
import {useState} from "react";
import {OneProductProps} from "../interface/oneProductInterface";

const OneProduct = (props: OneProductProps) => {
    const [isButtonReadMorePressed, setButtonReadMorePressed] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    return (
        <div className={isButtonReadMorePressed ? oneProduct_css.rootDescr : oneProduct_css.rootWithoutDescr}>
            {isButtonReadMorePressed ? null :
                <section className={oneProduct_css.main}>
                    <header className={oneProduct_css.header}>
                        <div className={oneProduct_css.sale}>{props.product.discountPercentage}%</div>
                        <div>off sale</div>
                    </header>
                    <main className={oneProduct_css.productPhoto}>
                        <img src={props.product.images[photoIndex]} alt={'product'}/>
                        <section className={oneProduct_css.photoButtons}>
                            {props.product.images.map((product: string, index) => {
                                return <button key={index} className={photoIndex === index ? oneProduct_css.onePhotoButtonActive :
                                                                                 oneProduct_css.onePhotoButtonNotActive}
                                               onClick={() => setPhotoIndex(index)}>
                                    •
                                </button>
                            })}

                        </section>
                    </main>
                </section>
            }
            <footer
                className={isButtonReadMorePressed ? oneProduct_css.infoWithDescr : oneProduct_css.infoWithoutDescr}>
                <section className={oneProduct_css.infoWithoutDescr}>
                    <section className={oneProduct_css.idkWhatIsiT}> {/* todo переименовать потом класс*/}
                        <img src={starBlue_icon} alt={'blue star icon'}/>
                        <div>{props.product.rating}</div>
                    </section>
                    <div className={oneProduct_css.productName}>{props.product.title}</div>
                    {!isButtonReadMorePressed ?
                        <section className={oneProduct_css.grid}>
                            <p className={oneProduct_css.aboutProductShort}>
                                {props.product.description}
                            </p>
                            <button className={oneProduct_css.readMore + ' ' + oneProduct_css.grid3}
                                    onClick={() => setButtonReadMorePressed(true)}>
                                Read more
                            </button>
                        </section>
                        :
                        <section className={oneProduct_css.shortInfo}>
                            <p className={oneProduct_css.aboutProductFull}>
                                {props.product.description}
                            </p>
                            <button className={oneProduct_css.readMore}
                                    onClick={() => setButtonReadMorePressed(false)}>
                                Hide description
                            </button>
                        </section>
                    }

                </section>
                <section className={oneProduct_css.price}>
                    <button className={oneProduct_css.buttonAddToCart}>
                        <img src={buy_icon} alt={'buy icon'}/>
                        ${props.product.price}
                    </button>
                    {/*<button className={oneProduct_css.buttonAddToCart + ' ' + oneProduct_css.buttonAddedToCart}>*/}
                    {/*    <img src={buy_iconBlue} alt={'buy icon'}/>*/}
                    {/*    added to cart*/}
                    {/*</button>*/}
                    <div className={oneProduct_css.priceWithoutSale}>
                        ${Math.ceil(props.product.price + props.product.price * props.product.discountPercentage / 100)}
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default OneProduct