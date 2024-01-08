import {Button, ButtonProps} from '@chakra-ui/react';

export default function HeaderLink(props: ButtonProps) {
  return (
    <Button
      variant="link"
      colorScheme="gray.600"
      _hover={{color: 'brand.500', textDecoration: 'none'}}
      {...props}
    >
      {props.children}
    </Button>
  );
}
