import { useState, useEffect } from 'react';
import ArtistData from '../../Components/ArtistData';
import ListComponent from '../../Components/ListComponent';
import { getAssetDataList } from '../../Services/artistServices';

const ListArtists = () => {
  const [artistList, setArtistList] = useState([]);

  const getArtistList = async () => {
    getAssetDataList('artist')
      .then((r) => setArtistList(r.data.result));
  };

  const renderArtists = () => {
    if (artistList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return artistList?.map((data, idx) => (
      <ArtistData
        key={idx}
        type="artist"
        data={data}
        description={data.description}
        refreshFunction={getArtistList}
      />
    ));
  };

  useEffect(() => {
    getArtistList();
  }, []);

  return (
    <ListComponent
      type="Artist"
      list={renderArtists()}
      registPath="/artist/register"
    />
  );
};

export default ListArtists;
