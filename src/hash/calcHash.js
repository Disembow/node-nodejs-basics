const { createHash } = await import('node:crypto');
import { readFile } from 'node:fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');

  try {
    const result = await readFile(pathToFile, 'utf-8');
    hash.update(result);
    console.log(hash.digest('hex'));
  } catch (error) {
    console.error(error);
  }

  hash.end();
};

await calculateHash();
