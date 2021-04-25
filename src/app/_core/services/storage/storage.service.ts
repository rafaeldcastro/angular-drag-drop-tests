import { Injectable } from "@angular/core";
import { APP_CONSTANTS } from "./constants/app.constants";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(private storage: Storage) {}

  // create(): Promise<Storage>{
  //     return this.storage.create()
  //         .then(data => data)
  //         .catch(e => { throw e; })
  // }

  /**
   * Get the value associated with the given key
   * @param key Any key will be juntioned with the APP_PREFIX constant
   */
  get(key: string): Promise<any> {
    return this.storage
      .get(`${APP_CONSTANTS.APP_PREFIX}-${key}`)
      .then(data => data)
      .catch(e => {
        throw e;
      });
  }

  /**
   * Set the value for the given key
   * @param key Any key will be juntioned with the APP_PREFIX constant
   * @param value Any value will be stringified
   */
  set(key: string, value: any): Promise<any> {
    return this.storage
      .set(`${APP_CONSTANTS.APP_PREFIX}-${key}`, value)
      .then(() => true)
      .catch(e => {
        throw e;
      });
  }

  /**
   * Returns a promise that resolves with an object Keys that has an
   * array of strings (keys names)
   */
  keys(): Promise<string[]> {
    return this.storage
      .keys()
      .then(data => data)
      .catch(e => {
        throw e;
      });
  }

  /**
   * Returns a promise that resolves with the number of keys stored
   */
  length(): Promise<number> {
    return this.storage
      .length()
      .then(data => data)
      .catch(e => {
        throw e;
      });
  }

  /**
   * Remove any value associated with the given key
   * @param key
   */
  remove(key: string): Promise<void> {
    return this.storage
      .remove(`${APP_CONSTANTS.APP_PREFIX}-${key}`)
      .then(() => console.log(`Value: ${key} removed from the Storage`))
      .catch(e => {
        throw e;
      });
  }

  /**
   * Remove ALL key value pair stored. WARNING: This can't be undone.
   */
  removeAll(): Promise<void> {
    return this.storage
      .clear()
      .then(() => console.log("Storage cleared"))
      .catch(e => {
        throw e;
      });
  }
}
