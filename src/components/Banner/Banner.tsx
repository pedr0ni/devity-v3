import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import Header from '../Header/Header';
import MainContent from '../../assets/img/main-content.svg';

export default function Banner() {
  return (
    <Box>
      <Box
        width="100%"
        height="100vh"
        position="relative"
        overflow="hidden"
        background="linear-gradient(to top, #fad78c, #fff);"
      >
        <Header />

        <Flex
          position="absolute"
          bottom={{base: 120, md: -240}}
          width="100vw"
          justifyContent="center"
        >
          <Image src={MainContent} />
        </Flex>

        <Flex
          marginTop={{base: '2rem', md: '6rem'}}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Container
            maxW="container.md"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
          >
            <Heading color="gray.700" textAlign="center" as="h1" size="2xl">
              Potencialize a força da sua marca com um novo site
            </Heading>
            <Text color="gray.600" textAlign="center">
              Nosso serviço de criação de sites incríveis pode aumentar sua
              venda em até 30%. Pronto para desbloquear a melhor parte do seu
              negócio?
            </Text>
            <Flex flexDirection="column" alignItems="center" gap="0.5rem">
              <Flex gap="0.5rem">
                <Input
                  width="260px"
                  bgColor="white"
                  placeholder="Digite seu e-mail"
                />
                <Button colorScheme="brand">Agendar</Button>
              </Flex>
              <Text color="gray.600">Consultoria gratuita</Text>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </Box>
  );
}
