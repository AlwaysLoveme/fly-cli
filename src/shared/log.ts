import chalk from "chalk";

interface Log {
  text(text: string | unknown, blod?: string, color?: boolean): void;
  error(text: string): void;
}
const log: Log = {
  text(text: string, bold?: string, color?: boolean) {
    if (color && bold) {
      return console.log(chalk.green.bold(text));
    }
    if (color) {
      return console.log(chalk.green(text));
    }
    if (bold) {
      return console.log(chalk.bold(text));
    }
    return console.log(text);
  },
  error(text: string) {
    return console.error(chalk.red(text));
  },
};
export { log };