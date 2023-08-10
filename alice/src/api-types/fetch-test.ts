import { paths } from './types/bob';

type GreetParams =
  paths['/']['get']['requestBody']['content']['application/json'];
type GreetResponse =
  paths['/']['get']['responses'][200]['content']['application/json'];
//   & paths['/']['get']['responses'][400]['content']['application/json'];

export async function greet(params: GreetParams): Promise<GreetResponse> {
  const response = await fetch('http://localhost:3001/api', {
    method: 'GET',
    body: JSON.stringify(params),
  });

  if (!response.ok) throw new Error('Error fetching data');

  const jsonResponse = (await response.json()) as GreetResponse;

  return jsonResponse;
}
