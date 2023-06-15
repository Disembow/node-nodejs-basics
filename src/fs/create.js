import fs from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
  const pathToFile = path.resolve(__dirname, 'files', 'fresh.txt');

  try {
    await fs.writeFile(pathToFile, 'I am fresh and young', {
      flag: 'wx',
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();
