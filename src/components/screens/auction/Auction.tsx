import './Auction.scss'

import { Card } from '../../ui/card';

const Auction = () => {

    return(
        <div className="auction">
            <div className="auction__title">
                <p className="auction__titlebold">Hot auctions</p>
                <p className="auction__titleslim">View all</p>
            </div>
            <div className="auction__nft">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
      </div>
    )
}

export default Auction