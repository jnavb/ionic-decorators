import { Subscription } from "rxjs";
import { BackButtonDependencies, Constructor } from "../models/models";
import { patchMethod } from "./utils";


const SUBSCRIPTION = '__IONIC_DECORATORS_BACK_BUTTON__';

export function BackButton<T extends BackButtonDependencies>(url: string) {
  return (target: Constructor<T>) => {
    patchMethod(target, () => addBackButtonBehavior(url), 'ionViewWillEnter');
    patchMethod(target, removeBackButtonSubcription, 'ionViewWillLeave');
  };
}

function addBackButtonBehavior<T extends BackButtonDependencies>(url: string) {
  this[SUBSCRIPTION] = (this as T).platform.backButton.subscribeWithPriority(
    10,
    () => {
      (this as T).nav.navigateBack(url);
    }
  );
}

function removeBackButtonSubcription<T extends BackButtonDependencies>(
  this: T
) {
  (this[SUBSCRIPTION] as Subscription).unsubscribe();
}
