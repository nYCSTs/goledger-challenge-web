import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import {
  Page, Slider, SliderFlowControls, Information, ArtistInformation,
  AlbunsInformation,
} from './Style';

const HomePage = () => (
  <Page>
    <Slider>
      <Information>
        <ArtistInformation>
          <h2>Nome artista</h2>
          <p>Descricao artista</p>
        </ArtistInformation>
        <AlbunsInformation />
      </Information>
      <SliderFlowControls>
        <button>
          <AiOutlineLeft />
        </button>
        <button>
          <AiOutlineRight />
        </button>
      </SliderFlowControls>
    </Slider>
  </Page>
);

export default HomePage;
