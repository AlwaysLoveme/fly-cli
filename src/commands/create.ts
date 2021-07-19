import exec from 'exec-sh';
// import clear from "clear";
import Figlet from "figlet";
import { promisify } from "util";
import { log } from "../shared/log";
// import { Spinner } from "../shared/spin";
// import child_process from "child_process";
import { clone } from "../shared/download";


const figlet = promisify(Figlet);
const execSh = promisify(exec);
// const spwan = async (...args: [string, string[], Record<string, unknown>]) => {
//   const { spawn } = child_process;
//   return new Promise<void>((resolve) => {
//     const proc = spawn(...args);
//     proc.stdout.pipe(process.stdout);
//     proc.stderr.pipe(process.stderr);
//     proc.on("close", resolve);
//   });
// }

const create = async (gitRepo: string, projectName: string): Promise<void> => {
  // const spin = new Spinner();
  // 清除界面
  // clear();
  const data = await figlet("welcome to fly");
  log.text(data, 'blod', true);

  // 创建下载模版项目
  log.text("🚀 The project name is: " + projectName + '\n');
  // eg: github:AlwaysLoveme/ionic-vue3#main
  await clone(gitRepo, projectName);

  // 自动安装依赖
  // spin.start('安装依赖');
  await execSh(`cd ./${projectName} && npm install`)
  // await spwan("npm", ["install"], { cwd: `./${projectName}` });
  // spin.done("依赖安装成功")
  log.text(`\n${projectName} is already set up\n
===================
\n
  cd ${projectName}
  npm run ****
\n
===================
  `, 'bold', true)
}

export { create }