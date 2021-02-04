import { Constructor, DisableIosSwipDependencies } from "../models/models";
import { patchMethod } from "./utils";


export function DisableIosSwipe<T extends DisableIosSwipDependencies>(
  target: Constructor<T>
) {
  patchMethod(target, disableGesture, 'ionViewWillEnter');
  patchMethod(target, enableGesture, 'ionViewWillLeave');

  return target;
}

function disableGesture<T extends DisableIosSwipDependencies>(this: T) {
  this.routerOutlet.swipeGesture = false;
}

function enableGesture<T extends DisableIosSwipDependencies>(this: T) {
  this.routerOutlet.swipeGesture = true;
}
