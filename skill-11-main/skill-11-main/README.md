# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Project Overview

This version of the template has been extended for the **News Dashboard** skill exercise.

### Features

- **Local JSON data**: `public/users.json` loaded with `fetch` in `LocalUserList` component.
- **Public API**: Users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) loaded in `UserList` component.
- **Fake API posts**: Retrieved from `https://dummyjson.com/posts` using `axios` in `FakePostList`. Includes a refresh button and a dropdown filter by `userId`.
- **Dashboard navigation**: `Dashboard` component provides buttons to switch between the three sections without using a router.

The relevant components live in `src/components` and styling is in `src/App.css`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
