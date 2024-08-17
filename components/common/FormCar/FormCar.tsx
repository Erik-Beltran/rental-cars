"use client";
import axios from "axios";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { z } from "zod";
import { UploadButton } from "@/src/utils/uploadthing";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { FormCarProps } from "./FormCar.types";
import { formSchema } from "./FormCar.form";
import { CAR_TYPES } from "@/constants/carTypes";
import { TRANSMISSION_TYPES } from "@/constants/transmissionTypes";
import { ENGINE_TYPES } from "@/constants/engineTypes";
import { PEOPLE_TYPES } from "@/constants/peopleTypes";
import Loading from "../Loading/Loading";

export default function FormCar(props: FormCarProps) {
  const { carData, setOpenDialog, buttonLabel, editMode } = props;

  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: carData?.name,
      cv: carData?.cv,
      transmission: carData?.transmission,
      people: carData?.people,
      engine: carData?.engine,
      isPublish: carData?.isPublish ?? false,
      photo: carData?.photo,
      price: carData?.price,
      type: carData?.type,
    },
  });

  const { isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setShowLoading(true);
    setOpenDialog(false);
    try {
      if (editMode) {
        await axios.patch(`/api/car/${carData?.id}/form`, values);
      } else {
        await axios.post("/api/car", values);
      }
      toast({ title: editMode ? "Car Edited ✌🏻" : "Car created ✅" });
      setShowLoading(false);
      router.refresh();
    } catch (error) {
      console.log("error", error);
      setShowLoading(false);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2 text-left">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Car Name </FormLabel>
                  <FormControl>
                    <Input placeholder="Tesla Model S Plaid" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Power</FormLabel>
                  <FormControl>
                    <Input placeholder="150 CV" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transmission"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transmission</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Transmission" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {TRANSMISSION_TYPES.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="people"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>People</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the quantity of pleople" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {PEOPLE_TYPES.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="engine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Engine</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select engine" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {ENGINE_TYPES.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select car's type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {CAR_TYPES.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car Image</FormLabel>
                  <FormControl>
                    {photoUploaded ? (
                      <p>Image Uploaded</p>
                    ) : (
                      <UploadButton
                        className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-[3px]"
                        {...field}
                        endpoint="photo"
                        onClientUploadComplete={(res) => {
                          form.setValue("photo", res?.[0].url);
                          setPhotoUploaded(true);
                        }}
                        onUploadError={(error: Error) => {
                          alert(`ERROR! ${error.message}`);
                        }}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price per Day</FormLabel>
                  <FormControl>
                    <Input placeholder="20$" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full mt-5" type="submit" disabled={!isValid}>
            {buttonLabel ?? "OK"}
          </Button>
        </form>
      </Form>
      <Loading showLoading={showLoading} />
    </>
  );
}
