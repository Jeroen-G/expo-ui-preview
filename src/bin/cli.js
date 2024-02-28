#!/usr/bin/env node
import * as fs from 'fs';

import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const stubDir = 'node_modules/expo-ui-preview/src/stubs/preview';
const stubs = ['index.tsx', '_layout.tsx', '[component].tsx'];

yargs(hideBin(process.argv))
    .command(
        ['init [app]', 'install [app]', 'update [app]', 'i [app]', 'u [app]'],
        '(re)publish files for Preview',
        yargs => {
            return yargs.positional('app', {
                describe: 'The Expo Router root folder, defaults to ./app',
                default: 'app',
            });
        },
        args => {
            init(args.app);
        }
    )
    .strict()
    .demandCommand(1)
    .locale('en')
    .parse();

function init(expoRouterRoot) {
    const cwd = process.cwd();
    const previewDir = `${expoRouterRoot}/preview`;

    console.info(chalk.yellow(`installing Preview in ${previewDir}\n`));

    if (!fs.existsSync(previewDir)) {
        console.log(chalk.dim(`Created directory ${cwd}/${previewDir}`));
        fs.mkdirSync(previewDir, { recursive: false });
    }

    stubs.forEach(stub => {
        const source = `${cwd}/${stubDir}/${stub}`;
        const dest = `${cwd}/${previewDir}/${stub}`;
        fs.copyFileSync(source, dest);
        console.log(chalk.dim(`Copied ${dest}`));
    });

    console.info(chalk.green('\nPreview installed!'));
}
