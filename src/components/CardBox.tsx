import { Text, Flex, FlexboxProps, Heading } from '@chakra-ui/react';
import { GUTTER_WIDTH } from '@govhack/constants';

interface Props extends FlexboxProps {
  title: string;
  subtitle?: string;
}

const CardBox: React.FC<Props> = ({ title, subtitle, children, ...rest }) => {
  return (
    <Flex flexDir="column" {...rest}>
      <Flex flexDir="column">
        <Heading fontSize="3xl">{title}</Heading>
        {subtitle && <Text fontSize="xl">{subtitle}</Text>}
      </Flex>
      {children}
    </Flex>
  );
};

export default CardBox;
