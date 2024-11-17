import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultPhoto extends Struct.ComponentSchema {
  collectionName: 'components_default_photos';
  info: {
    description: '';
    displayName: 'Photo';
  };
  attributes: {
    camera: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    location: Schema.Attribute.String;
    time: Schema.Attribute.Time;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.photo': DefaultPhoto;
    }
  }
}
