import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/theme';
import Banner from './components/Banner/Banner';
import Offers from './components/Offers/Offers';
import FAQ from './components/FAQ/FAQ';
import Partners from './components/Partners/Partners';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Banner />
      <Offers />
      <FAQ />
      <Partners />
      <CallToAction />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
