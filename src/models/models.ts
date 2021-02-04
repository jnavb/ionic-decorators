import { IonRouterOutlet, Platform, NavController } from '@ionic/angular';

export interface DisableIosSwipDependencies {
  routerOutlet: IonRouterOutlet;
}

export interface BackButtonDependencies {
  platform: Platform;
  nav: NavController;
}

export type Constructor<T> = new (...args: any[]) => T;
