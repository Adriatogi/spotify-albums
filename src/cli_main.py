import click
from app import App
import os


@click.group()
@click.pass_context
def cli(ctx):
    print("Running cli")
    ctx.obj = App()


@cli.command(name="gl")  # get labels
@click.pass_obj
def pl(app):
    labels = app.labels
    print("Labels: labels")
    return labels


@cli.command(name="al")  # add label
@click.option("--label", required=True, type=str)
@click.pass_obj
def add_label(app, label):
    labels = app.labels
    labels.append(label)
    app.save()


@cli.command(name="ga")  # get albums
@click.option("--level", default=0, type=int)
@click.pass_obj
def get_albums(app, level):
    albums = app.get_albums(level)
    print(albums)
    return albums


@cli.command(name="gaa")  # get all albums
@click.pass_obj
def get_albums(app):
    albums = app.get_all_albums()
    print(len(albums))
    return albums


@cli.command(name="am")  # add mapping
@click.option("--label", required=True, type=str)
@click.option("--id", required=True, type=str)
@click.pass_obj
def add_mapping(app, label, id):
    app.add_mapping(label, id)
    app.save()
    return


@cli.command(name="test")
@click.pass_obj
def test(app):
    click.echo("Testing command")
    albums = app.get_albums(0)
    print(albums["items"][0]["album"]["name"])


@cli.command(name="d")  # delete save
@click.confirmation_option(prompt="Are you sure you want to delete the data?")
@click.option("--path", "p", default="local_save.json")
def delete(p):
    os.remove(p)


if __name__ == "__main__":
    cli()
