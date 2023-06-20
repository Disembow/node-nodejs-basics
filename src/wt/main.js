import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const pathToWorker = path.resolve(__dirname, './worker.js');

const performCalculations = async () => {
  const coreCount = cpus().length;
  const startFrom = 10;
  const status = {
    resolved: 'resolved',
    error: 'error',
  };

  const workers = [];

  for (let i = 0; i < coreCount; i += 1) {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker(pathToWorker, {
          workerData: startFrom + i,
        });

        worker.on('message', (msg) => {
          resolve({ status: status.resolved, data: msg });
        });

        worker.on('error', () => {
          resolve({ status: status.error, data: null });
        });
      })
    );
  }

  const result = await Promise.all(workers);

  console.log(result);
};

await performCalculations();
