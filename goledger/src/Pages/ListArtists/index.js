import { useState, useEffect } from 'react';
import DataList from '../../Components/ArtistData';
import ListComponent from '../../Components/ListComponent';
import { getArtistsList } from '../../Services/artistServices';

const ListArtists = () => {
  const [artistList, setArtistList] = useState([]);

  const renderCategories = () => {
    if (artistList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return artistList?.map((data) => (
      <DataList
        type="artist"
        name={data?.name}
        description={data?.description}
        country={data?.location}
      />
    ));
  };

  useEffect(() => {
    getArtistsList()
      .then((r) => setArtistList(r.data.result));
  }, []);

  return (
    <ListComponent
      type="Artist"
      list={renderCategories()}
      registPath="/artista/register"
    />
  );
};

export default ListArtists;
