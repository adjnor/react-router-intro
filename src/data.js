export const items = [
  {
    description: 'A very nice hat',
    inventory: 4,
    img: '/hat.jpg',
    price: '10$',
    itemId: 'abc',
    sellerId: 0,
  },
  {
    description: 'A boat',
    inventory: 4,
    img: '/boat.jpg',
    price: '50000$',
    itemId: 'def',
    sellerId: 0,
  },
  {
    description: 'A shoe',
    inventory: 50,
    img: '/shoe.jpg',
    price: '40$',
    itemId: 'shoe',
    sellerId: 1,
  },
];

export const sellers = [
  {
    name: 'Bob',
    // items: ['abc', 'def'],
    sellerId: 0,
  },
  {
    name: 'Sue',
    // items: ['shoe'],
    sellerId: 1,
  },
];
