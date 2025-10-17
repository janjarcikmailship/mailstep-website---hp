import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

const categories = [
  { value: "ecommerce", label: "E-commerce platforms" },
  { value: "integrations", label: "Integrations" },
  { value: "marketplaces", label: "Marketplaces" },
  { value: "cariers", label: "Cariers" },
];

export const FeaturedProductsSection = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("ecommerce");

  return (
    <section className="flex flex-col w-full max-w-[1320px] items-start gap-[110px]">
      <div className="flex flex-wrap items-start gap-10 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="w-full max-w-[527px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#111d27]">
            Připojte se bez námahy
            <br />
          </span>
          <span className="text-[#e20714]">
            – integrujeme se s vaším
            <br />
            e-shopem během chvíle
          </span>
        </h2>

        <p className="w-full max-w-[413px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
          Mailstep se hladce propojí s platformami jako Shoptet, Shopify,
          WooCommerce, Amazon, Packeta a desítkami dalších. Automatizujeme
          objednávky, sledování i vratky – bez nutnosti složitého vývoje.
        </p>
      </div>

      <div className="flex flex-col items-center gap-20 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col items-center gap-10 w-full">
          <ToggleGroup
            type="single"
            value={selectedCategory}
            onValueChange={(value) => value && setSelectedCategory(value)}
            className="flex flex-wrap items-center gap-[22px]"
          >
            {categories.map((category) => (
              <ToggleGroupItem
                key={category.value}
                value={category.value}
                className={`h-auto px-[26px] py-2.5 rounded-[100px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)] whitespace-nowrap transition-colors ${
                  selectedCategory === category.value
                    ? "bg-[#111d27] text-white data-[state=on]:bg-[#111d27] data-[state=on]:text-white"
                    : "border-2 border-solid border-neutral-800 text-[#111d27] bg-transparent data-[state=off]:bg-transparent data-[state=off]:text-[#111d27]"
                }`}
              >
                {category.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <img
            className="w-full"
            alt="Integration logos row 1"
            src="https://c.animaapp.com/mguqfb52epzWzu/img/frame-64.svg"
          />

          <img
            className="w-full"
            alt="Integration logos row 2"
            src="https://c.animaapp.com/mguqfb52epzWzu/img/frame-64.svg"
          />
        </div>

        <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] text-white rounded-[100px] shadow-shadow-raised px-6 font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)] transition-colors">
          Ukázat všechny integrace
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </section>
  );
};
