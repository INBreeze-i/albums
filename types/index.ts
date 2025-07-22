export interface Gallery {
  id: number;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  images: Image[];
}

export interface Image {
  id: number;
  filename: string;
  originalName?: string;
  alt?: string;
  caption?: string;
  galleryId: number;
  gallery?: Gallery;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface GalleryWithImages extends Gallery {
  images: Image[];
}