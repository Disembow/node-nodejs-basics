import { createReadStream, createWriteStream } from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToCompressedFile = path.resolve(__dirname, 'files', 'archive.gz');
const pathToFile = path.resolve(__dirname, 'files', 'decompressed.txt');

const decompress = async () => {
  const rs = createReadStream(pathToCompressedFile);
  const unzip = zlib.createUnzip();
  const ws = createWriteStream(pathToFile);

  await pipeline(rs, unzip, ws);
};

await decompress();
