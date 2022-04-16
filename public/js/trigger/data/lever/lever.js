import { isColliding } from '../../../helpers.js';
import Trigger from '../../trigger.js';
import STATES from './states/index.js';

export default class Lever extends Trigger {
  constructor() {
    super({ states: STATES });
    this.isLocked = false;
  }

  enable() {
    if (this.state.name === this.states.enabled.name) return;

    this.state = this.states.enabled;
    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;

    this.isEnabled = true;
  }

  disable() {
    if (this.state.name === this.states.disabled.name) return;

    this.state = this.states.disabled;
    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;

    this.isEnabled = false;
  }

  async loop() {
    if (_.isEmpty(this.hero.hitbox)) return (this.isLocked = false);
    if (isColliding(this.vertices, this.hero.hitbox) && !this.isLocked) {
      this.state.name === this.states.enabled.name
        ? this.disable()
        : this.enable();
      this.isLocked = true;
    }
  }

  initialize({ position, hero }) {
    this.position.x = position.x;
    this.position.y = position.y;
    this.vertices = this.state.getVertices(this.position);

    this.element.style.position = 'absolute';
    this.element.style.backgroundSize = 'cover';
    this.element.style.imageRendering = 'pixelated';

    this.element.style.height = this.state.dimensions.height;
    this.element.style.width = this.state.dimensions.width;
    this.element.style.backgroundImage = this.state.img;
    this.element.style.left = this.position.x + 'px';
    this.element.style.top = this.position.y + 'px';

    document.getElementById('misc').appendChild(this.element);

    this.hero = hero;
  }
}