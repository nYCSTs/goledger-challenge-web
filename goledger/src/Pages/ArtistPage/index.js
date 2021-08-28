import { useEffect, useState } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { useParams } from 'react-router';
import AlbumData from '../../Components/AlbumData';
import { getAssetData, getArtistAlbuns } from '../../Services/artistServices';
import {
  ArtistData, AlbunsList, Title, InformationData, InformationDiv, InformationTitle,
} from './Style';

const ArtistPage = () => {
  const { id } = useParams();
  const [artistInformation, setArtistInformation] = useState();
  const [albunsList, setAlbunsList] = useState();

  const listAlbuns = () => albunsList?.map((r) => {
    console.log(r);
    return (
      <AlbumData
        data={r}
        artistPage
      />
    );
  });

  useEffect(async () => {
    await getAssetData('artist', id)
      .then((r) => setArtistInformation(r.data.result[0]));
  }, []);

  useEffect(async () => {
    await getArtistAlbuns(id)
      .then((r) => setAlbunsList(r.data.result));
  }, []);

  return (
    <ArtistData>
      <InformationTitle>Artist Name: </InformationTitle>
      <InformationData>{artistInformation?.name}</InformationData>
      <InformationTitle>Description:</InformationTitle>
      <InformationData>{artistInformation?.description}</InformationData>
      <hr />
      <AlbunsList>
        <Title>Albuns:</Title>
        <Grid>
          <Row>
            {listAlbuns()}
          </Row>
        </Grid>
      </AlbunsList>
    </ArtistData>
  );
};

export default ArtistPage;
