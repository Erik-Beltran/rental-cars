export type CalendarSelectorProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  setDateSelected: React.Dispatch<
    React.SetStateAction<{ from: Date | undefined; to: Date | undefined }>
  >;
  carPriceDay: string;
};
