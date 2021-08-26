import {
  Nav, A, NavItem,
  Links, HomePageLink, Button,
} from './Style';

const Navbar = () => (
  <Nav>
    <HomePageLink href="/">GoLedger</HomePageLink>
    <Links>
      <NavItem>
        <A href="/artistas/"><Button>Artistas</Button></A>
      </NavItem>
      <NavItem>
        <A href="/albuns"><Button>Albuns</Button></A>
      </NavItem>
    </Links>
  </Nav>
);

export default Navbar;
