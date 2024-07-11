# Project name

[![Build Status][ci-badge]][ci]
[![Npm version][npm-version-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Setup after fork

- Fill `package.json` file with relevant fields
- Enable [Changesets bot](https://github.com/changesets/bot) in [`User settings > Applications`](https://github.com/settings/installations)
- Enable `Allow GitHub Actions to create and approve pull requests` in [`Repo settings > Actions > General`](https://github.com/toomuchdesign/__repo_name__/settings/actions)
- Configure Dependabot in [`Repo settings > Code security and analysis`](https://github.com/toomuchdesign/__repo_name__/settings/security_analysis)

## Contributing

Any contribution should be provided with a `changesets` update:

```
npx changeset
```

[ci-badge]: https://github.com/toomuchdesign/npm-package-template/actions/workflows/ci.yml/badge.svg
[ci]: https://github.com/toomuchdesign/npm-package-template/actions/workflows/ci.yml
[coveralls-badge]: https://coveralls.io/repos/github/toomuchdesign/npm-package-template/badge.svg?branch=master
[coveralls]: https://coveralls.io/github/toomuchdesign/npm-package-template?branch=master
[npm]: https://www.npmjs.com/package/@toomuchdesign/npm-package-template
[npm-version-badge]: https://img.shields.io/npm/v/@toomuchdesign/npm-package-template.svg
