# Quadrilateral

Monorepo for some application :)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project uses `yarn` instead of `npm` as package manager. Ypu need to install it prior to use.

```
brew install yarn
```

### Installing

Before you can use the individual packages all dependencies need to be linked to each package.

Navigate to the root directory of the repo and install all dependencies by runnig:

```
yarn install
```

And to link all the dependencies to each package

```
yarn bootstrap
```

You don't need to install dependencies in each package now, lerna has taken care of everything.

## Structure of packages and applications

Lerna manages two directories in this setup, `packages/` and `applications/`.

* `packages` will be used for all shared packages that are also being published to the public npm registry.
* `applications` are for complete applications not being published to npm but managed and deployed manually. It's important that they are made private by setting `"private": true` in the `package.json` files.

## Publish packages

This is done manually at the moment but will be made automatically for all pushes to master later on :)

All projects in the `packages/` directory are published to npm-registry. Because versions are already handled in all projects publishing is really simple. Make sure you are logged in to npm (a `.npmrc` exists in `/~`).

To publish new versions of all updated packages in one single command (the preferred way):

```shell
yarn run lerna publish
```

If you for some reason want to have other version numbers you can do it like this:

```shell
yarn run lerna version <major | minor | patch>
yarn run lerna publish from-git
```

This will first create new versions and push to origin. Secondly publish all packages on git where the version is higher than on the registry.

### If something goes wrong

Sometimes when running `lerna publish` the new version gets pushed to GitHub as a new release/tag but the actual publishing to npm fails (registry down for example). If this happens it is easy to trigger a new deploy for the current release on GitHub with the command `yarn run lerna publish from-git`.

## Built With

* [lerna](https://github.com/lerna/lerna) - The tool for managing all packages inside this single repo.

## Authors

* **Erik Samuelsson** - *Initial work* - [samuelsson](https://github.com/samuelsson)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
