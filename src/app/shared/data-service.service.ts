import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  getData() {
    return DATA;
  }
}

const DATA = [
  {
    id: 1,
    name: "angular lvl 1",
    level: "beginner",
    size: 6,
    instructor: "peter",
    price: 30,
    hours: 3,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  },
  {
    id: 2,
    name: "angular lvl 3",
    level: "advanced",
    size: 12,
    price: 45,
    hours: 3
  },
  {
    id: 3,
    name: "angular lvl 2",
    level: "intermediate",
    size: 12,
    instructor: "peter",
    price: 60,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  },
  {
    id: 4,
    name: "angular lvl 4",
    level: "expert",
    instructor: "peter",
    price: 90,
    movie: {
      "favorite movie": "Shawshank Redemption",
      image: "https://via.placeholder.com/100"
    }
  }
];
