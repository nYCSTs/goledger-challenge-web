import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ListArtistInformation from '../../Components/ListArtistInformation';
import Loading from '../../Components/Loading';
import { getAssetDataList } from '../../Services/artistServices';
import CarouselDiv from './Style';

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
    <div style={{ margin: '60px auto' }}>
      {artistList.length ? (
        <div>
          <Carousel
            autoPlay={false}
            infinite
            showDots
            autoPlaySpeed={5000}
            responsive={responsive}
            removeArrowOnDeviceType={['mobile']}
            keyBoardControl
          >
            {artistList.map((a, idx) => (
              <CarouselDiv key={idx}>
                <ListArtistInformation
                  id={a['@key']}
                  showStreamingInfo
                />
              </CarouselDiv>
            ))}
          </Carousel>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomePage;
