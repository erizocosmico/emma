import config from '../config';

export default function trevor(input) {
  let conf = config();
  return fetch(conf.trevorUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      [conf.trevorInputField]: input
    })
  }).then(response => response.json());
}
