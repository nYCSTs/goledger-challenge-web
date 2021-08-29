import { useParams } from 'react-router';
import ListArtistInformation from '../../Components/ListArtistInformation';

const ArtistPage = () => {
  const { id } = useParams();

  return (
    <ListArtistInformation
      id={'artist:'.concat(id)}
    />
  );
};

export default ArtistPage;
