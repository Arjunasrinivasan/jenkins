import React from 'react';

export default function Videos({ data }) {
  return (
    <div>
      {
        ! data.payload.data.attributes.camera_videos.url &&
        <span>Sorry, no videos available.</span>
      }
      {
        data.payload.data.attributes.camera_videos.url &&
        <React.Fragment>
          <ul>
            <li className="m-1">
              <div className="media">
                <video
                  id="mb-3 video-player"
                  controls
                  crossOrigin=""
                  playsInline
                  preload="auto"
                  width="75%"
                >
                  <source
                    src={data.payload.data.attributes.camera_videos.url}
                    size="576"
                    type="video/webm"
                  />
                </video>
              </div>
            </li>
          </ul>
          <div>
            <h5>Note</h5>
            <div id="video-converter-text">
              In order to view these videos, please download the video codec{' '}
              <a href="https://www.proctoru.com/downloads/codec.msi" target="_blank" rel="noreferrer">
                <strong>here</strong>
              </a>{' '}
              or download the video converter{' '}
              <a
                href="https://secure.logmeinrescue.com/common/msi.aspx?id=aviconverter"
                target="_blank"
                rel="noreferrer"
              >
                <strong>here</strong>
              </a>
              .
            </div>
          </div>
        </React.Fragment>
      }
    </div>
  );
}
