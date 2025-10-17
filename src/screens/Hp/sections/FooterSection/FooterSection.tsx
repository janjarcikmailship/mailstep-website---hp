import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const footerColumns = [
  {
    title: "Služby",
    links: [
      "Proč Mailstep",
      "Technologie",
      "Fulfillment pro eshopy",
      "B2B fulfillment",
      "Medzinárodní logistika",
      "Doplnkové služby",
    ],
  },
  {
    title: "Řešení na míru",
    links: [
      "Proč Mailstep",
      "Technologie",
      "Fulfillment pro eshopy",
      "B2B fulfillment",
      "Medzinárodní logistika",
      "Doplnkové služby",
    ],
  },
  {
    title: "Blog",
    links: [
      "Proč Mailstep",
      "Technologie",
      "Fulfillment pro eshopy",
      "B2B fulfillment",
      "Medzinárodní logistika",
      "Doplnkové služby",
    ],
  },
  {
    title: "Kontakt",
    links: ["Kontakty", "Kariéra", "Klientská zóna"],
  },
];

const socialIcons = [
  "https://c.animaapp.com/mguqfb52epzWzu/img/social-icons.svg",
  "https://c.animaapp.com/mguqfb52epzWzu/img/social-icons-4.svg",
  "https://c.animaapp.com/mguqfb52epzWzu/img/social-icons-1.svg",
  "https://c.animaapp.com/mguqfb52epzWzu/img/social-icons-2.svg",
  "https://c.animaapp.com/mguqfb52epzWzu/img/social-icons-3.svg",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col w-full max-w-[1320px] mx-auto items-start gap-[41px] bg-transparent">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-[380px] w-full">
        <div className="flex flex-col w-full lg:w-[300px] items-start gap-6">
          <img
            className="w-[183px] h-[54px]"
            alt="Logo"
            src="https://c.animaapp.com/mguqfb52epzWzu/img/logo-2-1.svg"
          />

          <p className="font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
            Boost productivity of your eshop with 100+ integrations
          </p>
        </div>

        <h2 className="w-full lg:w-[640px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#111d27]">Send your shipments </span>
          <span className="text-[#e20714]">cheaper, faster, smarter!</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 lg:gap-[266px] w-full">
        <nav className="flex flex-wrap items-start gap-10">
          {footerColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col w-full sm:w-[187px] items-start justify-center gap-5"
            >
              <h3 className="text-[#111d27] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)]">
                {column.title}
              </h3>

              {column.links.map((link, linkIndex) => (
                <Button
                  key={linkIndex}
                  variant="link"
                  className="h-auto p-0 text-[#476788] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)] hover:text-[#111d27] transition-colors"
                >
                  {link}
                </Button>
              ))}
            </div>
          ))}
        </nav>

        <div className="flex flex-col w-full lg:w-[185px] items-start gap-[58px]">
          <div className="flex items-center gap-[30px] w-full">
            <img
              className="w-[72.57px] h-[77px] object-cover"
              alt="Certification"
              src="https://c.animaapp.com/mguqfb52epzWzu/img/image-9.png"
            />

            <div className="w-[82.88px] h-[76px] bg-[url(https://c.animaapp.com/mguqfb52epzWzu/img/image-8.png)] bg-cover bg-center" />
          </div>

          <div className="flex items-end justify-center gap-[15px] w-full">
            {socialIcons.map((icon, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="h-auto w-auto p-0 hover:opacity-70 transition-opacity"
              >
                <img
                  className="w-[25px] h-[25px]"
                  alt="Social media"
                  src={icon}
                />
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Separator className="w-full bg-[#d4e0ed]" />

      <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4">
        <Button
          variant="ghost"
          className="h-auto p-0 flex items-center gap-1 hover:bg-transparent"
        >
          <div className="w-[39px] h-[39px] bg-[#f8f8f8] rounded-full flex items-center justify-center">
            <img
              className="w-[26px] h-[26px]"
              alt="Czech republic"
              src="https://c.animaapp.com/mguqfb52epzWzu/img/czech-republic.svg"
            />
          </div>
          <ChevronDownIcon className="w-4 h-4 text-[#476788]" />
        </Button>

        <div className="flex items-center justify-center gap-[30px]">
          <Button
            variant="link"
            className="h-auto p-0 text-[#476788] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)] hover:text-[#111d27] transition-colors"
          >
            Privacy policy
          </Button>

          <Button
            variant="link"
            className="h-auto p-0 text-[#476788] font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)] hover:text-[#111d27] transition-colors"
          >
            Cookie settings
          </Button>
        </div>

        <p className="font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[#476788] text-[length:var(--desktop-b2-14px-font-size)] text-right tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)]">
          Copyright Mailstep 2025
        </p>
      </div>
    </footer>
  );
};
