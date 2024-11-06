import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';
import ImageGallery from 'react-image-gallery';

import { Photo } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import './index.css';

type PhotoGalleryProps = {
  photos: Array<Photo>;
  onPhotoSelect: (photoIndex: number) => void;
}

function PhotoGallery({ photos, onPhotoSelect }: PhotoGalleryProps) {

  const images = photos.map(photo => ({
    original: getUploadURL(photo.file.data.attributes.formats.small.url),
    thumbnail: getUploadURL(photo.file.data.attributes.formats.thumbnail.url),
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
