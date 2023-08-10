// https://openapi-ts.pages.dev/introduction/

// generate list of remote services
import { spawn } from 'child_process';

const services = [
  //   { name: 'alice', url: 'http://localhost:3000' },
  { name: 'bob', url: 'http://localhost:3001' },
];

process.stdout.write(
  JSON.stringify({
    services,
  }),
);

// Run npx openapi-typescript src/api-types/find-remotes.ts --output src/api-types/find-remotes.d.ts

services.forEach((s) => {
  const cp = spawn('npx', [
    'openapi-typescript',
    `${s.url}/api/.json`,
    '-o',
    `./src/api-types/types/${s.name}.d.ts`,
  ]);

  process.stdout.write('\n');
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
});
