import { Subscription } from "rxjs";
import { Constructor } from "../models/models";
import { patchMethod } from "./utils";

export function AutoUnsubscribe<T>(target: Constructor<T>) {
  patchMethod(target, unsubscribeProps, 'ngOnDestroy');

  return target;
}

function unsubscribeProps() {
  Object.values(this)
    .filter((prop: any) => typeof prop.subscribe === 'function')
    .forEach((s: Subscription) => s.unsubscribe());
}
