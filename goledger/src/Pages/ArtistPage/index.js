import { useEffect, useState } from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import { useParams } from 'react-router';
import AlbumData from '../../Components/AlbumData';
import { getAssetData, getArtistAlbuns } from '../../Services/artistServices';
import {
  ArtistData, Information, AlbunsList, Title,
} from './Style';

const ArtistPage = () => {
  const { id } = useParams();
  const [artistInformation, setArtistInformation] = useState();
  const [albunsList, setAlbunsList] = useState();

  const listAlbuns = () => albunsList?.map((r) => (
    <AlbumData
      name={r.name}
      genre={r.genre}
      nTracks={r.nTracks}
      year={r.year}
    />
  ));

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
      <Information>{`Artist name: ${artistInformation?.name}`}</Information>
      <Information>{`Location: ${artistInformation?.location}`}</Information>
      <Information>{`Description: ${artistInformation?.description}`}</Information>
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
