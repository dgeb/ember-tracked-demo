import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { action, computed } from '@ember/object';

class Nested {
  @tracked count = 0;
}

export default class ComputedTrackedCounter extends Component {
  obj = new Nested();

  @computed('obj.count')
  get count() {
    return this.obj.count;
  }

  @action
  increment() {
    this.obj.count++;
  }
}
