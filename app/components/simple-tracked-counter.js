import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { action, computed } from '@ember/object';

export default class SimpleTrackedCounter extends Component {
  @tracked _count1 = 0;

  @computed('_count1')
  get count1() {
    return this._count1;
  }

  @action
  increment1() {
    this._count1++;
    console.log(this.count1);
  }
}
