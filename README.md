# Preview
Lightweight setup to preview UI components with Expo Router.

## Requirements
In order to be so lightweight, Preview relies on [Expo Router](https://docs.expo.dev/router/introduction/) to do much of the heavy lifting.
This means that you need to have an Expo and Expo Router app project.
I also like Typescript, so for now it is assumed that you are using Typescript. If you are not, the pull request is welcome ;)

## Rationale
A very good package to preview UI components is [Storybook](https://storybook.js.org/).
However, it can be a bit much to set up (especially when tools like Expo Router take away much of the overhead) while you might not use all the features it provides.
Preview is a lightweight alternative to Storybook, which is focused on previewing UI components in a simple way.

## Installation
Using your favorite package manager:
```bash
npm install jeroen-g/preview

yarn add jeroen-g/preview

bun add jeroen-g/preview
```

Then to install (or to update) Preview's setup:

```bash
npx preview install

yarn preview install

bun preview install
```

## Usage
You would start Expo like you normally would. After the install command a new route is added to your app: `/preview`.
This route is where you can preview your UI components.

If you want to disable preview in certain builds there are multiple options:
- You could add the preview directory to your `.gitignore` file and run the init command locally.
- You can edit the layout in the Preview directory to return a 404 page or something else when not on the right environment. 
