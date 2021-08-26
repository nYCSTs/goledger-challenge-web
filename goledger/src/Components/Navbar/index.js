import { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import {
  Nav, NavContent, Button, Dropdown, A, NavItem,
  DropdownDiv, DropdownItem, Links, HomePageLink,
} from './Style';

const Navbar = () => {
  const [artistDropdownState, setArtistDropdownState] = useState(false);
  const [albumDropdownState, setAlbumDropdownState] = useState(false);
  const [valueType, setValueType] = useState('');

  const resetDropdown = () => {
    setArtistDropdownState(false);
    setAlbumDropdownState(false);
  };

  const showDropdown = () => (
    <DropdownDiv>
      <DropdownItem onClick={() => resetDropdown()} href={`/${valueType}/register/`}>
        Cadastrar
        {' '}
        {valueType}
      </DropdownItem>
      <DropdownItem onClick={() => resetDropdown()} href="/">
        Atualizar
        {' '}
        {valueType}
      </DropdownItem>
      <DropdownItem onClick={() => resetDropdown()} href="/">
        Deletar
        {' '}
        {valueType}
      </DropdownItem>
    </DropdownDiv>
  );

  return (
    <Nav>
      <NavContent>
        <HomePageLink href="/">GoLedger</HomePageLink>
        <Links>
          <NavItem>
            <Dropdown>
              <A href="/artistas/">Artistas</A>
              <Button onClick={() => {
                setArtistDropdownState(!artistDropdownState);
                setAlbumDropdownState(false);
                setValueType('Artista');
              }}
              >
                <IoIosArrowDropdown />
              </Button>
            </Dropdown>
            {artistDropdownState ? showDropdown() : null}
          </NavItem>
          <NavItem>
            <Dropdown>
              <A href="/albuns">Albuns</A>
              <Button onClick={() => {
                setAlbumDropdownState(!albumDropdownState);
                setArtistDropdownState(false);
                setValueType('Album');
              }}
              >
                <IoIosArrowDropdown />
              </Button>
            </Dropdown>
            {albumDropdownState ? showDropdown() : null}
          </NavItem>
        </Links>
      </NavContent>

    </Nav>
  );
};

export default Navbar;
