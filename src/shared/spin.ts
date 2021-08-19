/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Ora from "ora";

export class Spinner {
  instance!: Ora.Ora;

  start(text: string): Ora.Ora {
    return this.instance = Ora({ color: 'green', text }).start();
  }
  done(text: string) {
    if (this.instance) return this.instance.succeed(text);
  }
  fail(text: string) {
    if (this.instance) this.instance.fail(text);
  }
  error(text: string) {
    if (this.instance) this.instance.fail(text);
  }
  text(text: string) {
    if (this.instance) this.instance.text = text;
  }
}