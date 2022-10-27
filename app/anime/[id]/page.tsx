interface Props {
  params: {
    id: string;
  };
}

export default async function ShowAnimePage(props: Props) {
  const anime = await getAnimeById(props.params.id);
  return (
    <div>
      <button>
        <h1>{anime.title}</h1>
      </button>
      <img src={anime.images.webp.image_url}></img>
    </div>
  );
}

async function getAnimeById(id: string) {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const body: { data: Anime } = await res.json();
  return body.data;
}
export interface Image {
  image_url?: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}

export interface Images {
  jpg: Image;
  webp: Image;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Image;
}

export interface Title {
  type: string;
  title: string;
}

export interface From {
  day: number;
  month: number;
  year: number;
}

export interface To {
  day?: any;
  month?: any;
  year?: any;
}

export interface Prop {
  from: From;
  to: To;
}

export interface Aired {
  from: Date;
  to?: any;
  prop: Prop;
  string: string;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface Reference {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes?: any;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Reference[];
  licensors: Reference[];
  studios: Reference[];
  genres: Reference[];
  explicit_genres: any[];
  themes: any[];
  demographics: Reference[];
}
