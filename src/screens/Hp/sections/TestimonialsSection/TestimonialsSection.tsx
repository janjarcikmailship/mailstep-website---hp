import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonials = [
  {
    logo: "https://c.animaapp.com/mguqfb52epzWzu/img/vif-black-2.png",
    text: "Logistika je nejdůležitější součást každého eshopu, díky které můžete růst a škálovat váš businessu. Pro běžného smrtelníka jde o absolutní španělskou vesnici. Díky Mailstep jsem všechny tyto starosti delegoval profesionálům, což mi umožnilo soustředit se na rozvoj firmy a produktů.",
    avatar:
      "https://c.animaapp.com/mguqfb52epzWzu/img/young-man-working-warehouse-with-boxes-1.png",
    name: "Jakub Lorenc",
    position: "CEO",
  },
  {
    logo: "https://c.animaapp.com/mguqfb52epzWzu/img/vif-black-2.png",
    text: "Logistika je nejdůležitější součást každého eshopu, díky které můžete růst a škálovat váš businessu. Pro běžného smrtelníka jde o absolutní španělskou vesnici. Díky Mailstep jsem všechny tyto starosti delegoval profesionálům, což mi umožnilo soustředit se na rozvoj firmy a produktů.",
    avatar:
      "https://c.animaapp.com/mguqfb52epzWzu/img/young-man-working-warehouse-with-boxes-1-2.png",
    name: "Jakub Lorenc",
    position: "CEO",
  },
  {
    logo: "https://c.animaapp.com/mguqfb52epzWzu/img/vif-black-2.png",
    text: "Logistika je nejdůležitější součást každého eshopu, díky které můžete růst a škálovat váš businessu. Pro běžného smrtelníka jde o absolutní španělskou vesnici. Díky Mailstep jsem všechny tyto starosti delegoval profesionálům, což mi umožnilo soustředit se na rozvoj firmy a produktů.",
    avatar:
      "https://c.animaapp.com/mguqfb52epzWzu/img/young-man-working-warehouse-with-boxes-1-2.png",
    name: "Jakub Lorenc",
    position: "CEO",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-20 relative">
      <h2 className="max-w-[865px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] text-center tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <span className="text-[#111d27]">
          Jsme spolehlivý logistický partner, který svým klientům{" "}
        </span>
        <span className="text-[#db2b19]">zajišťuje fulfillment</span>
      </h2>

      <div className="flex items-center gap-10 relative w-full overflow-x-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-full max-w-[865px] bg-[#f8f8f8] rounded-[18px] border-0 relative"
          >
            <CardContent className="flex flex-col items-center gap-[85px] px-[90px] py-[50px]">
              <div className="flex flex-col items-center gap-[55px] w-full">
                <div className="flex flex-col items-center gap-[35px] w-full">
                  <div className="flex flex-col items-center gap-[39px] w-full">
                    <img
                      className="w-[95px] h-[42px] object-cover"
                      alt="VIF black"
                      src={testimonial.logo}
                    />

                    <p className="font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#111d27] text-[length:var(--desktop-p2-18px-font-size)] text-center tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
                      {testimonial.text}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-[100px]">
                  <div className="inline-flex items-center gap-7">
                    <div className="relative w-[74px] h-[85px]">
                      <div className="absolute top-[15px] left-0.5 w-[70px] h-[70px] bg-white rounded-[35px]" />
                      <Avatar className="absolute top-0 left-0 w-[74px] h-[82px] rounded-none">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </Avatar>
                    </div>

                    <div className="inline-flex flex-col items-start gap-0.5">
                      <div className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-[#e20714] text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] whitespace-nowrap [font-style:var(--desktop-b1-16px-font-style)]">
                        {testimonial.name}
                      </div>
                      <div className="font-desktop-b2-14px font-[number:var(--desktop-b2-14px-font-weight)] text-[#111d27] text-[length:var(--desktop-b2-14px-font-size)] tracking-[var(--desktop-b2-14px-letter-spacing)] leading-[var(--desktop-b2-14px-line-height)] whitespace-nowrap [font-style:var(--desktop-b2-14px-font-style)]">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>

                  <Button className="h-[50px] bg-[#e20714] hover:bg-[#c20612] rounded-[100px] shadow-shadow-raised px-6 transition-colors">
                    <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
                      Casy study
                    </span>
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              {index === 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-[calc(50%-58px)] left-[-62px] w-[116px] h-[116px] rounded-full hover:bg-transparent transition-transform hover:scale-110"
                    aria-label="Previous testimonial"
                  >
                    <img
                      className="w-[116px] h-[116px]"
                      alt="Previous"
                      src="https://c.animaapp.com/mguqfb52epzWzu/img/button-arrow-1.svg"
                    />
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-[calc(50%-58px)] right-[-5px] w-[116px] h-[116px] rounded-full hover:bg-transparent transition-transform hover:scale-110"
                    aria-label="Next testimonial"
                  >
                    <img
                      className="w-[116px] h-[116px]"
                      alt="Next"
                      src="https://c.animaapp.com/mguqfb52epzWzu/img/button-arrow.svg"
                    />
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
