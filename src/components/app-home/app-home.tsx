import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <number-counter subtitle="are in the Freiburg office today"></number-counter>
        <number-counter subtitle="are in the Munich office today"></number-counter>
        <number-counter subtitle="are in the Vienna office today"></number-counter>
      </div>
    );
  }
}
