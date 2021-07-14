import { BASE_API_URL } from './constants.utils';

const fetchData = async ({ path, url, resource }) => {
  await fetch(url || `${BASE_API_URL}${path}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then(async (data) => {
      resource.push(...data.results);
      if (data.next) await fetchData({ url: data.next, resource });
    });
  return resource;
};

export default {
  getData: (path) => fetchData({ path, resource: [] }),
};
