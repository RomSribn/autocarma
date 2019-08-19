import { defaultConfig } from 'config';
import Error from '_assets/shared/Error/components/Error';

const { apiHost } = defaultConfig;

const customFetch = (url, options = null) => fetch(`${apiHost}/${url}`, {
  ...options,
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });

export const get = url => customFetch(url);

export const post = (url, data) => customFetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
});

export const del = (url, id) => customFetch(`${url}/${id}`, {
  method: 'DELETE',
});

export const put = (url, id, data) => customFetch(`${url}/${id}`, {
  method: 'PUT',
  body: JSON.stringify(data),
});
