interface IImage {
  text: string;
  size: string;
} 

interface IArtist {
  name: string;
  mbid: string;
  url: string
}

export interface IArtists {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: IImage[]
}

export interface ITrack {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  image: IImage[],
  artist: IArtist[]
}

export interface ISearchBar {
  items: Array<any>;
  searchParams: Array<any>;
  placeholder?: string;
  defaultSearch?: string;
  onResult(items: Array<any>, mode: boolean): void;
  onChangeText?(text: string): void;
}

export interface IListCard {
  items: Array<any>;
}

