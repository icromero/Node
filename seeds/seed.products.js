// seed.js file
const mongoose = require('mongoose');
const Product = require('../models/Product');

const products = [{
        name: 'Cooker',
        price: 40.90,
        description: '2 cooking pressure levels: 50 kPa slow cooking and 90 kPa fast cooking',
        image: 'https://m.media-amazon.com/images/I/61lSWBSrLEL._AC_SX679_.jpg',
    },
    {
        name: 'Vacuum cleaner',
        price: 41.98,
        description: 'Offers up to 13 kPa suction power for impeccable cleanliness',
        image: 'https://m.media-amazon.com/images/I/71+5CwYkqwL._AC_SL1500_.jpg',
    },
    {
        name: 'Fryer',
        price: 79.99,
        description: 'Oil-free fryer for light and healthy preparations; with hardly any oil, you can fry, grill, cook and bake all your favorite dishes with up to 6 servings (4.2 l)',
        image: 'https://m.media-amazon.com/images/I/613zli8mkAL._AC_SX679_.jpg',
    },
    {
        name: 'Scale',
        price: 16.98,
        description: 'The kitchen scale has a built-in battery that can be charged via a USB interface. A full charge takes 4 to 6 hours. With one charge, you can use the product for 2 to 6 months (depending on how often you use it).',
        image: 'https://m.media-amazon.com/images/I/71UFz+S7ZbS._SX522_.jpg',
    },
    {
        name: 'Cover',
        price: 11.29,
        description: 'This laptop sleeve is a universal sleeve that not only fits Macbook computer.',
        image: 'https://m.media-amazon.com/images/I/71G8thIPDmL._AC_SX679_.jpg',
    },
    {
        name: 'Tent',
        price: 20.03,
        description: 'Long, zippered floor panels ensure privacy. Rear window zippers open for improved ventilation.',
        image: 'https://m.media-amazon.com/images/I/81qipoF5liL._AC_SX679_.jpg',
    },
    {
        name: 'Volleyball and badminton kit',
        price: 82.31,
        description: 'Includes net, rods, rackets, shuttlecocks, shuttlecocks or feathers and ball',
        image: 'https://m.media-amazon.com/images/I/91fCtVsP7iL._AC_SX679_.jpg',
    },
    {
        name: 'Amaca',
        price: 28.14,
        description: 'Lightweight double hammock for relaxing outings; holds up to 181.4 kg.',
        image: 'https://m.media-amazon.com/images/I/811IBugsTbL._AC_SX679_.jpg',
    },
    {
        name: 'Ball',
        price: 19.99,
        description: '1 kg medicine ball to exercise the upper and lower body.',
        image: 'https://m.media-amazon.com/images/I/916v+hZR+lL._AC_SX679_.jpg',
    },
    {
        name: 'Gloves',
        price: 25.99,
        description: '',
        image: 'https://m.media-amazon.com/images/I/81Y708N2K7L._AC_SX679_.jpg',
    },
    {
        name: 'Mattress',
        price: 165.09,
        description: 'The Bio Max viscoelastic mattress incorporates a high density hr core, which provides firmness, together with its exclusive and soft padding composed of hypoallergenic fibers + super soft foam. ',
        image: 'https://m.media-amazon.com/images/I/51s+te6O3zL._AC_SX466_.jpg',
    },
    {
        name: 'Cables',
        price: 7.87,
        description: '2.4 meters in length',
        image: 'https://m.media-amazon.com/images/I/61DypRgcQyL._AC_SX679_.jpg',
    },
    {
        name: 'Graphic card',
        price: 379.89,
        description: 'SAPPHIRE PULSE AMD RADEON RX 6600 GAMING 8GB GDDR6 HDMI / TRIPLE DP',
        image: 'https://m.media-amazon.com/images/I/71L0p7ALaQL._AC_SX466_.jpg',
    },
    {
        name: 'Mining card',
        price: 207.99,
        description: 'The BTC-S37 motherboard has 8 PCIE 16X graphics card slots, high performance computing, the computing power is 10% higher than the motherboard of the same level, equipped with a Gigabit network card, further enhance the network speed , so that you have a smooth and high-speed experience.',
        image: 'https://m.media-amazon.com/images/I/61jb+rQB92L._AC_SX679_.jpg',
    },
    {
        name: 'Motherboard',
        price: 85.99,
        description: 'High-speed connectivity: USB 3.1 Gen. 2 and M.2 provide more flexibility',
        image: 'https://m.media-amazon.com/images/I/71fmXkRoSUL._AC_SX679_.jpg',
    },
    {
        name: 'Knife',
        price: 19.99,
        description: 'German Steel Santoku Knife, Durable & Sharp - The blade of this Santoku kitchen knife is 18cm, 7 inch is made of German high carbon steel (5Cr15MoV). 5% carbon can make the kitchen knife harder and sharper, 15% chromium makes your knife resistant to rust and corrosion. Santoko SHAN ZU Classic Series Santoko SHAN ZU Knife is easy to sharpen, clean and maintain.',
        image: 'https://m.media-amazon.com/images/I/71H7XStcLYL._AC_SX679_.jpg',
    },
    {
        name: 'Cutting Hair',
        price: 57.00,
        description: 'Braun 10 in 1 Beard Trimmer, Hair Clippers, Mens Hair Trimmer for Face, Hair, Ears, Nose and Body with Autosense Technology and Gillette Razor, 8 Attachments, 7 MGK7331, Black/Grey ',
        image: 'https://m.media-amazon.com/images/I/81j+S+MRumL._AC_SX466_.jpg',
    },
    {
        name: 'Tablet',
        price: 209.27,
        description: 'From epic movies to tutorial content to pass the time in style, the Galaxy Tab A8 invites you into a wider world with its larger and improved field of view.',
        image: 'https://m.media-amazon.com/images/I/71QoBYGJ1uL._AC_SX679_.jpg',
    },
    {
        name: 'Marker pen',
        price: 25.89,
        description: 'The excellent markers are made of high quality materials and passed SGS international certification, They are suitable for children.',
        image: 'https://m.media-amazon.com/images/I/81olTunNuOL._AC_SX679_.jpg',
    },
    {
        name: 'GPS',
        price: 78.00,
        description: 'The basis of navigation: The TomTom Start 52 Lite offers navigation with the essentials; finding destinations is simple in the search menu or by touching a point on the map; 5" touch screen.',
        image: 'https://m.media-amazon.com/images/I/71mi1VR5CtL._AC_SX466_.jpg',
    },
];

const productDocument = products.map(product => new Product(product));

mongoose
    .connect('mongodb://localhost:27017/ecommerce', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async() => {
        const allProducts = await Product.find();

        if (allProducts.length) {
            await Product.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async() => {
        await Product.insertMany(productDocument);
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());