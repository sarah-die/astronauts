export interface AstronautData {
  results?: Astronaut[];
}

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
  id: number;
}

export interface AstronautsStatus {
  id: number;
  name: 'Active' | 'Retired';
}

export interface AgencyDetail {
  name?: string;
  type?: string;
  country_code?: string;
  abbrev?: string;
  description?: string;
  founding_year?: string;
  logo_url?: string;
  info_url?: string;
  image_url?: string;
}

export type Language = {
  name: string;
  key: string;
  active: boolean;
};
