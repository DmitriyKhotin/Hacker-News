import { Id, URL } from '../slice/types';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';

const itemApi = (endPoint: string): URL => `${baseUrl}${endPoint}.json`;

export const apiUrls = {
  item: {
    newestItems: (): URL => itemApi('newstories'),
    itemById: (id: Id): URL => itemApi(`item/${id}`),
  },
  //   user: {
  //     albums: (): string => userApi('/albums'),
  //     playlists: (): string => userApi('/playlists'),
  //     profile: (): string => userApi(''),
  //     topTracks: (): string => userTopApi('/tracks'),
  //     topArtists: (): string => userTopApi('/artists'),
  //   },
  //   model: (path: string): string => modelApi(path),
  //   search: (): string => modelApi('/search'),
};
