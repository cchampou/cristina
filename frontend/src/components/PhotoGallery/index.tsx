import React from 'react';

import { Photo } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import  './index.css';

type PhotoGalleryProps = {
  photos: Array<Photo>;
  onPhotoSelect: (photoIndex: number) => void;
}

function PhotoGallery({ photos, onPhotoSelect }: PhotoGalleryProps) {
  return (
    <nav>
      {photos.map((photo, index) => (
        <button key={photo.id} onClick={() => onPhotoSelect(index)} className="photo-gallery-button">
          <img
            src={getUploadURL(photo.file.data.attributes.formats.small.url)}
            alt={photo.file.data.attributes.name}
            className="photo-gallery-image"
          />
        </button>
      ))}
    </nav>
  );
}

export default PhotoGallery;
