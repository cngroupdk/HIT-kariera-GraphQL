# [HIT kariéra 2021: GraphQL end to end](https://cngroupdk.github.io/HIT-kariera-GraphQL/)

- [Docs](https://cngroupdk.github.io/HIT-kariera-GraphQL/)
- branches
  - [main](https://github.com/cngroupdk/HIT-kariera-GraphQL/tree/main) - initial state
  - [final](https://github.com/cngroupdk/HIT-kariera-GraphQL/tree/final) - all GraphQL features implemented

---

Kurz pro studenty UHK: [Agilní vývoj webových aplikací](https://www.uhk.cz/cs/fakulta-informatiky-a-managementu/fim/katedry-a-pracoviste/idv-institut-dalsiho-vzdelavani/kurzy/ostatni-kurzy)

O **CN Group**:

- [https://cngroup.dk/](https://cngroup.dk/)
- [https://cnjobs.dk/](https://cnjobs.dk/)

---

## Requirements

- [Node.js](https://nodejs.org/) according to [`.nvmrc` file](./.nvmrc).
  - you can use [`nvm`](https://github.com/nvm-sh/nvm) or [`nvm-windows`](https://github.com/coreybutler/nvm-windows) to manage multiple versions of Node.js
- [Yarn v1](https://classic.yarnpkg.com/)
  - run: `npm install --global yarn`

## Install Dependencies

```bash
yarn install

cd backend
yarn install
yarn db:seed

cd ../frontend
yarn install
```

## Run Frontend

```bash
cd frontend
yarn start
```

## Run Backend

```bash
cd backend
yarn dev
```
