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