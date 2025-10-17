import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex w-full max-w-[1320px] items-start gap-[21px] px-[60px] py-10 relative bg-[#111d27] rounded-3xl overflow-hidden">
      <div className="flex flex-col items-start gap-[21px] relative flex-1 z-10 translate-y-[-1rem] animate-fade-in opacity-0">
        <h2 className="w-full max-w-[468px] font-desktop-h3-36px font-[number:var(--desktop-h3-36px-font-weight)] text-palettesbasicwhite text-[length:var(--desktop-h3-36px-font-size)] tracking-[var(--desktop-h3-36px-letter-spacing)] leading-[var(--desktop-h3-36px-line-height)] [font-style:var(--desktop-h3-36px-font-style)]">
          Chcete se i vy zbavit starostí s logistikou?
        </h2>

        <p className="w-full max-w-[492px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-tokensseparator-colour text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Nechte si zpracovat nezávaznou nabídku. Rádi vám ukážeme náš sklad a
          vysvětlíme, jak funguje celý proces napojení. Zbavte se starostí s
          logistikou ještě dnes.
        </p>

        <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 gap-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] transition-colors">
          <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
            Nezávazná poptávka
          </span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <img
        className="absolute top-[-47px] right-[60px] w-[523px] h-[417px] animate-fade-in opacity-0 [--animation-delay:600ms]"
        alt="Group"
        src="https://c.animaapp.com/mguqfb52epzWzu/img/group-3.png"
      />
    </section>
  );
};
