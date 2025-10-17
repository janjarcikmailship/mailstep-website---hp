import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const features = [
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/desktop.svg",
    title: "Snadná integrace",
    description:
      "Díky vlastní unikátní technologii váš e-shop snadno napojíme na naše systémy.",
  },
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/expeditions.svg",
    title: "Nižší náklady na dopravu",
    description: "Dokážeme pro vás získat lepší ceny od dopravců.",
  },
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/globe-3-3-3-1-1.svg",
    title: "Prodej do zahraničí",
    description:
      "Zalistujte s námi zboží na marketplace a vyzkoušejte si prodej na zahraniční trhy.",
  },
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/component-1-1.svg",
    title: "Prostor pro vlastní růst",
    description: "Outsourcování logistiky vás zbaví zbytečných starostí.",
  },
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/component-1-2.svg",
    title: "Večer objednáno, zítra dodáno",
    description:
      "Všechny zásilky zadané do 19:30 jsou předány dopravci ještě týž den a doručeny následující den. To vám dává jedinečnou konkurenční výhodu.",
  },
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/puzzle-1.svg",
    title: "Jednoduché rozšíření",
    description:
      "Váš e-shop napojíme na potřebné systémy a dodavatele služeb, ať už jde o e-shopové platformy, marketplaces, nebo agregátory dopravních řešení.",
  },
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/component-1.svg",
    title: "Snížení komplexity a nákladů",
    description:
      "S Mailstepem nemáte fixní náklady, investice do IT nebo do vybavení skladu.",
  },
  {
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/products.svg",
    title: "Řešení vratek",
    description:
      "Postaráme se za vás i o řešení vratek. Celý proces bude profesionálně vedený a vy si s ním nebudete muset dělat starost.",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="inline-flex flex-col items-center gap-20 w-full">
      <h2 className="max-w-[865px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <span className="text-[#111d27]">
          Proč Mailstep? váš klíč k bezstarostné logistice a{" "}
        </span>
        <span className="text-[#e20714]">spokojenějším zákazníkům.</span>
      </h2>

      <div className="flex flex-col w-full max-w-[1320px] items-start gap-[60px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
          {features.map((feature, index) => (
            <article key={index} className="flex flex-col items-start gap-5">
              <div className="w-[61px] h-[61px] bg-[#f7f7f7] rounded-[18px] flex items-center justify-center">
                <img
                  className="w-[30px] h-[30px]"
                  alt={feature.title}
                  src={feature.icon}
                />
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <h3 className="font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                  {feature.title}
                </h3>

                <p className="font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#476788] text-[length:var(--desktop-p3-14px-font-size)] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] transition-colors">
        <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
          Víc o fulfillmentovém řešení
        </span>
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </Button>
    </section>
  );
};
