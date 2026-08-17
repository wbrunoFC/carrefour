import type { PAGE_MAPS } from '../registry/page-maps';

export type PageName = keyof typeof PAGE_MAPS;

export type PageMap = (typeof PAGE_MAPS)[PageName]['android'];

export type ElementKey<N extends PageName> = keyof (typeof PAGE_MAPS)[N]['android']['elements'] & string;
