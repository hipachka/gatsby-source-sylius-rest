import { PluginOptions } from 'gatsby';

export type SyliusSourcePluginOptions = PluginOptions & SyliusSourcePluginOptionsInterface;

export type PartialSyliusSourcePluginOptions =
  PluginOptions
    & Omit<Partial<SyliusSourcePluginOptions>, 'schemas'>
    & {
      schemas?: PartialSyliusSourcePluginSchema;
    };

export type PartialSyliusSourcePluginSchema = Partial<SyliusSourcePluginSchema>;

export interface SyliusSourcePluginOptionsInterface {
  debug: boolean;
  locales: string[];
  pages: SyliusSourcePluginPageDefinition[];
  schemas: SyliusSourcePluginSchemas;
  url?: string;
}

export interface SyliusSourcePluginPageDefinition {
  component: string;
  path?: SyliusSourcePluginPagePath;
  type: SyliusSourcePluginPagesType;
}

export type SyliusSourcePluginPageLocalizedPathMap = { [locale: string]: string };
export type SyliusSourcePluginPagePath = string | SyliusSourcePluginPageLocalizedPathMap;

export enum SyliusSourcePluginPagesType {
  PRODUCT = 'product',
  TAXON = 'taxon',
}

export interface SyliusSourcePluginSchemas {
  image: SyliusSourcePluginSchema;
  product: SyliusSourcePluginSchema;
  productPrice: SyliusSourcePluginSchema;
  productTaxons: SyliusSourcePluginSchema;
  productVariant: SyliusSourcePluginSchema;
  taxon: SyliusSourcePluginSchema;
}

export interface SyliusSourcePluginSchema {
  [key: string]: any;
}
