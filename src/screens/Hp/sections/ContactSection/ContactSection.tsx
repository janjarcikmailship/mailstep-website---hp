import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

const contactFeatures = [
  {
    text: "Zodpovíme všechny vaše dotazy",
    isHighlight: false,
  },
  {
    text: "+420 777 415",
    isHighlight: true,
  },
  {
    text: "poptavky@mailstep.cz",
    isHighlight: true,
  },
];

const formFields = {
  row1: [
    { label: "Název společnosti", name: "company" },
    { label: "Doména e-shopu", name: "domain" },
  ],
  row2: [
    {
      label: "Jméno a příjmení",
      name: "fullname",
      defaultValue: "Antonín Macháček",
      hasError: true,
    },
    { label: "E-mail", name: "email" },
  ],
  row3: [
    { label: "Tel. číslo", name: "phone" },
    { label: "Počet objednávek za mesíc", name: "orders", isSelect: true },
  ],
};

export const ContactSection = (): JSX.Element => {
  return (
    <section className="relative flex items-start gap-[153px] px-[152px] py-[110px] bg-[#f7f7f7] rounded-[26px] overflow-hidden">
      <div className="flex flex-col w-[527px] items-start gap-10 relative z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <h2 className="w-[478px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[#111d27] text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          Už žádné starosti
          <br />s logistikou
        </h2>

        <div className="flex flex-col items-start gap-[17px] w-full">
          {contactFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-[15px] w-full">
              <CheckCircle2Icon className="w-6 h-6 text-[#111d27] flex-shrink-0" />
              <div
                className={`w-fit font-${feature.isHighlight ? "desktop-h3-36px" : "desktop-p2-18px"} font-[number:var(--desktop-${feature.isHighlight ? "h3-36px" : "p2-18px"}-font-weight)] text-${feature.isHighlight ? "[#e20714]" : "[#111d27]"} text-[length:var(--desktop-${feature.isHighlight ? "h3-36px" : "p2-18px"}-font-size)] tracking-[var(--desktop-${feature.isHighlight ? "h3-36px" : "p2-18px"}-letter-spacing)] leading-[var(--desktop-${feature.isHighlight ? "h3-36px" : "p2-18px"}-line-height)] whitespace-nowrap [font-style:var(--desktop-${feature.isHighlight ? "h3-36px" : "p2-18px"}-font-style)]`}
              >
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-[640px] items-start gap-10 relative z-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex items-center gap-10 w-full">
            {formFields.row1.map((field, index) => (
              <div
                key={index}
                className="flex flex-col w-[300px] items-start gap-1"
              >
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                  {field.label}
                </Label>
                <Input
                  name={field.name}
                  className="h-12 bg-white rounded-lg border border-solid border-[#476788] px-4"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-10 w-full">
            {formFields.row2.map((field, index) => (
              <div
                key={index}
                className="flex flex-col w-[300px] items-start gap-1 relative"
              >
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                  {field.label}
                </Label>
                <div className="relative w-full">
                  <Input
                    name={field.name}
                    defaultValue={field.defaultValue}
                    className={`h-12 bg-white rounded-lg border border-solid ${field.hasError ? "border-[#476788]" : "border-[#476788]"} px-4 font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]`}
                  />
                  {field.hasError && (
                    <div className="absolute w-[calc(100%_+_8px)] h-[calc(100%_+_8px)] -top-1 -left-1 rounded-xl border-2 border-solid border-[#db2b19] pointer-events-none" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-10 w-full">
            {formFields.row3.map((field, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-start gap-1"
              >
                <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                  {field.label}
                </Label>
                {field.isSelect ? (
                  <Select name={field.name}>
                    <SelectTrigger className="h-12 bg-white rounded-lg border border-solid border-[#476788] px-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">0-50</SelectItem>
                      <SelectItem value="51-100">51-100</SelectItem>
                      <SelectItem value="101-500">101-500</SelectItem>
                      <SelectItem value="500+">500+</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    name={field.name}
                    className="h-12 bg-white rounded-lg border border-solid border-[#476788] px-4"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col items-start gap-1">
            <div className="flex items-baseline gap-1">
              <Label className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#111d27] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                Řeknete nám více o své firmě
              </Label>
              <span className="font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[#476788] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] [font-style:var(--desktop-b2-14px-font-style)]">
                (Nepovinné)
              </span>
            </div>
            <Textarea
              name="description"
              className="min-h-[120px] bg-white rounded-lg border border-solid border-[#476788] px-4 py-3 resize-none"
            />
          </div>
        </div>

        <div className="flex w-[449px] items-center gap-3">
          <Checkbox id="consent" className="w-6 h-6" />
          <Label
            htmlFor="consent"
            className="flex-1 font-desktop-p3-14px font-[number:var(--desktop-p3-14px-font-weight)] text-black text-[length:var(--desktop-p3-14px-font-size)] tracking-[var(--desktop-p3-14px-letter-spacing)] leading-[var(--desktop-p3-14px-line-height)] [font-style:var(--desktop-p3-14px-font-style)] cursor-pointer"
          >
            Odoslaním formuláře souhlasíte se zpracováním osobních údajú
          </Label>
        </div>

        <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 transition-colors">
          <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
            Odeslat
          </span>
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <img
        className="absolute top-[232px] left-0 w-[951px] h-[588px] pointer-events-none"
        alt="Group"
        src="https://c.animaapp.com/mguqfb52epzWzu/img/group-39933.png"
      />
    </section>
  );
};
