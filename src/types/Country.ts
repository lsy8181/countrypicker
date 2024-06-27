interface NativeName {
  official: string;
  common: string;
}

interface Translation {
  official: string;
  common: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: NativeName;
  };
}

interface Currency {
  name: string;
  symbol: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Demonyms {
  eng: {
    f: string;
    m: string;
  };
  fra: {
    f: string;
    m: string;
  };
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Gini {
  [year: string]: number;
}

interface Car {
  signs: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface PostalCode {
  format: string;
  regex: string;
}

interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: {
    [key: string]: Currency;
  };
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: Translation;
  };
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export type { Country };
