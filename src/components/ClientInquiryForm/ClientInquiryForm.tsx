"use client";
import { useState } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
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
import { useToast } from "@/components/ui/use-toast";

import { cn } from "@/lib/utils";

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
  const { toast } = useToast();

  const locale = useCurrentLocale();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    emailjs
      .send(
        "service_0db187c",
        "template_hj14rns",
        {
          from_name: values.name,
          to_name: "Orwa",
          from_email: values.email,
          to_email: "orwa.s.shams@gmail.com",
          message: values.details,
        },
        "Vo9CxtmZ79YrHLKUP"
      )
      .then(
        () => {
          setLoading(false);
          toast({
            title: t("toast_success.title"),
            description: t("toast_success.description"),
            className:
              "bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl",
            duration: 3000,
            dir: locale === "en" ? "ltr" : "rtl",
          });
        },
        () => {
          setLoading(false);
          toast({
            title: t("toast_error.title"),
            description: t("toast_error.description"),
            className:
              "bg-blue-700 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl",
            duration: 3000,
            dir: locale === "en" ? "ltr" : "rtl",
          });
        }
      );
    form.reset();

    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
          className={cn("flex flex-col gap-4", {
            "font-english text-left": locale === "en",
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

                  <FormDescription
                    className="text-xs"
                    dir={locale === "en" ? "ltr" : "rtl"}
                  >
                    {t("form.descriptions.name")}
                  </FormDescription>
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

                  <FormDescription
                    className="text-xs"
                    dir={locale === "en" ? "ltr" : "rtl"}
                  >
                    {t("form.descriptions.email")}
                  </FormDescription>
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

                  <FormDescription
                    className="text-xs"
                    dir={locale === "en" ? "ltr" : "rtl"}
                  >
                    {t("form.descriptions.phone")}
                  </FormDescription>
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

                  <FormControl>
                    <Textarea
                      id="details"
                      dir={locale === "en" ? "ltr" : "rtl"}
                      {...field}
                    />
                  </FormControl>

                  <FormDescription
                    className="text-xs"
                    dir={locale === "en" ? "ltr" : "rtl"}
                  >
                    {t("form.descriptions.details")}
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>

          <Button
            variant="secondary"
            type="submit"
            dir={locale === "en" ? "ltr" : "rtl"}
          >
            {loading ? t("form.sending") : t("form.send")}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ClientInquiryForm;
