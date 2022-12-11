export const fetchData = () => {
  return fetch(
    'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c3c33d7b2b384cfca9242957584d5df3',
  ).then(res => res.json());
};
