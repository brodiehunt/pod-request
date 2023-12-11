import IconApple from '../assets/desktop/apple-podcast.svg';
import IconGoogle from '../assets/desktop/google-podcasts.svg';
import IconPocket from '../assets/desktop/pocket-casts.svg';
import IconSpotify from '../assets/desktop/spotify.svg';
import styled from 'styled-components';

const PartnersList = styled.ul`
  
`;

const PodcastPartners = () => {
  return (
    <ul>
      <li>
        <img
          src={IconSpotify}
          alt=''
          aria-label="Spotify"
        />
      </li>
      <li>
        <img
          src={IconApple}
          alt=''
          aria-label="Apple Podcast"
        />
      </li>
      <li>
        <img
          src={IconGoogle}
          alt=''
          aria-label="Google Podcasts"
        />
      </li>
      <li>
        <img
          src={IconPocket}
          alt=''
          aria-label="Pocket Casts"
        />
      </li>
    </ul>
  )
};

export default PodcastPartners; 
