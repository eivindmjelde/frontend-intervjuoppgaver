type Props = {
  heading: JSX.Element;
} & WithChildren;

export const BoardContainer = ({ heading, children }: Props) => (
  <section className="grid grid-rows-[min-content_1fr] rounded w-full h-full bg-white">
    <header className="w-full border-b-4 border-cyan-500 py-4 px-6">
      {heading}
    </header>
    <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4 p-5 pb-7">
      {children}
    </div>
  </section>
);
