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

type Props = {
  name: string;
  discription: string;
  examples: Array<{
    name: string;
    description: string;
    link: string;
  }>;
};

const WebsiteCard = async ({ name, discription, examples }: Props) => {
  const t = await getI18n();
  const locale = getCurrentLocale();

  return (
    <div className=" hover:bg-gray-800  p-[0.1rem] rounded-lg ">
      <Dialog>
        <DialogTrigger asChild>
          <Card
            className=" cursor-pointer w-80 h-96 flex flex-col justify-center items-center "
            role="button"
          >
            <CardHeader className="flex justify-center items-center">
              <CardTitle className="text-center">{name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">{discription}</p>
            </CardContent>
            <CardContent className="w-full flex justify-center items-center">
              <hr className="text-white p-1 w-1/2 " />
            </CardContent>
            <CardContent className="flex">
              <p>{t("general.examples")}</p>
              <ArrowDown />
            </CardContent>

            <CardFooter className="flex justify-center  ">
              <div className="flex flex-col  gap-1 justify-center text-center ">
                {examples.map((example) => {
                  return (
                    <div key={example.name} className="hover:text-blue-900">
                      <Link href={example.link} target="_blank">
                        {example.name}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </CardFooter>
          </Card>
        </DialogTrigger>

        <DialogContent className="p-9 ">
          <DialogHeader>
            <DialogTitle
              className={cn({
                "font-english text-left": locale === "en",
                "text-right font-hebrew  ": locale === "he",
                "text-right font-arabic ": locale === "ar",
              })}
            >
              {name}
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

const Cards = async () => {
  const t = await getI18n();

  return (
    <div className="flex  flex-wrap gap-6 justify-center ">
      <div>
        <WebsiteCard
          name={t("templates.e_commerce.name")}
          discription={t("templates.e_commerce.description")}
          examples={[
            {
              name: t("templates.e_commerce.examples.amazon.name"),
              description: t(
                "templates.e_commerce.examples.amazon.description"
              ),
              link: t("templates.e_commerce.examples.amazon.link"),
            },
            {
              name: t("templates.e_commerce.examples.hoddies.name"),
              description: t(
                "templates.e_commerce.examples.hoddies.description"
              ),
              link: t("templates.e_commerce.examples.hoddies.link"),
            },
            {
              name: t("templates.e_commerce.examples.space_posters.name"),
              description: t(
                "templates.e_commerce.examples.space_posters.description"
              ),
              link: t("templates.e_commerce.examples.space_posters.link"),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.social_media.name")}
          discription={t("templates.social_media.description")}
          examples={[
            {
              name: t("templates.social_media.examples.facebook.name"),
              description: t(
                "templates.social_media.examples.facebook.description"
              ),
              link: t("templates.social_media.examples.facebook.link"),
            },
            {
              name: t("templates.social_media.examples.twitter.name"),
              description: t(
                "templates.social_media.examples.twitter.description"
              ),
              link: t("templates.social_media.examples.twitter.link"),
            },
            {
              name: t("templates.social_media.examples.instagram.name"),
              description: t(
                "templates.social_media.examples.instagram.description"
              ),
              link: t("templates.social_media.examples.instagram.link"),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.personal_website.name")}
          discription={t("templates.personal_website.description")}
          examples={[
            {
              name: t("templates.personal_website.examples.medium.name"),
              description: t(
                "templates.personal_website.examples.medium.description"
              ),
              link: t("templates.personal_website.examples.medium.link"),
            },
            {
              name: t("templates.personal_website.examples.theo_blog.name"),
              description: t(
                "templates.personal_website.examples.theo_blog.description"
              ),
              link: t("templates.personal_website.examples.theo_blog.link"),
            },
            {
              name: t("templates.personal_website.examples.rauchg_blog.name"),
              description: t(
                "templates.personal_website.examples.rauchg_blog.description"
              ),
              link: t("templates.personal_website.examples.rauchg_blog.link"),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.news_media_website.name")}
          discription={t("templates.news_media_website.description")}
          examples={[
            {
              name: t("templates.news_media_website.examples.cnn.name"),
              description: t(
                "templates.news_media_website.examples.cnn.description"
              ),
              link: t("templates.news_media_website.examples.cnn.link"),
            },
            {
              name: t("templates.news_media_website.examples.walla.name"),
              description: t(
                "templates.news_media_website.examples.walla.description"
              ),
              link: t("templates.news_media_website.examples.walla.link"),
            },
            {
              name: t(
                "templates.news_media_website.examples.skynewsarabia.name"
              ),
              description: t(
                "templates.news_media_website.examples.skynewsarabia.description"
              ),
              link: t(
                "templates.news_media_website.examples.skynewsarabia.link"
              ),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.portfolio_website.name")}
          discription={t("templates.portfolio_website.description")}
          examples={[
            {
              name: t("templates.portfolio_website.examples.bruno_simon.name"),
              description: t(
                "templates.portfolio_website.examples.bruno_simon.description"
              ),
              link: t("templates.portfolio_website.examples.bruno_simon.link"),
            },
            {
              name: t("templates.portfolio_website.examples.yui_moreau.name"),
              description: t(
                "templates.portfolio_website.examples.yui_moreau.description"
              ),
              link: t("templates.portfolio_website.examples.yui_moreau.link"),
            },
            {
              name: t(
                "templates.portfolio_website.examples.jessica_hernandez.name"
              ),
              description: t(
                "templates.portfolio_website.examples.jessica_hernandez.description"
              ),
              link: t(
                "templates.portfolio_website.examples.jessica_hernandez.link"
              ),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.corporate_website.name")}
          discription={t("templates.corporate_website.description")}
          examples={[
            {
              name: t("templates.corporate_website.examples.pienso.name"),
              description: t(
                "templates.corporate_website.examples.pienso.description"
              ),
              link: t("templates.corporate_website.examples.pienso.link"),
            },
            {
              name: t("templates.corporate_website.examples.nvidia.name"),
              description: t(
                "templates.corporate_website.examples.nvidia.description"
              ),
              link: t("templates.corporate_website.examples.nvidia.link"),
            },
            {
              name: t("templates.corporate_website.examples.asus.name"),
              description: t(
                "templates.corporate_website.examples.asus.description"
              ),
              link: t("templates.corporate_website.examples.asus.link"),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.government_website.name")}
          discription={t("templates.government_website.description")}
          examples={[
            {
              name: t("templates.government_website.examples.nasa.name"),
              description: t(
                "templates.government_website.examples.nasa.description"
              ),
              link: t("templates.government_website.examples.nasa.link"),
            },
            {
              name: t("templates.government_website.examples.nygov.name"),
              description: t(
                "templates.government_website.examples.nygov.description"
              ),
              link: t("templates.government_website.examples.nygov.link"),
            },
            {
              name: t("templates.government_website.examples.fbi.name"),
              description: t(
                "templates.government_website.examples.fbi.description"
              ),
              link: t("templates.government_website.examples.fbi.link"),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.web_application.name")}
          discription={t("templates.web_application.description")}
          examples={[
            {
              name: t("templates.web_application.examples.excalidraw.name"),
              description: t(
                "templates.web_application.examples.excalidraw.description"
              ),
              link: t("templates.web_application.examples.excalidraw.link"),
            },
            {
              name: t("templates.web_application.examples.chatgpt.name"),
              description: t(
                "templates.web_application.examples.chatgpt.description"
              ),
              link: t("templates.web_application.examples.chatgpt.link"),
            },
            {
              name: t("templates.web_application.examples.chessdotcom.name"),
              description: t(
                "templates.web_application.examples.chessdotcom.description"
              ),
              link: t("templates.web_application.examples.chessdotcom.link"),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.forums_and_communities.name")}
          discription={t("templates.forums_and_communities.description")}
          examples={[
            {
              name: t(
                "templates.forums_and_communities.examples.piratesoftware.name"
              ),
              description: t(
                "templates.forums_and_communities.examples.piratesoftware.description"
              ),
              link: t(
                "templates.forums_and_communities.examples.piratesoftware.link"
              ),
            },
            {
              name: t("templates.forums_and_communities.examples.reddit.name"),
              description: t(
                "templates.forums_and_communities.examples.reddit.description"
              ),
              link: t("templates.forums_and_communities.examples.reddit.link"),
            },
            {
              name: t(
                "templates.forums_and_communities.examples.stack_overflow.name"
              ),
              description: t(
                "templates.forums_and_communities.examples.stack_overflow.description"
              ),
              link: t(
                "templates.forums_and_communities.examples.stack_overflow.link"
              ),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.booking_reservation_system.name")}
          discription={t("templates.booking_reservation_system.description")}
          examples={[
            {
              name: t(
                "templates.booking_reservation_system.examples.airbnb.name"
              ),
              description: t(
                "templates.booking_reservation_system.examples.airbnb.description"
              ),
              link: t(
                "templates.booking_reservation_system.examples.airbnb.link"
              ),
            },
            {
              name: t(
                "templates.booking_reservation_system.examples.bookingdotcom.name"
              ),
              description: t(
                "templates.booking_reservation_system.examples.bookingdotcom.description"
              ),
              link: t(
                "templates.booking_reservation_system.examples.bookingdotcom.link"
              ),
            },
            {
              name: t(
                "templates.booking_reservation_system.examples.tripadvisor.name"
              ),
              description: t(
                "templates.booking_reservation_system.examples.tripadvisor.description"
              ),
              link: t(
                "templates.booking_reservation_system.examples.tripadvisor.link"
              ),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.utility_website.name")}
          discription={t("templates.utility_website.description")}
          examples={[
            {
              name: t("templates.utility_website.examples.weather.name"),
              description: t(
                "templates.utility_website.examples.weather.description"
              ),
              link: t("templates.utility_website.examples.weather.link"),
            },
            {
              name: t("templates.utility_website.examples.currency.name"),
              description: t(
                "templates.utility_website.examples.currency.description"
              ),
              link: t("templates.utility_website.examples.currency.link"),
            },
            {
              name: t(
                "templates.utility_website.examples.online_converter.name"
              ),
              description: t(
                "templates.utility_website.examples.online_converter.description"
              ),
              link: t(
                "templates.utility_website.examples.online_converter.link"
              ),
            },
          ]}
        />
      </div>

      <div>
        <WebsiteCard
          name={t("templates.real_estate_website.name")}
          discription={t("templates.real_estate_website.description")}
          examples={[
            {
              name: t("templates.real_estate_website.examples.zillow.name"),
              description: t(
                "templates.real_estate_website.examples.zillow.description"
              ),
              link: t("templates.real_estate_website.examples.zillow.link"),
            },
            {
              name: t("templates.real_estate_website.examples.realtor.name"),
              description: t(
                "templates.real_estate_website.examples.realtor.description"
              ),
              link: t("templates.real_estate_website.examples.realtor.link"),
            },
            {
              name: t(
                "templates.real_estate_website.examples.remax_israel.name"
              ),
              description: t(
                "templates.real_estate_website.examples.remax_israel.description"
              ),
              link: t(
                "templates.real_estate_website.examples.remax_israel.link"
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Cards;
