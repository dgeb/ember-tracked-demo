import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SimpleTrackedCounter extends Component {
  @tracked count = 0;

  @action
  increment() {
    this.count++;
  }
}
