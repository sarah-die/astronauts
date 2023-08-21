export interface Astronaut {
  name: string;
  age: number;
  agency: Agency;
  agency_abbrev: string;
  nationality: string;
  in_space: boolean;
  status: AstronautsStatus;
  status_name: string;
  flights_count: number;
  spacewalks_count: number;
  id: number;
  key: string;
}

export interface Agency {
  abbrev: string;
  name: string;
  logo_url: string;
}

export interface AstronautsStatus {
  id: number;
  name: 'Active' | 'Retired';
}

export interface AstronautData {
  results?: Astronaut[];
}
