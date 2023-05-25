
export class Country {
    constructor(
      public id?:string,
      public iso2?: string | null,
      public name?: string | null,
      public nicename?: string | null,
      public phonecode?: number | null,
      public createdBy?:string | null
    ) {}
  }
  