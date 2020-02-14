import { Page } from 'gatsby';
import * as UrlPattern from 'url-pattern';
import { SyliusSourcePluginPageDefinition } from '../../schemas/Plugin/Options';
import { BaseTaxonNode } from '../../schemas/Nodes/Taxon';
import { getPathPattern } from '../utils/getPathPattern';

const DEFAULT_PATH_PATTERN: string = '/:locale/:slug';

export function getTaxonPagesDefinitions(
  pluginPage: SyliusSourcePluginPageDefinition,
  taxons: BaseTaxonNode[],
): Page[] {
  return taxons.map((taxon: BaseTaxonNode) => {
    const path: string = getPathPattern(pluginPage.path, taxon.locale, DEFAULT_PATH_PATTERN);
    const pattern: UrlPattern = new UrlPattern(path);

    return {
      path: pattern.stringify(taxon),
      component: pluginPage.component,
      context: {
        taxon,
      },
    };
  });
}
