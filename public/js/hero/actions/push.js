import { HERO_ACTIONS, HERO_IMG } from '../../constants.js';
import { getBox, createVertices, getFrames } from '../../helpers.js';

const name = HERO_ACTIONS.push;

const img = 'url("' + HERO_IMG.push + '")';

const allowedActions = [
  HERO_ACTIONS.idle,
  HERO_ACTIONS.fall,
  HERO_ACTIONS.preJump,
  HERO_ACTIONS.attack,
];

const dimensions = { height: 32, width: 32 };

const vertices = createVertices({ height: 32, width: 22 }, { x: 5, y: 0 });

const frames = getFrames({
  dimensions,
  number: 6,
  left: 'scaleX(-1)',
  right: 'none',
});

const effects = [];

export default {
  name,
  loop: true,
  img,
  effects,
  allowedActions,
  getHurtbox: getBox(vertices),
  frames,
  dimensions: {
    height: dimensions.height + 'px',
    width: dimensions.width + 'px',
  },
};