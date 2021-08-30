import ReactLoading from 'react-loading';
import LoadingDiv from './Style';

const Loading = () => (
  <LoadingDiv>
    <ReactLoading type="spin" color="#3F72AF" height={120} width={120} />
  </LoadingDiv>
);

export default Loading;
