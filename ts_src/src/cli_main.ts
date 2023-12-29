import { Command, Option } from 'commander';
import { App } from "./app"

const cli = new Command()
const app = new App

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

cli
    .command('add_label <label>')
    .alias('al')
    .description('Add Label')
    .action((label: string) => {
        let labels: string[] = app.labels
        labels.push(label)
        app.save()
    });

cli
    .command('get_labels')
    .alias('gl')
    .description('Get Labels')
    .action(() => {
        let labels: string[] = app.labels
        let labels_string: string = labels.join(',');
        process.stdout.write(labels_string)
    });

cli
    .command('delete_label <label>')
    .alias('dl')
    .description('Delete Label')
    .action((deleted_label: string) => {
        // delete label
        let labels = app.labels
        app.labels = labels.filter((label) => { return label !== deleted_label })

        // delete any mappings that include the label
        let map = app.mapping
        map.delete(deleted_label)

        // save the state
        app.save()
    });

cli
    .command('add_mapping <label> <id>')
    .alias('am')
    .description("Add Mapping")
    .action((label: string, id: string) => {

        // add mapping
        let map = app.mapping
        let mapped_id: string[] = map.get(label) || []
        mapped_id.push(id)
        map.set(label, mapped_id)

        // add label if not tracked
        let labels = app.labels
        if (!labels.includes(label)) {
            labels.push(label)
            app.labels = labels
        }

        app.save()
    })

cli
    .command('delete_mapping <label> <id>')
    .alias("dm")
    .description("Delete mapping")
    .action((label: string, deleted_id: string) => {
        let map = app.mapping
        let mapped_id: string[] = map.get(label) || []
        mapped_id = mapped_id.filter((id) => { return id !== deleted_id })

        map.set(label, mapped_id)

        app.save()
    })

cli.parse();