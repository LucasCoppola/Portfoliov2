export function ArrowLeft({ className }: { className?: string }) {
  return (
    <div className="group relative flex items-center">
      <svg
        className={`${className ? className : "h-4 w-4"} absolute`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          d="M7.78 13.03a.75.75 0 01-1.06 0l-4.25 -4.25a.75.75 0 010 -1.06l4.25 -4.25a.75.75 0 011.06 1.06l-2.97 2.97H12.25a.75.75 0 010 1.5H4.81L7.78 11.97a.75.75 0 010 1.06z"
        ></path>
      </svg>
    </div>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <div className="group relative flex items-center">
      <svg
        className={`${className ? className : "h-4 w-4"} absolute`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 -1.06l2.97 -2.97H3.75a.75.75 0 010 -1.5h7.44l-2.97 -2.97a.75.75 0 010 -1.06z"
        ></path>
      </svg>
    </div>
  );
}
