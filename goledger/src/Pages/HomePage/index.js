import { useEffect, useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useHistory } from 'react-router';
import ListArtistInformation from '../../Components/ListArtistInformation';
import { getAssetDataList } from '../../Services/artistServices';
import {
  Page, Slider, SliderFlowControls,
} from './Style';

const HomePage = () => {
  const history = useHistory();
  const [artistList, setArtistList] = useState([]);

  useEffect(async () => {
    await getAssetDataList('artist')
      .then((r) => setArtistList(r.data.result));
  }, []);

  return (
    <Page>
      <Slider>
        <Carousel
          infiniteLoop
          onClickItem={(e) => history.push('artist/'.concat(artistList[e]['@key'].substring(artistList[e]['@key'].indexOf(':') + 1)))}
        >
          {artistList.map((a) => (
            <div style={{ display: 'flex' }}>
              <ListArtistInformation
                id={a['@key']}
              />
            </div>
          ))}
        </Carousel>
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
};

export default HomePage;
