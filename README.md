### Project Setup & Development Guide
# Prerequisites

* Create an .env file in the root directory.
* Refer to .env.example for the required environment variables.
* To add your API key:
  - Sign up or log in to your Finnhub account.
  - Navigate to the Dashboard and generate an API key.
  - Add the API key to your .env file to enable the app's functionality.


## Getting Started
- Install the necessary dependencies:
```bash
npm run install
# or
yarn install
# or
pnpm install
```
- Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
- Open your browser and navigate to: http://localhost:3000

### Testing the Application
- When testing the app, make sure to hit Enter after typing your search query to trigger the search functionality.