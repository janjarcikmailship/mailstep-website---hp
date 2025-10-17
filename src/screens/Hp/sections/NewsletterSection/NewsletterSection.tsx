import { ChevronRightIcon } from "lucide-react";
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
    title: "Malé a střední e-shopy",
    content: null,
  },
  {
    id: "item-2",
    title: "Malé a střední e-shopy",
    content:
      "Napojíme se na Váš e-shop a vyřešíme veškerou logistiku od přijetí objednávky po doručení zboží Vašim zákazníkům. Postaráme se o skladování zboží, vyřízení objednávek, pickování, balení, dopravu, i vyřizování vratek.",
  },
  {
    id: "item-3",
    title: "Malé a střední e-shopy",
    content: null,
  },
  {
    id: "item-4",
    title: "Malé a střední e-shopy",
    content: null,
  },
  {
    id: "item-5",
    title: "Malé a střední e-shopy",
    content: null,
  },
];

export const NewsletterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[865px] items-start gap-20">
      <header className="flex flex-col items-center gap-10 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="w-full font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#061c3d]">
            Pomáháme vám se rozhodnout – přehled
          </span>
          <span className="text-[#e20714]"> otázek a odpovědí</span>
        </h2>

        <p className="w-full font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] text-center tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
          Zodpovídáme nejčastější otázky, které dostáváme od našich firemních
          klientů.
        </p>
      </header>

      <div className="flex flex-col items-center gap-20 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
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
              <AccordionTrigger className="flex items-center justify-between gap-4 w-full py-[25px] hover:no-underline">
                <span className="flex-1 text-left font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                  {item.title}
                </span>
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
            Chci ce dezvedet víc
          </span>
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </section>
  );
};
