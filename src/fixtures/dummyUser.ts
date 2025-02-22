import { User } from "../types/user";

export const dummyUser: User = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  email: "john@example.com",
  address: {
    street: "Main Street",
    suite: "Apt. 1",
    city: "New York",
    zipcode: "10001",
    geo: {
      lat: "40.7128",
      lng: "-74.0060",
    },
  },
  phone: "123-456-7890",
  website: "example.com",
  company: {
    name: "Example Inc.",
    catchPhrase: "We deliver excellence",
    bs: "business stuff",
  },
};