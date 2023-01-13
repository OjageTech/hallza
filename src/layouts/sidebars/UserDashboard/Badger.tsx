import { Badge, Flex } from '@chakra-ui/react';

type ItemBadgeProps = {
  nomba?: number;
  disp?: string;
  bg?: string;
};

/**
 *
 * @param nomba, disp
 * @returns Badge with nomba or not
 */
function Badger({ nomba, disp, bg }: ItemBadgeProps) {
  return (
    <Badge
      textTransform="uppercase"
      fontWeight={900}
      borderRadius="lg"
      display={disp}
      fontSize="0.75rem"
      lineHeight="1rem"
      pt=".5rem"
      pb=".5rem"
      color={bg != null ? 'white' : 'inherit'}
      animation="pulse 2s cubic-bezier(.4,0,.6,1) infinite"
      bg={bg}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <div>{disp}</div>
        <div>{nomba}</div>
      </Flex>
    </Badge>
  );
}

Badger.defaultProps = {
  nomba: 1,
  disp: 'new',
  bg: 'inherit',
};
export default Badger;
