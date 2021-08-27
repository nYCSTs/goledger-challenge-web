import {
  Nav, A, NavItem,
  Links, HomePageLink, Button,
} from './Style';

const Navbar = () => (
  <Nav>
    <HomePageLink href="/">GoLedger</HomePageLink>
    <Links>
      <NavItem>
        <A href="/artists/"><Button>Artistas</Button></A>
      </NavItem>
      <NavItem style={{ margin: '0 12px' }}>
        <A href="/albuns"><Button>Albuns</Button></A>
      </NavItem>
      <NavItem>
        <A href="/streaming"><Button>Streaming</Button></A>
      </NavItem>
    </Links>
  </Nav>
);

export default Navbar;
