import oneProduct_css from './OneProduct.module.css'
import iphonebig from '../../assets/iphonebig.svg'
import starblue_icon from '../../assets/starblue_icon.svg'
import buy_icon from '../../assets/buy_icon.svg'
import {useState} from "react";

const OneProduct = () => {
    const [isButtonReadMorePressed, setButtonReadMorePressed] = useState(false)

    return (
        <div className={isButtonReadMorePressed ? oneProduct_css.rootDescr : oneProduct_css.rootWithoutDescr}>
            {isButtonReadMorePressed ? null :
                <section className={oneProduct_css.main}>
                    <header className={oneProduct_css.header}>
                        <div className={oneProduct_css.sale}>12.96%</div>
                        <div>off sale</div>
                    </header>
                    <main className={oneProduct_css.productPhoto}>
                        <img src={iphonebig} alt={'product'}/>
                    </main>
                </section>
            }
            <footer
                className={isButtonReadMorePressed ? oneProduct_css.infoWithDescr : oneProduct_css.infoWithoutDescr}>
                <section className={oneProduct_css.infoWithoutDescr}>
                    <section className={oneProduct_css.idkWhatIsiT}> {/* todo переименовать потом класс*/}
                        <img src={starblue_icon} alt={'blue star icon'}/>
                        <div>4.69</div>
                    </section>
                    <div className={oneProduct_css.productName}>Apple iPhone 9</div>
                    {!isButtonReadMorePressed ?
                        <section className={oneProduct_css.grid}>
                            <p className={oneProduct_css.grid1}>
                                An apple mobile which is nothing like apple An apple
                            </p>
                            <p className={oneProduct_css.grid2}>
                                mobile which is nothing like apple An...
                            </p>
                            <button className={oneProduct_css.readMore + ' ' + oneProduct_css.grid3}
                                    onClick={() => setButtonReadMorePressed(true)}>
                                Read more
                            </button>
                        </section>
                        :
                        <section className={oneProduct_css.shortInfo}>
                            <p className={oneProduct_css.aboutProductFull}>
                                An apple mobile which is nothing like apple An apple mobile which is nothing like apple
                                An apple
                                mobile which is nothing like apple An apple mobile which is nothing like apple An apple
                                mobile
                                which is nothing like apple An apple mobile which is nothing like apple An apple mobile
                                which is
                                nothing like apple An apple mobile which is nothing like apple An apple mobile which is
                                nothing
                                like apple An apple mobile which is nothing like apple
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
                        $549
                    </button>
                    <div className={oneProduct_css.priceWithoutSale}>$685</div>
                </section>
            </footer>
        </div>
    )
}

export default OneProduct