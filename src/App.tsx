import {ChakraProvider, Flex, Spinner} from '@chakra-ui/react';
import theme from './theme/theme';
import Banner from './components/Banner/Banner';
import Offers from './components/Offers/Offers';
import FAQ from './components/FAQ/FAQ';
import Partners from './components/Partners/Partners';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';
import {useEffect, useState} from 'react';

function App() {
  const [loading, setLoading] = useState(
    process.env.NODE_ENV !== 'development'
  );

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Spinner color="brand.500" size="xl" />
        </Flex>
      ) : (
        <>
          <Banner />
          <Offers />
          <FAQ />
          <Partners />
          <CallToAction />
          <Footer />
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
