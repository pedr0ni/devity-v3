import {Box, Container, Heading, SimpleGrid, Text} from '@chakra-ui/react';
import OfferCard from './OfferCard/OfferCard';
import {
  IoBookOutline,
  IoLaptopOutline,
  IoStorefrontOutline,
} from 'react-icons/io5';

export default function Offers() {
  return (
    <Box py="4rem">
      <Container
        maxW="container.md"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="0.5rem"
      >
        <Text color="brand.500" fontWeight="bold">
          NOSSO SERVIÇOS
        </Text>
        <Heading color="gray.700" textAlign="center" as="h1" size="xl">
          O que fazemos?
        </Heading>
        <Text color="gray.600" textAlign="center">
          Transformamos ideias em soluções digitais de alta qualidade para
          impulsionar sua presença online.
        </Text>
      </Container>

      <Container maxW="container.lg" mt="2rem">
        <SimpleGrid columns={3} spacing="1rem">
          <OfferCard
            icon={IoLaptopOutline}
            heading="Landing Pages"
            text="Páginas estratégicas, visualmente atraentes e otimizadas para converter visitantes em clientes"
          />

          <OfferCard
            icon={IoBookOutline}
            heading="Blogs"
            text="Construímos blogs impactantes e funcionais que capturam sua essência e
        história."
          />

          <OfferCard
            icon={IoStorefrontOutline}
            heading="E-commerce"
            text="Na criação de e-commerce, utilizamos design atraente para criar uma experiência de compra."
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
