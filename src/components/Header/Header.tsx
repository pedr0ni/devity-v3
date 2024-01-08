import {Box, Button, Container, Flex, Image} from '@chakra-ui/react';
import LogoPrimary from '../../assets/img/logo-primary-2.png';
import HeaderLink from '../HeaderLink/HeaderLink';

export default function Header() {
  const scrollTo = (el: string) => {
    document.getElementById(el)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <Box height="64px" width="100vw">
      <Container
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent={{base: 'center', md: 'space-between'}}
        maxW="container.lg"
        flexDirection={{base: 'column', md: 'row'}}
      >
        <Image width="125px" src={LogoPrimary} />
        <Flex gap="2rem" display={{base: 'none', md: 'flex'}}>
          <HeaderLink onClick={() => scrollTo('home')}>Home</HeaderLink>
          <HeaderLink onClick={() => scrollTo('offers')}>Serviços</HeaderLink>
          <HeaderLink onClick={() => scrollTo('faq')}>Faq</HeaderLink>
          <HeaderLink onClick={() => scrollTo('partners')}>
            Parceiros
          </HeaderLink>
        </Flex>
        <Button display={{base: 'none', md: 'flex'}} colorScheme="brand">
          Fale Conosco
        </Button>
      </Container>
    </Box>
  );
}
