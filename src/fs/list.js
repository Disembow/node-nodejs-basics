import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const original = path.resolve(__dirname, 'files');

const errorMessage = 'FS operation failed';

const list = async () => {
  try {
    const result = await fs.readdir(original);
    console.log(result);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await list();
