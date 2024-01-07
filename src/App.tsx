import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/theme';
import Banner from './components/Banner/Banner';
import Offers from './components/Offers/Offers';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Banner />
      <Offers />
      <FAQ />
    </ChakraProvider>
  );
}

export default App;
