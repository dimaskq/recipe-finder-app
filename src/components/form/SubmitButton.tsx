import { SubmitButtonProps } from './types';

export default function SubmitButton({ disabled, label }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors duration-200 ${
        disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
      }`}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
}
