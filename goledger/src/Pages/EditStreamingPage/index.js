import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import AssetForm from '../../Components/AssetForm';
import StreamingForm from '../../Components/StreamingForm';
import { getAssetData2, updateAsset } from '../../Services/artistServices';

const EditStreamingPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [streamingServiceName, setStreamingServiceName] = useState();

  const updateStreamingService = async () => {
    const header = {
      update: {
        '@assetType': 'streaming',
        name: streamingServiceName,
      },
    };
    const response = await updateAsset(header)
      .then((r) => r);
    if (response.status === 200) {
      alert('The streaming service was successfully updated!');
      history.push('/streaming/');
    }
  };

  useEffect(() => {
    getAssetData2('streaming:'.concat(id))
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
