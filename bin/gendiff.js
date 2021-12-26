#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/getdiff.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, { format } = program.opts().format) => {
    console.log(genDiff(filepath1, filepath2, format));
  });

program.parse();
