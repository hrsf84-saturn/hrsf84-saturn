import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

function PhotoPanel({ photos, handlePhotoClick, book }) {
  return (
    <div id="photo-panel">
      <h2 className='photo-panel-header'>Select Photos for Your Next Voyage</h2>
      <div className="select-book" onClick={() => book()} role="button" tabIndex={0}>
        <img src="/images/book.png" alt="logo" />
      </div>
      <Masonry
        className="photo-gallery"
        elementType="ul"
      >
        {photos.map((photo, index) => (
          <li
            className="photo"
            key={photo.id}
            onClick={() => handlePhotoClick(index)}
            role="menuitem"
          >
            <img
              src={photo.image_url}
              alt={photo.name}
              width={Math.floor(document.getElementById('app').clientWidth / 4)}
            />
          </li>
        ))}
      </Masonry>
    </div>
  );
}

PhotoPanel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handlePhotoClick: PropTypes.func.isRequired,
  book: PropTypes.func.isRequired,
};

export default PhotoPanel;
