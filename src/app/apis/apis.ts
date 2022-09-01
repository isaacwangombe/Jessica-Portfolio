export class Projects {
  constructor(
    public id: number,
    public name: string,
    public details: string,
    public highlighted: boolean,
    public tools: number,
    public models: number
  ) {}
}

export class Tools {
  constructor(public id: number, public name: string) {}
}

export class Models {
  constructor(public id: number, public name: string) {}
}

export class Comments {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public comment: string,
    public rating: number
  ) {}
}
