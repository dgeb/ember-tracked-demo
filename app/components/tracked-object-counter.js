import { set } from '@ember/object';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { TrackedObject } from '@ember-compat/tracked-built-ins';

export default class TrackedObjectCounter extends Component {
  obj = new TrackedObject({ count: 0 });

  @action
  incrementDirectly() {
    this.obj.count++;
  }

  @action
  incrementViaSet() {
    set(this, 'obj.count', this.obj.count + 1);
  }
}
