import axios from 'axios';

export default async function fetchQuotes() {
  return await axios.get('https://zenquotes.io/api/quotes');
}
