import { useEffect, useState } from 'react';
import ListComponent from '../../Components/ListComponent';
import StreamingData from '../../Components/StreamingData';
import { getAssetDataList } from '../../Services/artistServices';

const ListStreaming = () => {
  const [streamingList, setStreamingList] = useState([]);

  const renderStreaming = () => {
    if (streamingList?.length === 0) {
      return <h1>Carregando...</h1>;
    }
    return streamingList?.map((ss) => (
      <StreamingData
        streamingName={ss.name}
      />
    ));
  };

  useEffect(() => {
    getAssetDataList('streaming')
      .then((r) => setStreamingList(r.data.result));
  }, []);

  return (
    <ListComponent
      type="streaming"
      list={renderStreaming()}
      registPath="/streaming/register"
    />
  );
};

export default ListStreaming;
