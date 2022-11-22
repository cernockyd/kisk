// copied from https://github.com/shadcn/taxonomy/blob/9ad43152cb9ff33ea0508fe5d0fb98872837a76a/components/tailwind-indicator.tsx
export function TailwindIndicator() {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-darkless p-3 font-mono text-xs text-background">
      <div className="block sm:hidden">xs</div>
      <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
        sm
      </div>
      <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
      <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
      <div className="hidden xl:block 2xl:hidden">xl</div>
      <div className="hidden 2xl:block">2xl</div>
    </div>
  );
}
