import { AnimeState } from '../constants/anime';
export interface Anime {
  id: number;
  imgUrl: string;
  title: string;
  state: typeof AnimeState;
  genre: string;
}

