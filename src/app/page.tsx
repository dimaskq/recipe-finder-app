'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SearchForm from '@/components/form/SearchForm';

export default function Home() {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');
  const router = useRouter();

  const isFormValid = !!(query || cuisine || maxReadyTime);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      const params = new URLSearchParams({
        ...(query && { query }),
        ...(cuisine && { cuisine }),
        ...(maxReadyTime && { maxReadyTime }),
      });
      router.push(`/recipes?${params.toString()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Recipe Finder
        </h1>
        <SearchForm
          query={query}
          setQuery={setQuery}
          cuisine={cuisine}
          setCuisine={setCuisine}
          maxReadyTime={maxReadyTime}
          setMaxReadyTime={setMaxReadyTime}
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
        />
      </div>
    </div>
  );
}
