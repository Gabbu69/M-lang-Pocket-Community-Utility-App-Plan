import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? collect(file) : [file];
  }));
  return files.flat();
}
const files = (await collect(dist)).filter((file) => path.basename(file) !== 'precache-manifest.js').sort();
const hash = createHash('sha256');
for (const file of files) {
  hash.update(path.relative(dist, file));
  hash.update(await readFile(file));
}
const manifest = {
  version: hash.digest('hex').slice(0, 16),
  urls: files.filter((file) => path.basename(file) !== 'sw.js')
    .map((file) => './' + path.relative(dist, file).split(path.sep).join('/')),
};
await writeFile(path.join(dist, 'precache-manifest.js'), `self.__MLANG_PRECACHE = ${JSON.stringify(manifest)};\n`);
console.log(`Offline shell prepared: ${manifest.urls.length} files, build ${manifest.version}`);
