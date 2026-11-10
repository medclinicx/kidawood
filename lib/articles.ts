export type CategorySlug = "stocks" | "investing" | "stock-management" | "finance";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  subsections?: { heading: string; paragraphs: string[] }[];
}

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface ArticleSource {
  label: string;
  url: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  primaryKeyword: string;
  secondaryKeywords: string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  intro: string;
  takeaways?: string[];
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  sources: ArticleSource[];
  status: "published" | "draft";
}

export interface Category {
  slug: CategorySlug;
  path: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string[];
  focus: string[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "stocks",
    path: "/stocks",
    name: "Stock Market",
    shortName: "Stocks",
    tagline: "Company stocks, symbols and listing checks explained plainly.",
    intro: [
      "This section covers individual company stocks. Most readers arrive with a simple question: does this company have a stock, what is its symbol, and where is it traded. We answer that kind of question directly, then show the checks behind the answer so you can repeat them yourself.",
      "A search for a product or app name often looks like a search for a stock. Many well known products are made by private companies, by divisions of larger listed companies, or by organisations that do not issue shares at all. Telling those apart is a large part of what this section does.",
    ],
    focus: [
      "Whether a named company is publicly traded or private",
      "Stock symbols and the exchanges they trade on",
      "How to check a listing on SEC EDGAR and exchange directories",
      "Dividends and basic company filings, explained without jargon",
    ],
  },
  {
    slug: "investing",
    path: "/investing",
    name: "Investing",
    shortName: "Investing",
    tagline: "How investing and trading work, with the risks stated up front.",
    intro: [
      "Investing covers the practical side of the stock market: how accounts work, how orders are placed, and what strategies such as short selling or options actually involve. Each guide starts with a short answer, then works through the mechanics in order.",
      "Risk is part of every guide here, not a footnote. Where a strategy can lose more than the money put in, we say so early and explain why. Nothing in this section is a recommendation to buy, sell or trade anything. It is background reading so you can talk to a licensed adviser or broker with better questions.",
    ],
    focus: [
      "Brokerage and margin accounts, and how they differ",
      "Short selling, step by step, with its risks",
      "Stock options and pre-IPO investing, in plain terms",
      "Order types and common trading terms",
    ],
  },
  {
    slug: "stock-management",
    path: "/stock-management",
    name: "Stock Management",
    shortName: "Stock Management",
    tagline: "Software and systems for tracking physical stock and inventory.",
    intro: [
      "Stock also means the goods a business holds. This section is about managing that kind of stock: the software, barcode systems and day to day processes that help a shop, pharmacy, grocery store or warehouse know what it has, where it is, and when to reorder.",
      "The writing here is aimed at owners and managers comparing tools. We describe what a type of software does, which features matter in practice, and the questions worth asking a seller before you pay for anything. We do not publish rankings or prices, because both change often and depend on the size of the business.",
    ],
    focus: [
      "Barcode stock management software and scanners",
      "Pharmacy and grocery inventory needs",
      "Warehouse stock control and reorder points",
      "Inventory apps for small businesses",
    ],
  },
  {
    slug: "finance",
    path: "/finance",
    name: "Finance and Legal",
    shortName: "Finance",
    tagline: "Financial services, insurance and legal topics around stock.",
    intro: [
      "Finance and Legal covers the services that sit around the stock market rather than the market itself. That includes financial advisers, attorneys who handle stock fraud cases, stock throughput insurance, stock plan administration and questions about donating shares.",
      "These topics often involve regulated work and real money, so the guides here stick to explaining what a service is, when people usually need it, and what to check before hiring anyone. For a decision about your own money or a legal dispute, you need a licensed professional in your state, not a website article.",
    ],
    focus: [
      "What financial advisers do and how they are paid",
      "Stock fraud attorneys and how cases are assessed",
      "Stock throughput insurance, explained",
      "Stock plan administration and donating stock",
    ],
  },
];

export function getCategory(slug: CategorySlug): Category {
  return CATEGORIES.find((c) => c.slug === slug) as Category;
}

export const FINANCE_CATEGORIES: CategorySlug[] = ["stocks", "investing", "finance"];

