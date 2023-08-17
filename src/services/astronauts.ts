import axios from 'axios';

const astronautApi = axios.create({
  baseURL: 'https://lldev.thespacedevs.com/2.2.0/astronaut',
  timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export const getAll = async () => {
  const { data } = await astronautApi.get<string[]>("");

  return data;
};

export const getFiltered = async (filter: string, filterInput: string) => {
  const { data } = await astronautApi.get<string[]>(
    `?${filter}=${filterInput}`,
  );

  return data;
};

export const getSearch = async (searchParam: string) => {
  const { data } = await axios.get<string[]>(
    `?search=${searchParam}`,
  );

  return data;
};