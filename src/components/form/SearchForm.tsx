import InputField from './InputField';
import SelectField from './SelectField';
import NumberField from './NumberField';
import SubmitButton from './SubmitButton';
import { SearchFormProps } from './types';

export default function SearchForm({
  query,
  setQuery,
  cuisine,
  setCuisine,
  maxReadyTime,
  setMaxReadyTime,
  onSubmit,
  isFormValid,
}: SearchFormProps) {
  const cuisines = [
    { value: '', label: 'Select a cuisine' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Mexican', label: 'Mexican' },
    { value: 'Chinese', label: 'Chinese' },
    { value: 'Indian', label: 'Indian' },
    { value: 'Thai', label: 'Thai' },
    { value: 'Ukraine', label: 'Ukraine' },
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-lg mx-auto p-4">
      <InputField
        id="query"
        label="Search Query"
        value={query}
        onChange={setQuery}
        placeholder="e.g., Pasta"
        description="Enter a dish or ingredient to search for recipes."
      />
      <SelectField
        id="cuisine"
        label="Cuisine"
        value={cuisine}
        onChange={setCuisine}
        options={cuisines}
        description="Choose a cuisine to filter recipes."
      />
      <NumberField
        id="maxReadyTime"
        label="Max Ready Time (minutes)"
        value={maxReadyTime}
        onChange={setMaxReadyTime}
        placeholder="e.g., 30"
        description="Specify the maximum preparation time in minutes."
      />
      <SubmitButton disabled={!isFormValid} label="Next" />
    </form>
  );
}
