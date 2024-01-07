import {Container, Heading, Text} from '@chakra-ui/react';

interface TopicProps {
  label: string;
  title: string;
  text: string;
}

export default function Topic({label, title, text}: TopicProps) {
  return (
    <Container
      maxW="container.md"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="0.5rem"
      mb="2rem"
    >
      <Text color="brand.500" fontWeight="bold">
        {label}
      </Text>
      <Heading color="gray.700" textAlign="center" as="h1" size="xl">
        {title}
      </Heading>
      <Text color="gray.600" textAlign="center">
        {text}
      </Text>
    </Container>
  );
}
