import { AnimeState } from 'src/app/core/constants/anime';
import { Anime } from 'src/app/core/models/anime.interface';

export const animes: Anime[] = [
  {
    id: '1',
    imgUrl:
      'https://bananaroad.com/cdn/shop/products/pst2128_Bleach_Poster_grande.jpg?v=1621363373',
    title: 'bleach',
    state: AnimeState.ENABLE,
    genres: 'aventura,sobrenatural',
  },
  {
    id: '2',
    imgUrl: 'https://i.ebayimg.com/images/g/k00AAOSwM4FjBfDs/s-l1200.webp',
    title: 'One Piece',
    state: AnimeState.ENABLE,
    genres: 'aventura,fantasia,comedia,piratas',
  },
  {
    id: 'myheroacademia8597',
    imgUrl:
      'https://cdn.europosters.eu/image/750/postermy-hero-academia-reach-up-i112431.jpg',
    title: 'My Hero Academia',
    genres: 'superheroes, accion',
    state: AnimeState.ENABLE,
  },
  {
    id: 'demonslayer8597',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/46d8e6d3fcd4a016ff5e90f0281eae76.jpg',
    title: 'Demon Slayer',
    genres: 'fantasia, demonios,',
    state: AnimeState.ENABLE,
  },
  {
    id: 'thenewgate19122',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/6e2400c551da2d8a07be697773bdbf0d.jpg',
    title: 'The New Gate',
    genres: 'isekai, juego online',
    state: AnimeState.ENABLE,
  },
  {
    id: 'deliciousindungeon18506',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/50affe2ea9a02c36d5a7c0532c1b7ef9.jpeg',
    title: 'Dugeon meshi',
    genres: 'mazmorras,comida,aventura',
    state: AnimeState.ENABLE,
  },
  {
    id: 'windbreaker19136',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/b8b1bbc386d81a95c40e236089e11312.jpg',
    title: 'Wind Breaker',
    genres: 'accion, peleas escolares',
    state: AnimeState.ENABLE,
  },
  {
    id: 'ninjakamui19018',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/9c582bdfc9a2425c58b36a044714d5b5.jpg',
    title: 'Ninja Kamui',
    genres: 'accion, ninjas',
    state: AnimeState.ENABLE,
  },
  {
    id: 'theapothecarydiaries18578',
    title: 'The Apothecary Diaries',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/1366x768/100/31aacbf403a8f1c180a940009dbf17f5.jpeg',
    genres: 'epoca, drama, misterios',
    state: AnimeState.ENABLE,
  },
  {
    id: 'kaiju-no-8-19145',
    title: 'Kaiju No. 8',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/300x400/100/edfc7fe935b6eac2d704cf5b0a60e356.jpg',
    genres: 'monstruos, accion, terror',
    state: AnimeState.ENABLE,
  },
  {
    title: 'Re:Monster',
    id: 'remonster-19123',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/300x400/100/a7ab15fb2281cce25179cd739112f426.jpg',
    genres: 'monstruos, isekai,accion',
    state: AnimeState.ENABLE,
  },
  {
    title: 'That Time I Got Reincarnated as a Slime Season 3',
    id: 'thattimeigotreincarnatedasaslimeseason319109',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/300x400/100/f9b501458823539b6a2004f2cdb98a4a.jpg',

    genres: 'monstruos, isekai, peleas',
    state: AnimeState.ENABLE,
  },
  {
    id: 'spiceandwolfmerchantmeetsthewisewolf19143',
    title: 'Spice and Wolf: Merchant Meets the Wise Wolf',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/300x400/100/9a04e0bf651bcb1a0aefaace3d2349fa.jpg',

    genres: 'economia,drama,fantasia',
    state: AnimeState.ENABLE,
  },
  {
    id: 'bluelockepisodenagi19085',
    title: 'Blue Lock: Episode Nagi',
    imgUrl:
      'https://cdn.noitatnemucod.net/thumbnail/300x400/100/97a276237c3dce81b62af1565488fd37.jpg',

    genres: 'Deportes, futbol',
    state: AnimeState.ENABLE,
  },
];
