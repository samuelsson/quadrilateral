# Quadrilateral

[![Build Status](https://ci.eswe.se/api/badges/Rektangel/quadrilateral/status.svg)](https://ci.eswe.se/Rektangel/quadrilateral)

Monorepo for Rektangel packages and applications.

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

## Deployment

Will be added when we have deployment in place ;)

## Built With

* [lerna](https://github.com/lerna/lerna) - The tool for managing all packages inside this single repo.

## Authors

* **Erik Samuelsson** - *Initial work* - [samuelsson](https://github.com/samuelsson)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
