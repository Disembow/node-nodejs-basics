import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const original = path.resolve(__dirname, 'files', 'wrongFilename.txt');
const target = path.resolve(__dirname, 'files', 'properFilename.md');

const errorMessage = 'FS operation failed';

const rename = async () => {
  try {
    await fs.rename(original, target);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await rename();
