import type { Schema, Attribute } from '@strapi/strapi';

export interface DefaultPhoto extends Schema.Component {
  collectionName: 'components_default_photos';
  info: {
    displayName: 'Photo';
    description: '';
  };
  attributes: {
    caption: Attribute.Text;
    file: Attribute.Media<'images'> & Attribute.Required;
    description: Attribute.Text;
    date: Attribute.Date;
    time: Attribute.Time;
    camera: Attribute.String;
    location: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'default.photo': DefaultPhoto;
    }
  }
}
