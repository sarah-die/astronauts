export interface Astronaut {
  name: string;
  age: number;
  agency: Agency;
  nationality: string;
  in_space: boolean;
  status: AstronautsStatus;
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

export interface AgencyDetail {
  name: string;
  type: string;
  coutry_code: string;
  abbrev: string;
  description: string;
  founding_year: string;
  logo_url: string;
}

export interface AgencyData {
  results?: AgencyDetail[];
}
