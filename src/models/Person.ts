export interface IPerson {
  Name?: string;
}

class Person implements IPerson {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }

  public get Name() {
    return this._name;
  }

  public set Name(value) {
    this._name = value;
  }
}

export default Person;
