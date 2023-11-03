import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by
      </MenuButton>

      <MenuList>
        <Button>Popularity</Button>
        <Button>Release Date</Button>
        <Button>Alphabetical</Button>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
