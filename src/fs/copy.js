import fs, { constants } from 'fs/promises';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const errorMessage = 'FS operation failed';

const originalDir = path.resolve(__dirname, 'files');
const targetDir = path.resolve(__dirname, 'files_copy');

const copy = async () => {
  try {
    await fs.stat(originalDir, (error) => {
      if (error) throw new Error(errorMessage);
    });

    await fs.mkdir(targetDir, { recursive: true }, (error) => {
      if (error) throw new Error(errorMessage);
    });

    const files = await fs.readdir(originalDir);

    const promises = files.map((file) =>
      fs.copyFile(
        path.resolve(__dirname, originalDir, file),
        path.resolve(__dirname, targetDir, file),
        constants.COPYFILE_EXCL,
        (error) => {
          if (error) throw new Error(errorMessage);
        }
      )
    );

    await Promise.all(promises);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await copy();
