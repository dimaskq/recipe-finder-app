export async function fetchRecipes({
  query = '',
  cuisine = '',
  maxReadyTime = '',
}: {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}) {
  const params = new URLSearchParams({
    ...(query && { query }),
    ...(cuisine && { cuisine }),
    ...(maxReadyTime && { maxReadyTime }),
    apiKey: process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY || '',
  });

  const res = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }

  return res.json();
}

export async function fetchRecipeDetails(id: string) {
  const res = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  return res.json();
}
