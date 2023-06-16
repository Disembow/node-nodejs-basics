import { pipeline } from 'node:stream/promises';
import { Transform } from 'node:stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, enc, cb) {
      const reversedString = chunk.toString().split('').reverse().join('').trim();
      cb(null, reversedString + '\n');
    },
  });

  await pipeline(process.stdin, reverse, process.stdout);
};

await transform();
