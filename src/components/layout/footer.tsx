import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerContact, footerLegal, footerSocials } from "@/config/footer";
import { siteConfig } from "@/config/site";
import { asset } from "@/lib/asset";

const link = "text-body text-sand transition-opacity duration-300 hover:opacity-70";
const row = "grid gap-3 sm:grid-cols-3";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-navy pt-12 pb-10 xl:pt-[calc(98*var(--u))] xl:pb-[calc(110*var(--u))]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* eslint-disable @next/next/no-img-element -- decorative SVGs */}
        <img
          src={asset("/images/footer/blob-1.svg")}
          alt=""
          className="absolute top-[30.3%] left-[10.4%] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[52.03deg]"
          style={{ width: "min(80vw, 780px)", height: "min(70vw, 690px)" }}
        />
        <img
          src={asset("/images/footer/blob-2.svg")}
          alt=""
          className="absolute top-[110%] left-[90%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[123.45deg]"
          style={{ width: "min(120vw, 1180px)", height: "min(108vw, 1070px)" }}
        />
        {/* eslint-enable @next/next/no-img-element */}
      </div>

      <Container>
        <Link href="/" aria-label={siteConfig.name} className="mx-auto block w-fit">
          <Image
            src={asset("/images/logo.svg")}
            alt={siteConfig.name}
            width={258}
            height={93}
            className="h-auto w-[130px] sm:w-[160px] xl:w-[calc(258*var(--u))]"
          />
        </Link>

        <div className="mt-10 xl:mt-[calc(180*var(--u))]">
          <address className={`${row} pb-6 not-italic xl:pb-[calc(30*var(--u))]`}>
            <p className="text-body text-sand">{footerContact.address}</p>
            <a
              href={`mailto:${footerContact.email}`}
              className={`${link} sm:text-center`}
            >
              {footerContact.email}
            </a>
            <a
              href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
              className={`${link} sm:text-right`}
            >
              {footerContact.phone}
            </a>
          </address>

          <div className="border-t border-sand/40 py-6 xl:py-[calc(60*var(--u))]">
            <ul className={row}>
              {footerSocials.map(({ label, href }, i) => (
                <li
                  key={label}
                  className={i === 1 ? "sm:text-center" : i === 2 ? "sm:text-right" : ""}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className={`${row} border-t border-sand/40 pt-6 xl:pt-[calc(30*var(--u))]`}>
            {footerLegal.map(({ label, href }, i) => (
              <li key={label} className={i === 1 ? "sm:text-center" : ""}>
                <Link href={href} className={link}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
