export class Stately {
  constructor() {
    this.StateInformation = {};
    this.State = null;
  }

  createState(name, defaultValue = "?") {
    Object.defineProperty(this.StateInformation, name, 
  {value: defaultValue, writable: true}); 
  }

  initializeState() {
    this.State = new Proxy();
  } 
}
