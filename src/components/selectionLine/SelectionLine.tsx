import search_icon from '../../assets/search_icon.svg'
import cart_icon from '../../assets/cart_icon.svg'
import close_icon from '../../assets/close_icon.svg'
import select_css from './SelectionLine.module.css'
import React, {useState} from "react";
import Cart from "../cart/Cart";
import {CategoriesArr, SelectionLinePropsInterface} from "../interface/selectionLineInterface";
const SelectionLine = (props: SelectionLinePropsInterface) => {
    const [isSearchButtonPressed, setSearchButtonPressed] = useState(false)
    const [isCartButtonPressed, setCartButtonPressed] = useState(false)

    let isDown = false; // todo перенести в отдельный файл
    let startX = 0;
    let scrollLeft = 0;
    const mouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
        isDown = true;
        event.currentTarget.classList.add('active');
        startX = event.pageX - event.currentTarget.offsetLeft;
        scrollLeft = event.currentTarget.scrollLeft;
    }
    const mouseLeave = (event: React.MouseEvent<HTMLButtonElement>) => {
        isDown = false;
        event.currentTarget.classList.remove('active');
    }
    const mouseUp = (event: React.MouseEvent<HTMLButtonElement>) => {
        isDown = false;
        event.currentTarget.classList.remove('active');
    }
    const mouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(!isDown) return;
        event.preventDefault();
        const x = event.pageX - event.currentTarget.offsetLeft;
        const walk = (x - startX); //scroll-fast
        event.currentTarget.scrollLeft = scrollLeft - walk;
    }

    const setInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputSearch(event.target.value)
    }

    const closeSearch = () => {
        setSearchButtonPressed(false)
        props.deleteInputSearch()
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
                                               onClick={() => props.chooseCategory(oneCategory.type, index)}>
                                    {oneCategory.isActive ? '•' : ''} {oneCategory.type}
                                </button>
                            })}
                        </section>
                    }

                </section>

                <button className={select_css.cart} onClick={() => setCartButtonPressed(true)}>
                    <img src={cart_icon} alt={'cart icon'}/>
                    <div className={select_css.cartText}>cart</div>
                </button>
                {isCartButtonPressed ?
                    <Cart isCartButtonPressed={isCartButtonPressed}
                          setCartButtonPressed={setCartButtonPressed}/>
                : null}
            </section>
        </div>
    )
}

export default SelectionLine