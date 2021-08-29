import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ListArtistInformation from '../../Components/ListArtistInformation';
import Loading from '../../Components/Loading';
import { getAssetDataList } from '../../Services/artistServices';
import {
  Page, Slider,
} from './Style';

const HomePage = () => {
  const [artistList, setArtistList] = useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 751 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

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
              autoPlay
              infinite
              showDots
              autoPlaySpeed={5000}
              responsive={responsive}
              removeArrowOnDeviceType={['mobile']}
              keyBoardControl
            >
              {artistList.map((a) => (
                <div style={{ padding: '0 25px' }}>
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
