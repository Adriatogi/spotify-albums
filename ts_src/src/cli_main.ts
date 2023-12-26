import { Command, Option } from 'commander';

const cli = new Command()

cli
    .name('spotify_cli')
    .version('0.1.0')
    .description('cli for spotify albums');

cli
    .command('test')
    .description('Testing command')
    .action(() => {
        console.log('Testing command');
    });

cli.parse();