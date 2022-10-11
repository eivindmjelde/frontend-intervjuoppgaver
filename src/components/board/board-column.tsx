type Props = {
  heading: string;
} & WithChildren;

export const BoardColumn = ({ heading, children }: Props) => (
  <section className="rounded bg-slate-200 p-4 h-full">
    <h2 className="text-lg font-medium mb-6">{heading}</h2>
    <div className="flex flex-col gap-4">{children}</div>
  </section>
);
