import {As, Card, Heading, Text} from '@chakra-ui/react';
import IconWithBg from '../../IconWithBg/IconWithBg';
import AnimatedView from '../../Animated/AnimatedView';

interface OfferCardProps {
  icon: As;
  heading: string;
  text: string;
}

export default function OfferCard({icon, heading, text}: OfferCardProps) {
  return (
    <AnimatedView animation="scale">
      <Card
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py="1.5rem"
        gap="1rem"
        px="1rem"
      >
        <IconWithBg icon={icon} />
        <Heading size="md">{heading}</Heading>
        <Text textAlign="center" color="gray.600">
          {text}
        </Text>
      </Card>
    </AnimatedView>
  );
}
