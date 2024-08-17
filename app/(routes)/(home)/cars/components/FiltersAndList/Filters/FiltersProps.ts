export type FiltersProps = {
  setFilters: (filterName: string, filterValue: string) => void;
  clearFilter: () => void;
  filters: {
    type: string;
    transmission: string;
    engine: string;
    people: string;
  };
};
