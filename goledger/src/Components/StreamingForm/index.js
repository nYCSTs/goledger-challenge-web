import {
  P, Input,
} from '../../Constants/usefulStyles';

const StreamingForm = ({ streamingServiceName, setStreamingServiceName }) => (
  <>
    <P>Streaming service name:</P>
    <Input value={streamingServiceName || ''} onChange={(e) => setStreamingServiceName(e.target.value)} />
  </>
);

export default StreamingForm;
