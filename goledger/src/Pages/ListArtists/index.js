import { useState, useEffect } from 'react';
import ArtistData from '../../Components/ArtistData';
import ListComponent from '../../Components/ListComponent';
import { getAssetDataList } from '../../Services/artistServices';

const ListArtists = () => {
  const [filterWord, setFilterWord] = useState('');
  const [artistList, setArtistList] = useState();
  const [filteredArtistList, setFilteredArtistList] = useState();

  const getArtistList = async () => {
    getAssetDataList('artist')
      .then((r) => setArtistList(r.data.result));
  };

  const renderArtists = () => {
    if (!artistList || !filteredArtistList) {
      return undefined;
    } if (filteredArtistList.length === 0) {
      return <h1>No results.</h1>;
    }
    return filteredArtistList?.map((data, idx) => (
      <ArtistData
        key={idx}
        type="artist"
        data={data}
        description={data?.description}
        refreshFunction={getArtistList}
      />
    ));
  };

  useEffect(() => {
    getArtistList();
  }, []);

  useEffect(() => {
    setFilteredArtistList(artistList);
  }, [artistList]);

  useEffect(() => {
    setFilteredArtistList(
      artistList?.filter(
        (fa) => fa.name.toLowerCase().includes(filterWord.toLowerCase())
        || fa.location.toLowerCase().includes(filterWord.toLowerCase()),
      ),
    );
  }, [filterWord]);

  return (
    <ListComponent
      type="Artist"
      filter={filterWord}
      list={renderArtists()}
      setFilter={setFilterWord}
      registPath="/artist/register"
      placeholder="filter by artist name or country"
    />
  );
};

export default ListArtists;
