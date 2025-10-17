import React from "react";
import { Button } from "../../../../components/ui/button";

const steps = [
  {
    number: "1.",
    title: "Propojíme e-shop s Mailstepem",
    description:
      "Snadno vás napojíme na náš skladový systém, abyste měli neustálý přehled o zásilkách i skladových zásobách.",
  },
  {
    number: "2.",
    title: "Převezmeme a naskladníme zboží",
    description:
      "Vaše zboží převezmeme a provedeme i kontrolu jeho kvality. Díky našemu uživatelskému systému Mailship má...",
  },
  {
    number: "3.",
    title: "Zpracujeme objednávky",
    description:
      "Každou přijatou objednávku automaticky zpracujeme, zboží vychystáme a připravíme k expedici.",
  },
  {
    number: "4.",
    title: "Doručíme zásilky zákazníkům",
    description:
      "Díky službě Večer objednáno, zítra dodáno, expedujeme objednávky zadané do 19:30 ještě tentýž den.",
  },
  {
    number: "5.",
    title: "Vyřešíme vratky i zákaznickou podporu",
    description:
      "Vratky i reklamace vyřídíme za vás. Nabízíme plnohodnotný zákaznický servis a vy tak máte jistotu, že celý ...",
  },
  {
    number: "1.",
    title: "Propojíme e-shop s Mailstepem",
    description:
      "Snadno vás napojíme na náš skladový systém, abyste měli neustálý přehled o zásilkách i skladových zásobách.",
    hidden: true,
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-[60px] px-4 md:px-[260px] py-[110px] relative bg-[#111d27] rounded-[26px] overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <header className="inline-flex flex-col md:flex-row items-start gap-10 relative w-full max-w-[1094px]">
        <h2 className="relative w-full md:w-[527px] mt-[-1.00px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-transparent text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-white tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            Jak{" "}
          </span>
          <span className="text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            fulfillmentové
            <br />
          </span>
          <span className="text-white tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            řešení&nbsp;&nbsp;funguje ?
          </span>
        </h2>

        <p className="relative w-full md:w-[527px] mt-[-1.00px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#89949e] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
          Na začátku si domluvíme nezávaznou schůzku, kde společně projdeme vaše
          potřeby a očekávání. Na základě nich připravíme cenovou nabídku a
          návrh řešení na míru.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-start gap-10 relative w-full max-w-[1094px]">
        {steps.slice(0, 3).map((step, index) => (
          <article
            key={`step-row1-${index}`}
            className={`flex items-start gap-[33px] relative flex-1 ${step.hidden ? "opacity-0" : ""}`}
          >
            <div className="flex w-[59px] h-[59px] items-center justify-center gap-2.5 p-2.5 relative rounded-[13px] border border-solid border-[#e20714] flex-shrink-0">
              <div className="relative w-fit mt-[-1.00px] font-desktop-p1-22px font-[number:var(--desktop-p1-22px-font-weight)] text-white text-[length:var(--desktop-p1-22px-font-size)] text-center tracking-[var(--desktop-p1-22px-letter-spacing)] leading-[var(--desktop-p1-22px-line-height)] whitespace-nowrap [font-style:var(--desktop-p1-22px-font-style)]">
                {step.number}
              </div>
            </div>

            <div className="flex flex-col items-start gap-[22px] relative flex-1">
              <h3 className="relative self-stretch mt-[-1.00px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-white text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                {step.title}
              </h3>

              <p className="relative self-stretch font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#89949e] text-[length:var(--desktop-p3-14px-font-size)] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10 relative w-full max-w-[1094px]">
        {steps.slice(3, 6).map((step, index) => (
          <article
            key={`step-row2-${index}`}
            className={`flex items-start gap-[33px] relative flex-1 ${step.hidden ? "opacity-0" : ""}`}
          >
            <div className="flex w-[59px] h-[59px] items-center justify-center gap-2.5 p-2.5 relative rounded-[13px] border border-solid border-[#e20714] flex-shrink-0">
              <div className="relative w-fit mt-[-1.00px] font-desktop-p1-22px font-[number:var(--desktop-p1-22px-font-weight)] text-white text-[length:var(--desktop-p1-22px-font-size)] text-center tracking-[var(--desktop-p1-22px-letter-spacing)] leading-[var(--desktop-p1-22px-line-height)] whitespace-nowrap [font-style:var(--desktop-p1-22px-font-style)]">
                {step.number}
              </div>
            </div>

            <div className="flex flex-col items-start gap-[22px] relative flex-1">
              <h3 className="relative self-stretch mt-[-1.00px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-white text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                {step.title}
              </h3>

              <p className="relative self-stretch font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-[#89949e] text-[length:var(--desktop-p3-14px-font-size)] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)]">
                {step.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Button className="inline-flex h-[50px] items-center justify-center relative mb-[-1.00px] bg-[#e20714] rounded-[100px] shadow-shadow-raised hover:bg-[#c20612] transition-colors">
        <div className="inline-flex justify-center gap-1 px-6 py-0 self-stretch flex-[0_0_auto] rounded-xl items-center relative">
          <div className="inline-flex items-center justify-center gap-2 px-1 py-0 relative flex-[0_0_auto]">
            <span className="relative w-fit mt-[-1.00px] font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
              Víc o fulfillmentovém řešení
            </span>
          </div>

          <img
            className="relative w-4 h-4"
            alt="Arrow right"
            src="https://c.animaapp.com/mguqfb52epzWzu/img/arrow-right-2.svg"
          />
        </div>
      </Button>

      <img
        className="absolute top-0 left-[150px] w-[1464px] h-[936px] pointer-events-none"
        alt="Fill"
        src="https://c.animaapp.com/mguqfb52epzWzu/img/fill-8.svg"
      />
    </section>
  );
};
