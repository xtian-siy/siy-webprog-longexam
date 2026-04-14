import NU_Tote from '../assets/img/nu_totebag.jpg'
import NU_Tumbler from '../assets/img/nu_tumbler.jpg'
import NU_Mini_Light from '../assets/img/nu_minilight.jpg'
import NU_Hoodie from '../assets/img/nu_hoodie.jpg'
import NU_Sticker from '../assets/img/nu_sticker.png'
import NU_ID from '../assets/img/nu_id.jpg'
import NU_Pins from '../assets/img/nu_pins.jpg'
import NU_Jersey from '../assets/img/nu_jersey.jpg'


const products = [
  {
    name: 'campus-tote-bag',
    title: 'Campus Tote Bag',
    image: NU_Tote,
    imageName: 'nu_totebag.jpg',
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    content: [
      'A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.',
      'Made with thick canvas, reinforced handles, and a clean monochrome print.',
      'Best for students who want one simple carry-all bag for class and after-class plans.',
    ],
  },
  {
    name: 'National University Official Jersey',
    title: 'National University Official Jersey',
    image: NU_Jersey,
    imageName: 'nu_jersey.jpg',
    category: 'Apparel',
    price: 'PHP 599',
    stock: 'In stock',
    content: [
      'A comfortable and stylish jersey for showing your school spirit.',
      'Made with soft fabric for all-day wear during games and events.',
      'Available in multiple colors and sizes for a perfect fit.'

    ],
  },
  {
    name: 'stainless-tumbler',
    title: 'Stainless Tumbler',
    image: NU_Tumbler,
    imageName: 'nu_tumbler.jpg',
    category: 'Drinkware',
    price: 'PHP 599',
    stock: 'Low stock',
    content: [
      'A double-wall tumbler built for water, coffee, or tea during long school days.',
      'The matte finish keeps the look simple while the lid helps reduce spills in your bag.',
      'Fits most side pockets and keeps drinks ready between classes.',
    ],
  },
  {
    name: 'wireless-mini-light',
    title: 'Wireless Mini Light',
    image: NU_Mini_Light,
    imageName: 'nu_minilight.jpg',
    category: 'Tech',
    price: 'PHP 199',
    stock: 'In stock',
    content: [
      'A compact and lightweight light for dorm rooms, study spaces, or outdoor activities.',
      'Equipped with a rechargeable battery and adjustable brightness settings.',
      'Ideal for reading, writing, and focused desk work without taking too much space.'

    ],
  },
  {
    name: 'hoodie-jacket',
    title: 'Hoodie Jacket',
    image: NU_Hoodie,
    imageName: 'nu_hoodie.jpg',
    category: 'Apparel',
    price: 'PHP 1,199',
    stock: 'Preorder',
    content: [
      'A soft everyday hoodie with a relaxed fit for classrooms, commute days, and weekends.',
      'The heavy cotton blend keeps structure while staying comfortable for regular wear.',
      'Available through preorder so sizes can be reserved before release.',
    ],
  },
  {
    name: 'Sticker pack',
    title: 'Sticker Pack',
    image: NU_Sticker,
    imageName: 'nu_sticker.png',
    category: 'Accessories',
    price: 'PHP 199',
    stock: 'In stock',
    content: [
      'A set of fun and colorful stickers for personalizing laptops, notebooks, and more.', 
    ],
  },
  {
    name: 'id-lanyard-set',
    title: 'ID Lanyard Set',
    image: NU_ID,
    imageName: 'nu_id.jpg',
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    content: [
      'A durable lanyard and card holder set for IDs, access cards, and small passes.',
      'The clip is easy to detach when scanning or presenting credentials.',
      'Simple enough for daily use and sturdy enough for a full semester.',
    ],
  },
  {
    name: 'pins-and-patches-bundle',
    title: 'Pins and Patches Bundle',
    image: NU_Pins,
    imageName: 'nu_pins.jpg',
    category: 'Bundles',
    price: 'PHP 399',
    stock: 'In stock',
    content: [
      'A compact bundle with snacks, tabs, pens, and quick notes for busy review weeks.',
      'Packed for convenience so students can grab one kit and focus on studying.',
      'Ideal as a personal prep item or a small gift for classmates.',
    ],
  },
];

export default products;
