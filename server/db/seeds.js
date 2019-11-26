use bookings;
db.dropDatabase();

db.guests.insertMany([
  {
    name: "Phillip Harrison",
    email: "phillip@gmail.com",
    checked_in: false,
  },
  {
    name: "Fred Smith",
    email: "fred@bonkers.com",
    checked_in: false,
  },
  {
    name: "William Gallahad",
    email: "will.ghad@hotmail.com",
    checked_in: true,
  },
  {
    name: "Jenny Taylor",
    email: "jenz@123.co.uk",
    checked_in: false,
  },
  {
    name: "Kain Misfit",
    email: "ks@me.com",
    checked_in: true,
  },
]);
