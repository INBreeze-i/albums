export interface Album {
  id: number;
  title: string;
  description?: string | null;
  coverImage?: string | null;
  createdAt: Date;
  updatedAt: Date;
  photos?: Photo[];
}

export interface Photo {
  id: number;
  url: string;
  title?: string | null;
  albumId: number;
  album?: Album;
  createdAt: Date;
}

export interface AlbumWithPhotos extends Album {
  photos: Photo[];
}

export interface CreateAlbumData {
  title: string;
  description?: string;
  coverImage?: string;
}

export interface CreatePhotoData {
  url: string;
  title?: string;
  albumId: number;
}