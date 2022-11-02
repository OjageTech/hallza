import { Badge } from '@chakra-ui/react';

export function Badger() {
  type ItemBadgeProps = { nomba: number; disp: string };
  /**
   *
   * @param nomba, disp
   * @returns Badge with nomba or not
   */
  const ItemBadge = ({ nomba, disp }: ItemBadgeProps) => (
    <Badge
      borderRadius="50%"
      display={disp}
      fontSize="0.4em"
      colorScheme="darken"
    >
      {nomba}
    </Badge>
  );
  return ItemBadge;
}
