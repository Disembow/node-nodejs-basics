import { createWriteStream } from 'node:fs';
import path from 'node:path';
import { pid } from 'node:process';
import { pipeline } from 'node:stream/promises';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.resolve(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const ws = createWriteStream(pathToFile);

  await pipeline(process.stdin, ws);
};

await write();
