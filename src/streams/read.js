import { createReadStream } from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.resolve(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const rs = createReadStream(pathToFile);

  await pipeline(rs, process.stdout);
};

await read();
