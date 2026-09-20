# Repository instructions

This is a TypeScript npm package. Use the Node.js version specified in `.nvmrc` and npm.

## Workflow

- Install dependencies with `npm ci`.
- Make focused changes that preserve the existing public API unless a breaking change is explicitly requested.
- Add or update tests for behavior changes.
- Do not edit generated files in `dist/`.
- Use the existing project configuration instead of introducing new formatting, testing, or build tools.

## Formatting and checks

Formatting is configured in `.prettierrc` and `.editorconfig`; do not duplicate those rules here.

Use the narrowest relevant command while working:

```bash
npm run prettier:fix     # Fix formatting
npm run source:check     # Check formatting and TypeScript
npm test -- --run        # Run tests once
npm run build            # Build the package
```

If formatting fails, run:

```bash
npm run prettier:fix
npm run source:check
```

Review the resulting changes before committing.

## Validation

Before completing a task, run:

```bash
npm run prepare
```

This performs the repository's formatting checks, TypeScript checks, tests, and production build.

Report any command that could not be run or did not pass.

## Changesets

Add a Changeset for changes affecting package consumers:

```bash
npx changeset
```

Use:

- `patch` for backwards-compatible fixes.
- `minor` for backwards-compatible features.
- `major` for breaking changes.

A Changeset is usually unnecessary for tests, internal tooling, or documentation-only changes.

## Public API

When changing the public API:

- Update package exports when necessary.
- Add or update tests.
- Ensure the build generates JavaScript and declaration files.
- Document breaking changes explicitly.

## Pull requests

- PR titles should follow Conventional Commits.
