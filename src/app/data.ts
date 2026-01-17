export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  /**
   * Used for a 3-up justified row layout.
   * Higher number = wider image within the row.
   */
  ratio: number;
  /**
   * Object fit for the image: 'cover' or 'contain'.
   */
  objectFit?: 'cover' | 'contain';
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
    {
    id: "p20",
    src: "https://artwork-hub.vercel.app/images/bag.jpg",
    alt: "Cute Bag",
    ratio: 1.1,
  },
  {
    id: "p21",
    src: "https://artwork-hub.vercel.app/images/cabin.jpg",
    alt: "Cabin in the Snow",
    ratio: 1.1,
  },
  {
    id: "p22",
    src: "https://artwork-hub.vercel.app/images/dogcar.jpg",
    alt: "Dog Car Ride",
    ratio: 1.3,
  },
  {
    id: "p23",
    src: "https://artwork-hub.vercel.app/images/ducksleep.jpg",
    alt: "Duck sleeping",
    ratio: 1.3,
  },
  {
    id: "p24",
    src: "https://artwork-hub.vercel.app/images/goose.jpg",
    alt: "Child with Goose",
    ratio: 1.2,
  },
  {
    id: "p25",
    src: "https://artwork-hub.vercel.app/images/manycats.jpg",
    alt: "Many Cats Gathered",
    ratio: 0.8,
  },
  {
    id: "p26",
    src: "https://artwork-hub.vercel.app/images/moutain.jpg",
    alt: "Moutain View",
    ratio: 0.6,
    objectFit: 'contain',
  },
  {
    id: "p27",
    src: "https://artwork-hub.vercel.app/images/nightview.jpg",
    alt: "Night View",
    ratio: 1.2
  },
  {
    id: "p28",
    src: "https://artwork-hub.vercel.app/images/phonebox.jpg",
    alt: "London Phone Box",
    ratio: 0.5,
    objectFit: 'contain',
  },
  {
    id: "p29",
    src: "https://artwork-hub.vercel.app/images/redgirl.jpg",
    alt: "Girl in Red Coat",
    
    ratio: 0.7,
  },
  {
    id: "p30",
    src: "https://artwork-hub.vercel.app/images/sakura2.jpg",
    alt: "sakura with clouds",
    ratio: 1.3,
  },
  {
    id: "p31",
    src: "https://artwork-hub.vercel.app/images/sheeppatern.jpg",
    alt: "Yellow Sheep Pattern",
    ratio: 1.2,
  },
  {
    id: "p32",
    src: "https://artwork-hub.vercel.app/images/sheeps.jpg",
    alt: "Sheeps in the Field",
    ratio: 0.8,
  },
  {
    id: "p33",
    src: "https://artwork-hub.vercel.app/images/snowman2.jpg",
    alt: "Snowman with Scarf",
    ratio: 1.1,
  },
  {
    id: "p34",
    src: "https://artwork-hub.vercel.app/images/snowtemple.jpg",
    alt: "Snow Temple",
    ratio: 0.7,
    objectFit: 'contain',
  },
  {
    id: "p35",
    src: "https://artwork-hub.vercel.app/images/twocats.jpg",
    alt: "Two Cats Sitting",
    ratio: 1.1,
  },
  {
    id: "p36",
    src: "https://artwork-hub.vercel.app/images/whitebird.jpg",
    alt: "Red-frowned crane",
    ratio: 1.1,
  },
  {
    id: "p37",
    src: "https://artwork-hub.vercel.app/images/animal.jpg",
    alt: "Animal Friends",
    ratio: 1.1,
  },
  {
    id: "p38",
    src: "https://artwork-hub.vercel.app/images/beach2.jpg",
    alt: "Nice Beach",
    ratio: 0.6,
    objectFit: 'contain',
  },
  {
    id: "p39",
    src: "https://artwork-hub.vercel.app/images/bluehairgirls.jpg",
    alt: "blue hair girl",
    ratio: 1.2,
  },
  {
    id: "p40",
    src: "https://artwork-hub.vercel.app/images/fluffyball2.jpg",
    alt: "fluffy ball friends",
    ratio: 0.7,
  },
  {
    id: "p41",
    src: "https://artwork-hub.vercel.app/images/girlcarry.jpg",
    alt: "girl carrying flowers",
    ratio: 1.2,
  },
  {
    id: "p42",
    src: "https://artwork-hub.vercel.app/images/goodbear.jpg",
    alt: "good bear",
    ratio: 1.0,
  },
  {
    id: "p43",
    src: "https://artwork-hub.vercel.app/images/mansea.jpg",
    alt: "man by the sea",
    ratio: 1.2,
  },
  {
    id: "p44",
    src: "https://artwork-hub.vercel.app/images/nightview2.jpg",
    alt: "peaceful night view",
    ratio: 1.5,
  },
  {
    id: "p45",
    src: "https://artwork-hub.vercel.app/images/pinkbeach.jpg",
    alt: "peaceful beach",
    ratio: 1.5,
  },
  {
    id: "p46",
    src: "https://artwork-hub.vercel.app/images/sunset.jpg",
    alt: "sunset view",
    ratio: 1.2,
  },
  {
    id: "p47",
    src: "https://artwork-hub.vercel.app/images/watermelon.jpg",
    alt: "duck swimming in watermelon pool",
    ratio: 1.2,
  },
  {
    id: "p48",
    src: "https://artwork-hub.vercel.app/images/whitedog.jpg",
    alt: "white dog",
    ratio: 1.0,
  },
  {
    id: "p49",
    src: "https://artwork-hub.vercel.app/images/wintercabin.jpg",
    alt: "man walking in winter cabin",
    ratio: 1.1,
  },
  {
    id: "p50",
    src: "https://artwork-hub.vercel.app/images/yellowbeach.jpg",
    alt: "Nice Beach",
    ratio: 0.6,
    objectFit: 'contain',
  },





];
