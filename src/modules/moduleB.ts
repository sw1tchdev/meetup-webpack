abstract class ModuleB {
  abstract test(): string; // must be implemented in derived classes
}

export type tet = string;
export const asd = '123';
const test = 'asdasd';

export { test };

export default class ExtendedModuleB extends ModuleB {
  test() {
    return 'asd';
  }

  async get() {
    return Promise.resolve(123);
  }
}