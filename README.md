# Ionic/Angular Decorators

This library contains a set of Utils decorators to use at Ionic components and reduce code duplication

# Install

Run `npm i ionic-decorators`

# Documentation

## @AutoUnsubscribe

Use it to automatically unsubscribe at `ngOnDestroy` for all subscriptions saved at class scope.

```typescript
@AutoUnsubscribe
export class Component {
  
  sub1: Subscription;
  sub2: Subscription;

  constructor() {

  }
}
```

## @DisableIosSwipe

Use it to disable iOs swip gesture at current page.

```typescript
@DisableIosSwipe
export class Component {

  constructor(private routerOutlet: IonRouterOutlet) {

  }
}
```

## @BackButton

Use it to override Android back button specifying url page to go when is pressed.

```typescript
@BackButton('home')
export class Component {

  constructor(
    private nav: NavController,
    private platform: Platform  
  ) {
  
  }
}
```
