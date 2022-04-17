import { TRIGGER_STATES, TRIGGER_IMG } from '../../../constants.js';
import { createVertices, getVertices } from '../../../helpers.js';

const name = TRIGGER_STATES.enabled;

const img = 'url("' + TRIGGER_IMG.lever.enabled + '")';

const dimensions = { height: 32, width: 32 };

const vertices = createVertices(dimensions);

export default {
  name,
  img,
  collision: false,
  getVertices: getVertices(vertices),
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};
