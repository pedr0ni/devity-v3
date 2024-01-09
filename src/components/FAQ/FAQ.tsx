import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
} from '@chakra-ui/react';
import Topic from '../Topic/Topic';
import AnimatedView from '../Animated/AnimatedView';
import LinesBg from '../../assets/img/lines-bg.svg';
import questions from './questions';

export default function FAQ() {
  return (
    <Box
      backgroundImage={`url(${LinesBg})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
      py="4rem"
      id="faq"
    >
      <Topic label="PERGUNTAS FREQUENTES" title="FAQ" text="" />

      <Container maxW="container.md">
        <Accordion allowMultiple>
          {questions.map(question => (
            <AnimatedView key={question.title} animation="from-left">
              <AccordionItem
                border="none"
                my="1rem"
                bgColor="gray.200"
                borderRadius="6px"
              >
                <h2>
                  <AccordionButton py="1.5rem">
                    <Box as="span" flex="1" textAlign="left" fontWeight="bold">
                      {question.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{question.body}</AccordionPanel>
              </AccordionItem>
            </AnimatedView>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
