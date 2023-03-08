export interface IGrad { 
    name: string;
    lat ?: number;
    lon ?: number; 
    img: string;
    desc: string;
    // cities
    sights?: string[];
    accommodation?: string[];
    // hotels
    link ?: string;
}