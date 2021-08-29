import { useEffect, useState } from 'react';
import ListComponent from '../../Components/ListComponent';
import StreamingData from '../../Components/StreamingData';
import { getAssetDataList } from '../../Services/artistServices';

const ListStreaming = () => {
  const [streamingList, setStreamingList] = useState([]);

  const getStreamingList = () => {
    getAssetDataList('streaming')
      .then((r) => setStreamingList(r.data.result));
  };

  const renderStreaming = () => {
    if (streamingList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return streamingList?.map((ss, idx) => (
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

  return (
    <ListComponent
      type="Streaming"
      list={renderStreaming()}
      registPath="/streaming/register"
    />
  );
};

export default ListStreaming;
