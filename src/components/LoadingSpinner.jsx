export default function LoadingSpinner({ color }) {
  return (
    <div className="flex items-center justify-center w-full h-full absolute top-0 left-0">
      <svg
        className={`animate-spin h-10 w-10 text-${color}-400`}
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
}
