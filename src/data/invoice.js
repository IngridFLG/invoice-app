export const invoice = {
  id: 10,
  name: "Componenter PC",
  client: {
    name: "pepe",
    lastName: "Doe",
    address: {
      country: "USA",
      city: "Los Angeles",
      street: "One Street",
      number: 12,
    },
  },
  company: {
    name: "New Egg",
    fiscalNumber: 1234567,
  },
  items: [
    {
      id: 1,
      product: "Intel i7",
      price: 200,
      quantity: 1,
    },
    {
      id: 2,
      product: "Corsair keyboard mechanical",
      price: 150,
      quantity: 3,
    },
    {
      id: 3,
      product: "Monitor Asus",
      price: 350,
      quantity: 1,
    },
  ],
};
