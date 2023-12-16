import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { getCurrentLocale, getI18n } from "@/locales/server";

import ClientInquiryForm from "../ClientInquiryForm/ClientInquiryForm";

import { cn } from "@/lib/utils";
import { I18nProviderClient } from "@/locales/client";
const CustomSoftware = async () => {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <div className=" hover:bg-gradient-to-tr from-red-400 via-red-500 to-red-900  p-0.5 rounded-md ">
      <Dialog>
        <DialogTrigger asChild>
          <Card
            className=" cursor-pointer  flex flex-col justify-center items-center "
            role="button"
          >
            <CardHeader className="flex justify-center items-center">
              <CardTitle className="text-center">
                {t("templates.custom.name")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">{t("templates.custom.description")}</p>
            </CardContent>
          </Card>
        </DialogTrigger>

        <DialogContent className="p-9">
          <DialogHeader>
            <DialogTitle
              className={cn({
                "font-english ": locale === "en",
                "text-right font-hebrew  ": locale === "he",
                "text-right font-arabic ": locale === "ar",
              })}
            >
              {t("templates.custom.name")}
            </DialogTitle>
            <DialogDescription>
              <I18nProviderClient locale={locale}>
                <ClientInquiryForm />
              </I18nProviderClient>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomSoftware;
