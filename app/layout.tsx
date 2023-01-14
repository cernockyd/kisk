'use client';
import Link from 'next/link';
import { Providers } from './providers';
import '../styles/globals.css';
import { usePathname } from 'next/navigation';
import { TailwindIndicator } from 'components/tailwind-indicator';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html>
      <head>
        <title>KISK Scrapbook</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f37a28" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#da532c" />
      </head>
      <body className="bg-background px-4 md:px-6 lg:px-8">
        <header>
          <nav className="flex w-full justify-between items-center h-16">
            <div className="flex items-center">
              <Link
                className="text-xl pt-px flex items-center text-muted hover:text-purple font-bold"
                href="/"
              >
                <svg
                  version="1.0"
                  className="w-8 h-8 fill-current mr-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 4129.000000 4129.000000"
                >
                  <g
                    transform="translate(0.000000,4129.000000) scale(0.100000,-0.100000)"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path
                      d="M15725 40889 c-939 -76 -1824 -415 -2590 -993 -357 -269 -737 -652
-1015 -1021 -451 -601 -782 -1336 -934 -2076 -51 -246 -84 -517 -103 -824 l-7
-130 -7 190 c-22 603 -137 1157 -356 1715 -65 166 -257 552 -355 712 -754
1244 -1992 2073 -3398 2277 -251 37 -390 46 -700 45 -336 0 -504 -13 -810 -65
-1554 -260 -2925 -1292 -3655 -2749 -524 -1046 -680 -2234 -444 -3378 423
-2052 2085 -3601 4129 -3847 112 -13 381 -32 515 -36 28 -1 -8 -6 -80 -10
-503 -31 -967 -125 -1405 -284 -1666 -604 -2914 -2067 -3270 -3835 -79 -389
-105 -696 -97 -1128 9 -500 68 -893 202 -1347 289 -979 863 -1828 1670 -2469
141 -112 443 -313 610 -407 549 -307 1148 -499 1790 -574 188 -22 678 -31 871
-16 866 68 1634 331 2360 807 469 307 926 739 1275 1204 627 835 996 1859
1038 2885 l7 170 7 -160 c13 -260 26 -419 53 -603 133 -931 500 -1762 1098
-2487 127 -154 457 -484 611 -611 1129 -932 2566 -1295 3995 -1009 990 199
1866 680 2595 1426 391 400 682 811 934 1319 519 1046 670 2211 436 3360 -139
684 -445 1370 -858 1926 -155 209 -294 371 -472 549 -613 615 -1351 1039
-2186 1254 -310 80 -597 123 -959 143 -124 7 -202 14 -175 15 513 25 927 100
1385 253 586 195 1125 497 1620 909 157 130 447 417 592 584 739 856 1182
1937 1257 3067 7 107 9 48 8 -292 0 -235 2 -430 5 -433 6 -6 19050 214 19057
221 3 2 -24 75 -58 162 -614 1526 -1641 2856 -2986 3863 -267 201 -615 432
-865 576 l-105 60 -7498 -87 c-4124 -48 -7499 -89 -7501 -91 -3 -4 -37 -3177
-36 -3408 0 -63 -2 -112 -5 -110 -2 3 -9 82 -15 175 -75 1220 -551 2316 -1377
3174 -807 838 -1889 1348 -3057 1440 -148 12 -593 11 -741 -1z m-10828 -1737
c45 -24 93 -73 119 -122 13 -25 19 -57 19 -111 0 -64 -4 -84 -30 -134 -45 -89
-87 -116 -241 -154 -214 -53 -379 -128 -593 -269 -233 -153 -488 -417 -676
-697 -136 -204 -262 -457 -343 -687 -42 -119 -64 -159 -108 -198 -56 -48 -110
-70 -179 -70 -105 0 -185 55 -233 158 -37 81 -29 152 37 325 139 367 317 688
547 987 120 156 409 444 554 552 286 212 546 340 865 424 107 28 202 26 262
-4z m6193 -3697 c57 -994 397 -1934 980 -2710 159 -211 253 -319 455 -520 322
-323 625 -556 1006 -775 669 -384 1498 -615 2228 -621 149 -1 109 -14 -70 -22
-256 -12 -590 -64 -879 -137 -1205 -303 -2273 -1069 -2975 -2135 -511 -775
-817 -1706 -852 -2593 -3 -89 -8 -160 -10 -158 -2 2 -8 96 -13 210 -39 838
-258 1603 -660 2301 -823 1430 -2327 2348 -3935 2402 -208 7 -211 16 -10 26
907 46 1857 397 2630 972 280 208 649 555 865 815 422 507 752 1096 954 1703
156 469 253 1011 268 1497 l2 65 3 -65 c1 -36 7 -150 13 -255z"
                    />
                    <path
                      d="M30711 32723 c-5382 -90 -9788 -166 -9791 -170 -9 -11 -75 -4782 -66
