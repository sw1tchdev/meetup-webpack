import delay from '../helpers/delay';

export default async () => {
  await delay(100);
  return Promise.resolve('moduleA');
};
