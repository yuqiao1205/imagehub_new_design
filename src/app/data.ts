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
  /**
   * Description for the image, used on single image pages.
   */
  description?: string;
};

// Pexels examples (you can swap/add more). We vary span + aspect for a dynamic layout.
export const galleryItems: GalleryItem[] = [
  {
    id: "p1",
    // src: "https://images.pexels.com/photos/35051828/pexels-photo-35051828.jpeg",
    src: "https://artwork-hub.vercel.app/images/catwithrain.jpg",
    alt: "Rainy Day Cat Parade",
    ratio: 1.5,
    description: "A whimsical illustration of cats enjoying a rainy day, capturing the joy and playfulness in unexpected weather.",
  },
  {
    id: "p2",
    src: "https://artwork-hub.vercel.app/images/duckriver.jpg",
    alt: "Gentle Afternoon by the River",
    description: "A serene scene of ducks gliding through a peaceful river, showcasing the beauty of nature in a quiet moment.",
    ratio: 0.9,
  },
  {
    id: "p3",
    src: "https://artwork-hub.vercel.app/images/farmer.jpg",
    alt: "River Through the Sheep Fields",
    description: "A charming depiction of a river winding through a lush field of sheep, evoking a sense of tranquility and rural charm.",
    ratio: 1.2,
  },
  {
    id: "p4",
    src: "https://artwork-hub.vercel.app/images/fish.jpg",
    alt: "Goldfish Among the Water Lilies",
    description: "A delicate illustration of goldfish swimming among water lilies, highlighting the delicate balance of aquatic life.",
    ratio: 0.85,
  },
  {
    id: "p5",
    src: "https://artwork-hub.vercel.app/images/flowers.jpg",
    alt: "Garden in Full Bloom",
    description: "A vibrant portrayal of a garden bursting with colorful flowers, capturing the essence of spring and natural beauty.",
    ratio: 0.95,
  },
  {
    id: "p6",
    src: "https://artwork-hub.vercel.app/images/fluffyballs.jpg",
    alt: "Fluffy Friends Chatting",
    description: "A playful scene of fluffy animals gathered together, sharing stories and laughter in a cozy setting.",
    ratio: 1.5,
  },
  {
    id: "p7",
    src: "https://artwork-hub.vercel.app/images/greendog.jpg",
    alt: "Pond Pals in Clover",
    description: "A heartwarming illustration of dogs lounging by a pond, surrounded by lush greenery and golden sunlight.",
    ratio: 1.1,
  },
  {
    id: "p8",
    src: "https://artwork-hub.vercel.app/images/labubu.jpg",
    alt: "Purple Labubu Grin",
    description: "A playful character named Labubu with a cheerful grin, embodying joy and mischief in a whimsical style.",
    ratio: 0.77,
  },
  {
    id: "p9",
    src: "https://artwork-hub.vercel.app/images/plant.jpg",
    alt: "Trees on the Sunny Hill",
    description: "A peaceful landscape of trees standing tall on a sunny hill, reflecting the beauty of nature's harmony.",
    ratio: 1.56,
  },
  {
    id: "p10",
    src: "https://artwork-hub.vercel.app/images/redroofcat.jpg",
    alt: "Cat on the Autumn Roof",
    description: "A cozy scene of a cat perched on a red roof, surrounded by autumn leaves and a warm, inviting atmosphere.",
    ratio: 1.1,
  },
  {
    id: "p11",
    src: "https://artwork-hub.vercel.app/images/sakura.jpg",
    alt: "Path Under the Cherry Blossoms",
    description: "A serene path lined with cherry blossoms, creating a magical and ethereal atmosphere in the springtime.",
    ratio: 0.7,
  },
  {
    id: "p12",
    src: "https://artwork-hub.vercel.app/images/winter.jpg",
    alt: "Quiet Cabin in the Snow",
    description: "A tranquil winter scene featuring a cozy cabin nestled in the snow, evoking warmth and solitude.",
    ratio: 0.77,
  },
  {
    id: "p13",
    src: "https://artwork-hub.vercel.app/images/sunsetcat.jpg",
    alt: "Dusk and the Cat",
    description: "A beautiful sunset scene with a cat enjoying the golden hour, capturing the magic of twilight.",
    ratio: 1.0,
  },
  {
    id: "p14",
    src: "https://artwork-hub.vercel.app/images/shiba_frog.jpg",
    alt: "shiba and Frog Chat",
    description: "A cute shiba and frog chatting",
    ratio: 0.8,
  },
  {
    id: "p15",
    src: "https://artwork-hub.vercel.app/images/pinkboy.jpg",
    alt: "Autumn Walk with a Dragon Friend",
    description: "A charming autumn walk with a dragon friend, blending nature and fantasy in a delightful scene.",
    ratio: 1.45,
  },
  {
    id: "p16",
    src: "https://artwork-hub.vercel.app/images/autum.jpg",
    alt: "Colors of the Fall Canopy",
    description: "Vibrant colors of the fall canopy, showcasing the beauty of autumn foliage in a breathtaking display.",
    ratio: 1.4,
  },
  {
    id: "p17",
    src: "https://artwork-hub.vercel.app/images/beach.jpg",
    alt: "Sailing Into Sunset Dreams",
    description: "A peaceful sailing adventure into sunset dreams, capturing the serene beauty of a boat gliding across the water at dusk.",
    ratio: 0.65,
  },
  {
    id: "p18",
    src: "https://artwork-hub.vercel.app/images/bear.jpg",
    alt: "Surprised Cat and Cozy Reindeer",
    description: "A surprised cat and a cozy reindeer sharing a moment of warmth and friendship in a whimsical setting.",
    ratio: 1.45,
  },
  {
    id: "p19",
    src: "https://artwork-hub.vercel.app/images/catplay.jpg",
    alt: "Sunset Swing With You",
    description: "A romantic sunset swing with you, capturing the beauty of a couple enjoying a peaceful moment together.",
    ratio: 0.73,
  },
    {
    id: "p20",
    src: "https://artwork-hub.vercel.app/images/bag.jpg",
    alt: "Cute Bag",
    description: "A cute bag",
    ratio: 1.11,
  },
  {
    id: "p21",
    src: "https://artwork-hub.vercel.app/images/cabin.jpg",
    alt: "Cabin in the Snow",
    description: "A cabin in the snow",
    ratio: 0.9,
  },
  {
    id: "p22",
    src: "https://artwork-hub.vercel.app/images/dogcar.jpg",
    alt: "Dog Car Ride",
    description: "A dog car ride",
    ratio: 1.0,
  },
  {
    id: "p23",
    src: "https://artwork-hub.vercel.app/images/ducksleep.jpg",
    alt: "Duck sleeping",
    ratio: 1.0,
  },
  {
    id: "p24",
    src: "https://artwork-hub.vercel.app/images/goose.jpg",
    alt: "Child with Goose",
    ratio: 1.1,
  },
  {
    id: "p25",
    src: "https://artwork-hub.vercel.app/images/manycats.jpg",
    alt: "Many Cats Gathered",
    ratio: 0.96,
  },
  {
    id: "p26",
    src: "https://artwork-hub.vercel.app/images/moutain.jpg",
    alt: "Moutain View",
    ratio: 0.65,
    objectFit: 'contain',
  },
  {
    id: "p27",
    src: "https://artwork-hub.vercel.app/images/nightview.jpg",
    alt: "Night View",
    ratio: 1.0,
  },
  {
    id: "p28",
    src: "https://artwork-hub.vercel.app/images/phonebox.jpg",
    alt: "London Phone Box",
    ratio: 0.53,
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
    ratio: 1.0,
  },
  {
    id: "p31",
    src: "https://artwork-hub.vercel.app/images/sheeppatern.jpg",
    alt: "Yellow Sheep Pattern",
    ratio: 1.1,
  },
  {
    id: "p32",
    src: "https://artwork-hub.vercel.app/images/sheeps.jpg",
    alt: "Sheeps in the Field",
    ratio: 1.05,
  },
  {
    id: "p33",
    src: "https://artwork-hub.vercel.app/images/snowman2.jpg",
    alt: "Snowman with Scarf",
    ratio: 0.94,
  },
  {
    id: "p34",
    src: "https://artwork-hub.vercel.app/images/snowtemple.jpg",
    alt: "Snow Temple",
    ratio: 0.35,
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
    ratio: 0.98,
  },
  {
    id: "p37",
    src: "https://artwork-hub.vercel.app/images/animal.jpg",
    alt: "Animal Friends",
    ratio: 0.45,
  },
  {
    id: "p38",
    src: "https://artwork-hub.vercel.app/images/beach2.jpg",
    alt: "Nice Beach",
    ratio: 0.48,
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
    ratio: 0.8,
  },
  {
    id: "p41",
    src: "https://artwork-hub.vercel.app/images/girlcarry.jpg",
    alt: "girl carrying flowers",
    ratio: 1.18,
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
    ratio: 1.1,
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
    objectFit: 'contain',
    ratio: 1.2,
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
    ratio: 1.1,
  },
  {
    id: "p49",
    src: "https://artwork-hub.vercel.app/images/wintercabin.jpg",
    alt: "man walking in winter cabin",
    ratio: 1.15,
  },
  {
    id: "p50",
    src: "https://artwork-hub.vercel.app/images/yellowbeach.jpg",
    alt: "Nice Beach",
    ratio: 0.65,
    objectFit: 'contain',
  },
  {
    id: "p51",
    src: "https://artwork-hub.vercel.app/images/whales.jpg",
    alt: "different whales",
    ratio: 1.2,
  },
  {
    id: "p52",
    src: "https://artwork-hub.vercel.app/images/hangingduck.jpg",
    alt: "hanging duck",
    ratio: 1.2,
  },
  {
    id: "p53",
    src: "https://artwork-hub.vercel.app/images/banana.jpg",
    alt: "cute banana",
    ratio: 1.2,
  },
  {
    id: "p54",
    src: "https://artwork-hub.vercel.app/images/beach3.jpg",
    alt: "nice beach view",
    ratio: 1.2,
  },
  {
    id: "p55",
    src: "https://artwork-hub.vercel.app/images/blackdoor.jpg",
    alt: "black door",
    ratio: 1.1,
  },
  {
    id: "p56",
    src: "https://artwork-hub.vercel.app/images/boysleep.jpg",
    alt: "boy sleeping",
    ratio: 0.98,
  },
  {
    id: "p57",
    src: "https://artwork-hub.vercel.app/images/boysplay.jpg",
    alt: "chase butterflies",
    ratio: 1.0,
  },
  {
    id: "p58",
    src: "https://artwork-hub.vercel.app/images/colorsheep.jpg",
    alt: "sheep with colorful wool",
    ratio: 1.0,
  },
  {
    id: "p59",
    src: "https://artwork-hub.vercel.app/images/doggrass.jpg",
    alt: "dog in the grass",
    ratio: 1.1,
  },
  {
    id: "p60",
    src: "https://artwork-hub.vercel.app/images/dogrunning.jpg",
    alt: "dog running",
    ratio: 1.0,
  },
  {
    id: "p61",
    src: "https://artwork-hub.vercel.app/images/dogsleep.jpg",
    alt: "dog is sleeping",
    ratio: 1.0,
  },
  {
    id: "p62",
    src: "https://artwork-hub.vercel.app/images/girlcat.jpg",
    alt: "girl is sitting with cat",
    ratio: 1.4,
  },
  {
    id: "p63",
    src: "https://artwork-hub.vercel.app/images/girlhat.jpg",
    alt: "girl with hat",
    ratio: 1.0,
  },
  {
    id: "p64",
    src: "https://artwork-hub.vercel.app/images/girlsmile.jpg",
    alt: "girl is smiling",
    ratio: 1.0,
  },
  {
    id: "p65",
    src: "https://artwork-hub.vercel.app/images/horse.jpg",
    alt: "horse in the field",
    ratio: 0.45,
  },
  {
    id: "p66",
    src: "https://artwork-hub.vercel.app/images/horse2026.jpg",
    alt: "horse celebration 2026",
    ratio: 1.3,
  },
  {
    id: "p67",
    src: "https://artwork-hub.vercel.app/images/jiqimao.jpg",
    alt: "machine cat",
    ratio: 1.0,
  },
  {
    id: "p68",
    src: "https://artwork-hub.vercel.app/images/lamp.jpg",  
    alt: "lamp",
    ratio: 0.9,
  },
  {
    id: "p69",
    src: "https://artwork-hub.vercel.app/images/pinkcat.jpg",
    alt: "cat with glasses",
    ratio: 1.1,
  },
  {
    id: "p70",
    src: "https://artwork-hub.vercel.app/images/planewindow.jpg",
    alt: "window seat view",
    ratio: 1.0,
  },
  {
    id: "p71",
    src: "https://artwork-hub.vercel.app/images/sakuratree.jpg",
    alt: "sakura tree",
    ratio: 1.5,
  },
  {
    id: "p72",
    src: "https://artwork-hub.vercel.app/images/snowcabin.jpg",
    alt: "cabins in the snow",
    ratio: 1.0,
  },
  {
    id: "p73",
    src: "https://artwork-hub.vercel.app/images/socks.jpg",
    alt: "hanging socks",
    ratio: 1.05,
  },
  {
    id: "p74",
    src: "https://artwork-hub.vercel.app/images/whitecatstar.jpg",
    alt: "cat is playing with star",
    ratio: 1.08,
  },
  {
    id: "p75",
    src: "https://artwork-hub.vercel.app/images/whitesheep.jpg",
    alt: "white sheep",
    ratio: 1.0,
  },
  {
    id: "p76",
    src: "https://artwork-hub.vercel.app/images/fengche.jpg",
    alt: "windmill",
    ratio: 1.0,
  },
  {
    id: "p77",
    src: "https://artwork-hub.vercel.app/images/guilin.jpg",
    alt: "guilin landscape",
    ratio: 1.0,
  },
  {
    id: "p78",
    src: "https://artwork-hub.vercel.app/images/colorfulcloth.jpg",
    alt: "a girl with colorful cloth",
    ratio: 1.3,
  },
  {
    id: "p79",
    src: "https://artwork-hub.vercel.app/images/yellowgirl.jpg",
    alt: "a girl in yellow dress",
    ratio: 1.0,
  },
  {
    id: "p80",
    src: "https://artwork-hub.vercel.app/images/catlookfish.jpg",
    alt: "a cat looking at fish",
    ratio: 0.9,
  },
  {
    id: "p81",
    src: "https://artwork-hub.vercel.app/images/mermid.jpg",
    alt: "mermid",
    ratio: 1.1,
  },
  {
    id: "p82",
    src: "https://artwork-hub.vercel.app/images/sunflower.jpg",
    alt: "sunflower growing",
    ratio: 1.0,
  },
  {
    id: "p83",
    src: "https://artwork-hub.vercel.app/images/yellowflower.jpg",
    alt: "yellow flower with house",
    ratio: 1.5,
  },
  {
    id: "p84",
    src: "https://artwork-hub.vercel.app/images/denglong.jpg",
    alt: "red lanterns",
    ratio: 1.0,
  },
  {
    id: "p85",
    src: "https://artwork-hub.vercel.app/images/moon.jpg",
    alt: "full moon night",
    ratio: 0.7,
  },
  {
    id: "p86",
    src: "https://artwork-hub.vercel.app/images/catfish.jpg",
    alt: "cat and fish",
    ratio: 1.0,
  },
  {
    id: "p87",
    src: "https://artwork-hub.vercel.app/images/bluegirl.jpg",
    alt: "blue hair girl",
    ratio: 1.0,
  },
  





];
