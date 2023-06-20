import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const original = path.resolve(__dirname, 'files', 'fileToRead.txt');

const errorMessage = 'FS operation failed';

const read = async () => {
  try {
    const result = await fs.readFile(original, 'utf8');
    console.log(result);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await read();
