import React from "react";
import { Badge } from "../../../../components/ui/badge";

const deliveryOptions = [
  {
    badge: "D+1",
    badgeColor: "bg-[#e20714] text-white",
    text: "Doručení nasledujíci den",
  },
  {
    badge: "D+2",
    badgeColor: "bg-[#b7bac7] text-[#111d27]",
    text: "Doručení nasledujíci den",
  },
];

const warehouseLocations = [
  {
    top: "top-[74.79%]",
    left: "left-[32.80%]",
    iconSrc: "https://c.animaapp.com/mguqfb52epzWzu/img/warehouse-1.svg",
    iconWidth: "w-[52.17%]",
    iconHeight: "h-[52.17%]",
  },
  {
    top: "top-[54.29%]",
    left: "left-[38.25%]",
    iconSrc: "https://c.animaapp.com/mguqfb52epzWzu/img/warehouse.svg",
    iconWidth: "w-[46.56%]",
    iconHeight: "h-[46.56%]",
  },
  {
    top: "top-[80.67%]",
    left: "left-[49.16%]",
    iconSrc: "https://c.animaapp.com/mguqfb52epzWzu/img/warehouse.svg",
    iconWidth: "w-[46.56%]",
    iconHeight: "h-[46.56%]",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[865px] items-center gap-20">
      <header className="flex flex-col items-center gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <Badge className="h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 bg-[#f9e6e5] rounded-[30px] hover:bg-[#f9e6e5]">
          <span className="font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[#e20714] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)]">
            Global Scale
          </span>
        </Badge>

        <h2 className="w-full font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#111d27]">
            Logistické centrum pro růst vašeho byznysu
          </span>
          <span className="text-[#e20714]"> v centru Europy</span>
        </h2>
      </header>

      <div className="inline-flex flex-col items-center gap-[30px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="inline-flex items-start gap-[60px]">
          {deliveryOptions.map((option, index) => (
            <div
              key={index}
              className="flex w-[313px] h-[35px] items-center gap-4"
            >
              <Badge
                className={`h-[31px] items-center justify-center gap-2.5 px-[15px] py-0 rounded-[30px] hover:${option.badgeColor} ${option.badgeColor}`}
              >
                <span className="font-desktop-l1-18px font-[number:var(--desktop-l1-18px-font-weight)] text-[length:var(--desktop-l1-18px-font-size)] tracking-[var(--desktop-l1-18px-letter-spacing)] leading-[var(--desktop-l1-18px-line-height)] [font-style:var(--desktop-l1-18px-font-style)]">
                  {option.badge}
                </span>
              </Badge>

              <p className="mt-[-0.50px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] whitespace-nowrap [font-style:var(--desktop-p2-18px-font-style)]">
                {option.text}
              </p>
            </div>
          ))}
        </div>

        <div className="relative w-[638px] h-[530.92px] bg-[url(https://c.animaapp.com/mguqfb52epzWzu/img/g1.png)] bg-[100%_100%]">
          {warehouseLocations.map((location, index) => (
            <div
              key={index}
              className={`absolute w-[6.43%] h-[7.73%] ${location.top} ${location.left} bg-white rounded-[20.52px] shadow-[0px_3.57px_24.54px_#00000029]`}
            >
              <img
                className={`${location.iconWidth} ${location.iconHeight} absolute top-[23.91%] left-[23.92%]`}
                alt="Warehouse"
                src={location.iconSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
