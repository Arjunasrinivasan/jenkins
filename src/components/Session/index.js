import React, { Component } from 'react';
import Plyr from 'plyr';
import { AppWrapper } from '../common/AppWrapper';
import ActivityCard from './ActivityCard';
import AuthenticationMethodsCard from './AuthenticationMethodsCard';
import ContactCard from './ContactCard';
import ExamCard from './ExamCard';
import Header from './Header';
import MediaModal from './MediaModal';
import SessionCard from './SessionCard';
import TimelineCard from './TimelineCard';
import UserCard from './UserCard';
import { URL_PATH } from '../../config/urlPath';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    if (!this.props.location.state) {
      // Redirect to the choose-file page since there is no session loaded
      this.props.history.push(URL_PATH.CHOOSE_FILE);
      return;
    }

    // TODO: why is setTimeout needed here?
    setTimeout(() => this.setState({ loading: false }), 3000);

    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    this.cam = new Plyr(document.getElementById('cam'), {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'airplay'],
      speed: { selected: 1, options: [0.5, 0.75, 1, 2, 3, 4, 5, 10] },
      hideControls: false
    });
    this.screen = new Plyr(document.getElementById('screen'), {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'airplay'],
      speed: { selected: 1, options: [0.5, 0.75, 1, 2, 3, 4, 5, 10] },
      hideControls: false
    });

    this.players = [this.cam, this.screen];
    this.init();
  }

  changePlayerTime = time => {
    this.cam.currentTime = time;
    this.screen.currentTime = time;
  };

  togglePlayer = function(player) {
    if (player === 1) {
      this.players[0].fullscreen.toggle();
      this.players[0].toggleControls(true);
    } else {
      this.players[1].fullscreen.toggle();
    }
  };

  init = () => {

    const metadata = this.props.location.state;
    const camVideo = metadata.payload.data.attributes.camera_videos;
    const screenVideo = metadata.payload.data.attributes.screen_videos;
    let currentPlayer = 'screen';

    this.players.forEach(player => {
      if (player.elements.original.id === 'cam') {
        player.toggleControls(false);
        player.on('enterfullscreen', event => {
          currentPlayer = 'cam';
          player.toggleControls(true);
        });
        player.on('exitfullscreen', event => {
          currentPlayer = 'screen';
          if(screenVideo.url) {
            currentPlayer = 'cam';
            player.toggleControls(false);
          }
        });
      }

      // hide player controls if both screen and cam video are not available
      if( ! camVideo.url && ! screenVideo.url) {
        this.players[0].toggleControls(false);
        this.players[1].toggleControls(false);
      }
      else if(! screenVideo.url) {
        this.players[0].toggleControls(true);
        this.players[1].toggleControls(false);
      }

      const positions = this.props.location.state.events?.incident?.value || [];

      //Add each marker to the #seekbar element.
      // Add each marker to the #seekbar element.
      
      let a = document.getElementsByClassName('plyr__video-wrapper');
      a[0].style.width = '80%';
      Array.from(document.getElementsByClassName('plyr__progress')).forEach((seekBar, i) => {
        positions.forEach(position => {
          // Is position within range of the duration?
          if (position.time <= camVideo.duration / 1000) {
            // Calculate position.time in percentage..
            const left = (position.time / (camVideo.duration / 1000)) * 100 + '%';
            // ..create marker and give it the left value..
            const marker = document.createElement('div');
            marker.classList.add('bubles');
            marker.style.left = left;
            marker.style.position = 'absolute';
            marker.style.width = '4px';
            marker.style.height = '5px';
            marker.style.top = '7px';
            marker.style.backgroundColor = '#ffa500';
            marker.style.zIndex = '2';
            marker.setAttribute('title', `${position.note}`);
            marker.onclick = () => {
              this.cam.currentTime = position.time;
              this.screen.currentTime = position.time;
            };
            // ..and add the marker to the #seekbar.
            seekBar.appendChild(marker);
          }
        });
      });

      player.on('volumechange', event => {
        const target = this.otherPlayer(this[currentPlayer]);
        if (this[currentPlayer].elements.original.id === player.elements.original.id) {
          target.volume = this[currentPlayer].volume;
          target.muted = this[currentPlayer].muted;
        }
      });

      player.on('ended', event => {
        const target = this.otherPlayer(player);
        player.restart();
        target.restart();
      });

      player.on('ratechange', event => {
        const target = this.otherPlayer(player);
        target.speed = player.speed;
      });

      player.on('play', event => {
        const target = this.otherPlayer(player);
        if (target.playing === false) {
          target.currentTime = player.currentTime;
          target.play();
        }
      });
      player.on('pause', event => {
        const target = this.otherPlayer(player);
        if (target.playing === true) {
          console.log('pausing ' + target.id);
          target.pause();
        }
      });

      player.on('seeking', event => {
        const target = this.otherPlayer(this[currentPlayer]);
        if (this[currentPlayer].elements.original.id === player.elements.original.id) {
          target.currentTime = this[currentPlayer].currentTime;
        }
      });
    });
  };

  otherPlayer = function(currentPlayer) {
    const id = currentPlayer.elements.original.id;
    if (id === 'cam') {
      return this.screen;
    } else {
      return this.cam;
    }
  };

  onClickFullscreen = player => {
    this.togglePlayer(player);
  };

  render() {
    const metadata = this.props.location.state;
    const camVideo = metadata.payload.data.attributes.camera_videos;
    const screenVideo = metadata.payload.data.attributes.screen_videos;

    return (
      <>
        <div id="content" className="app-layout" data-behavior="app-layout">
          <div className="container">
            <Header />
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <UserCard data={metadata} />
                <SessionCard data={metadata} />
                <ContactCard data={metadata} />
                <AuthenticationMethodsCard data={metadata} />
                <ExamCard data={metadata} />
              </div>
              <div className="col-sm-12 col-lg-6">
                <TimelineCard data={metadata} />
                <div className="card mb-4">
                  <div className="card-header">Live Stream</div>
                  <div className="card-body">
                    <div className="video-box">
                      <div className="position-relative">
                        {
                          !camVideo.url &&
                          <div className="player-error"><span>No Videos Available.</span></div>
                        }
                        <video id="cam" controls crossOrigin="" playsInline>
                          <source src={camVideo.url} size="576" type="video/webm" />
                        </video>
                      </div>
                      <span
                        className="full-screen-btn-1"
                        onClick={() => {
                          this.onClickFullscreen(1);
                        }}
                      >
                        <i
                          className="fa fa-arrows"
                          data-toggle="tooltip"
                          data-placement="right"
                          title=""
                          data-original-title="Fullscreen"
                        ></i>
                      </span>
                      
                      <div className="position-relative">
                        {
                          ! screenVideo.url &&
                          <div className="player-error"><span>No Videos Available.</span></div>
                        }
                        <video id="screen" controls crossOrigin="" playsInline>
                          <source src={screenVideo.url} size="576" type="video/webm" />
                        </video>
                      </div>
                      <span
                        className="full-screen-btn-2"
                        onClick={() => {
                          this.onClickFullscreen(2);
                        }}
                      >
                        <i
                          className="fa fa-arrows"
                          data-toggle="tooltip"
                          data-placement="right"
                          title=""
                          data-original-title="Fullscreen"
                        ></i>
                      </span>
                    </div>
                  </div>
                </div>
                <ActivityCard data={metadata} changePlayerTime={this.changePlayerTime} />
              </div>
            </div>
          </div>
        </div>
        <MediaModal data={metadata} />
      </>
    );
  }
}

export default AppWrapper(Session);
