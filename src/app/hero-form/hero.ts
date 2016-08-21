export class Hero {
  submitted: boolean = false;

  constructor(public id: number,
              public name: string,
              public power: string,
              public alterEgo?: string) {
  }
}
