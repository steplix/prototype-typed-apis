import openapiTS from 'openapi-typescript';
import fs from 'fs';

const bob = JSON.parse(
  fs.readFileSync('./src/api-types/bob-test.json', 'utf8'),
);

async function generateRemotes(): Promise<
  Array<{ name: string; apiUrl: string }>
> {
  return [
    {
      name: 'bob',
      apiUrl: 'http://localhost:3001/api/.json',
    },
  ];
}

export async function generateApiTypes() {
  const remotes = await generateRemotes();
  const outputs = {};

  console.log(remotes);

  remotes.forEach(async (r) => {
    console.log('bob', bob);

    // console.log(await openapiTS('asdf'));

    outputs[r.name] = await openapiTS(bob);
  });

  console.log(outputs);
}
