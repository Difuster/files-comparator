#!/usr/bin/env node

import { program } from 'commander';
import path from 'path';
import { readFileSync } from 'fs';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const parseFile = (file) => readFileSync(path.resolve('../fixtures', file));
    const file1 = JSON.parse(parseFile(filepath1));
    const file2 = JSON.parse(parseFile(filepath2));
    const getKeys = (file) => Object.keys(file);
    const keys1 = getKeys(file1);
    const keys2 = getKeys(file2);
    let keys = keys1.concat(keys2).sort();
    keys = keys.filter((item, index) => keys.indexOf(item) === index);
    console.log('{');
    for (let i = 0; i < keys.length; i += 1) {
      if (file1.hasOwnProperty(keys[i]) && file2.hasOwnProperty(keys[i])) {
        if (file1[keys[i]] !== file2[keys[i]]) {
          console.log(`  - ${keys[i]}: ${file1[keys[i]]}\n  + ${keys[i]}: ${file2[keys[i]]}`);
        } else {
          console.log(`    ${keys[i]}: ${file1[keys[i]]}`);
        }
      } else if (file1.hasOwnProperty(keys[i]) && !file2.hasOwnProperty(keys[i])) {
        console.log(`  - ${keys[i]}: ${file1[keys[i]]}`);
      } else if (!file1.hasOwnProperty(keys[i]) && file2.hasOwnProperty(keys[i])) {
        console.log(`  + ${keys[i]}: ${file2[keys[i]]}`);
      }
    }
    console.log('}');
  });

program.parse();
