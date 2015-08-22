let config = {
  trevorUrl: '',
  trevorInputField: 'input'
};

export function setConfig(cfg) {
  config = Object.assign({}, config, cfg);
}

export default function config() {
  return config;
};
