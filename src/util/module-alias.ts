import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');

/**
 * Even set path alias in tsconfig.ts
 * it's necessary implement this, else
 * on compilation we'll get errors because the app
 * won't find the paths
 */
moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
