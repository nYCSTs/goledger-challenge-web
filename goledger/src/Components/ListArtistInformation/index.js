import { useEffect, useState } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import AlbumData from '../AlbumData';
import { getAssetData, searchAsset } from '../../Services/artistServices';
import {
  ArtistData, Title, InformationTitle,
} from './Style';
import Loading from '../Loading';

const ListArtistInformation = ({ id, showStreamingInfo = false }) => {
  const [albunsList, setAlbunsList] = useState();
  const [artistInformation, setArtistInformation] = useState();

  const listAlbuns = () => {
    if (!albunsList) {
      return <Loading />;
    } if (albunsList.length === 0) {
      return <h2>No album registered :(</h2>;
    }
    return albunsList?.map((r, idx) => (
      <AlbumData
        key={idx}
        data={r}
        artistPage
        showStreamingInfo={showStreamingInfo}
      />
    ));
  };

  useEffect(async () => {
    await getAssetData(id)
      .then((r) => setArtistInformation(r.data.result[0]));
  }, []);

  useEffect(async () => {
    await searchAsset('album', ({ artist: { '@key': id } }))
      .then((r) => setAlbunsList(r.data.result));
  }, []);

  return (
    <ArtistData>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <InformationTitle>Artist Name: </InformationTitle>
        <p style={{ fontSize: '22px', margin: '0 0 0 5px' }}>{artistInformation?.name}</p>
      </div>
      <InformationTitle>Description:</InformationTitle>
      <p>{artistInformation?.description}</p>
      <div>
        <Title>Albums:</Title>
        <Grid>
          <Row>
            {listAlbuns()}
          </Row>
        </Grid>
      </div>
    </ArtistData>
  );
};

export default ListArtistInformation;
