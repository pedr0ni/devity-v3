import {Box, Container, SimpleGrid} from '@chakra-ui/react';
import OfferCard from './OfferCard/OfferCard';
import {
  IoBookOutline,
  IoLaptopOutline,
  IoStorefrontOutline,
} from 'react-icons/io5';
import Topic from '../Topic/Topic';

export default function Offers() {
  return (
    <Box py="4rem">
      <Topic
        label="NOSSOS SERVIÇOS"
        title="O que fazemos?"
        text="Transformamos ideias em soluções digitais de alta qualidade para
        impulsionar sua presença online."
      />

      <Container maxW="container.lg">
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
