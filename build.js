const Lectro = require('@lectro/core');

const ReactShinju = new Lectro('node');
ReactShinju.extend(x => {
  x.devtool = 'none';
  return x;
}).build();
