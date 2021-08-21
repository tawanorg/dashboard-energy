import {
  Flex,
  FlexboxProps,
  Text,
  StatArrow,
  StatGroup,
  Stat,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { GUTTER_WIDTH } from '@govhack/constants';

interface Props {
  month: string;
  type: 'increase' | 'decrease';
}

const StatBox: React.FC<Props> = ({ month, type }) => {
  return (
    <Flex
      alignItems="center"
      width="full"
      shadow="lg"
      p={GUTTER_WIDTH}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Flex flexDir="column">
        <Text fontSize="xl">{month}</Text>
        <Text fontSize="md" opacity="0.6">
          Description
        </Text>
      </Flex>
      <StatGroup ml="auto">
        <Stat>
          <StatNumber>
            {new Intl.NumberFormat('us-AU', {
              style: 'currency',
              currency: 'AUD',
            }).format(Math.floor(Math.random() * 100))}
          </StatNumber>
          <StatHelpText textAlign="right">
            <StatArrow type={type} />
            {Math.floor(Math.random() * 20)}%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </Flex>
  );
};

export default StatBox;
