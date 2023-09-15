import click
from app import App
import os


@click.group()
@click.pass_context
def cli(ctx):
    print("Running cli")
    ctx.obj = App()


@cli.command(name="pl")
@click.pass_obj
def pl(app):
    labels = app.labels
    print("pl Labels: labels")
    return labels


@cli.command(name="al")  # add label
@click.option("--label", required=True, type=str)
@click.pass_obj
def add_label(app, label):
    labels = app.labels
    labels.append(label)
    app.save()


@cli.command(name="test")
@click.pass_obj
def test(app):
    click.echo("Testing command")
    labels = cli(["pl"], standalone_mode=False)
    print(labels)


@cli.command(name="d")
@click.confirmation_option(prompt="Are you sure you want to delete the data?")
@click.option("--path", "p", default="local_save.json")
def delete(p):
    os.remove(p)


if __name__ == "__main__":
    cli()
