import { useState, useEffect } from 'react';
import ArtistData from '../../Components/ArtistData';
import ListComponent from '../../Components/ListComponent';
import { getAssetDataList } from '../../Services/artistServices';

const ListArtists = () => {
  const [artistList, setArtistList] = useState([]);

  const renderArtists = () => {
    if (artistList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return artistList?.map((data) => {
      const key = data['@key'];
      const url = '/artist/'.concat(key.substring(key.indexOf(':') + 1));
      return (
        <a style={{ textDecoration: 'none', color: 'black' }} href={url}>
          <ArtistData
            type="artist"
            data={data}
            description={data.description}
          />
        </a>
      );
    });
  };

  useEffect(() => {
    getAssetDataList('artist')
      .then((r) => setArtistList(r.data.result));
  }, []);

  return (
    <ListComponent
      type="Artist"
      list={renderArtists()}
      registPath="/artista/register"
    />
  );
};

export default ListArtists;
