import { useState, useEffect } from 'react';
import AlbumData from '../../Components/AlbumData';
import ListComponent from '../../Components/ListComponent';
import { getAssetDataList } from '../../Services/artistServices';

const ListAlbuns = () => {
  const [filterWord, setFilterWord] = useState('');
  const [albumList, setAlbumList] = useState();
  const [filteredAlbumList, setFilteredAlbumList] = useState();

  const getAlbumList = () => {
    getAssetDataList('album')
      .then((r) => setAlbumList(r.data.result));
  };

  const renderAlbuns = () => {
    if (!albumList || !filteredAlbumList) {
      return undefined;
    } if (filteredAlbumList.length === 0) {
      return <h1>No results.</h1>;
    }
    return filteredAlbumList?.map((data, idx) => (
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

  useEffect(() => {
    setFilteredAlbumList(albumList);
  }, [albumList]);

  useEffect(() => {
    setFilteredAlbumList(
      albumList?.filter(
        (fa) => fa.name.toLowerCase().includes(filterWord.toLowerCase())
        || fa.genre.toLowerCase().includes(filterWord.toLowerCase()),
      ),
    );
  }, [filterWord]);

  return (
    <ListComponent
      type="Album"
      filter={filterWord}
      list={renderAlbuns()}
      setFilter={setFilterWord}
      registPath="/album/register"
      placeholder="filter by album name or genre"
    />
  );
};

export default ListAlbuns;
