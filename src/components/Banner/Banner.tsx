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
import AnimatedView from '../Animated/AnimatedView';
import openCalendar from '../../functions/openCalendar/openCalendar';
import {useFormik} from 'formik';
import emailSchema from './email.schema';
import * as amplitude from '@amplitude/analytics-browser';

export default function Banner() {
  const {values, setFieldValue, handleSubmit, errors} = useFormik({
    initialValues: {
      email: '',
    },
    enableReinitialize: true,
    validationSchema: emailSchema,
    onSubmit: value => {
      amplitude.track('Booking', value);
      openCalendar();
    },
  });

  return (
    <Box id="home">
      <Box
        width="100%"
        height="100vh"
        position="relative"
        overflow="hidden"
        bgGradient="linear(to-t, brand.100, whiteAlpha.100)"
      >
        <Header />

        <Flex
          position="absolute"
          bottom={{base: 0, md: -240}}
          width="100vw"
          justifyContent="center"
        >
          <AnimatedView animation="from-top">
            <Image src={MainContent} />
          </AnimatedView>
        </Flex>

        <Flex
          marginTop={{base: '2rem', md: '6rem'}}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <AnimatedView animation="from-bottom">
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
                <form onSubmit={handleSubmit}>
                  <Flex gap="0.5rem">
                    <Input
                      width="260px"
                      bgColor="white"
                      type="email"
                      placeholder="Digite seu e-mail"
                      value={values.email}
                      onChange={e => {
                        setFieldValue('email', e.target.value);
                      }}
                      isInvalid={Boolean(errors.email)}
                    />
                    <Button type="submit" colorScheme="brand">
                      Agendar
                    </Button>
                  </Flex>
                </form>

                <Text color="gray.600">Consultoria gratuita</Text>
              </Flex>
            </Container>
          </AnimatedView>
        </Flex>
      </Box>
    </Box>
  );
}
