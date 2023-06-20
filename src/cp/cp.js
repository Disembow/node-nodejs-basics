import { fork } from 'node:child_process';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const targetFile = path.resolve(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const cp = fork(targetFile, args);

  cp.on('message', (msg) => process.stdout.write(msg));
  cp.on('error', (msg) => process.stderr(msg));
};

spawnChildProcess();
// spawnChildProcess(['1', '12', '144']);
