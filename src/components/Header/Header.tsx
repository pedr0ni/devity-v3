import {Box, Button, Container, Flex, Image} from '@chakra-ui/react';
import LogoPrimary from '../../assets/img/logo-primary-2.png';

export default function Header() {
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
          <Button variant="link" colorScheme="gray.600">
            Home
          </Button>
          <Button variant="link" colorScheme="gray.600">
            Serviços
          </Button>
          <Button variant="link" colorScheme="gray.600">
            Parceiros
          </Button>
          <Button variant="link" colorScheme="gray.600">
            Sobre
          </Button>
        </Flex>
        <Button display={{base: 'none', md: 'flex'}} colorScheme="brand">
          Fale Conosco
        </Button>
      </Container>
    </Box>
  );
}
