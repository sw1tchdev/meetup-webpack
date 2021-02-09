import moduleA from './modules/moduleA';
import './app.scss';

const testPromise = async () => Promise.resolve(12311);

async function main() {
  const result = await testPromise();
  console.log(result);
  const resultFromModule = await moduleA();
  console.log(resultFromModule);
}

main().then().catch();
