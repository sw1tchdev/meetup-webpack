import delay from '../helpers/delay';

export default async () => {
  await delay(500);
  return Promise.resolve('moduleA');
};
