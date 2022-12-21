# CORE-API-BASE
> Primary backend

## Development

To setup development environment, run

```
npm install
```

And fill env data in `.env` file

To migrate database, make sure database already created and run

```
npx sequelize db:migrate:undo:all
npx sequelize db:migrate
npx sequelize db:seed:all
```

## Commit and Branching Guidelines

New **feature** branch normally should begin from latest commit of branch
**development**.  
Each branch except **master**, **development**, and **release** should begin
with prefix:

- `feature/`: Adding new feature
- `bugfix/`: Fixing bugs that will be merged to **development** or **release**
  branch
- `hotfix/`: Fixing bugs that will be merged direcly to **master** branch
  (Production)

Please refer to
[this article](https://nvie.com/posts/a-successful-git-branching-model/) for
branching model reference.

For every commit, it should follow
[Angular Guideline](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)  
For example:

- `feat(inspection): add new pages`
- `fix(observation): catch error exception`
- `docs: update documentation for README.md`