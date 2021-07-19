import { promisify } from "util";
import { Spinner } from "./spin";
import downloadGitRepo from "download-git-repo";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const clone = async function (gitRepo: string, projectName: string) {
  const spin = new Spinner();
  const download = promisify(downloadGitRepo);
  spin.start("⏬Creating Now");
  await download(gitRepo, projectName);
  return spin.done("Create Successfully!\n");
}

export { clone }