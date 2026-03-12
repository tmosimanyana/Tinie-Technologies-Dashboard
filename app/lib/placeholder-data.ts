const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Tinny Mosimanyana',
    email: 'admin@tinietech.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Elegant Salon',
    email: 'contact@elegantsalon.com',
    image_url: '/customers/elegant-salon.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Tasty Grill Restaurant',
    email: 'info@tastygrill.com',
    image_url: '/customers/tasty-grill.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'FitLife Gym',
    email: 'hello@fitlifegym.com',
    image_url: '/customers/fitlife-gym.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'QuickWash Car Wash',
    email: 'contact@quickwash.com',
    image_url: '/customers/quickwash.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Bright Future Academy',
    email: 'admin@brightfutureacademy.com',
    image_url: '/customers/bright-future-academy.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Masa Cleaning Services',
    email: 'info@masacleaning.com',
    image_url: '/customers/masa-cleaning.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 800,
    status: 'paid',
    date: '2026-01-15',
  },
  {
    customer_id: customers[1].id,
    amount: 2000,
    status: 'pending',
    date: '2026-02-10',
  },
  {
    customer_id: customers[2].id,
    amount: 1500,
    status: 'paid',
    date: '2026-02-22',
  },
  {
    customer_id: customers[3].id,
    amount: 200,
    status: 'pending',
    date: '2026-03-01',
  },
  {
    customer_id: customers[4].id,
    amount: 1200,
    status: 'paid',
    date: '2026-03-05',
  },
  {
    customer_id: customers[5].id,
    amount: 900,
    status: 'paid',
    date: '2026-03-09',
  },
];

const revenue = [
  { month: 'Jan', revenue: 800 },
  { month: 'Feb', revenue: 3500 },
  { month: 'Mar', revenue: 2300 },
  { month: 'Apr', revenue: 4200 },
  { month: 'May', revenue: 3800 },
  { month: 'Jun', revenue: 4600 },
  { month: 'Jul', revenue: 5200 },
  { month: 'Aug', revenue: 6100 },
  { month: 'Sep', revenue: 4900 },
  { month: 'Oct', revenue: 5500 },
  { month: 'Nov', revenue: 6000 },
  { month: 'Dec', revenue: 7200 },
];

export { users, customers, invoices, revenue };