
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
