import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/theme';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Banner />
    </ChakraProvider>
  );
}

export default App;
