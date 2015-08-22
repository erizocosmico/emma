import randomMovie from './components/RandomMovie';
import translator from './components/Translator';

const handlers = {
  'random_movie': randomMovie,
  'translator': translator
};

export default function selectHandler(plugin) {
  return handlers[plugin];
}
