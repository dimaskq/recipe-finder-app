import { ChangeEvent } from 'react';
import { FieldProps } from './types';

export default function NumberField({
  id,
  label,
  value,
  onChange,
  placeholder,
  description,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        min="1"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        aria-describedby={`${id}-description`}
      />
      <p id={`${id}-description`} className="text-xs text-gray-500 mt-1">
        {description}
      </p>
    </div>
  );
}
