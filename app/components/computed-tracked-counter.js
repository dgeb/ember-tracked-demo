import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { action, computed } from '@ember/object';

export default class ComputedTrackedCounter extends Component {
  @tracked count = 0;

  @computed('count')
  get computedCount() {
    return this.count;
  }

  @action
  increment() {
    this.count++;
  }
}
