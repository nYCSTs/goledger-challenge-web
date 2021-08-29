import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useHistory } from 'react-router';
import ListArtistInformation from '../../Components/ListArtistInformation';
import Loading from '../../Components/Loading';
import { getAssetDataList } from '../../Services/artistServices';
import {
  Page, Slider,
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
        {artistList.length ? (
          <div>
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
          </div>
        ) : (
          <Loading />
        )}
      </Slider>
    </Page>
  );
};

export default HomePage;
