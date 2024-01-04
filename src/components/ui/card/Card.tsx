import './Card.scss'

import { nft } from '../../../assets';

const Card = () => {

    return(        
        <div className="item">
            <img className="item__img" src={nft} alt=""/>
            <div className="item__title">
                <p>Lorem Ipsum</p>
                <p>1.20 Weth</p>
            </div>
            <p className="item__date">Ends in 01.01.2023</p>
        </div>
    )
}

export default Card