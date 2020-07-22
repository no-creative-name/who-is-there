import { Component, State, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'number-counter',
  styleUrl: 'number-counter.scss',
})
export class NumberCounter implements ComponentInterface {
  @Prop() countName: string;
  @Prop() subtitle: string;

  @State() count: number = 0;

  countUp() {
    this.count++;
  }

  countDown() {
    if (this.count > 0) {
      this.count--;
    }
  }

  render() {
    return (
      <Host>
        <bouncy-number next={this.count}></bouncy-number>
        <div class="subtitle">{this.subtitle}</div>
        <div class="buttons">
          <button onClick={() => this.countUp()}>+</button>
          <button disabled={this.count === 0} onClick={() => this.countDown()}>-</button>
        </div>
      </Host>
    );
  }

}
