import {useNavigate} from 'react-router-dom';
import search_icon from '../../assets/search_icon.svg'
import cart_icon from '../../assets/cart_icon.svg'
import cart_icon_white from '../../assets/cart_icon_white.svg'
import close_icon from '../../assets/close_icon.svg'
import select_css from './SelectionLine.module.css'
import React, {useState} from "react";
import {CategoriesArr, SelectionLinePropsInterface} from "../../interface/selectionLineInterface";
import {CartContainer} from "../cart/CartContainer";
import {mouseDown, mouseLeave, mouseMove, mouseUp} from "./move";
const SelectionLine = (props: SelectionLinePropsInterface) => {
    const navigate = useNavigate();

    const [isSearchButtonPressed, setSearchButtonPressed] = useState(false)
    const [isCartButtonPressed, setCartButtonPressed] = useState(false)

    const setInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputSearch(event.target.value)
    }

    const closeSearch = () => {
        setSearchButtonPressed(false)
        props.deleteInputSearch()
    }
    const chooseCategory = (type: string, isActive: boolean, index: number) => {
        if (!isActive) {
            props.chooseCategory(type, index)
            navigate(`?category=${type}`);
        }
    }

    return (
        <div className={select_css.root}>
            <section className={select_css.header}>
                <section className={select_css.searchOrCategory}>
                    <button className={isSearchButtonPressed ?
                        select_css.searchButton + ' ' + select_css.searchButtonWhenSearch :
                        select_css.searchButton} onClick={() => setSearchButtonPressed(true)}>
                        <img src={search_icon} alt={'search icon'}/>
                    </button>
                    {isSearchButtonPressed ?
                        <section className={select_css.search}>
                            <input placeholder={'Search...'} value={props.inputSearch} onChange={setInputSearch}/>
                            <button><img src={close_icon} alt={'close icon'} onClick={closeSearch}/></button>
                        </section>
                        :
                        <section className={select_css.categories} onMouseDown={mouseDown}
                                                                   onMouseLeave={mouseLeave}
                                                                   onMouseUp={mouseUp}
                                                                   onMouseMove={mouseMove}>
                            {props.categories.map((oneCategory : CategoriesArr, index) => {
                                return <button key={index} className={oneCategory.isActive ? select_css.activeCategory : select_css.oneCategory}
                                               onClick={() => chooseCategory(oneCategory.type, oneCategory.isActive, index)}>
                                    {oneCategory.isActive ? '•' : ''} {oneCategory.type}
                                </button>
                            })}
                        </section>
                    }

                </section>

                {props.cartProducts.length === 0 ?
                    <button className={select_css.cartWithoutProducts}
                            onClick={() => setCartButtonPressed(true)}>
                        <img src={cart_icon} alt={'cart icon'}/>
                        cart
                    </button>
                    :
                    <section>
                        <button className={select_css.cartWithoutProducts + ' ' + select_css.cartWithProducts}
                                onClick={() => setCartButtonPressed(true)}>
                            <img src={cart_icon_white} alt={'cart icon'}/>
                            cart
                        </button>
                        <section className={select_css.countCartProducts}>{props.countCartProducts}</section>
                    </section>


                }


                {isCartButtonPressed ?
                    <CartContainer isCartButtonPressed={isCartButtonPressed}
                                   setCartButtonPressed={setCartButtonPressed}/>
                : null}
            </section>
        </div>
    )
}

export default SelectionLine