import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import AlbumData from '../../Components/AlbumData';
import { getAssetData, searchAsset } from '../../Services/artistServices';
import {
  ArtistData, Title, InformationTitle,
} from './Style';

const ArtistPage = () => {
  const { id } = useParams();
  const [artistInformation, setArtistInformation] = useState();
  const [albunsList, setAlbunsList] = useState();

  const listAlbuns = () => albunsList?.map((r, idx) => (
    <AlbumData
      key={idx}
      data={r}
      artistPage
    />
  ));

  useEffect(async () => {
    await getAssetData('artist:'.concat(id))
      .then((r) => setArtistInformation(r.data.result[0]));
  }, []);

  useEffect(async () => {
    console.log(id);
    await searchAsset('album', ({ artist: { '@key': 'artist:'.concat(id) } }))
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

export default ArtistPage;
