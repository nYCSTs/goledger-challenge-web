import { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import {
    Nav, NavContent, Button, Link, P, Dropdown, A, 
    DropdownDiv,
    DropdownItem,
} from './Style';

const Navbar = () => {
    const [artistDropdownState, setArtistDropdownState] = useState(false);
    const [albumDropdownState, setAlbumDropdownState] = useState(false);
    const [valueType, setValueType] = useState('');

    const showDropdown = () => {
        return (
            <DropdownDiv>
                <DropdownItem href='/'>Cadastrar {valueType}</DropdownItem>
                <DropdownItem href='/'>Atualizar {valueType}</DropdownItem>
                <DropdownItem href='/'>Deletar {valueType}</DropdownItem>
            </DropdownDiv>
        );
    };

    return (
        <Nav>
            <NavContent>
                <Link>
                    <Dropdown>
                        <A>Artistas</A>
                        <Button onClick={() => {
                            setArtistDropdownState(!artistDropdownState);
                            setAlbumDropdownState(false);
                            setValueType('Artista');
                        }}>
                            <IoIosArrowDropdown />
                        </Button>
                    </Dropdown>
                    {artistDropdownState ? showDropdown() : null}
                </Link>
                <Link>
                    <Dropdown>
                        <A>Albuns</A>
                        <Button onClick={() => {
                            setAlbumDropdownState(!albumDropdownState);
                            setArtistDropdownState(false);
                            setValueType('Album');
                        }}>
                            <IoIosArrowDropdown />
                        </Button>
                    </Dropdown>
                    {albumDropdownState ? showDropdown() : null}
                </Link>
            </NavContent>
            
        </Nav>
    );
}

export default Navbar;