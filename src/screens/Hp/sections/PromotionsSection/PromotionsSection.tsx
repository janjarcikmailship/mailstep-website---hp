import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Služby", hasDropdown: true },
  { label: "Řešení na míru", hasDropdown: true },
  { label: "Jak to funguje", hasDropdown: false },
  { label: "Reference", hasDropdown: false },
  { label: "Blog", hasDropdown: false },
  { label: "Kontakt", hasDropdown: false },
];

const companyLogos = [
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-9.png",
    alt: "Company logo 1",
    className: "top-2.5 left-0 w-28 h-9",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/vector.svg",
    alt: "Company logo 2",
    className: "w-full h-[41.28%] top-[29.32%] left-0",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-6.png",
    alt: "Company logo 3",
    className: "top-3.5 left-0 w-28 h-7",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group.png",
    alt: "Company logo 4",
    className: "w-[100.00%] h-[44.65%] top-[27.68%] left-0",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-17.png",
    alt: "Company logo 5",
    className: "top-[19px] left-0.5 w-[108px] h-8",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-5.png",
    alt: "Company logo 6",
    className: "top-2.5 left-0 w-28 h-[37px]",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-7.png",
    alt: "Company logo 7",
    className: "top-3.5 -left-2 w-[129px] h-[27px]",
  },
];

export const PromotionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full">
      <nav className="flex items-center justify-between px-[190px] py-[9px] w-full bg-white border-b border-[#d4e0ed]">
        <div className="inline-flex items-center gap-10">
          <img
            className="w-28 h-[33px]"
            alt="Logo"
            src="https://c.animaapp.com/mguqfb52epzWzu/img/logo-2.svg"
          />

          <nav className="inline-flex items-center gap-[30px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="inline-flex items-center gap-[7px] text-[#476788] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)] hover:text-[#e20714] transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDownIcon className="w-4 h-4" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center justify-end gap-6">
          <button className="inline-flex items-center gap-[7px] text-[#476788] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)] hover:text-[#e20714] transition-colors">
            Přihlášení
          </button>

          <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)] transition-colors">
            Nezávazná poptávka
          </Button>

          <button className="inline-flex items-center gap-1 hover:opacity-80 transition-opacity">
            <div className="w-[39px] h-[39px] bg-[#f8f8f8] rounded-[19.5px] flex items-center justify-center">
              <img
                className="w-[26px] h-[26px]"
                alt="Czech republic"
                src="https://c.animaapp.com/mguqfb52epzWzu/img/czech-republic.svg"
              />
            </div>
            <ChevronDownIcon className="w-4 h-4 text-[#476788]" />
          </button>
        </div>
      </nav>

      <div className="flex flex-col w-full max-w-[1654px] items-start gap-[46px] px-[167px] py-20 rounded-[0px_0px_26px_26px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(248,248,248,1)_100%)]">
        <div className="flex items-start gap-[154px] w-full">
          <div className="flex flex-col items-start gap-11 flex-1">
            <div className="flex flex-col items-start gap-5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <Badge className="h-[31px] bg-[#f9e6e5] hover:bg-[#f9e6e5] text-[#e20714] rounded-[30px] px-[15px] font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)]">
                E-commerce fulfillment
              </Badge>

              <h1 className="font-desktop-h1-56px font-[number:var(--desktop-h1-56px-font-weight)] text-[length:var(--desktop-h1-56px-font-size)] tracking-[var(--desktop-h1-56px-letter-spacing)] leading-[var(--desktop-h1-56px-line-height)] [font-style:var(--desktop-h1-56px-font-style)]">
                <span className="text-[#111d27]">Kompletní </span>
                <span className="text-[#e20714]">fulfillment</span>
                <span className="text-[#111d27]">
                  {" "}
                  bez starostí, přímo ve středu Evropy.
                </span>
              </h1>

              <p className="font-desktop-p1-22px font-[number:var(--desktop-p1-22px-font-weight)] text-[#476788] text-[length:var(--desktop-p1-22px-font-size)] tracking-[var(--desktop-p1-22px-letter-spacing)] leading-[var(--desktop-p1-22px-line-height)] [font-style:var(--desktop-p1-22px-font-style)]">
                Postaráme se o vše od skladu po poslední míli. Vy se můžete
                soustředit na růst své značky.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)] transition-colors">
                <span>Nezávazná poptávka</span>
                <img
                  className="w-4 h-4 ml-2"
                  alt="Arrow right"
                  src="https://c.animaapp.com/mguqfb52epzWzu/img/arrow-right-2-1.svg"
                />
              </Button>

              <Button className="h-12 bg-[#111d27] hover:bg-[#1a2a3d] rounded-[100px] px-6 font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)] transition-colors">
                <span>Jak to funguje</span>
                <img
                  className="w-4 h-4 ml-2"
                  alt="Arrow right"
                  src="https://c.animaapp.com/mguqfb52epzWzu/img/arrow-right-2-1.svg"
                />
              </Button>
            </div>
          </div>

          <button className="relative w-[640px] h-[359px] bg-[url(https://c.animaapp.com/mguqfb52epzWzu/img/image-4.svg)] bg-cover bg-[50%_50%] rounded-lg overflow-hidden group translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[107px] h-[107px] group-hover:scale-110 transition-transform"
              alt="Play button"
              src="https://c.animaapp.com/mguqfb52epzWzu/img/play-button.svg"
            />
          </button>
        </div>

        <div className="flex flex-col items-start gap-6 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <p className="w-full [font-family:'Manrope',Helvetica] text-base text-center">
            <span className="font-[number:var(--desktop-l2-16px-font-weight)] text-[#061c3d] leading-[var(--desktop-l2-16px-line-height)] font-desktop-l2-16px [font-style:var(--desktop-l2-16px-font-style)] tracking-[var(--desktop-l2-16px-letter-spacing)] text-[length:var(--desktop-l2-16px-font-size)]">
              Více Než
            </span>
            <span className="font-[number:var(--desktop-l2-16px-font-weight)] text-[#db2b19] leading-[var(--desktop-l2-16px-line-height)] font-desktop-l2-16px [font-style:var(--desktop-l2-16px-font-style)] tracking-[var(--desktop-l2-16px-letter-spacing)] text-[length:var(--desktop-l2-16px-font-size)]">
              &nbsp;&nbsp;500+{" "}
            </span>
            <span className="font-[number:var(--desktop-l2-16px-font-weight)] text-[#061c3d] leading-[var(--desktop-l2-16px-line-height)] font-desktop-l2-16px [font-style:var(--desktop-l2-16px-font-style)] tracking-[var(--desktop-l2-16px-letter-spacing)] text-[length:var(--desktop-l2-16px-font-size)]">
              Evropských Společností Nám Důvěřuje
            </span>
          </p>

          <div className="flex items-center justify-between w-full">
            {companyLogos.map((logo, index) => (
              <div
                key={index}
                className="relative w-28 h-14 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  className={`absolute ${logo.className}`}
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
