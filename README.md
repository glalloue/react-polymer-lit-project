# React + Lit + Polymer + Vite Project

This project demonstrates how to integrate **Lit** (version 3) web components + **Polymer** (version 3) into a **React** application using **Vite** as the bundler and **Yarn** for package management.

## Table of Contents
- [Overview](#overview)
- [Project Setup](#project-setup)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
  - [Lit Component](#lit-component)
  - [Polymer Component](#polymer-component)
  - [React Component](#react-component)
- [Technical Details](#technical-details)
- [Troubleshooting](#troubleshooting)

## Overview

This project was created using the following technologies:
- **React** (latest version with TypeScript)
- **Lit** (version 3 for web components)
- **Polymer** (version 3 for web components)
- **Vite** (bundler)
- **Yarn** (package manager)

It includes an example of a custom **Lit** component (`<my-lit-component>`), a custom **Polymer** component (`<polymer-cmp1>` et `<polymer-cmp2>`) and a **React** component. These components are combined in the **React** application.

## Project Setup

### Prerequisites

Ensure you have the following tools installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) (for package management)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/glalloue/react-polymer-lit-project.git
    cd react-polymer-lit-project
    ```

2. Install dependencies with **Yarn**:
    ```bash
    yarn install
    ```

### Running the Application

To start the development server, run:

```bash
yarn dev
```

This will start Vite's development server, and you can view the application at `http://localhost:3000`.

### Building the Application

To build the application for production:

```bash
yarn build
```

The production-ready files will be output in the `dist/` directory.

## Available Scripts

Here are the most common scripts you can use with **Yarn**:

- `yarn dev` - Starts the development server.
- `yarn build` - Bundles the application for production.
- `yarn preview` - Serves the production build locally.
- `yarn lint` - Runs linter checks on the code.
- `yarn test` - Runs any tests if added to the project.

## Project Structure

Here’s an overview of the main project structure:

```
react-lit-project/
├── node_modules/
├── public/
├── src/
│   ├── components/                     # Components folder
│       ├── react                       # React components folder
│           ├── MyReactComponent.tsx    # Example React component
│       ├── polymer                     # Polymer components folder
│           ├── polymer-cmp1.ts         # Example Polymer component
│           ├── polymer-cmp2.ts         # Example Polymer component
│       ├── lit                         # Lit components folder
│           ├── MyLitComponent.ts       # Example Lit component
│   ├── App.tsx                         # Main React component integrating Lit component
│   ├── global.d.ts                     # Type declaration for custom elements
│   └── App.css                         # Global CSS
├── index.html                          # Main HTML template
├── package.json                        # Project metadata and dependencies
├── tsconfig.json                       # TypeScript configuration
└── vite.config.ts                      # Vite configuration
```

## Components

### Lit Component

The **Lit** component is defined in the file `src/components/lit/MyLitComponent.ts`

This component is rendered as `<my-lit-component>` and can receive a `message` attribute.

### React Component

The **React** component is defined in `src/components/react/MyReactComponent.tsx`

### Polymer Component

The **Polymer** component is defined in `src/components/polymer/polymer-cmp1.ts`

## Technical Details

### TypeScript and JSX

To enable custom web components like **Lit** or **Polymer** inside React's JSX, we have added a custom TypeScript declaration in the file `src/global.d.ts`:

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    'my-lit-component': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { message?: string };
  }
}
```

This informs TypeScript that `<my-lit-component>` is a valid JSX element.

### Vite Configuration

Vite is configured with TypeScript and React support out of the box. If additional configurations are needed, they can be modified in the `vite.config.ts` file.

## Troubleshooting

### Error: `Property 'my-lit-component' does not exist on type 'JSX.IntrinsicElements'`

This error occurs when TypeScript doesn't recognize custom elements. Ensure the **`global.d.ts`** file is properly configured as shown in the [TypeScript and JSX](#typescript-and-jsx) section.

### Error: `Unable to resolve signature of property decorator when called as an expression`

This error is related to decorators in TypeScript. Ensure the following options are set in **`tsconfig.json`**:

```json
{
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true
}
```

## License

This project is licensed under the MIT License.