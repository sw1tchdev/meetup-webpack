import 'core-js';
import 'regenerator-runtime/runtime';

import moduleA from './modules/moduleA';
import ExtendedModuleB, { test, asd as asdB } from './modules/moduleB.ts';
import { asd } from './modules/moduleC.ts';
import './app.scss';
import logoUrl from './assets/logo-on-dark-bg.png';
import logoSvgData from './assets/logo-on-dark-bg.svg';

const testPromise = async () => Promise.resolve(12311);

async function main() {
  const extModuleB = new ExtendedModuleB();
  const result = await testPromise();
  const resultFromModule = await moduleA();
  const resultFromModuleB = await extModuleB.get();
  const container = document.querySelector('div.container');
  if (!container) {
    return;
  }

  console.log(extModuleB.test(), test, asdB, asd);
  console.log(result, resultFromModule, resultFromModuleB);

  const logoPng = new Image(100);
  logoPng.src = logoUrl;

  const logoSvg = new Image(100);
  logoSvg.src = logoSvgData;

  container.append(logoPng, logoSvg);
}

main().then().catch();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(new URL('./sw.js', import.meta.url)).then(
      (registration) => {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      },
      (err) => {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      },
    );
  });
}
