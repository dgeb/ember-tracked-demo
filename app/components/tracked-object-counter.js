import { set } from '@ember/object';
import Component from '@glimmer/component';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { action, computed } from '@ember/object';
import { TrackedObject } from 'tracked-built-ins';

export default class TrackedObjectCounter extends Component {
  obj2 = new TrackedObject({ count: 0 });

  // @computed('obj2.count')
  get count2() {
    return this.obj2.count;
  }

  @action
  increment2() {
    this.obj2.count++;
    // set(this, 'obj2.count', this.obj2.count + 1);
    console.log(this.obj2.count);
  }
}
