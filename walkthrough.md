# Walkthrough: Piral Microfrontends with Pilets, React 19, and Vite 8

We have created an example website using **Piral** with **pilets**, configured for **React 19** and **Vite 8** (`piral-cli-vite8`), dynamically discovering and loading pilets via `/feed.json`.

---

## Architecture Overview

```
piral3/
├── package.json                 # Root scripts and piral-cli dependencies
├── scripts/
│   └── sync-feed.js            # Syncs compiled pilet bundle and generates feed.json
├── my-app/                      # App Shell (Piral Instance)
│   ├── package.json             # Configured with React 19, react-dom 19, piral-cli-vite8
│   ├── src/
│   │   ├── index.html           # HTML template with modern styling & Inter font
│   │   ├── index.tsx            # App entry with requestPilets fetching /feed.json
│   │   ├── layout.tsx           # Modern responsive layout, navigation & tiles
│   │   ├── style.scss           # Styling for header, hero, tiles, and notifications
│   │   └── public/
│   │       ├── feed.json        # Runtime manifest listing active pilets
│   │       └── pilets/          # Compiled pilet bundles
│   └── dist/
│       └── emulator/            # Emulator tarball for pilets development
└── sample-pilet/                # Microfrontend Module (Pilet)
    ├── package.json             # Dev-depends on my-app emulator and React 19
    └── src/
        ├── index.tsx            # Registers /sample page, menu item, and dashboard tile
        └── Page.tsx             # Interactive microfrontend view with React 19 state
```

---

## Key Steps & Commands Followed

Following [Piral Getting Started Guidelines](https://docs.piral.io/guidelines/tutorials/02-getting-started):

1. **Install Piral Tooling**:
   ```bash
   npm i piral-cli piral-cli-vite8 --save-dev
   ```

2. **Scaffold App Shell**:
   ```bash
   npx piral new --target my-app --bundler vite8
   ```

3. **Configure React 19**:
   Updated [my-app/package.json](file:///home/pawkos/projs/piral3/my-app/package.json) dependencies to `react@^19.0.0` and `react-dom@^19.0.0` with npm `overrides`.

4. **Build Emulator Package**:
   ```bash
   cd my-app && npx piral build --type emulator --bundler vite8
   ```
   Generates `my-app/dist/emulator/my-app-1.0.0.tgz`.

5. **Scaffold Pilet**:
   ```bash
   npx pilet new ./my-app/dist/emulator/my-app-1.0.0.tgz --target sample-pilet --bundler vite8
   ```

6. **Build Pilet**:
   ```bash
   cd sample-pilet && npx pilet build --bundler vite8
   ```
   Outputs the standalone SystemJS v2 bundle to `sample-pilet/dist/index.js`.

7. **Feed & Pilet Synchronization**:
   ```bash
   npm run sync:feed
   ```
   Generates `/feed.json` referencing `/pilets/sample-pilet/index.js` inside `my-app/src/public/`.

---

## Verification & Browser Results

### 1. Dashboard with Dynamic Pilet Tile
The App Shell fetched `/feed.json` at startup, loaded `sample-pilet`, and rendered the **Sample Pilet** tile into the dashboard.

![Homepage with Piral and Pilet](/home/pawkos/.gemini/antigravity-ide/brain/924e713d-5bfc-47ee-9383-56f258f34b25/homepage_initial_1790206046601.png)

---

### 2. Isolated Pilet Page & React 19 Reactivity
Navigating to `/sample` rendered the pilet's page. Clicking the **`+ Increment`** button updated component state smoothly using React 19 inside the isolated microfrontend.

![Sample Pilet Page with React 19 State](/home/pawkos/.gemini/antigravity-ide/brain/924e713d-5bfc-47ee-9383-56f258f34b25/sample_pilet_incremented_1790206073528.png)

---

### 3. Browser Interaction Recording
Here is the recorded browser interaction testing navigation, feed loading, and React 19 interactivity:

![Browser Verification Recording](/home/pawkos/.gemini/antigravity-ide/brain/924e713d-5bfc-47ee-9383-56f258f34b25/verify_piral_1790206016668.webp)

---

## How to Run Locally

To start the development server at any time:
```bash
npm run start
```
This serves the application at **`http://localhost:3000/`**.

To rebuild the entire pipeline (emulator, pilet, feed sync, and production release):
```bash
npm run build
```
