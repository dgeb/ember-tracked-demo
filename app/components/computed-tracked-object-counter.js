import { set } from '@ember/object';
import Component from '@glimmer/component';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
import { action, computed } from '@ember/object';
import { TrackedObject } from 'tracked-built-ins';

export default class ComputedTrackedObjectCounter extends Component {
  obj = new TrackedObject({ count: 0 });

  @computed('obj.count')
  get computedCount() {
    return this.obj.count;
  }

  @action
  incrementDirectly() {
    this.obj.count++;
  }

  @action
  incrementViaSet() {
    set(this, 'obj.count', this.obj.count + 1);
  }
}
