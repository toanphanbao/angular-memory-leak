# Angular memory leak Demo

Reproduce a memory leak when using Observable.

Fix the above issue by:

- manually calling unsubscribe method in ngOnDestroy (*MemoryLeakPageComponent*).
- use `takeUntil ` operator to manage subscriptions declaratively and unsubscribe them in ngOnDestroy (*AnotherMemoryLeakPageComponent*).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

