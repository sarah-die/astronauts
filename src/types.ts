export interface Astronaut {
  name: string;
  age: number;
  agency: Agency;
  nationality: string;
  status: 'Active' | 'Retired';
  flights_count: number;
  spacewalks_count: number;
}

export interface Agency {
  abbrev: string;
  name: string;
  logo_url: string;
}

export interface AstronautData {
  results: Astronaut[];
}
