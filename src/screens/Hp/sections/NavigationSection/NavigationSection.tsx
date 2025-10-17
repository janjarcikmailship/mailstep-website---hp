import { ArrowRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

const accordionItems = [
  {
    id: "item-1",
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/company.svg",
    title: "Malé a střední e-shopy",
    content: null,
  },
  {
    id: "item-2",
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/icons.svg",
    title: "Kosmetika, zdraví, potraviny",
    content:
      "We use our own unique technology to connect your e-store to our systems.",
  },
  {
    id: "item-3",
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/company.svg",
    title: "Zahraniční e-shopy",
    content: null,
  },
  {
    id: "item-4",
    icon: "https://c.animaapp.com/mguqfb52epzWzu/img/company.svg",
    title: "Rychle rostoucí značky",
    content: null,
  },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-20 px-0 py-[110px] bg-[#f7f7f7] rounded-[26px] translate-y-[-1rem] animate-fade-in opacity-0">
      <h2 className="max-w-[865px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] px-4">
        <span className="text-[#111d27]">
          Proč Mailstep? váš klíč k bezstarostné logistice a{" "}
        </span>
        <span className="text-[#e20714]">spokojenějším zákazníkům.</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-start gap-10 px-4 w-full max-w-[1084px]">
        <div className="flex flex-col w-full lg:w-[527px] items-start gap-20">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-2"
            className="w-full"
          >
            {accordionItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#d4e0ed]"
              >
                <AccordionTrigger className="flex items-center justify-between gap-4 py-[25px] hover:no-underline [&[data-state=open]>div]:text-[#e20714]">
                  <div className="flex items-center gap-4 flex-1">
                    <img src={item.icon} alt="" className="w-[33px] h-[33px]" />
                    <span className="flex-1 text-left font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)] transition-colors">
                      {item.title}
                    </span>
                  </div>
                </AccordionTrigger>
                {item.content && (
                  <AccordionContent className="pb-[25px]">
                    <p className="font-desktop-p4-14px-SB font-[number:var(--desktop-p4-14px-SB-font-weight)] text-[#476788] text-[length:var(--desktop-p4-14px-SB-font-size)] tracking-[var(--desktop-p4-14px-SB-letter-spacing)] leading-[var(--desktop-p4-14px-SB-line-height)] [font-style:var(--desktop-p4-14px-SB-font-style)]">
                      {item.content}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>

          <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 transition-colors">
            <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
              Ukázat všechny řešení na míru
            </span>
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <img
          className="w-full lg:w-[527px] h-auto lg:h-[527px] object-cover rounded-lg"
          alt="Product packaging"
          src="https://c.animaapp.com/mguqfb52epzWzu/img/rectangle-158.svg"
        />
      </div>
    </section>
  );
};
