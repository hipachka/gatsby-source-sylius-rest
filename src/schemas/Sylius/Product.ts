import { SyliusAttribute } from './Attribute';
import { SyliusImage } from './Image';
import { SyliusProductTaxons } from './ProductTaxons';
import { SyliusProductVariant } from './ProductVariant';

// @todo: add associations
export interface SyliusProduct {
  attributes: SyliusAttribute[];
  averageRating: number;
  channelCode: string;
  code: string;
  description: string;
  images: SyliusImage[];
  metaKeywords: string;
  metaDescription: string;
  name: string;
  shortDescription: string;
  slug: string;
  taxons: SyliusProductTaxons;
  variants: { [key: string]: SyliusProductVariant };
}
