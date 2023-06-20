import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const target = path.resolve(__dirname, 'files', 'fileToRemove.txt');

const errorMessage = 'FS operation failed';

const remove = async () => {
  try {
    await fs.unlink(target);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await remove();
