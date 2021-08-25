import { useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import {
    Nav, NavContent, Button, Link, P, Dropdown, A, 
    DropdownDiv, DropdownItem, Links, HomePageLink,
} from './Style';

const Navbar = () => {
    const [artistDropdownState, setArtistDropdownState] = useState(false);
    const [albumDropdownState, setAlbumDropdownState] = useState(false);
    const [valueType, setValueType] = useState('');

    const showDropdown = () => {
        return (
            <DropdownDiv>
                <DropdownItem onClick={() => { setArtistDropdownState(false); setAlbumDropdownState(false); } } href={`/registrar/${valueType.toLowerCase()}`}>Cadastrar {valueType}</DropdownItem>
                <DropdownItem onClick={() => { setArtistDropdownState(false); setAlbumDropdownState(false); } } href='/'>Atualizar {valueType}</DropdownItem>
                <DropdownItem onClick={() => { setArtistDropdownState(false); setAlbumDropdownState(false); } } href='/'>Deletar {valueType}</DropdownItem>
            </DropdownDiv>
        );
    };

    return (
        <Nav>
            <NavContent>
                <HomePageLink href="/">GoLedger</HomePageLink>
                <Links>
                    <Link>
                        <Dropdown>
                            <A href="/artistas/">Artistas</A>
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
                            <A href="/albuns">Albuns</A>
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
                </Links>
            </NavContent>
            
        </Nav>
    );
}

export default Navbar;