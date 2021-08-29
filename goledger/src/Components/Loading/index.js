import ReactLoading from 'react-loading';
import LoadingDiv from './Style';

const Loading = () => (
  <LoadingDiv>
    <ReactLoading type="spin" color="#04AA6D" height={180} width={180} />
  </LoadingDiv>
);

export default Loading;
