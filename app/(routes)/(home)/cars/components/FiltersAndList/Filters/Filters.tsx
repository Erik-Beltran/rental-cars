import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FiltersProps } from "./FiltersProps";
import { Trash, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CAR_TYPES } from "@/constants/carTypes";
import { TRANSMISSION_TYPES } from "@/constants/transmissionTypes";
import { ENGINE_TYPES } from "@/constants/engineTypes";
import { PEOPLE_TYPES } from "@/constants/peopleTypes";

export default function Filters(props: FiltersProps) {
  const { clearFilter, setFilters, filters } = props;
  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };
  return (
    <div className="mt-5 mb-8  gap-5 flex flex-col space-y-2 md:flex-row md:space-y-0">
      <Select
        onValueChange={(value) => handleFilter("type", value)}
        value={filters.type}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Car type</SelectLabel>

            {CAR_TYPES.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("transmission", value)}
        value={filters.transmission}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Transmission" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Transmission type</SelectLabel>

            {TRANSMISSION_TYPES.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("engine", value)}
        value={filters.engine}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Engine" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Engine type</SelectLabel>

            {ENGINE_TYPES.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={(value) => handleFilter("people", value)}
        value={filters.people}
      >
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="People" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>People</SelectLabel>

            {PEOPLE_TYPES.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={clearFilter}>
        Remove filters
        <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
