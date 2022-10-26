import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Nested {
  @tracked count = 0;
}

export default class SimpleTrackedCounter extends Component {
  obj = new Nested();

  get count() {
    return this.obj.count;
  }

  @action
  increment() {
    this.obj.count++;
  }
}
