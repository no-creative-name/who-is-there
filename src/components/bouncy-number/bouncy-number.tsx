import { Component, ComponentInterface, Host, h, Prop, Watch, State } from '@stencil/core';

@Component({
  tag: 'bouncy-number',
  styleUrl: 'bouncy-number.scss',
  shadow: true,
})
export class BouncyNumber implements ComponentInterface {
  @Prop() next: number;
  @State() current: number = this.next;
  @State() animate: boolean = false;
  @State() direction: 'up' | 'down' = 'down';
  @State() animationTimeout: ReturnType<typeof setTimeout>;

  @Watch('next')
  onNextChanged(next: number) {
    if(next > this.current) {
      this.direction = 'down';
    } else {
      this.direction = 'up';
    }
    
    if(!this.animate) {
      this.animate = true;
    }
    clearTimeout(this.animationTimeout);
    this.animationTimeout = setTimeout(() => {
      this.current = next;
      this.animate = false;
    }, 300);
  }

  render() {
    return (
      <Host>
        <div class="number">
          <div class={`next ${this.animate ? 'next--animate' : ''} ${this.direction}`}>{this.next}</div>
          <div class={`current ${this.animate ? 'current--animate' : ''} ${this.direction}`}>{this.current}</div>
        </div>
      </Host>
    );
  }

}
