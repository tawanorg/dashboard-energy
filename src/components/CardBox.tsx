import { Flex, FlexboxProps, Heading } from '@chakra-ui/react';
import { GUTTER_WIDTH } from '@govhack/constants';

interface Props extends FlexboxProps {
  title: string;
}

const CardBox: React.FC<Props> = ({ title, children, ...rest }) => {
  return (
    <Flex flexDir="column" {...rest}>
      <Heading fontSize="3xl" mb={GUTTER_WIDTH}>
        {title}
      </Heading>
      {children}
    </Flex>
  );
};

export default CardBox;
