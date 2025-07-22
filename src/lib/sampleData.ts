// Sample data for development and testing
export const sampleAlbums = [
  {
    title: "Nature Landscapes",
    description: "Beautiful natural landscapes from around the world",
    coverImage: "https://picsum.photos/600/400?random=1",
    photos: Array.from({ length: 10 }, (_, i) => ({
      url: `https://picsum.photos/800/600?random=${i + 10}`,
      title: `Nature Photo ${i + 1}`,
    }))
  },
  {
    title: "City Architecture",
    description: "Modern architecture and urban cityscapes",
    coverImage: "https://picsum.photos/600/400?random=2",
    photos: Array.from({ length: 12 }, (_, i) => ({
      url: `https://picsum.photos/800/600?random=${i + 20}`,
      title: `Architecture Photo ${i + 1}`,
    }))
  },
  {
    title: "Ocean Views",
    description: "Stunning ocean and beach photography",
    coverImage: "https://picsum.photos/600/400?random=3",
    photos: Array.from({ length: 8 }, (_, i) => ({
      url: `https://picsum.photos/800/600?random=${i + 30}`,
      title: `Ocean Photo ${i + 1}`,
    }))
  },
  {
    title: "Mountain Adventures",
    description: "Epic mountain ranges and hiking trails",
    coverImage: "https://picsum.photos/600/400?random=4",
    photos: Array.from({ length: 11 }, (_, i) => ({
      url: `https://picsum.photos/800/600?random=${i + 40}`,
      title: `Mountain Photo ${i + 1}`,
    }))
  },
  {
    title: "Street Photography",
    description: "Candid moments from city streets",
    coverImage: "https://picsum.photos/600/400?random=5",
    photos: Array.from({ length: 9 }, (_, i) => ({
      url: `https://picsum.photos/800/600?random=${i + 50}`,
      title: `Street Photo ${i + 1}`,
    }))
  },
  {
    title: "Wildlife Collection",
    description: "Amazing wildlife photography from various habitats",
    coverImage: "https://picsum.photos/600/400?random=6",
    photos: Array.from({ length: 10 }, (_, i) => ({
      url: `https://picsum.photos/800/600?random=${i + 60}`,
      title: `Wildlife Photo ${i + 1}`,
    }))
  }
];