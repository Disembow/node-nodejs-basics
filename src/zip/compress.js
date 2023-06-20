import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const pathToCompressedFile = path.resolve(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const rs = createReadStream(pathToFile);
  const gzip = zlib.createGzip();
  const ws = createWriteStream(pathToCompressedFile);

  await pipeline(rs, gzip, ws);
};

await compress();
