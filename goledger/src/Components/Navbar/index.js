import {
  Nav, Links, HomePageLink, Button,
} from './Style';

const Navbar = () => (
  <Nav>
    <HomePageLink href="/">GoLedger</HomePageLink>
    <Links>
      <div>
        <a href="/artists/"><Button>Artists</Button></a>
      </div>
      <div>
        <a href="/albuns"><Button>Albums</Button></a>
      </div>
      <div>
        <a href="/streaming"><Button>Streaming</Button></a>
      </div>
    </Links>
  </Nav>
);

export default Navbar;
