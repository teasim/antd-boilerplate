import { configure } from 'teasim-samples';

function loadSamples() {
  require('../../samples/index');
}

configure(loadSamples, module);
