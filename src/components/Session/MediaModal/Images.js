import React from 'react';

export default function Images({ data }) {
  return (
    <div id="images" className="tab-pane active">
      {
        data.payload.included[0].attributes.images.length === 0 &&
        <span>No Images Available.</span>
      }
      <ul className="image-grid list-unstyled row">
        {data.payload.included[0].attributes.images.map((el) => (
          <div id="image_19572312" className="view-media-image" key={el}>
            <li className="col">
              <div className="js-view-media">
                <img className="rounded img-thumbnail" src={el} alt="ALT" />
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
