# Express.js with TypeScript Backend

A basic Express.js application boilerplate with TypeScript.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Run production build:
```bash
npm start
```

## Project Structure

```
backend/
├── src/
│   └── index.ts      # Main application entry point
├── dist/              # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the production build

## Default Port

The server runs on port 3000 by default. You can change this by setting the `PORT` environment variable.

