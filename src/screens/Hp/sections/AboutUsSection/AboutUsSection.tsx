import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const cards = [
  {
    bgColor: "bg-[#f9e6e5]",
    title: "Výhody fulfillmentu",
    subtitle: "Available immediately, without taking on debt.",
    buttonText: "Nezávazná poptávka",
    buttonBg: "bg-[#e20714]",
    buttonHover: "hover:bg-[#c20612]",
    buttonShadow: "shadow-shadow-raised",
    decorativeImage: {
      src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-39888.png",
      className: "absolute top-[-299px] left-[-303px] w-[1321px] h-[1263px]",
    },
  },
  {
    bgColor:
      "bg-[linear-gradient(180deg,rgba(228,227,237,1)_0%,rgba(183,186,199,1)_100%)]",
    title: "Doplnkový služby",
    subtitle: "Available immediately, without taking on debt.",
    buttonText: "Jak to funguje",
    buttonBg: "bg-[#111d27]",
    buttonHover: "hover:bg-[#1a2a3a]",
    buttonShadow: "",
    decorativeImage: {
      src: "https://c.animaapp.com/mguqfb52epzWzu/img/image-6.png",
      className:
        "absolute top-[178px] left-[187px] w-[334px] h-[291px] object-cover",
    },
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-between gap-12 py-12 relative">
      <header className="inline-flex flex-col items-center gap-4 relative translate-y-[-1rem] animate-fade-in opacity-0">
        <Badge className="h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 bg-[#f9e6e5] rounded-[30px] border-0 hover:bg-[#f9e6e5]">
          <span className="text-tokensaccentcolor font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] whitespace-nowrap [font-style:var(--desktop-l1-18px-font-style)]">
            E-commerce fulfillment
          </span>
        </Badge>

        <h2 className="max-w-[661px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#111d27]">Vaše zásilky, náš spolehlivý </span>
          <span className="text-[#e20714]">a rychlý servis</span>
        </h2>
      </header>

      <div className="flex items-stretch gap-10 relative w-full max-w-[1094px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {cards.map((card, index) => (
          <Card
            key={index}
            className={`${card.bgColor} flex flex-col flex-1 min-h-[444px] items-start gap-4 p-10 relative rounded-[18px] border-0 overflow-hidden transition-transform hover:scale-[1.02]`}
          >
            <CardContent className="flex flex-col items-start gap-4 p-0 w-full h-full relative z-10">
              <div className="flex flex-col items-start w-full">
                <h3
                  className="mt-[-1.00px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]"
                  style={{ color: index === 0 ? "#111d27" : "black" }}
                >
                  {card.title}
                </h3>

                <p className="font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
                  {card.subtitle}
                </p>
              </div>

              <Button
                className={`${card.buttonBg} ${card.buttonHover} ${card.buttonShadow} h-auto inline-flex items-center justify-center gap-1 px-6 py-3 rounded-[100px] transition-colors`}
              >
                <span className="inline-flex items-center justify-center gap-2 px-1 py-0">
                  <span className="mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                    {card.buttonText}
                  </span>
                </span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>
            </CardContent>

            <img
              className={card.decorativeImage.className}
              alt=""
              src={card.decorativeImage.src}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};
