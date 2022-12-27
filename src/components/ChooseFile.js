import React, { Component } from 'react';
import { URL_PATH } from '../config/urlPath';
import { AppWrapper } from './common/AppWrapper';
import ClipLoader from 'react-spinners/BeatLoader';
import * as JSZip from 'jszip';

export class ChooseFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drag: false,
      metadata: {},
      isDisabled: false,
      jsonFound: false,
      imagesFound: false,
      videosFound: false,
      validFileFound: true,
      parseState: 'pending',
    };
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }

  isFilenameMatch = (nameA, nameB) =>
    nameA.replace(/^.*[\\/]/, '') === nameB.replace(/^.*[\\/]/, '');

  parseJSON = async files => {
    try {
      const zip = await JSZip.loadAsync(files).catch(() => {
        this.setState({ validFileFound: false });
        if (!this.state.validFileFound) {
          alert('Invalid File!');
          window.location.reload();
        }
      });

      for (const fileName of Object.keys(zip.files)) {
        if (fileName.toLocaleLowerCase().includes('metadata.json')) {
          const fileData = await zip.files[fileName].async('string');
          const fileText = fileData;
          const metadata = JSON.parse(fileText);
          this.setState({ metadata, jsonFound: true, parseState: 'success' });
          this.setState({ parseState: 'success' })
        }
      }

      for (const fileName of Object.keys(zip.files)) {
        const isWebm = fileName.toLocaleLowerCase().includes('.webm');
        if (isWebm) {
          const { screen_videos, camera_videos } = this.state.metadata.payload.data.attributes;
          if (this.isFilenameMatch(screen_videos.url, fileName)) {
            this.setState({ videosFound: true });
          } else if (this.isFilenameMatch(camera_videos.url, fileName)) {
            this.setState({ videosFound: true });
          }
        }
      }
    } catch (e) {
      this.setState({ parseState: 'error', isDisabled: false })
    }

  };

  handleFileInputChange = async e => {
    try {
      e.preventDefault();
      e.stopPropagation();

      this.setState({ isDisabled: true });

      // Parse the zip and store it
      await this.parseJSON(e.target.files[0]);
      const zip = await JSZip.loadAsync(e.target.files[0]).catch(err =>
        this.setState({ errorMessage: err })
      );

      if (this.state.jsonFound === true) {
        try {
          for (const filename of Object.keys(zip.files)) {
            const fileData = await zip.files[filename].async('blob');
            const blobUrl = URL.createObjectURL(fileData);
            const metadata = this.state.metadata;

            const supportedImageFormats = ['.png', '.jpeg', '.jpg', '.gif'];
            const isSupportedImage = supportedImageFormats.some(extension =>
              filename.toLocaleLowerCase().includes(extension)
            );
            const isWebm = filename.toLocaleLowerCase().includes('.webm');

            if (isSupportedImage) {
              // Images
              metadata.payload.included[0].attributes.images.forEach((el, index) => {
                if (this.isFilenameMatch(el, filename)) {
                  metadata.payload.included[0].attributes.images[index] = blobUrl;
                  this.setState({ metadata, imagesFound: true });
                }
              });

              // Screenshots
              metadata.payload.data.attributes.screenshots.forEach((el, index) => {
                if (this.isFilenameMatch(el, filename)) {
                  metadata.payload.data.attributes.screenshots[index] = blobUrl;
                  this.setState({ metadata });
                }
              });
            } else if (isWebm) {
              const { screen_videos, camera_videos } = metadata.payload.data.attributes;

              const camVideoUrl = camera_videos.url ? camera_videos.url : '';
              const screenVideoUrl = screen_videos.url ? screen_videos.url : '';

              if (this.isFilenameMatch(screenVideoUrl, filename)) {
                screen_videos.url = blobUrl;
                this.setState({ metadata, videosFound: true });
              } else if (this.isFilenameMatch(camVideoUrl, filename)) {
                camera_videos.url = blobUrl;
                this.setState({ metadata, videosFound: true });
              }
            }
          }
        } catch (e) {
          this.setState({ validFileFound: false, isDisabled: false });
          return;
        }
      }

      if (this.state.jsonFound === true) {
        this.setState({ isDisabled: false });
        this.props?.history?.push({
          pathname: URL_PATH.SESSION,
          state: this.state.metadata,
        });
      } else {
        this.setState({ isDisabled: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ isDisabled: false });
    }
  };

  dropRef = React.createRef();

  onClickNext = () => {
    if (this.state.metadata) {
      this.props.history.push(URL_PATH.SESSION);
    }
  };

  errorMessage = () => {
    if (!this.state.jsonFound) {
      return 'JSON not found';
    }
    if (!this.state.videosFound) {
      return 'Videos not found';
    }
    if (!this.state.imagesFound) {
      return 'Images not found';
    } else if (!this.state.validFileFound) {
      return 'Invalid ZIP File';
    } else return null;
  };

  render() {
    const { isDisabled, parseState } = this.state;
    return (
      <div className='container mt-5'>
        <div
          className={`chooseFile droppable text-center ${isDisabled && 'disabledStyle'}`}
          onClick={() => {
            document.getElementById('selectFiles').click();
            this.setState({
              metadata: {},
            });
          }}
          ref={this.dropRef}
        >
          <img
            alt='icon'
            src='https://img.icons8.com/material-outlined/24/000000/upload-to-cloud.png'
            className='mb-1'
          />
          <ClipLoader color='#0072b1' loading={isDisabled} size={10} />
          <p>Click here to select</p>
          <small>Only single .zip files are accepted</small>
          <br />
          {parseState !== "pending" &&
            <small className={`t-3 text-danger message`} aria-label="message">{(!isDisabled || parseState !== "pending") && this.errorMessage()}</small>}
        </div>
        <div className='text-center mt-3'>
          <input
            type='file'
            ref={this.fileInput}
            id='selectFiles'
            name='selectFiles'
            onChange={e => this.handleFileInputChange(e)}
            accept='.zip,.rar,.7zip'
            className='d-none'
            data-testid="select-option"
          />
        </div>
      </div>
    );
  }
}

export default AppWrapper(ChooseFile);
