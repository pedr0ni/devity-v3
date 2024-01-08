import {Box, Container, Flex, Image} from '@chakra-ui/react';
import Topic from '../Topic/Topic';
import AWSLogo from '../../assets/img/aws.svg';
import BowsyLogo from '../../assets/img/bowsy-logo.svg';

export default function Partners() {
  return (
    <Box py="4rem" id="partners">
      <Topic
        label="NOSSOS CLIENTES"
        title="Histórias de sucesso"
        text="Colaboramos com uma ampla gama de empresas e empreendedores apaixonados, criando soluções digitais que impulsionam seus negócios."
      />

      <Container maxW="container.lg">
        <Flex alignItems="center" justifyContent="center" gap="6rem">
          <Image width="100px" src={AWSLogo} />
          <Image width="150px" src={BowsyLogo} />
        </Flex>
      </Container>
    </Box>
  );
}
