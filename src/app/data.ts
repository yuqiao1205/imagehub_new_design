export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  /**
   * Used for a 3-up justified row layout.
   * Higher number = wider image within the row.
   */
  ratio: number;
};

// Pexels examples (you can swap/add more). We vary span + aspect for a dynamic layout.
export const galleryItems: GalleryItem[] = [
  {
    id: "p1",
    src: "https://images.pexels.com/photos/35051828/pexels-photo-35051828.jpeg",
    alt: "Landscape photo from Pexels",
    ratio: 1.5,
  },
  {
    id: "p2",
    src: "https://images.pexels.com/photos/14857383/pexels-photo-14857383.jpeg",
    alt: "Minimal scene from Pexels",
    ratio: 0.9,
  },
  {
    id: "p3",
    src: "https://images.pexels.com/photos/34771519/pexels-photo-34771519.jpeg",
    alt: "Architecture detail from Pexels",
    ratio: 1.2,
  },
  {
    id: "p4",
    src: "https://images.pexels.com/photos/34608529/pexels-photo-34608529.jpeg",
    alt: "Coastal view from Pexels",
    ratio: 1.3,
  },
  {
    id: "p5",
    src: "https://images.pexels.com/photos/35114281/pexels-photo-35114281.jpeg",
    alt: "Portrait shot from Pexels",
    ratio: 0.85,
  },
  {
    id: "p6",
    src: "https://images.pexels.com/photos/35130783/pexels-photo-35130783.jpeg",
    alt: "Nature texture from Pexels",
    ratio: 1.1,
  },
  {
    id: "p7",
    src: "https://images.pexels.com/photos/35431759/pexels-photo-35431759.jpeg",
    alt: "City scene from Pexels",
    ratio: 1.9,
  },
  {
    id: "p8",
    src: "https://images.pexels.com/photos/35051828/pexels-photo-35051828.jpeg",
    alt: "Still life from Pexels",
    ratio: 0.95,
  },
  {
    id: "p9",
    src: "https://images.pexels.com/photos/35023209/pexels-photo-35023209.jpeg",
    alt: "Mountain view from Pexels",
    ratio: 1.55,
  },
  {
    id: "p10",
    src: "https://images.pexels.com/photos/30560968/pexels-photo-30560968.jpeg",
    alt: "Abstract photo from Pexels",
    ratio: 1.05,
  },
  {
    id: "p11",
    src: "https://images.pexels.com/photos/20152419/pexels-photo-20152419.jpeg",
    alt: "Interior photo from Pexels",
    ratio: 1.35,
  },
  {
    id: "p12",
    src: "https://images.pexels.com/photos/29703040/pexels-photo-29703040.jpeg",
    alt: "Street photo from Pexels",
    ratio: 1.6,
  },
  {
    id: "p13",
    src: "https://images.pexels.com/photos/34488286/pexels-photo-34488286.jpeg",
    alt: "Editorial shot from Pexels",
    ratio: 1.25,
  },
  {
    id: "p14",
    src: "https://images.pexels.com/photos/35096936/pexels-photo-35096936.jpeg",
    alt: "Detail shot from Pexels",
    ratio: 0.8,
  },
  {
    id: "p15",
    src: "https://images.pexels.com/photos/32315717/pexels-photo-32315717.jpeg",
    alt: "Wide panorama from Pexels",
    ratio: 2.05,
  },
];