-4790 10 -11 19600 316 19606 327 5 8 56 3487 65 4442 3 317 2 346 -13 350 -9
2 -4420 -69 -9801 -159z"
                    />
                    <path
                      d="M30466 25659 c-5290 -87 -9620 -160 -9622 -162 -3 -3 -62 -4094 -66
-4534 -1 -139 0 -255 3 -257 3 -3 1911 26 4239 64 2329 39 4294 69 4365 69
l130 -1 -190 -28 c-630 -93 -1157 -219 -1745 -419 -2481 -840 -4559 -2652
-5791 -5046 -607 -1179 -991 -2518 -1103 -3840 -31 -364 -39 -614 -33 -1055 6
-439 11 -541 47 -905 197 -1974 994 -3880 2244 -5370 293 -349 727 -795 1041
-1069 970 -848 2068 -1482 3255 -1879 758 -254 1486 -398 2365 -469 216 -17
1104 -18 1320 0 905 73 1639 219 2429 484 2118 709 3957 2130 5225 4038 664
999 1141 2079 1430 3235 284 1141 375 2338 266 3505 -198 2104 -1037 4065
-2411 5635 -176 202 -543 576 -739 755 -1506 1376 -3368 2221 -5375 2440 -107
12 -197 24 -199 26 -2 2 31 4 75 4 135 0 8759 142 8761 144 2 1 16 945 32
2097 17 1152 33 2230 36 2397 l6 302 -188 -1 c-103 -1 -4517 -73 -9807 -160z
m664 -8555 c1745 -149 3316 -1051 4348 -2494 190 -266 341 -516 493 -820 349
-699 549 -1402 636 -2240 24 -238 25 -924 0 -1170 -138 -1388 -649 -2602
-1536 -3650 -212 -251 -591 -619 -856 -832 -934 -751 -2018 -1206 -3200 -1342
-472 -55 -1041 -46 -1530 25 -976 140 -1918 533 -2716 1135 -439 330 -854 747
-1188 1192 -694 923 -1113 2023 -1221 3201 -55 599 -18 1250 105 1866 312
1558 1200 2964 2470 3913 669 501 1408 854 2199 1053 417 104 799 159 1281
183 131 7 540 -5 715 -20z"
                    />
                    <path
                      d="M10530 20444 c-5283 -62 -9621 -113 -9640 -113 l-36 -1 -39 -3775
c-21 -2076 -37 -3776 -35 -3779 3 -2 1477 13 3275 34 1799 21 3272 36 3274 34
2 -2 -14 -1704 -36 -3781 -22 -2078 -40 -3778 -39 -3779 0 0 1474 16 3275 37
1801 21 3276 37 3278 35 3 -2 -8 -1134 -23 -2515 -14 -1382 -24 -2515 -20
-2518 5 -5 6537 66 6544 72 5 5 212 19431 212 19923 l0 242 -192 -1 c-106 -1
-4515 -52 -9798 -115z"
                    />
                  </g>
                </svg>
                {pathname != '/' && (
                  <span className="font-header mt-0.5">Scrapbook</span>
                )}
              </Link>
            </div>
            <div className="flex items-baseline space-x-6">
              {pathname != '/' && <Link
                className="text-muted hover:text-purple hover:text-gray relative md:flex justify-center text-base font space-x-6"
                href="/"
              >
               Příspěvky studentů 
              </Link>}
              <Link
                className="text-muted hover:text-purple hover:text-gray relative md:flex justify-center text-base font space-x-6"
                href="/students"
              >
                Studenti
              </Link>
              <Link
                className="text-muted hover:text-purple hover:text-gray relative md:flex justify-center text-base font space-x-6"
                href="/about"
              >
                O Scrapbooku
              </Link>
              {['/', '/about'].includes(pathname) && (
                <Link
                  className="bg-muted hidden sm:inline text-background hover:bg-purple rounded-full font-semibold px-4 pt-1 pb-0.5 uppercase relative md:flex justify-center text-base font"
                  href="/add-portfolio"
                >
                  Připojit portfolio
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main>
          <Providers>{children}</Providers>
          <TailwindIndicator />
        </main>
      </body>
    </html>
  );
}
