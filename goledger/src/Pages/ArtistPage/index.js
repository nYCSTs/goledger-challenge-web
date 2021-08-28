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

// {
//   "@assetType": "album",
//   "@key": "album:09bd37c3-96ab-573a-acd8-87efadaca61e",
//   "@lastTouchBy": "org1MSP",
//   "artist": {
//       "@assetType": "artist",
//       "@key": "artist:2158e89a-8d5d-51af-be48-e1b909e6b89c"
//   },
//   "explicit": false,
//   "genre": "JPop",
//   "nTracks": 1,
//   "name": "Uutsu",
//   "strOptions": [
//       {
//           "@assetType": "streaming",
//           "@key": "streaming:2d77fb6a-7532-52ca-a759-a367825238c2"
//       },
//       {
//           "@assetType": "streaming",
//           "@key": "streaming:5588c698-365f-596a-a93d-aac69f155c59"
//       },
//       {
//           "@assetType": "streaming",
//           "@key": "streaming:65a12579-dfe6-514c-a066-9ed4415c72e5"
//       },
//       {
//           "@assetType": "streaming",
//           "@key": "streaming:c97df359-881b-5fd3-9e46-5b36c7b94bc2"
//       }
//   ],
//   "year": 2021
// }
