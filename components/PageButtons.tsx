"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export const PageButtons = ({
  currentPage,
  hasNextPage,
  hasPrevPage,
}: {
  currentPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigate = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.replace(`${pathname}?${params.toString()}`)
  };

  return (
    <div className="flex gap-1">
      <button
        onClick={() => navigate(currentPage - 1)}
        disabled={!hasPrevPage}
        className={`${hasPrevPage ? "bg-accent cursor-pointer" : "text-accent border-2"} min-h-12 min-w-32 rounded-l-full border-accent p-4 text-primary-dark`}
      >
        {hasPrevPage ? "Previous" : ""}
      </button>
      <button
        onClick={() => navigate(currentPage + 1)}
        disabled={!hasNextPage}
        className={`${hasNextPage ? "bg-accent cursor-pointer" : "text-accent border-2"} min-h-12 min-w-32 rounded-r-full border-accent p-4 text-primary-dark`}
      >
        {hasNextPage ? "Next" : ""}
      </button>
    </div>
  );
};
