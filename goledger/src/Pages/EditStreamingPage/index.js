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
  const [slide, setSlide] = useState(false);
  const [streamingServiceName, setStreamingServiceName] = useState();

  const updateStreamingService = async () => {
    if (streamingServiceName !== '') {
      setSlide(true);
      await deleteAsset('streaming:'.concat(id))
        .then((r) => r);
      const response = await registerAsset('streaming', { name: streamingServiceName })
        .then((ss) => ss);
      if (response.status === 200) {
        alert('The streaming service was successfully updated!');
      }
      history.push('/streaming/');
    } else {
      alert('Please fill in all fields.');
    }
  };

  useEffect(() => {
    getAssetData('streaming:'.concat(id))
      .then((r) => setStreamingServiceName(r.data.result[0]?.name));
  }, []);

  return (
    <AssetForm asset="streaming" title="Streaming" submitFunction={updateStreamingService} slide={slide}>
      <StreamingForm
        streamingServiceName={streamingServiceName}
        setStreamingServiceName={setStreamingServiceName}
      />
    </AssetForm>

  );
};

export default EditStreamingPage;
