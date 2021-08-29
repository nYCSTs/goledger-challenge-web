import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import AssetForm from '../../Components/AssetForm';
import StreamingForm from '../../Components/StreamingForm';
import {
  getAssetData, deleteAsset, registerAsset,
} from '../../Services/artistServices';

const EditStreamingPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [streamingServiceName, setStreamingServiceName] = useState();

  const updateStreamingService = async () => {
    await deleteAsset('streaming:'.concat(id))
      .then((r) => r);
    const response = await registerAsset('streaming', { name: streamingServiceName })
      .then((ss) => ss);
    if (response.status === 200) {
      alert('The streaming service was successfully updated!');
      history.push('/streaming/');
    }
  };

  useEffect(() => {
    getAssetData('streaming:'.concat(id))
      .then((r) => setStreamingServiceName(r.data.result[0]?.name));
  }, []);

  return (
    <AssetForm asset="streaming" title="Streaming" submitFunction={updateStreamingService}>
      <StreamingForm
        streamingServiceName={streamingServiceName}
        setStreamingServiceName={setStreamingServiceName}
      />
    </AssetForm>

  );
};

export default EditStreamingPage;
