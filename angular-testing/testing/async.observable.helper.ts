import { defer } from "rxjs/observable/defer";

export function asyncData<T>(data: T) {
    return defer(() => {
        console.debug("Creating observable on fly")
        Promise.resolve(data)
    });
  }