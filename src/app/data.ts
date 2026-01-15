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
    // src: "https://images.pexels.com/photos/35051828/pexels-photo-35051828.jpeg",
   src: "https://artwork-hub.vercel.app/images/catwithrain.jpg",
    alt: "Rainy Day Cat Parade",
    ratio: 1.5,
  },
  {
    id: "p2",
    src: "https://artwork-hub.vercel.app/images/duckriver.jpg",
    alt: "Gentle Afternoon by the River",
    ratio: 0.9,
  },
  {
    id: "p3",
    src: "https://artwork-hub.vercel.app/images/farmer.jpg",
    alt: "River Through the Sheep Fields",
    ratio: 1.2,
  },
  {
    id: "p4",
    src: "https://artwork-hub.vercel.app/images/fish.jpg",
    alt: "Goldfish Among the Water Lilies",
    ratio: 1.3,
  },
  {
    id: "p5",
    src: "https://artwork-hub.vercel.app/images/flowers.jpg",
    alt: "Garden in Full Bloom",
    ratio: 0.85,
  },
  {
    id: "p6",
    src: "https://artwork-hub.vercel.app/images/fluffyballs.jpg",
    alt: "Fluffy Friends Chatting",
    ratio: 1.1,
  },
  {
    id: "p7",
    src: "https://artwork-hub.vercel.app/images/greendog.jpg",
    alt: "Pond Pals in Clover",
    ratio: 1.9,
  },
  {
    id: "p8",
    src: "https://artwork-hub.vercel.app/images/labubu.jpg",
    alt: "Purple Labubu Grin",
    ratio: 0.95,
  },
  {
    id: "p9",
    src: "https://artwork-hub.vercel.app/images/plant.jpg",
    alt: "Trees on the Sunny Hill",
    ratio: 1.55,
  },
  {
    id: "p10",
    src: "https://artwork-hub.vercel.app/images/redroofcat.jpg",
    alt: "Cat on the Autumn Roof",
    ratio: 1.05,
  },
  {
    id: "p11",
    src: "https://artwork-hub.vercel.app/images/sakura.jpg",
    alt: "Path Under the Cherry Blossoms",
    ratio: 1.35,
  },
  {
    id: "p12",
    src: "https://artwork-hub.vercel.app/images/winter.jpg",
    alt: "Quiet Cabin in the Snow",
    ratio: 1.6,
  },
  {
    id: "p13",
    src: "https://artwork-hub.vercel.app/images/sunsetcat.jpg",
    alt: "Dusk and the Cat",
    ratio: 1.25,
  },
  {
    id: "p14",
    src: "https://artwork-hub.vercel.app/images/shiba_frog.jpg",
    alt: "shiba and Frog Chat",
    ratio: 0.8,
  },
  {
    id: "p15",
    src: "https://artwork-hub.vercel.app/images/pinkboy.jpg",
    alt: "Autumn Walk with a Dragon Friend",
    ratio: 2.05,
  },
  {
    id: "p16",
    src: "https://artwork-hub.vercel.app/images/autum.jpg",
    alt: "Colors of the Fall Canopy",
    ratio: 1.4,
  },
  {
    id: "p17",
    src: "https://artwork-hub.vercel.app/images/beach.jpg",
    alt: "Sailing Into Sunset Dreams",
    ratio: 0.9,
  },
  {
    id: "p18",
    src: "https://artwork-hub.vercel.app/images/bear.jpg",
    alt: "Surprised Cat and Cozy Reindeer",
    ratio: 1.6,
  },
  {
    id: "p19",
    src: "https://artwork-hub.vercel.app/images/catplay.jpg",
    alt: "Sunset Swing With You",
    ratio: 1.1,
  },
];
