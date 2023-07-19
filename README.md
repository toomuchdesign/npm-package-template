# Project name

## Setup after fork

- Fill `package.json` file with relevant fields
- Enable [Changesets bot](https://github.com/changesets/bot)

### GitHub access tokens

Update GitHub token settings:

- Set `Repo settings` > `Actions` > `General` > `Workflow permissions` > `Read and write permissions`
- Set `Repo settings` > `Actions` > `General` > `Workflow permissions` > `Allow GitHub Actions to create and approve pull requests`

Add `READ_AND_WRITE_TOKEN` token (for `ahmadnassri/action-dependabot-auto-merge`)

- Add the new repo to the `Read and write content` access token in: `User settigns` > `Developer Settings`
- Create a `READ_AND_WRITE_TOKEN` secret for both `actions` and `dependabot` in `Repo settings` > `Secrets and variables` with the value of `Read and write content` access token

## Contributing

Any contribution should be provided with a `changesets` update:

```
npx changeset
```
