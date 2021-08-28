import {
  Nav, A, NavItem,
  Links, HomePageLink, Button,
} from './Style';

const Navbar = () => (
  <Nav>
    <div>
      <HomePageLink href="/">GoLedger</HomePageLink>
    </div>
    <Links>
      <NavItem>
        <A href="/artists/"><Button>Artistas</Button></A>
      </NavItem>
      <NavItem>
        <A href="/albuns"><Button>Albuns</Button></A>
      </NavItem>
      <NavItem>
        <A href="/streaming"><Button>Streaming</Button></A>
      </NavItem>
    </Links>
  </Nav>
);

export default Navbar;
