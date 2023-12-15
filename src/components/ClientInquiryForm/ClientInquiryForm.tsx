"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { cn } from "@/lib/utils";

import { createInquiry } from "@/app/actions";

import { useI18n, useCurrentLocale } from "@/locales/client";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(1),
  phone: z.string().min(1),
  details: z.string().min(10).max(5000),
});

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const ClientInquiryForm = () => {
  const t = useI18n();
  const locale = useCurrentLocale();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  return (
    <Form {...form}>
      <form
        action={createInquiry}
        onSubmit={form.handleSubmit(() => {
          console.log(form.getValues());
        })}
      >
        <div
          className={cn("flex flex-col gap-4", {
            "font-english ": locale === "en",
            "text-right font-hebrew  ": locale === "he",
            "text-right font-arabic ": locale === "ar",
          })}
        >
          <div className="flex flex-col gap-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name">{t("form.your_name")}</FormLabel>
                  <FormControl>
                    <Input
                      id="name"
                      dir={locale === "en" ? "ltr" : "rtl"}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">{t("form.your_email")}</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      dir={locale === "en" ? "ltr" : "rtl"}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phone">{t("form.your_phone")}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      id="phone"
                      dir={locale === "en" ? "ltr" : "rtl"}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-1">
            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="details">
                    {t("form.details")}
                    <p className="text-gray-500 text-xs">({t("form.note")})</p>
                  </FormLabel>
                  <Textarea
                    id="details"
                    dir={locale === "en" ? "ltr" : "rtl"}
                    {...field}
                  />
                </FormItem>
              )}
            />
          </div>

          <Button variant="secondary" type="submit">
            Send
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ClientInquiryForm;
