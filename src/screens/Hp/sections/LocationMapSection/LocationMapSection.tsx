import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const featuredArticle = {
  image: "https://c.animaapp.com/mguqfb52epzWzu/img/image-3.png",
  category: "Články",
  categoryBg: "bg-[#f9e6e5]",
  categoryColor: "text-[#e20714]",
  title: "Spolupráce Puravia a Mailstepu: Když značka a rozvíjí se tak ....",
  link: "#",
};

const sideArticles = [
  {
    image: "https://c.animaapp.com/mguqfb52epzWzu/img/image-3.png",
    category: "Články",
    categoryBg: "bg-[#f9e6e5]",
    categoryColor: "text-[#e20714]",
    title: "Spolupráce Puravia\na Mailstepu: Když značka roste...",
    link: "#",
  },
  {
    image: "https://c.animaapp.com/mguqfb52epzWzu/img/image-3.png",
    category: "Případové studie",
    categoryBg: "bg-[#d0d4e7]",
    categoryColor: "text-[#111d27]",
    title: "Spolupráce Puravia\na Mailstepu: Když značka roste...",
    link: "#",
  },
  {
    image: "https://c.animaapp.com/mguqfb52epzWzu/img/image-3.png",
    category: "Novinky",
    categoryBg: "bg-[#abd9ff]",
    categoryColor: "text-[#00359f]",
    title: "Spolupráce Puravia\na Mailstepu: Když značka roste...",
    link: "#",
  },
];

export const LocationMapSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-20 px-[260px] py-[110px] bg-[#f7f7f7] rounded-[26px]">
      <header className="inline-flex items-start gap-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <h2 className="w-[478px] mt-[-1.00px] font-desktop-h2-44px font-[number:var(--desktop-h2-44px-font-weight)] text-[length:var(--desktop-h2-44px-font-size)] tracking-[var(--desktop-h2-44px-letter-spacing)] leading-[var(--desktop-h2-44px-line-height)] [font-style:var(--desktop-h2-44px-font-style)]">
          <span className="text-[#e20714] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            Buďte v centru
            <br />
          </span>
          <span className="text-[#111d27] tracking-[var(--desktop-h2-44px-letter-spacing)] font-desktop-h2-44px [font-style:var(--desktop-h2-44px-font-style)] font-[number:var(--desktop-h2-44px-font-weight)] leading-[var(--desktop-h2-44px-line-height)] text-[length:var(--desktop-h2-44px-font-size)]">
            našeho know how
          </span>
        </h2>

        <p className="w-[413px] mt-[-1.00px] font-desktop-p2-18px font-[number:var(--desktop-p2-18px-font-weight)] text-[#476788] text-[length:var(--desktop-p2-18px-font-size)] tracking-[var(--desktop-p2-18px-letter-spacing)] leading-[var(--desktop-p2-18px-line-height)] [font-style:var(--desktop-p2-18px-font-style)]">
          Objevte nejdůležitější články, případové studie a<br />
          e-booky pro váš byznys.
        </p>
      </header>

      <div className="flex flex-col items-center gap-20 w-full">
        <div className="flex items-start gap-[43px] w-full">
          <article className="flex flex-col w-[526px] h-[353px] items-start justify-center gap-[18px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="flex-1 self-stretch w-full">
              <img
                className="w-[526px] h-[197px] rounded-[18px] object-cover"
                alt="Featured article"
                src={featuredArticle.image}
              />
            </div>

            <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
              <Badge
                className={`${featuredArticle.categoryBg} ${featuredArticle.categoryColor} rounded-[19.82px] px-[9.91px] py-0 h-auto font-desktop-p5-12-px font-[number:var(--desktop-p5-12-px-font-weight)] text-[length:var(--desktop-p5-12-px-font-size)] tracking-[var(--desktop-p5-12-px-letter-spacing)] leading-[var(--desktop-p5-12-px-line-height)] [font-style:var(--desktop-p5-12-px-font-style)] hover:${featuredArticle.categoryBg}`}
              >
                {featuredArticle.category}
              </Badge>

              <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
                <h3 className="self-stretch mt-[-1.00px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)]">
                  {featuredArticle.title}
                </h3>
              </div>

              <a
                href={featuredArticle.link}
                className="inline-flex items-center gap-1 transition-transform hover:translate-x-1"
              >
                <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#e20714] text-base text-center tracking-[0] leading-7 whitespace-nowrap">
                  Read now
                </span>
                <ArrowRightIcon className="w-4 h-4 text-[#e20714]" />
              </a>
            </div>
          </article>

          <div className="flex flex-col w-[526px] items-start gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            {sideArticles.map((article, index) => (
              <article
                key={index}
                className="flex items-start gap-[18px] w-full"
              >
                <div className="w-[93.75px] h-[90px] flex-shrink-0">
                  <img
                    className="w-[94px] h-[90px] rounded-[18px] object-cover"
                    alt="Article thumbnail"
                    src={article.image}
                  />
                </div>

                <div className="flex flex-col items-start gap-2.5 flex-1">
                  <Badge
                    className={`${article.categoryBg} ${article.categoryColor} rounded-[19.82px] px-[9.91px] py-0 h-auto font-desktop-p5-12-px font-[number:var(--desktop-p5-12-px-font-weight)] text-[length:var(--desktop-p5-12-px-font-size)] tracking-[var(--desktop-p5-12-px-letter-spacing)] leading-[var(--desktop-p5-12-px-line-height)] [font-style:var(--desktop-p5-12-px-font-style)] hover:${article.categoryBg}`}
                  >
                    {article.category}
                  </Badge>

                  <h3 className="self-stretch h-[70px] font-desktop-h4-20px font-[number:var(--desktop-h4-20px-font-weight)] text-[#111d27] text-[length:var(--desktop-h4-20px-font-size)] tracking-[var(--desktop-h4-20px-letter-spacing)] leading-[var(--desktop-h4-20px-line-height)] [font-style:var(--desktop-h4-20px-font-style)] whitespace-pre-line">
                    {article.title}
                  </h3>

                  <a
                    href={article.link}
                    className="inline-flex items-center gap-1 transition-transform hover:translate-x-1"
                  >
                    <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#e20714] text-base text-center tracking-[0] leading-7 whitespace-nowrap">
                      Read now
                    </span>
                    <ArrowRightIcon className="w-4 h-4 text-[#e20714]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Button className="h-[50px] bg-[#e20714] hover:bg-[#c00612] rounded-[100px] shadow-shadow-raised px-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] transition-transform hover:scale-105">
          <span className="font-desktop-b1-16px font-[number:var(--desktop-b1-16px-font-weight)] text-white text-[length:var(--desktop-b1-16px-font-size)] text-center tracking-[var(--desktop-b1-16px-letter-spacing)] leading-[var(--desktop-b1-16px-line-height)] [font-style:var(--desktop-b1-16px-font-style)]">
            Prohlédnout si vše
          </span>
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </section>
  );
};
