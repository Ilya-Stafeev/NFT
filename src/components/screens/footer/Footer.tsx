import './Footer.scss'

const Footer = () => {  

    return (      
        <div className="footer">
            <div className="footer__main">
                Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis
                magna faucibus lacus.
            </div>
            <div className="footer__navigate">
                <div className="footer__nav">
                    <h5 className='footer__title'>Marketplace</h5>
                    <p className='footer__link'>Home</p>
                    <p className='footer__link'>Activity</p>
                    <p className='footer__link'>Discover</p>
                    <p className='footer__link'>Learn more</p>
                </div>
                <div className="footer__nav">
                    <h5 className='footer__title'>Company</h5>
                    <p className='footer__link'>About Us</p>
                    <p className='footer__link'>Services</p>
                    <p className='footer__link'>Portfolio</p>
                </div>
                <div className="footer__nav">
                    <h5 className='footer__title'>Contact</h5>
                    <p className='footer__link'>Facebook</p>
                    <p className='footer__link'>Instagram</p>
                    <p className='footer__link'>Twitter</p>
                    <p className='footer__link'>Email</p>
                </div>
            </div>
      </div>
    )
}
  
export default Footer