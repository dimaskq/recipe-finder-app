# Recipe Finder App

## Overview

The **Recipe Finder App** is a web application built with **Next.js** and **Tailwind CSS** that allows users to search for recipes using advanced filters, view a list of recipes, and access detailed recipe information. The application integrates with the Spoonacular API to fetch recipe data and implements server-side rendering (SSR) for improved performance and SEO. This project was developed as part of a front-end JavaScript engineer test assessment.

## Features

- **Search Page**: Users can search for recipes by entering a query (e.g., "pasta"), selecting a cuisine (e.g., Italian, Mexican, Chinese), and specifying a maximum preparation time. The "Next" button is enabled only when at least one field is filled.
- **Recipes Page**: Displays a list of recipes fetched from the Spoonacular API based on search parameters, with each recipe showing a title and image. Clicking a recipe card navigates to its details page.
- **Recipe Details Page**: Shows detailed information about a selected recipe, including the title and list of ingredients.
- **Responsive Design**: Styled with Tailwind CSS to ensure a consistent and user-friendly experience across devices.
- **Loading States**: Uses React `Suspense` to handle loading states during data fetching.
- **Error Handling**: Implements error handling for API failures.
- **Code Quality**: Configured with ESLint and Prettier for consistent code style and quality.

## Tech Stack

- **Framework**: Next.js (React framework for SSR and static site generation)
- **Styling**: Tailwind CSS, PostCSS
- **API**: Spoonacular API for recipe data
- **TypeScript**: For type safety and better developer experience
- **Tools**: ESLint, Prettier
- **Environment**: Node.js

## Project Structure

```
recipe-finder-app/
├── .next/
├── public/
│   └── Recipe-Finder/
├── src/
│   ├── app/
│   │   ├── recipes/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Loading.tsx
│   │   ├── RecipeCard.tsx
│   │   └── form/
│   │       ├── InputField.tsx
│   │       ├── SelectField.tsx
│   │       ├── NumberField.tsx
│   │       ├── SubmitButton.tsx
│   │       ├── SearchForm.tsx
│   │       └── types.ts
│   └── lib/
│       └── api.ts
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.js
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 8.x or higher
- **Spoonacular API Key**: Sign up at Spoonacular API to obtain a free API key.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/dimaskq/recipe-finder-app.git
   cd recipe-finder-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   - Create a `.env.local` file in the root directory.

   - Add your Spoonacular API key:

     ```
     NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
     ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

5. **Build for Production**:

   ```bash
   npm run build
   ```

   - After building, start the production server:

     ```bash
     npm run start
     ```

## Usage

1. **Search for Recipes**:

   - On the homepage (`/`), use the search form to enter a query (e.g., "pasta"), select a cuisine (e.g., "Italian"), or specify a maximum preparation time (e.g., "30" minutes).
   - Click the "Next" button to navigate to the recipes page with the applied filters.

2. **View Recipes**:

   - The `/recipes` page displays a list of recipes matching your search criteria.
   - Click on a recipe card to view its details.

3. **View Recipe Details**:

   - The `/recipes/[id]` page shows the recipe's title, ingredients, and other optional details.

## Screenshots

Below are screenshots of the application:

- **Search Page**: *Caption*: The homepage with the search form, including fields for query, cuisine, and max preparation time.

- **Recipes Page**: *Caption*: The recipes page displaying a list of recipes with titles and images.

- **Recipe Details Page**: *Caption*: The recipe details page showing the title and ingredients.

## Development Notes

- **API Caching**: API responses are cached for 1 minute using Next.js's `next.revalidate` option to reduce API calls and improve performance.
- **Modular Components**: The search form is split into reusable components (`InputField`, `SelectField`, `NumberField`, `SubmitButton`) located in `src/components/form/` for better maintainability.
- **Accessibility**: Components include ARIA attributes (e.g., `aria-describedby`, `aria-disabled`) to improve accessibility.
- **Type Safety**: TypeScript is used to ensure type safety for props and API responses, with shared types defined in `src/components/form/types.ts`.
- **Styling**: Tailwind CSS provides responsive and consistent styling across the application, configured via `tailwind.config.js` and processed with PostCSS (`postcss.config.js` and `postcss.config.mjs`).
- **API Logic**: API fetching functions (`fetchRecipes`, `fetchRecipeDetails`) are located in `src/lib/api.ts` for centralized data management.
- **Layout**: The `src/app/layout.tsx` file defines the root layout, including the `Header` component, while `src/app/global.css` contains global styles.

## ESLint and Prettier Configuration

- **ESLint**: Configured in `.eslintrc.json` to enforce JavaScript/TypeScript best practices.

- **Prettier**: Configured in `.prettierrc` to ensure consistent code formatting.

- Run the following to check for linting issues:

  ```bash
  npm run lint
  ```

## Troubleshooting

- **API Key Issues**: Ensure your Spoonacular API key is correctly set in `.env.local`. If you exceed the free tier's quota, you may need to wait or upgrade your plan.
- **404 Errors**: Verify that the `/recipes` and `/recipes/[id]` routes are correctly set up in the `src/app/` directory.
- **Styling Issues**: Clear the Next.js cache (`npm run clean`) and restart the development server if Tailwind CSS styles are not applied. Ensure `global.css` and `tailwind.config.js` are properly configured.

## Future Improvements

- Add pagination for the recipes list to handle large result sets.
- Implement client-side filtering for faster interaction with search results.
- Add unit tests using Jest and React Testing Library.
- Move API key to server-side logic to enhance security.
- Deploy the application using Vercel or GitHub Actions for CI/CD.

## Contact

For any questions or feedback, please contact \[dmtro.kravchenko@gmail.com\] or open an issue in the repository.

---
