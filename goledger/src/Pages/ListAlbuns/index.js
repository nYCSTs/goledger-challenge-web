import { useState, useEffect } from 'react';
import AlbumData from '../../Components/AlbumData';
import ListComponent from '../../Components/ListComponent';
import { getAssetData } from '../../Services/artistServices';

const ListAlbuns = () => {
  const [albumList, setAlbumList] = useState([]);

  const renderAlbuns = () => {
    if (albumList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return albumList?.map((data) => (
      <AlbumData
        name={data.name}
        year={data.year}
        genre={data.genre}
        explicit={data.explicit}
        nTracks={data.nTracks}
      />
    ));
  };

  useEffect(() => {
    getAssetData('album')
      .then((r) => setAlbumList(r.data.result));
  }, []);

  console.log(albumList);

  return (
    <ListComponent
      type="Album"
      list={renderAlbuns()}
      registPath="/album/register"
    />
  );
};

export default ListAlbuns;

// name, year, genre, explicit, nTracks
