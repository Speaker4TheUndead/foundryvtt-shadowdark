//import chalk from "chalk";
import pc from "picocolors";

export default class Logger {

	static verbose = true;

	static error(message) {
		//console.log(chalk.bold.red(message));
		console.log(pc.red(pc.bold(message)));
	}

	static info(message) {
		if (!this.verbose) return;
		//console.log(chalk.cyan(message));
		console.log(pc.cyan(message));
	}

	static log(message) {
		if (!this.verbose) return;
		console.log(message);
	}

	static warn(message) {
		//console.log(chalk.hex("#ffa500").bold(message));
		console.log(pc.yellow(pc.bold(message)));
	}

}
