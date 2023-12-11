import styled from 'styled-components';
import PodcastSection from './components/PodcastSection';
import logo from './assets/desktop/logo.svg';
import patternDots from './assets/desktop/bg-pattern-dots.svg';
import hostMobile from './assets/mobile/image-host.jpg';
import hostTablet from './assets/tablet/image-host.jpg';
import hostDesktop from './assets/desktop/image-host.jpg';

const AppWrapper = styled.main`

`;

function App() {
  

  return (
    <>
      <main>
        <div 
          data-testid="logo-container"
          className="logo-container">
          <img 
            src={logo}
            alt="Podcast company logo"
          />
          <span>pod</span>
        </div>
        <div
          className="decorative-img"
          aria-hidden="true"
        ></div>
        <img 
          data-testid="dot-pattern"
          className="dot-pattern"
          src={patternDots}
          alt=""
          aria-hidden="true"
        />
        <PodcastSection />
      </main>
    </>
  )
}

export default App
