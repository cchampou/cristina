import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

import { Photo } from '../../services/api';
import { getUploadURL } from '../../utils/uploads';

import './index.css';

type PhotoGalleryProps = {
  photos: Array<Photo>;
}

function PhotoGallery({ photos }: PhotoGalleryProps) {

  const images: ReactImageGalleryItem[] = photos.map(photo => ({
    original: getUploadURL(photo.file.formats.large.url),
    thumbnail: getUploadURL(photo.file.formats.thumbnail.url),
    originalHeight: window.innerHeight * 0.6,
    description: photo.description,
  }));

  return (
    <div id="gallery" style={{ backgroundColor: 'black', minHeight: '0.6vh' }}>
      <ImageGallery items={images} showThumbnails showNav showPlayButton={false}/>
    </div>
  );
}

export default PhotoGallery;
