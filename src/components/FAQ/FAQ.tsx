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

const questions = [
  {
    title: 'Qual é o prazo médio para a criação de um site ou aplicativo?',
    body: 'O prazo pode variar dependendo da complexidade do projeto. Normalmente, para sites simples, o prazo médio é de 2 a 3 semanas, enquanto aplicativos podem levar de 1 a 2 meses para serem concluídos, considerando o planejamento, desenvolvimento e testes.',
  },
  {
    title: 'Vocês oferecem manutenção contínua após o lançamento do projeto?',
    body: 'Sim, oferecemos serviços de manutenção contínua para garantir o bom funcionamento do seu site ou aplicativo. Temos pacotes de suporte que incluem atualizações, correções de bugs e suporte técnico conforme necessário.',
  },
  {
    title: 'Quais são as vantagens da hospedagem oferecida pela sua empresa?',
    body: 'Nossa hospedagem é confiável, rápida e segura. Oferecemos diferentes planos que se adaptam às necessidades do seu site ou aplicativo, garantindo alto desempenho, segurança robusta e suporte técnico dedicado.',
  },
  {
    title:
      'Como é o processo de colaboração durante o desenvolvimento do projeto?',
    body: 'Mantemos uma comunicação próxima com nossos clientes durante todo o processo. Iniciamos com reuniões de levantamento de requisitos para entender suas necessidades e, em seguida, compartilhamos atualizações regulares, permitindo feedback constante para garantir que o projeto atenda às suas expectativas.',
  },
  {
    title:
      'Vocês ajudam na aquisição e configuração de domínios para os sites ou aplicativos?',
    body: 'Sim, oferecemos suporte na escolha, aquisição e configuração de domínios para seus projetos online. Auxiliamos na seleção de nomes adequados, na compra dos domínios e na configuração técnica para garantir uma presença online consistente e eficaz para sua empresa.',
  },
];

export default function FAQ() {
  return (
    <Box bgColor="gray.100" py="4rem" id="faq">
      <Topic label="PERGUNTAS FREQUENTES" title="FAQ" text="" />

      <Container maxW="container.md">
        <Accordion>
          {questions.map(question => (
            <AccordionItem
              border="none"
              my="1rem"
              bgColor="white"
              borderRadius="6px"
              key={question.title}
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
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
