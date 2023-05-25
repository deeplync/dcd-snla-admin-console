export interface ISettings {
    id?: string;
    aboutUs?: string;
    privacyPolicy?: string;
    termsAndConditions?: string;
   
}

export class Settings implements ISettings {
    constructor(
      public id?: string,
      public aboutUs?: string,
      public privacyPolicy?: string,
      public termsAndConditions?: string,
     
    ) {}
  }
  
  export function getSettingsIdentifier(settings: ISettings): string | undefined {
    return settings.id;
  }