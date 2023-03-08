export interface IGrad {
  name: string;
  type: string;
  lat?: number;
  lon?: number;
  img: string;
  bgImage?: string;
  desc: string;
  // cities
  sights?: string[];
  accommodation?: string[];
  // hotels
  link?: string;
}
