"use client";

import React, { useEffect, useState } from "react";

import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";

import { CalendarSelectorProps } from "./CalendarSelector.types";
import { cn } from "@/lib/utils";

export default function CalendarSelector(props: CalendarSelectorProps) {
  const { setDateSelected, className, carPriceDay } = props;

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 5),
  });

  useEffect(() => {
    setDateSelected({
      from: date?.from,
      to: date?.to,
    });
  }, [date]);

  const calculateDaysBetween = (from: Date, to: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffInTime = to.getTime() - from.getTime();
    return Math.round(diffInTime / oneDay);
  };

  const daysBetween =
    date?.from && date?.to ? calculateDaysBetween(date.from, date.to) : 0;

  return (
    <>
      <div className={cn("grid gap-2", className)}>
        {date?.from && date.to && (
          <>
            <p className="mt-4 text-lg text-black">Total Days: {daysBetween}</p>
            <p className="mb-4 text-md">
              Total Price: {daysBetween * Number(carPriceDay)}$ taxes add
            </p>
          </>
        )}

        <Popover modal>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="w-4 h-4 mr-2" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LL/dd/y")} -{" "}
                    {format(date.to, "LL/dd/y")}
                  </>
                ) : (
                  format(date.from, "LL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              mode="range"
              fromDate={new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
