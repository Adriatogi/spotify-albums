import click
from app import App
from spotify import Spot
import os


@click.group()
@click.pass_context
def cli(ctx):
    print("Running cli")


@cli.command(name="gl")  # get labels
def pl():
    app = App()
    labels = app.labels
    print(f"Labels: {labels}")

    return list(labels)


@cli.command(name="al")  # add label
@click.argument("label", type=str)
def add_label(label):
    app = App()

    labels = app.labels
    if label not in labels:
        labels.append(label)
    app.save()


@cli.command(name="gua")  # get user albums
@click.option("--level", default=0, type=int)
def get_albums(level):
    sp = Spot()

    albums = sp.get_user_albums(level=level)
    print(albums)
    return albums


@cli.command(name="gaua")  # get all user albums
def get_all_albums():
    sp = Spot()

    albums = sp.get_all_user_albums()
    print(len(albums))
    return albums


@cli.command(name="gal")  # get albums from label
@click.argument("label", type=str)
def get_albums_label(label):
    app = App()
    albums = app.get_albums_label(label)
    return albums


@cli.command(name="gua")  # get albums from label
@click.argument("level", type=int)
def get_albums_label(level):
    app = App()
    albums = app.get_user_albums(level)
    return albums


@cli.command(name="am")  # add mapping
@click.argument("label", type=str)
@click.argument("id", type=str)
def add_mapping(label, id):
    app = App()

    app.add_mapping(label, id)
    app.save()
    return


@cli.command(name="test")
def test():
    click.echo("Testing command")
    sp = Spot()

    albums = sp.get_user_albums(0)
    print(albums["items"][1]["album"]["id"])


@cli.command(name="d")  # delete save
@click.confirmation_option(prompt="Are you sure you want to delete the data?")
@click.option("--path", "p", default="local_save.json")
def delete(p):
    os.remove(p)


if __name__ == "__main__":
    cli()
