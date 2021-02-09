import moduleA from './modules/moduleA';
import ExtendedModuleB, { test, asd as asdB } from './modules/moduleB.ts';
import { asd } from './modules/moduleC.ts';
import './app.scss';

const testPromise = async () => Promise.resolve(12311);

async function main() {
  const extModuleB = new ExtendedModuleB();
  console.log(extModuleB.test(), test, asdB);
  console.log(asd);
  console.log(await extModuleB.get());
  const result = await testPromise();
  console.log(result);
  const resultFromModule = await moduleA();
  console.log(resultFromModule);
}

main().then().catch();
