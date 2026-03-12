// Placeholder data for Tinie Technologies Dashboard
// This will later be replaced with real database data

const users = [
  {
    id: '1',
    name: 'Tinny Mosimanyana',
    email: 'admin@tinietech.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'c1',
    name: 'Elegant Salon',
    email: 'contact@elegantsalon.com',
    image_url: '/customers/salon.png',
  },
  {
    id: 'c2',
    name: 'Tasty Grill Restaurant',
    email: 'info@tastygrill.com',
    image_url: '/customers/restaurant.png',
  },
  {
    id: 'c3',
    name: 'FitLife Gym',
    email: 'hello@fitlifegym.com',
    image_url: '/customers/gym.png',
  },
  {
    id: 'c4',
    name: 'QuickWash Car Wash',
    email: 'contact@quickwash.com',
    image_url: '/customers/carwash.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 800, // Website
    status: 'paid',
    date: '2026-01-15',
  },
  {
    customer_id: customers[1].id,
    amount: 2000, // Digital presence package
    status: 'pending',
    date: '2026-02-10',
  },
  {
    customer_id: customers[2].id,
    amount: 800, // Business website
    status: 'paid',
    date: '2026-03-01',
  },
  {
    customer_id: customers[3].id,
    amount: 200, // Monthly maintenance
    status: 'pending',
    date: '2026-03-10',
  },
];

const revenue = [
  { month: 'Jan', revenue: 800 },
  { month: 'Feb', revenue: 2000 },
  { month: 'Mar', revenue: 1600 },
  { month: 'Apr', revenue: 2400 },
  { month: 'May', revenue: 3200 },
  { month: 'Jun', revenue: 4000 },
  { month: 'Jul', revenue: 4500 },
  { month: 'Aug', revenue: 5000 },
  { month: 'Sep', revenue: 3500 },
  { month: 'Oct', revenue: 4200 },
  { month: 'Nov', revenue: 4800 },
  { month: 'Dec', revenue: 6000 },
];

export { users, customers, invoices, revenue };