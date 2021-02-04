import { AppModule } from 'src/app/app.module';

type Hooks =
  | 'ngOnInit'
  | 'ionViewWillEnter'
  | 'ionViewWillLeave'
  | 'ngOnDestroy';

export const patchMethod = (
  target: new (...args) => any,
  newBehaviour: (...args) => any,
  methodName: Hooks
) => {
  const unpatchedMethod = target.prototype[methodName];
  target.prototype[methodName] = function () {
    newBehaviour.call(this);

    if (unpatchedMethod) {
      unpatchedMethod.call(this);
    }
  };

  return target;
};

export const get = <T>(dependency: new (...args) => T) => {
  try {
    return AppModule.injector.get(dependency);
  } catch {
    throw new Error(
      'Injector not found at App Module, read documentation for more detail'
    );
  }
};
