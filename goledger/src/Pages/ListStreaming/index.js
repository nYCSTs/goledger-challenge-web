import { useEffect, useState } from 'react';
import ListComponent from '../../Components/ListComponent';
import StreamingData from '../../Components/StreamingData';
import { getAssetDataList } from '../../Services/artistServices';

const ListStreaming = () => {
  const [filterWord, setFilterWord] = useState('');
  const [streamingList, setStreamingList] = useState();
  const [filteredStreamingList, setFilteredStreamingList] = useState();

  const getStreamingList = () => {
    getAssetDataList('streaming')
      .then((r) => setStreamingList(r.data.result));
  };

  const renderStreaming = () => {
    if (!streamingList || !filteredStreamingList) {
      return undefined;
    } if (filteredStreamingList.length === 0) {
      return <h1>No results.</h1>;
    }
    return filteredStreamingList?.map((ss, idx) => (
      <StreamingData
        key={idx}
        data={ss}
        refreshFunction={getStreamingList}
      />
    ));
  };

  useEffect(() => {
    getStreamingList();
  }, []);

  useEffect(() => {
    setFilteredStreamingList(streamingList);
  }, [streamingList]);

  useEffect(() => {
    setFilteredStreamingList(
      streamingList?.filter((fa) => fa.name.toLowerCase().includes(filterWord.toLowerCase())),
    );
  }, [filterWord]);

  return (
    <ListComponent
      type="Streaming"
      list={renderStreaming()}
      registPath="/streaming/register"
      filter={filterWord}
      setFilter={setFilterWord}
    />
  );
};

export default ListStreaming;
