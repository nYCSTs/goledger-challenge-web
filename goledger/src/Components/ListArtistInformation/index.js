import { useEffect, useState } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import AlbumData from '../AlbumData';
import { getAssetData, searchAsset } from '../../Services/artistServices';
import {
  ArtistData, Title, InformationTitle,
} from './Style';

const ListArtistInformation = ({ id }) => {
  const [albunsList, setAlbunsList] = useState();
  const [artistInformation, setArtistInformation] = useState();

  const listAlbuns = () => albunsList?.map((r, idx) => (
    <AlbumData
      key={idx}
      data={r}
      artistPage
    />
  ));

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
      <InformationTitle>Artist Name: </InformationTitle>
      <p>{artistInformation?.name}</p>
      <InformationTitle>Description:</InformationTitle>
      <p>{artistInformation?.description}</p>
      <hr />
      <div>
        <Title>Albuns:</Title>
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
