// eslint-disable-next-line max-classes-per-file
abstract class ModuleB {
  abstract test(): string; // must be implemented in derived classes
}

export type tet = string;
export const asd = '123';
const test = 'asdasd';

export { test };

export default class ExtendedModuleB extends ModuleB {
  // eslint-disable-next-line class-methods-use-this
  test(): string {
    return 'asd';
  }

  // eslint-disable-next-line class-methods-use-this
  async get(): Promise<number> {
    return Promise.resolve(123);
  }
}
