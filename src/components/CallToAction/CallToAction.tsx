import {Box, Button, Container, Flex} from '@chakra-ui/react';
import Topic from '../Topic/Topic';
import {IoArrowForward} from 'react-icons/io5';
import AnimatedView from '../Animated/AnimatedView';

export default function CallToAction() {
  return (
    <AnimatedView animation="from-left">
      <Container maxW="container.lg">
        <Box py="4rem" bgColor="orange.50" borderRadius="12px">
          <Topic
            label="VAMOS COMEÇAR?"
            title="Consultoria gratuita"
            text="Estamos aqui para ajudar a transformar suas ideias em realidade. Oferecemos consultoria gratuita para entender suas necessidades e metas."
          />

          <Flex justifyContent="center">
            <Button colorScheme="brand" rightIcon={<IoArrowForward />}>
              Agendar consultoria
            </Button>
          </Flex>
        </Box>
      </Container>
    </AnimatedView>
  );
}
