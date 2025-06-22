// SOM API - Stately
export class Stately {
  constructor() {
    this.SubscribedFunctions = {};
    this.StateInformation = {};
    this.State = null;
  }

  createState(name, defaultValue = "?") {
    const writableInstance = {value: defaultValue, writable: true};
    Object.defineProperty(this.StateInformation, name, writableInstance); 
  }

  createFunction(targetStateField, callback) {
    const writableInstance = {value:[], writable: true}
    if (!this.SubscribedFunctions[targetStateField]) {
      Object.defineProperty(this.SubscribedFunctions, targetStateField, writableInstance);
      this.SubscribedFunctions[targetStateField].push(callback);
    } else { // There is a callback array for this goofy  
      this.SubscribedFunctions[targetStateField].push(callback);
    }
  }

  initializeState() {
    const handler = {
      get(target, prop, receiver) {
        this.SubscribedFunctions[prop].forEach((element) => element());
      },
      set(target, prop, receiver) {
        this.SubscribedFunctions[prop].forEach((element) => element());
      }
    }
    
    this.State = new Proxy(this.StateInformation, handler);
  }
}
