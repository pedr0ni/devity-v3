import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/theme';
import Banner from './components/Banner/Banner';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Banner />
      <Offers />
    </ChakraProvider>
  );
}

export default App;
