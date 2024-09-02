import React from 'react';
import '../styles/Music.css'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
// import CircularProgressBar from './mini/CircularProgressBar'; // Import the new component
import NowPlaying from './mini/NowPlaying';
import CustomIframe from './mini/CustomIframe';

export const Music = () => {

  // const responsive = {
  //   superLargeDesktop: {
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  return (
    <section className="music" id="music">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="music-bx wow zoomIn" responsive="">
              <h2>🎵 Music</h2>
              <p>A reflection of personal taste and a canvas for inspiration. Explore my currently playing on Spotify platform or saved favorites and discover the tunes that shape my world.</p>
              <div className="music-grid">
                <div className="music-item">
                  {/* Placeholder for Currently Playing Widget */}
                  <div className="currently-playing">
                    {/* Content for the currently playing widget */}
                    <p>Currently Playing on Spotify</p>
                    <NowPlaying />
                  </div>
                </div>
                <div className="music-item">
                  <div className="spotify-player">
                    {/* Placeholder for Currently Playing Widget */}
                    <div className="favorite-playlist">
                      {/* Content for the currently playing widget */}
                      <p>Favorite Playlist</p>
                      {/* <iframe
                        className='spotify-frame'
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/playlist/26TGFePCib8AoeNZit6HMz?utm_source=generator"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      ></iframe> */}
                      <CustomIframe src="https://open.spotify.com/embed/playlist/26TGFePCib8AoeNZit6HMz?utm_source=generator" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
