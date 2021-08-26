import { useState, useEffect } from 'react';
import ArtistData from '../../Components/ArtistData';
import ListComponent from '../../Components/ListComponent';
import { getAssetData } from '../../Services/artistServices';

const ListArtists = () => {
  const [artistList, setArtistList] = useState([]);

  const renderArtists = () => {
    if (artistList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return artistList?.map((data) => (
      <ArtistData
        type="artist"
        data={data}
        description={data.description}
      />
    ));
  };

  useEffect(() => {
    getAssetData('artist')
      .then((r) => setArtistList(r.data.result));
  }, []);

  console.log(artistList);

  return (
    <ListComponent
      type="Artist"
      list={renderArtists()}
      registPath="/artista/register"
    />
  );
};

export default ListArtists;
