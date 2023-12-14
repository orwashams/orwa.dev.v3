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

import RequestForm from "../RequestForm/RequestForm";

import { cn } from "@/lib/utils";
const CustomSoftware = async () => {
  const t = await getI18n();

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

        <DialogContent>
          <DialogHeader>
            <DialogTitle> {t("templates.custom.name")}</DialogTitle>
            <DialogDescription>
              <RequestForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomSoftware;
