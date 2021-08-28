import {
  InputDiv, P, Input,
} from '../AssetForm/Style';

const StreamingForm = ({ streamingServiceName, setStreamingServiceName }) => (
  <InputDiv>
    <P>Streaming service name:</P>
    <Input value={streamingServiceName} onChange={(e) => setStreamingServiceName(e.target.value)} />
  </InputDiv>
);

export default StreamingForm;
