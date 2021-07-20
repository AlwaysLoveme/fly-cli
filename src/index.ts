import inquirer from "inquirer";
import pkg from "../package.json";
import { program } from "commander";
import { create } from "./commands/create";

enum Choices {
  wechat = "Wechat miniprogram(Vue3.0 + Typescript + Framework7-vue)",
  vuePC = 'Vue3 for PC(Typescript + Webpack5)',
  vueMobile = "Vue3 for Mobile(Typescript + Framework7-vue)",
  reactPC = "React for PC(TSX + Webpack5)",
  rollup = "工具库开发(Rollup + Typescript)",
  nodeCli = "Node-cli(Nodejs + Typescript)"
}

program.version(pkg.version);
program
  .command("init")
  .description("create new project")
  .option("")
  .action(async (cmd: any, options: Record<string, string>) => {
    const data = await inquirer.prompt([
      {
        type: "input",
        message: "please enter the name of project",
        name: "name",
      },
      {
        type: "list",
        choices: [
          Choices.wechat,
          Choices.vuePC,
          Choices.vueMobile,
          Choices.reactPC,
          Choices.rollup,
          Choices.nodeCli,
        ],
        message: "please choose a template for project",
        name: "template",
      }
    ]).catch(error => {
      console.log(error);
    });
    let gitRepo = "";
    switch (data.template) {
      case "Wechat miniprogram(Vue3.0 + Typescript + Framework7-vue)":
        gitRepo = "github:AlwaysLoveme/wechat-vue#main";
        break;
      case "Vue3 for PC(Typescript + Webpack5)":
        gitRepo = "github:AlwaysLoveme/webpack5-template#main";
        break;
      case "Vue3 for Mobile(Typescript + Framework7-vue)":
        gitRepo = "github:AlwaysLoveme/awesome-framework7-app#main";
        break;
      case "工具库开发(Rollup + Typescript)":
        gitRepo = "github:AlwaysLoveme/rollup-typescript-template#main";
        break;
      case "React for PC(TSX + Webpack5)":
        gitRepo = "github:AlwaysLoveme/webpack5-template#react";
        break;
      default:
        gitRepo = "github:AlwaysLoveme/node-typescript-cli#main";
        break;
    }
    await create(gitRepo, data.name);
  });

program.parse(process.argv);