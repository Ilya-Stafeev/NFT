import { Navbar } from './components/screens/navbar';
import { Box } from './components/screens/box';
import { Auction } from './components/screens/auction';
import { Started } from './components/screens/started';
import { Discover } from './components/screens/discover';
import { Footer } from './components/screens/footer';
import { Footer2 } from './components/screens/footer2';

const App = () => {  
  
  return (
    <div className="nft-landingpage">
      <Navbar/>
      <Box/>
      <Auction/>
      <Started/>
      <Discover/>
      <Footer/>
      <Footer2/>
    </div>     
  )
}

export default App