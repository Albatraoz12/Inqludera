export interface Root {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  documentId: string;
  Title: string;
  body: Body[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  jobType: JobType;
  location: Location;
  Image: Image;
}

export interface Body {
  type: string;
  children: Children[];
  level?: number;
  format?: string;
}

export interface Children {
  type: string;
  text?: string;
  bold?: boolean;
  children?: Children2[];
}

export interface Children2 {
  type: string;
  text: string;
}

export interface JobType {
  id: number;
  documentId: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Location {
  id: number;
  documentId: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: string;
  width: any;
  height: any;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {}
