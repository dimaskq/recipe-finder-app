import Link from 'next/link';

interface RecipeCardProps {
  recipe: { id: number; title: string; image: string };
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {recipe.title}
          </h2>
        </div>
      </div>
    </Link>
  );
}
