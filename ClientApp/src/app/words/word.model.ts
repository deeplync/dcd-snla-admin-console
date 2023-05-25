import * as dayjs from 'dayjs';

export interface IWord {
    id?: string;
    name?: string;
    title?: string;
    titleArabic?: string;
    description?: string | null;
    descriptionArabic?: string | null;
    emiratiDialectArabic?:string|null;
    emiratiDialect?:string | null;
    interestingFacts?:string | null,
    interestingFactsArabic?:string | null,
    interestingFactsEnglish?:string|null,
    interesting_Facts_En?:string|null,
    sentenceUsage?: string | null;
    sentenceUsageArabic?: string | null;
    descriptionRd?:string | null;
    sentenceUsageRd?:string | null;
    createdDateTime?: dayjs.Dayjs;
}

export class Word implements IWord {
    constructor(
      public id?: string,
      public name?: string,
      public title?: string,
      public titleArabic?: string,
      public description?: string | null,
      public descriptionArabic?: string | null,
      public emiratiDialectArabic?:string | null,
      public interestingFactsEnglish?:string | null,
      public emiratiDialect?:string|null,
      public interestingFacts?:string | null,
      public interestingFactsArabic?:string | null,
      public interesting_Facts_En?:string|null,
      public sentenceUsage?: string | null,
      public sentenceUsageArabic?: string | null,
      public descriptionRd?:string | null,
      public sentenceUsageRd?:string | null,
      public createdDateTime?: dayjs.Dayjs
    ) {}
  }
  
  export function getWordIdentifier(word: IWord): string | undefined {
    return word.id;
  }