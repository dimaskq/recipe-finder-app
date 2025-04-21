import { Suspense } from 'react';
import { fetchRecipes } from '../../lib/api';
import RecipeCard from '../../components/RecipeCard';
import Loading from '../../components/Loading';

export const dynamic = 'force-dynamic';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  let query = '';
  let cuisine = '';
  let maxReadyTime = '';

  for (const [key, value] of Object.entries(resolvedSearchParams)) {
    if (key === 'query') {
      query = Array.isArray(value) ? value[0] || '' : value || '';
    } else if (key === 'cuisine') {
      cuisine = Array.isArray(value) ? value[0] || '' : value || '';
    } else if (key === 'maxReadyTime') {
      maxReadyTime = Array.isArray(value) ? value[0] || '' : value || '';
    }
  }

  let data;
  try {
    data = await fetchRecipes({ query, cuisine, maxReadyTime });
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Recipes
        </h1>
        <p className="text-center text-red-600">
          Error fetching recipes. Please try again later.
        </p>
      </div>
    );
  }

  const uniqueRecipes = Array.from(
    new Map(data.results.map((recipe: any) => [recipe.id, recipe])).values()
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Recipes
      </h1>
      <Suspense fallback={<Loading />}>
        {uniqueRecipes.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No recipes found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {uniqueRecipes.map((recipe: any) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}
