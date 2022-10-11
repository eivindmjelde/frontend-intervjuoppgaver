type WithChildren = { children?: React.ReactNode };
type WithClasses = { className?: string };
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
