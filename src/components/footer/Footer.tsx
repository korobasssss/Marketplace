import footer_css from './Footer.module.css'
import star_icon from '../../assets/star_icon.svg'
import rdclr_icon from '../../assets/rdclr_icon.svg'
const Footer = () => {
    return (
        <div className={footer_css.root}>
            <div>nonameshop©2024</div>
            <div>
                <img src={star_icon} alt={"star icon"}/>
            </div>
            <div>
                <img src={rdclr_icon} alt={"company icon"}/>
                made in red collar
            </div>
        </div>
    )
}

export default Footer