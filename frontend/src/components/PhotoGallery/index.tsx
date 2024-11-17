import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';
import ImageGallery from 'react-image-gallery';

import { Photo } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import './index.css';

type PhotoGalleryProps = {
  photos: Array<Photo>;
}

function PhotoGallery({ photos }: PhotoGalleryProps) {

  const images = photos.map(photo => ({
    original: getUploadURL(photo.file.formats.small.url),
    thumbnail: getUploadURL(photo.file.formats.thumbnail.url),
    originalHeight: 400,
    thumbnailHeight: 100,
  }));

  return (
    <div style={{ backgroundColor: 'black' }}>
      <ImageGallery items={images} showThumbnails showNav/>
    </div>
  );
}

export default PhotoGallery;
