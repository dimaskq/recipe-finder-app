import { Suspense } from 'react';
import { fetchRecipeDetails } from '../../../lib/api';
import Loading from '../../../components/Loading';

export const dynamic = 'force-dynamic';

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;

  let recipe;
  try {
    recipe = await fetchRecipeDetails(resolvedParams.id);
    console.log('Recipe ingredients:', recipe.extendedIngredients);
  } catch (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-red-600 text-lg">
          Error fetching recipe details.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<Loading />}>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {recipe.title}
          </h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-80 object-cover rounded-lg mb-6"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ingredients
          </h2>
          <ul className="list-disc pl-6 mb-6 text-gray-600">
            {recipe.extendedIngredients.map(
              (ingredient: any, index: number) => (
                <li key={`${ingredient.id}-${index}`} className="mb-2">
                  {ingredient.original}
                </li>
              )
            )}
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {recipe.summary.replace(/<[^>]+>/g, '')}
          </p>
        </div>
      </Suspense>
    </div>
  );
}
