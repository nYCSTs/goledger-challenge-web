import { useState, useEffect } from 'react';
import AlbumData from '../../Components/AlbumData';
import ListComponent from '../../Components/ListComponent';
import { getAssetDataList } from '../../Services/artistServices';

const ListAlbuns = () => {
  const [albumList, setAlbumList] = useState([]);

  const getAlbumList = () => {
    getAssetDataList('album')
      .then((r) => setAlbumList(r.data.result));
  };

  const renderAlbuns = () => {
    if (albumList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return albumList?.map((data, idx) => (
      <AlbumData
        key={idx}
        data={data}
        refreshFunction={getAlbumList}
      />
    ));
  };

  useEffect(() => {
    getAlbumList();
  }, []);

  return (
    <ListComponent
      type="Album"
      list={renderAlbuns()}
      registPath="/album/register"
    />
  );
};

export default ListAlbuns;
