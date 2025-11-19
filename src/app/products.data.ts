export const PRODUCTS_DATA = [ 
      // ---------------- Brand New Mobiles ----------------
  {
    name: 'iPhone 12',
    category: 'Brand New Mobiles',
    price: 25000,
    discount: 15,
    rating: 4.8,
    desc: 'OLED Display · A14 Bionic · Dual Camera',
    img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha'
  },
  {
    name: 'Samsung Galaxy S21',
    category: 'Brand New Mobiles',
    price: 22000,
    discount: 10,
    rating: 4.5,
    desc: 'Dynamic AMOLED · 8GB RAM · 64MP Camera',
    img: 'https://m.media-amazon.com/images/I/71asXBK4i7L.jpg'
  },
  {
    name: 'Redmi Note 12 Pro',
    category: 'Brand New Mobiles',
    price: 18000,
    discount: 12,
    rating: 4.6,
    desc: 'AMOLED 120Hz · 50MP Camera · 5000mAh',
    img: 'https://m.media-amazon.com/images/I/71VW8LmqqPL._SL1500_.jpg'
  },
  {
    name: 'Telephoto Lens',
    category: 'Brand New Mobiles',
    price: 32000,
    discount: 10,
    rating: 4.4,
    desc: 'Telephoto Lens · 256GB Storage · 67W Fast Charge',
    img: 'https://m.media-amazon.com/images/I/71y1BxNPtpL._AC_UY218_.jpg'
  },
  {
    name: 'Vivo V29',
    category: 'Brand New Mobiles',
    price: 28000,
    discount: 11,
    rating: 4.5,
    desc: 'Aura Light · 50MP Selfie · AMOLED',
    img: 'https://m.media-amazon.com/images/I/61Rw4Bko2BL._SY550_.jpg'
  },

  // ---------------- Second Hand Mobiles ----------------
  {
    name: 'iPhone X (Used)',
    category: 'Second Hand Mobiles',
    price: 14000,
    discount: 20,
    rating: 4.2,
    desc: '64GB · Good Condition · Face ID Working',
    img: 'https://m.media-amazon.com/images/I/61f1YfTkTDL._SL1500_.jpg'
  },
  {
    name: 'Samsung A52 (Used)',
    category: 'Second Hand Mobiles',
    price: 11000,
    discount: 18,
    rating: 4.1,
    desc: 'Super AMOLED · 64MP Camera · Minor Scratches',
    img: 'https://m.media-amazon.com/images/I/81lnD9tynQL._AC_UY218_.jpg'
  },

  // ---------------- Brand New Laptops ----------------
  {
    name: 'Dell Inspiron 15 (2023)',
    category: 'Brand New Laptops',
    price: 35000,
    discount: 20,
    rating: 4.2,
    desc: 'Intel i5 · 8GB RAM · 512GB SSD',
    img: 'https://m.media-amazon.com/images/I/51Zl9TAM8kL.jpg'
  },
  {
    name: 'HP Pavilion x360',
    category: 'Brand New Laptops',
    price: 56000,
    discount: 15,
    rating: 4.4,
    desc: '2-in-1 Touch · 16GB RAM · 512GB SSD',
    img: 'https://m.media-amazon.com/images/I/71Go8vTBwXL._AC_UY218_.jpg'
  },
  {
    name: 'Asus VivoBook 14',
    category: 'Brand New Laptops',
    price: 42000,
    discount: 18,
    rating: 4.3,
    desc: 'Ryzen 5 · 8GB RAM · Lightweight',
    img: 'https://m.media-amazon.com/images/I/71WuDXpTAlL._SL1500_.jpg'
  },
  {
    name: 'MacBook Air M1',
    category: 'Brand New Laptops',
    price: 79000,
    discount: 10,
    rating: 4.9,
    desc: 'Retina · M1 Chip · 18-Hour Battery',
    img: 'https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg'
  },

  // ---------------- Second Hand Laptops ----------------
  {
    name: 'Lenovo ThinkPad T480 (Used)',
    category: 'Second Hand Laptops',
    price: 23000,
    discount: 15,
    rating: 4.3,
    desc: 'Intel i5 8th Gen · 8GB RAM · 256GB SSD',
    img: 'https://m.media-amazon.com/images/I/41aX3cl4hdL._AC_UY218_.jpg'
  },
  {
    name: 'HP EliteBook 840 G5 (Used)',
    category: 'Second Hand Laptops',
    price: 26000,
    discount: 10,
    rating: 4.4,
    desc: 'Intel i5 · Slim Body · Very Good Condition',
    img: 'https://m.media-amazon.com/images/I/71Z4mSII9BL._AC_UY218_.jpg'
  },

  // ---------------- Accessories: Cases ----------------
  {
    name: 'Shockproof Mobile Case',
    category: 'Accessories',
    price: 500,
    discount: 30,
    rating: 4.6,
    desc: 'Shockproof · Matte Black · Anti-Slip',
    img: 'https://m.media-amazon.com/images/I/41eAMpEd1UL.jpg'
  },
  {
    name: 'Transparent Silicone Case',
    category: 'Accessories',
    price: 299,
    discount: 25,
    rating: 4.4,
    desc: 'Soft TPU · HD Clear · Anti-Yellow',
    img: 'https://m.media-amazon.com/images/I/61YVqHdFRxL._SL1500_.jpg'
  },
  {
    name: 'Leather Flip Wallet Case',
    category: 'Accessories',
    price: 799,
    discount: 20,
    rating: 4.5,
    desc: 'Magnetic Lock · Card Holder · Premium Leather',
    img: 'https://m.media-amazon.com/images/I/71Zf9uUp+GL._SL1500_.jpg'
  },

  // ---------------- Accessories: Chargers ----------------
  {
    name: 'Samsung 25W Fast Charger',
    category: 'Accessories',
    price: 999,
    discount: 15,
    rating: 4.7,
    desc: 'USB-C Super Fast Charging',
    img: 'https://m.media-amazon.com/images/I/71iE0YTRqzL._AC_UY218_.jpg'
  },
  {
    name: 'Apple 20W USB-C Adapter',
    category: 'Accessories',
    price: 1699,
    discount: 12,
    rating: 4.8,
    desc: 'Fast Charging · Type-C Power Adapter',
    img: 'https://m.media-amazon.com/images/I/61vtLhO6fDL._SL1500_.jpg'
  },
  {
    name: 'Boat Dual USB Charger',
    category: 'Accessories',
    price: 499,
    discount: 35,
    rating: 4.4,
    desc: 'Dual Port · Smart IC · Fast Charge',
    img: 'https://m.media-amazon.com/images/I/71OPy1mcyvL._AC_UY218_.jpg'
  },

  // ---------------- Accessories: Earphones/Airpods ----------------
  {
    name: 'Apple AirPods Pro',
    category: 'Accessories',
    price: 18999,
    discount: 8,
    rating: 4.9,
    desc: 'ANC · Spatial Audio · Wireless Case',
    img: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._SL1500_.jpg'
  },
  {
    name: 'Boat Airdopes 161',
    category: 'Accessories',
    price: 999,
    discount: 40,
    rating: 4.3,
    desc: 'Bass Boost · 40H Backup · Fast Pair',
    img: 'https://m.media-amazon.com/images/I/61QeGcag85L._AC_UY218_.jpg'
  },
  {
    name: 'Sony WF-1000XM4',
    category: 'Accessories',
    price: 18990,
    discount: 15,
    rating: 4.8,
    desc: 'Industry-leading ANC · LDAC · 24H Battery',
    img: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg'
  },

  // ---------------- Speakers ----------------
  {
    name: 'JBL Go 3',
    category: 'Accessories',
    price: 2999,
    discount: 20,
    rating: 4.7,
    desc: 'Portable Speaker · IP67 Waterproof · Punchy Bass',
    img: 'https://m.media-amazon.com/images/I/51+w+eT6aAL._AC_UY218_.jpg'
  },
  {
    name: 'Boat Stone 650',
    category: 'Accessories',
    price: 1999,
    discount: 25,
    rating: 4.6,
    desc: '10W RMS · Deep Bass · Water Resistant',
    img: 'https://m.media-amazon.com/images/I/31Bhovx2xQL._AC_UY218_.jpg'
  },
  {
    name: 'Sony SRS-XB13',
    category: 'Accessories',
    price: 3899,
    discount: 18,
    rating: 4.8,
    desc: 'Extra Bass · Type-C · Portable',
    img: 'https://m.media-amazon.com/images/I/61C1YkP5lzL._AC_UY218_.jpg'
  },

  // ---------------- USB Drives ----------------
  {
    name: 'SanDisk 32GB USB 3.0',
    category: 'Accessories',
    price: 399,
    discount: 35,
    rating: 4.6,
    desc: 'High Speed · Compact · Metal Body',
    img: 'https://m.media-amazon.com/images/I/61DjwgS4cbL._SL1500_.jpg'
  },
  {
    name: 'HP 64GB USB 3.1 Drive',
    category: 'Accessories',
    price: 599,
    discount: 30,
    rating: 4.5,
    desc: 'Ultra Fast · Waterproof',
    img: 'https://m.media-amazon.com/images/I/41ZNNrUWe+L._AC_UY218_.jpg'
  },
  {
    name: 'Samsung 128GB USB Type-C Drive',
    category: 'Accessories',
    price: 1299,
    discount: 18,
    rating: 4.7,
    desc: 'Portable · High-Speed',
    img: 'https://m.media-amazon.com/images/I/51jTZLqwCTL._AC_UY218_.jpg'
  },

  // ---------------- Memory Cards ----------------
  {
    name: 'Samsung 128GB Evo MicroSD',
    category: 'Accessories',
    price: 899,
    discount: 25,
    rating: 4.8,
    desc: '4K Video · A2 Rated · Waterproof',
    img: 'https://m.media-amazon.com/images/I/61fkOHNmzpL._AC_UY218_.jpg'
  },
  {
    name: 'SanDisk 64GB Class 10',
    category: 'Accessories',
    price: 499,
    discount: 28,
    rating: 4.6,
    desc: 'Full HD · A1 · 100MB/s',
    img: 'https://m.media-amazon.com/images/I/51JVcTNWKqL._AC_UY218_.jpg'
  },

  // ---------------- Car Accessories ----------------
  {
    name: 'Car Mobile Holder',
    category: 'Accessories',
    price: 349,
    discount: 30,
    rating: 4.5,
    desc: 'Dashboard Mount · Strong Grip',
    img: 'https://m.media-amazon.com/images/I/613ucWATzdL._AC_UY218_.jpg'
  },
  {
    name: 'Car Bluetooth Receiver',
    category: 'Accessories',
    price: 399,
    discount: 35,
    rating: 4.4,
    desc: 'AUX Input · HD Sound',
    img: 'https://m.media-amazon.com/images/I/61QKhSQvfrL._AC_UY218_.jpg'
  },
  {
    name: 'Car Fast Charger 36W',
    category: 'Accessories',
    price: 599,
    discount: 20,
    rating: 4.7,
    desc: 'Dual Port · QC3.0 Support',
    img: 'https://m.media-amazon.com/images/I/61RbyZuzMtL._AC_UY218_.jpg'
  },

  // ---------------- Smart Gadgets ----------------
  {
    name: 'Smart LED Strip Light',
    category: 'Accessories',
    price: 999,
    discount: 30,
    rating: 4.6,
    desc: 'RGB · WiFi Control · Music Sync',
    img: 'https://m.media-amazon.com/images/I/51Mjx+7CQ1L._AC_UL320_.jpg'
  },
  {
    name: 'Smart Bluetooth Tracker',
    category: 'Accessories',
    price: 799,
    discount: 25,
    rating: 4.3,
    desc: 'Anti-Lost · App Control',
    img: 'https://m.media-amazon.com/images/I/51G6raZr0oL._AC_UY218_.jpg'
  },
  {
    name: 'Mini Phone Tripod Stand',
    category: 'Accessories',
    price: 349,
    discount: 35,
    rating: 4.2,
    desc: 'Flexible Legs · Universal Holder',
    img: 'https://m.media-amazon.com/images/I/51JPq-QL3EL._AC_UY218_.jpg'
  },
  {
    name: 'iPhone 14 Pro',
    category: 'Brand New Mobiles',
    price: 95000,
    discount: 8,
    rating: 4.9,
    desc: 'Dynamic Island · A16 Bionic · ProMotion OLED',
    img: 'https://m.media-amazon.com/images/I/61XO4bORHUL._SL1500_.jpg'
  },
  {
    name: 'Samsung Galaxy S23 Ultra',
    category: 'Brand New Mobiles',
    price: 105000,
    discount: 12,
    rating: 4.9,
    desc: '200MP Camera · Snapdragon 8 Gen 2 · AMOLED 120Hz',
    img: 'https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg'
  },
  {
    name: 'Realme GT Neo 5',
    category: 'Brand New Mobiles',
    price: 32000,
    discount: 10,
    rating: 4.6,
    desc: '240W Fast Charge · Snapdragon 8+ Gen 1',
    img: 'https://m.media-amazon.com/images/I/51973rPxV9L._AC_UY218_.jpg'
  },

  // ---------------- Second Hand Mobiles ----------------
  {
    name: 'iPhone 11 (Used)',
    category: 'Second Hand Mobiles',
    price: 23000,
    discount: 20,
    rating: 4.4,
    desc: '64GB · Excellent Battery Health · Dual Camera',
    img: 'https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg'
  },
  {
    name: 'OnePlus 8T (Used)',
    category: 'Second Hand Mobiles',
    price: 16000,
    discount: 25,
    rating: 4.3,
    desc: '120Hz Display · 65W Warp Charge · 8GB RAM',
    img: 'https://m.media-amazon.com/images/I/71gag816F7L._SL1500_.jpg'
  },

  // ---------------- Brand New Laptops ----------------
  {
    name: 'Asus TUF Gaming F15',
    category: 'Brand New Laptops',
    price: 78000,
    discount: 10,
    rating: 4.7,
    desc: 'RTX 3050 · i7 12th Gen · 144Hz Display',
    img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._SL1500_.jpg'
  },
  {
    name: 'Apple MacBook Pro M2',
    category: 'Brand New Laptops',
    price: 145000,
    discount: 5,
    rating: 4.9,
    desc: 'M2 Chip · Liquid Retina XDR · 20h Battery',
    img: 'https://m.media-amazon.com/images/I/61L5QgPvgqL._SL1500_.jpg'
  },
  {
    name: 'Lenovo Yoga Slim 7',
    category: 'Brand New Laptops',
    price: 62000,
    discount: 12,
    rating: 4.5,
    desc: 'Ryzen 7 · 512GB SSD · Ultra-Slim',
    img: 'https://m.media-amazon.com/images/I/71S8U9VzLTL._SL1500_.jpg'
  },

  // ---------------- Second Hand Laptops ----------------
  {
    name: 'Dell Latitude 7490 (Used)',
    category: 'Second Hand Laptops',
    price: 25000,
    discount: 15,
    rating: 4.2,
    desc: 'i7 8th Gen · 16GB RAM · Business Laptop',
    img: 'https://m.media-amazon.com/images/I/712WiT-wexL._AC_UY218_.jpg'
  },
  {
    name: 'MacBook Air 2017 (Used)',
    category: 'Second Hand Laptops',
    price: 28000,
    discount: 18,
    rating: 4.4,
    desc: '8GB RAM · 256GB SSD · Very Good Condition',
    img: 'https://m.media-amazon.com/images/I/71WjZraleiL._AC_UY218_.jpg'
  },

  // ---------------- Premium Accessories ----------------
  {
    name: 'Boat Airdopes 441 Pro',
    category: 'Accessories',
    price: 2499,
    discount: 30,
    rating: 4.5,
    desc: '150H Battery · Type-C Fast Charging',
    img: 'https://m.media-amazon.com/images/I/614gbl-O98L._AC_UY218_.jpg'
  },
  {
    name: 'Sony WH-1000XM4',
    category: 'Accessories',
    price: 24990,
    discount: 18,
    rating: 4.9,
    desc: 'ANC · LDAC · Industry-leading Noise Cancellation',
    img: 'https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg'
  },
  {
    name: 'Apple MagSafe Charger',
    category: 'Accessories',
    price: 4500,
    discount: 12,
    rating: 4.7,
    desc: '15W Magnetic Fast Charging',
    img: 'https://m.media-amazon.com/images/I/71f5Eu5lJSL._SL1500_.jpg'
  },

  // ---------------- Speakers ----------------
  {
    name: 'JBL Charge 5',
    category: 'Accessories',
    price: 14999,
    discount: 14,
    rating: 4.8,
    desc: 'Powerful Bass · IP67 Waterproof · PartyBoost',
    img: 'https://m.media-amazon.com/images/I/71N8si9jomL._AC_UY218_.jpg'
  },
  {
    name: 'Boat Stone 350',
    category: 'Accessories',
    price: 1799,
    discount: 35,
    rating: 4.4,
    desc: '10W RMS · Water Resistant · Portable',
    img: 'https://m.media-amazon.com/images/I/71o6CU8MqVL._AC_UY218_.jpg'
  },

  // ---------------- Mobile Cases ----------------
  {
    name: 'iPhone 14 Silicone Case',
    category: 'Accessories',
    price: 1599,
    discount: 25,
    rating: 4.6,
    desc: 'Premium Silicone · MagSafe Compatible',
    img: 'https://m.media-amazon.com/images/I/61JvqNmEjyL._AC_UY218_.jpg'
  },
  {
    name: 'OnePlus 9R Bumper Case',
    category: 'Accessories',
    price: 499,
    discount: 30,
    rating: 4.3,
    desc: 'Shock Absorbing · Matte Finish',
    img: 'https://m.media-amazon.com/images/I/71Yt-869PfS._AC_UY218_.jpg'
  },

  // ---------------- Smart Gadgets ----------------
  {
    name: 'Mi Smart Band 7',
    category: 'Accessories',
    price: 3499,
    discount: 22,
    rating: 4.5,
    desc: 'AMOLED · Spo₂ · 120 Sports Modes',
    img: 'https://m.media-amazon.com/images/I/61-PhP53C2L._AC_UL320_.jpg'
  },
  {
    name: 'Realme Smart Plug WiFi',
    category: 'Accessories',
    price: 799,
    discount: 28,
    rating: 4.4,
    desc: 'Voice Control · Energy Monitoring',
    img: 'https://m.media-amazon.com/images/I/61GRHX4pTaL._AC_UL320_.jpg'
  },

  // ---------------- Car Accessories ----------------
  {
    name: 'Car Dashboard Phone Holder',
    category: 'Accessories',
    price: 399,
    discount: 40,
    rating: 4.2,
    desc: 'Anti-slip · 360° Rotation',
    img: 'https://m.media-amazon.com/images/I/41H7NUu+b4L._AC_UY218_.jpg'
  },
  {
    name: 'Car Tire Inflator (Electric)',
    category: 'Accessories',
    price: 1899,
    discount: 20,
    rating: 4.6,
    desc: 'Digital Display · Auto Cutoff',
    img: 'https://m.media-amazon.com/images/I/71qGd1Mn3iL._AC_UL320_.jpg'
  },

  // ---------------- Storage Devices ----------------
  {
    name: 'Samsung 980 NVMe SSD 1TB',
    category: 'Accessories',
    price: 6999,
    discount: 22,
    rating: 4.9,
    desc: '3500MB/s Read · PCIe 3.0',
    img: 'https://m.media-amazon.com/images/I/71H3OVkHOGL._AC_UY218_.jpg '
  },
  {
    name: 'SanDisk 128GB Ultra MicroSD',
    category: 'Accessories',
    price: 1099,
    discount: 25,
    rating: 4.7,
    desc: 'A1 · Full HD · High Speed',
    img: 'https://m.media-amazon.com/images/I/514S7qp9fOL._AC_UL320_.jpg'
  }

 ];