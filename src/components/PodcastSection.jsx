import styled from 'styled-components';
import EmailForm from './EmailForm';
import PodcastPartners from './PodcastPartners';

const PodcastInfoWrapper = styled.section`
  
`;

const PodcastSection = () => {

  return (
    <section>
      <h1>Publish your podcasts everywhere.</h1>
      <p>
        Upload your audio to Pod with a single click. We'll 
        then distribute your podcast to Spotify, Apple Podcasts, 
        Google Podcasts, Pocket Casts and more!
      </p>
      <PodcastPartners />
      <EmailForm />
    </section>
  )
};

export default PodcastSection;