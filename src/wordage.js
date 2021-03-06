#!/usr/bin/env node

const wordage = require('commander')

wordage
  .command('search')
  .alias('d')
  .description('Search for words from a dictionary')
  .action(require('./commands/search'))
  .option('-l, --limit <limit>', 'Number of words to process', 50)
  .option(
    '-b, --batch-size <size>',
    'The number of HTTP requests out at once',
    20,
  )
  .option(
    '-m, --max-word-length <max>',
    'Limit results to words of a certain length',
  )
  .option('-w, --write <filePath>', 'Write the results to a file')
  .option('-p, --predictable', 'Start from the beginning of the alphabet')
  .option(
    '-f, --filter <platformName>',
    'Filter names by availability on a platform',
    'npm',
  )

wordage
  .command('means <means-like>')
  .alias('m')
  .description('Search for words with a similar meaning to another word')
  .action(require('./commands/means'))
  .option('-l, --limit <limit>', 'Number of words to process', 50)
  .option(
    '-b, --batch-size <size>',
    'The number of HTTP requests out at once',
    20,
  )
  .option(
    '-m, --max-word-length <max>',
    'Limit results to words of a certain length',
  )
  .option('-w, --write <filePath>', 'Write the results to a file')
  .option('-p, --predictable', 'Start from the beginning of the alphabet')
  .option(
    '-f, --filter <platformName>',
    'Filter names by availability on a platform',
    'npm',
  )

wordage.version('0.1.0').parse(process.argv)