export const ARTICLES: Article[] = [
  {
    slug: "myradar-stock",
    title: "MyRadar Stock: Is MyRadar Publicly Traded?",
    excerpt:
      "MyRadar is a weather app made by a private company, ACME AtronOmatic. It has no stock symbol and its shares are not traded on any exchange.",
    category: "stocks",
    primaryKeyword: "MyRadar stock",
    secondaryKeywords: ["MyRadar stock symbol", "My Radar stock", "is MyRadar publicly traded"],
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readingMinutes: 5,
    image: "/images/myradar-stock-weather-radar.svg",
    imageAlt:
      "Simple illustration of a weather radar sweep over a map, with a chart line that ends in a question mark",
    intro:
      "No. MyRadar is not publicly traded. MyRadar is a weather radar app made by ACME AtronOmatic, a private company based in the United States. The company has no stock symbol, it is not listed on the NYSE, Nasdaq or any other exchange, and there are no MyRadar shares for the public to buy or sell.",
    takeaways: [
      "MyRadar is not publicly traded. The app is made by ACME AtronOmatic, a private company, so there is no MyRadar stock symbol and no shares the public can buy.",
      "A well known app does not make a listed company. A product can be a household name while the company behind it stays private.",
      "You can check any US company yourself in SEC EDGAR and in the NYSE and Nasdaq directories. No registration and no symbol means the company is private.",
      "If a website shows a MyRadar share price, match the full legal company name before believing it, because the page may be about a different business with a similar name.",
    ],
    sections: [
      {
        heading: "Why people search for MyRadar stock",
        paragraphs: [
          "MyRadar is a widely used weather app, and popular products often look like stock market names. When an app has millions of users, it is natural to assume the company behind it trades on an exchange. Searches for a MyRadar stock symbol or share price come from that assumption.",
          "An app name is not a company listing, though. A product can be a household name while the company behind it stays private. Private companies are owned by their founders, employees and private investors, and their ownership stakes do not trade in public markets.",
        ],
      },
      {
        heading: "Who makes MyRadar",
        paragraphs: [
          "MyRadar is developed by ACME AtronOmatic, a software company known for weather data and radar display products. The app shows radar imagery, forecasts, hurricane tracking and weather alerts, and the company also supplies weather data services to businesses and media organisations.",
          "None of that activity requires a public listing. A company only becomes publicly traded when it registers shares and lists them on an exchange, usually through an initial public offering. ACME AtronOmatic has not done that for MyRadar or for itself, so there is no ticker to look up.",
        ],
      },
      {
        heading: "How to check whether any company is publicly traded",
        paragraphs: [
          "You do not need to take a website's word for this. There are two free official checks that settle the question for any US company, and they take a few minutes.",
        ],
        subsections: [
          {
            heading: "Search SEC EDGAR",
            paragraphs: [
              "The US Securities and Exchange Commission runs EDGAR, a public database of company filings. Companies that sell shares to the public must register and file reports there. EDGAR has a company search by name and by ticker. If a name search finds no registered company and no filings, that is strong evidence the company is private.",
            ],
          },
          {
            heading: "Check the exchange listings",
            paragraphs: [
              "The NYSE and Nasdaq both publish directories of their listed companies, and each listed company has a symbol, usually one to five letters. If a company appears in neither directory and has no symbol assigned, it is not traded on those exchanges. Smaller US companies can trade over the counter, and those also appear in market databases with an assigned symbol, so a complete absence of a symbol points the same way.",
            ],
          },
        ],
      },
      {
        heading: "What if a website shows a MyRadar share price",
        paragraphs: [
          "Treat it with care. Data sites sometimes create pages for names that are not traded companies, and unrelated companies can have similar names. Before believing any price page, match the full legal company name and the exchange, then confirm the symbol in EDGAR. If the company described on the page is not ACME AtronOmatic, the page is about a different business that happens to share part of the name.",
          "There is also no legitimate way to buy pre-IPO MyRadar shares through a general investing app, because there are no public shares. Anyone offering MyRadar stock for sale to the public should be checked very carefully with the SEC resources linked below before any money changes hands.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the MyRadar stock symbol?",
        a: "There is none. MyRadar's maker, ACME AtronOmatic, is a private company, so no exchange has assigned it a symbol.",
      },
      {
        q: "Can I invest in MyRadar through a parent company?",
        a: "No parent company listing is available. ACME AtronOmatic is independent and private, so there is no listed parent whose shares give exposure to MyRadar.",
      },
      {
        q: "Could MyRadar go public in the future?",
        a: "Any private company can choose to hold an initial public offering later, but that requires SEC registration and filings that would appear in EDGAR. Until filings appear there, treat claims about an upcoming listing as unverified.",
      },
    ],
    sources: [
      { label: "SEC EDGAR company search", url: "https://www.sec.gov/edgar/searchedgar/companysearch" },
      { label: "Investor.gov, the SEC's investor education site", url: "https://www.investor.gov/" },
    ],
    status: "published",
  },
  {
    slug: "how-to-short-a-stock-on-etrade",
    title: "How to Short a Stock on E*TRADE: A Beginner's Guide",
    excerpt:
      "Short selling means borrowing shares, selling them, and hoping to buy them back for less. It needs a margin account and carries the risk of losses with no fixed limit.",
    category: "investing",
    primaryKeyword: "how to short stocks on ETRADE",
    secondaryKeywords: ["how to short stock ETRADE", "short selling E*TRADE", "how to short a stock"],
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readingMinutes: 8,
    image: "/images/short-selling-etrade-chart.svg",
    imageAlt:
      "Simple illustration of a price chart sloping downward, with a warning marker showing that a rising price increases the loss",
    intro:
      "Short selling is a way to take a position that gains when a share price falls. On a brokerage platform such as E*TRADE, it is done from a margin account: you borrow shares, sell them at the current price, and later buy them back to return them. If the price fell, you keep the difference. If it rose, you pay the difference, and because a price can keep rising, the possible loss has no fixed limit.",
    takeaways: [
      "Short selling means borrowing shares, selling them, and buying them back later. You gain if the price falls and lose if it rises.",
      "Short selling needs a margin account with short selling enabled. It is not available in a cash account or a retirement account.",
      "The possible loss has no fixed limit, because a share price can keep rising and the shares still have to be bought back.",
      "A short position is closed with a buy to cover order, and interest, borrow fees and any dividends owed while the position was open add to the cost.",
    ],
    sections: [
      {
        heading: "What short selling is",
        paragraphs: [
          "A normal investment buys first and sells later, hoping the price rises. Short selling reverses the order. You sell first, using shares borrowed from your broker, and buy later to close the position. The trade profits from a fall instead of a rise.",
          "The borrowed shares are a real obligation. While the position is open you owe those shares back, you may be charged interest on the borrowing, and you are responsible for any dividends paid while you hold the short position. Your broker can also require you to close the position if the borrowed shares are recalled or if your account no longer meets its requirements.",
        ],
      },
      {
        heading: "The account you need",
        paragraphs: [
          "Short selling cannot be done in a standard cash account or a retirement account. Brokers, including E*TRADE, require a margin account with short selling enabled. A margin account lets you borrow against the value of your account, and it comes with minimum balance rules and maintenance requirements set by regulation and by the broker's own policies.",
          "Approval is not automatic. The broker reviews the application, and margin accounts require the account holder to keep a required minimum equity. If the value of the account falls below the maintenance level, the broker issues a margin call, which means adding funds or closing positions, and the broker may close positions itself if the call is not met.",
        ],
      },
      {
        heading: "The general steps on a brokerage platform",
        paragraphs: [
          "Menu names and screen layouts change over time, so this is the sequence in general terms rather than a map of one app's screens. The order of events is the same on most platforms.",
        ],
        subsections: [
          {
            heading: "Check the stock can be borrowed",
            paragraphs: [
              "Not every stock is available to short. The broker needs shares it can lend, and some stocks are marked as hard to borrow or unavailable. The stock's quote or order page usually shows whether short selling is available and, where relevant, that borrow costs apply.",
            ],
          },
          {
            heading: "Place a sell to open order",
            paragraphs: [
              "A short sale is entered as a sell order on a stock you do not own, often labelled sell short or sell to open. You choose the number of shares and the order type, such as a market order or a limit order, in the same way as a normal sale. When it fills, the shares are sold and the proceeds are credited to the margin account, but they are not fully yours to withdraw, because the position is still open.",
            ],
          },
          {
            heading: "Watch the position and the margin level",
            paragraphs: [
              "An open short position is marked to the market price every day. A rising price increases what you owe and reduces your account equity. Many traders decide in advance the price at which they will close the position if the trade moves against them, because waiting and hoping is not a plan when losses are open ended.",
            ],
          },
          {
            heading: "Buy to cover to close",
            paragraphs: [
              "Closing is done with a buy to cover order for the same number of shares. The bought shares are returned to the lender and the position ends. Your result is the difference between the selling price and the buying price, minus interest, borrow fees and any dividend amounts you owed while the position was open.",
            ],
          },
        ],
      },
      {
        heading: "The risks, stated plainly",
        paragraphs: [
          "The main risk is the shape of the loss. When you buy a stock, the most you can lose is the money you paid, because a price cannot fall below zero. When you short a stock, the price can rise far above your selling price, and you have to buy back at that higher price. There is no ceiling on how high a price can go, so there is no fixed limit to the loss.",
          "Short positions can also move very fast. If many short sellers try to close at the same time, their buying pushes the price up further, a pattern known as a short squeeze. Add margin rules on top: a position can be closed for you at the worst moment if your account equity is too low. For these reasons, regulators and brokers treat short selling as an advanced strategy, and beginners usually start by learning it on paper before risking real money, if they use it at all.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a margin account to short a stock on E*TRADE?",
        a: "Yes. Short selling requires a margin account with short selling enabled. It is not available in cash accounts or retirement accounts.",
      },
      {
        q: "What does buy to cover mean?",
        a: "It is the order that closes a short position. You buy the same number of shares you sold short, and those shares are returned to the broker that lent them.",
      },
      {
        q: "How much can I lose short selling?",
        a: "More than the value of the shares you sold. A share price can keep rising, and you must buy back at the higher price, so the loss has no fixed limit. Interest and fees add to it.",
      },
      {
        q: "Can my broker close my short position without asking me?",
        a: "Yes, in defined situations. If your account falls below its maintenance requirement, or the borrowed shares are recalled, the broker can close the position under the margin agreement.",
      },
    ],
    sources: [
      {
        label: "Investor.gov: introduction to short sales",
        url: "https://www.investor.gov/introduction-investing/investing-basics/glossary/short-sales",
      },
      { label: "FINRA: margin accounts and margin requirements", url: "https://www.finra.org/investors/learn-to-invest/advanced-investing/margin" },
    ],
    status: "published",
  },
  {
    slug: "barcode-stock-management-software",
    title: "Barcode Stock Management Software: What It Does and How to Choose",
    excerpt:
      "Barcode stock management software records goods in and out by scanning labels instead of typing counts. Here is how it works and what to ask before buying.",
    category: "stock-management",
    primaryKeyword: "barcode stock management software",
    secondaryKeywords: ["barcode stock software", "stock barcode system", "barcode inventory software"],
    publishedAt: "2026-11-10",
    updatedAt: "2026-11-10",
    readingMinutes: 7,
    image: "/images/barcode-stock-management-software.svg",
    imageAlt:
      "Simple illustration of a handheld barcode scanner reading a label on a storage box, with rows of boxes on shelves",
    intro:
      "Barcode stock management software keeps track of the goods a business holds by scanning a label each time something arrives, moves or leaves. Every scan updates the record straight away, so the count on screen matches the shelf far more closely than a typed spreadsheet usually does. It is used by warehouses, pharmacies, grocery stores and smaller shops that have outgrown counting by hand.",
    takeaways: [
      "Barcode software updates the stock record with every scan as goods arrive, move or leave, so the count on screen stays close to what is on the shelf.",
      "The core features to look for are receiving records, low stock alerts at a reorder point you set, location tracking, and batch and expiry tracking for perishable or regulated goods.",
      "Pharmacies, grocery stores and warehouses set the same basic system up in different ways, from expiry reports in a pharmacy to bin locations and order picking in a warehouse.",
      "Before you buy, ask whether the system uses the barcodes already on your products, what hardware it works with, and how your data comes out if you leave, then run a short trial with your own products and staff.",
    ],
    sections: [
      {
        heading: "How a barcode stock system works",
        paragraphs: [
          "Each product, and sometimes each individual item, gets a label with a barcode that stands for a code in the system. That code links to the product record: its name, supplier, cost, storage location and how many are in stock. Staff scan the label with a handheld scanner, a phone or a fixed till scanner, and choose what the scan means, such as goods received, item sold, item moved or item written off.",
          "The value is in the routine, not the label itself. A scan takes a second and asks for no typing, so recording stock movements becomes part of the job rather than a separate task saved for the end of the week. Counts stay current, and the system can show who handled what and when, which makes errors and shrinkage easier to trace.",
        ],
      },
      {
        heading: "The core features to look for",
        paragraphs: [
          "Products differ, but the useful core is similar across most systems. Receiving and putaway records goods as they arrive and where they were stored. Stock levels update with every scan, and low stock alerts flag items that reach a reorder point the business sets itself. Location tracking matters once there is more than one shelf, room or site, because knowing you own something is of little use if nobody can find it.",
          "Beyond that, most businesses need batch and expiry date tracking if they handle anything perishable or regulated, a clear audit history of every adjustment, and reports on what sells, what sits and what was wasted. Integration also matters: many systems connect to tills, online shops and accounting software so a sale in one place reduces stock in the other.",
        ],
      },
      {
        heading: "How different businesses use it",
        paragraphs: [
          "The same basic system is set up quite differently depending on what is being counted.",
        ],
        subsections: [
          {
            heading: "Pharmacies",
            paragraphs: [
              "A pharmacy tracks medicines by batch and expiry date, and some items need a record of every movement. Barcode scanning at receiving and at the counter keeps those records as a byproduct of normal work, and expiry reports help staff pull stock before it goes out of date rather than finding it on the shelf.",
            ],
          },
          {
            heading: "Grocery stores",
            paragraphs: [
              "Grocery stock turns over quickly and much of it is perishable. Scanning deliveries in and sales out gives a running count for reordering, and date checks support rotation, so older stock is sold first. The main gain is fewer gaps on shelves and less food written off because it expired in a back room.",
            ],
          },
          {
            heading: "Warehouses",
            paragraphs: [
              "In a warehouse the problem is scale and location. Items are scanned into a bin or pallet position, scanned again when picked for an order, and scanned out at dispatch. That chain of scans is what allows a picker to be sent to the right shelf and an order to be checked before it leaves.",
            ],
          },
        ],
      },
      {
        heading: "Questions to ask before you buy",
        paragraphs: [
          "Start with your own stock, not the seller's feature list. How many products do you hold, how many movements happen on a busy day, and how many sites or storage areas are involved. Then ask how the system handles barcodes you already have, since many products arrive with a manufacturer's barcode that you will want to use rather than relabelling everything.",
          "Ask what hardware it works with and what happens if the internet connection drops mid shift. Ask how your data comes out if you leave, in a standard export you can open yourself. Check what training and support are included, and whether batch, expiry or multi location features cost extra, because those are often the features a growing business needs a year later. A short trial with your own products, scanned by your own staff, will tell you more than any demonstration.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between barcode software and inventory software?",
        a: "Inventory software is the wider system that records what you hold. Barcode software is the part that identifies items by scanning. Most stock management products combine both, so scanning is how the inventory record gets updated.",
      },
      {
        q: "Do I need special scanners, or can staff use phones?",
        a: "Many systems work with phone cameras for light use, and with dedicated handheld scanners for busy receiving areas or warehouses. The right choice depends on scan volume and how rough the working conditions are.",
      },
      {
        q: "Can barcode software track expiry dates?",
        a: "Yes, systems that support batch tracking can record an expiry date when goods are scanned in, and report what is nearing that date. This is common in pharmacy and grocery setups.",
      },
    ],
    sources: [
      { label: "GS1: barcode standards and how barcodes work", url: "https://www.gs1.org/standards/barcodes" },
    ],
    status: "published",
  },
];

export function publishedArticles(): Article[] {
  return ARTICLES.filter((a) => a.status === "published").sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );
}

export function articlesByCategory(category: CategorySlug): Article[] {
  return publishedArticles().filter((a) => a.category === category);
}

export function getLocalArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug && a.status === "published");
}

export function relatedArticles(article: Article, count = 3): Article[] {
  const same = publishedArticles().filter(
    (a) => a.slug !== article.slug && a.category === article.category
  );
  const rest = publishedArticles().filter(
    (a) => a.slug !== article.slug && a.category !== article.category
  );
  return [...same, ...rest].slice(0, count);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
