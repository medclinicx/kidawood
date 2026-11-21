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
      "Short selling means borrowing shares, selling them, and hoping to buy them back for less. It needs a margin account, and losses can grow without limit.",
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
      {
        label: "Investor.gov: understanding margin accounts",
        url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-29",
      },
    ],
    status: "published",
  },
  {
    slug: "barcode-stock-management-software",
    title: "Barcode Stock Management Software: How to Choose",
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
  {
    slug: "stock-rover-vs-seeking-alpha",
    title: "Stock Rover vs Seeking Alpha: Which Research Tool Fits You?",
    excerpt:
      "Stock Rover is a screening and portfolio workspace built on company data, while Seeking Alpha centres on analyst writing and Quant Ratings.",
    category: "investing",
    primaryKeyword: "Stock Rover vs Seeking Alpha",
    secondaryKeywords: ["Stock Rover vs Seeking Alpha", "Seeking Alpha vs Stock Rover", "Stock Rover pricing", "Seeking Alpha Premium price"],
    publishedAt: "2026-11-20",
    updatedAt: "2026-11-20",
    readingMinutes: 7,
    image: "/images/stock-rover-vs-seeking-alpha.svg",
    imageAlt:
      "Simple illustration of two research tools side by side: a stock screening table on the left and an analyst article with a rating badge on the right",
    intro:
      "Stock Rover and Seeking Alpha serve different jobs. Stock Rover is a research workspace for screening thousands of stocks on hundreds of financial metrics and tracking a portfolio against them. Seeking Alpha is an analysis platform where independent analysts write about stocks and where a data-driven Quant Rating grades each stock from Strong Buy to Strong Sell. If you want to find stocks by the numbers, Stock Rover is the stronger pick. If you want to read the case for and against a stock, Seeking Alpha is.",
    takeaways: [
      "Stock Rover is built around screening and comparison on company data, with more than 800 metrics on its top plans and research reports for stocks, ETFs and funds.",
      "Seeking Alpha is built around analyst articles and Quant Ratings, with a free Basic plan and Premium listed at $239 for the first year.",
      "Stock Rover paid plans start at $29 a month on annual billing, while Seeking Alpha PRO is listed at $1,920 for the first year, so the two sit at very different price points.",
      "Neither tool is a broker and neither gives personal advice. Your choice should follow how you research: by the numbers, by reading analysis, or both.",
    ],
    sections: [
      {
        heading: "What each tool is",
        paragraphs: [
          "Stock Rover is a web-based investment research and portfolio management platform. Its core is a screener that filters thousands of stocks and ETFs on financial metrics, a comparison table that lines stocks up side by side, and research reports that pull a company's fundamentals, income, risk and peer comparisons into one document. It also tracks portfolios, including accounts linked from a brokerage, and shows performance, sector exposure and dividend income in one place.",
          "Seeking Alpha is an investment analysis platform built on two things: articles written by independent analysts and a Quant Rating system that grades stocks and ETFs from Strong Buy to Strong Sell using metrics such as profitability and valuation. Around those it offers breaking market news, stock and ETF screeners, portfolio health checks, price alerts, and an AI research assistant called Ask Seeking Alpha. It also publishes earnings call insights and AI summary reports on the stocks you follow.",
          "The short version is that Stock Rover is a tool for working with data yourself, while Seeking Alpha is a place to read what other people think about a stock, backed by a data rating. Many investors use one of them as their main workspace and dip into the other when they need what it does best.",
        ],
      },
      {
        heading: "Screening and research compared",
        paragraphs: [
          "Screening is where the two differ most. Both offer a screener, but Stock Rover treats screening as the main event and Seeking Alpha treats it as one feature among many.",
        ],
        subsections: [
          {
            heading: "Stock Rover screening",
            paragraphs: [
              "Stock Rover covers more than 8,500 North American stocks, more than 7,000 ETFs and tens of thousands of mutual funds. Paid plans screen on 400 or more metrics, rising to more than 800 on the top tiers, with five to twenty years of financial history depending on the plan. The higher plans add equation screening, where you write a formula across metrics and across time, and ranked and historical screening. There are also more than 150 ready-made screeners, and model portfolios built on the published strategies of well known investors.",
              "The comparison table is the other half of the tool. You can put several stocks side by side across hundreds of metrics and see strengths and weaknesses at a glance. The research reports do the same job in document form, for a single stock or fund, and now cover ETFs and mutual funds as well.",
            ],
          },
          {
            heading: "Seeking Alpha research",
            paragraphs: [
              "Seeking Alpha's main strength is the volume and variety of its analysis. Independent analysts publish in-depth articles on stocks and ETFs, and the comments under those articles often add useful pushback from other readers. The Quant Rating gives each stock a single grade, and the site ranks top stocks and ETFs so you can surface new ideas without writing a screen yourself.",
              "The screener exists and works, but it is simpler than Stock Rover's. What Seeking Alpha adds instead is context: earnings call transcripts and insights, news tied to the stocks you follow, and portfolio tools that flag holdings whose ratings have changed. If your research habit is reading before deciding, that context matters more than the number of screening metrics.",
            ],
          },
        ],
      },
      {
        heading: "Portfolio tracking compared",
        paragraphs: [
          "Both tools track portfolios, and both let you link a brokerage account so holdings update on their own. The difference is in what they do with the portfolio once it is loaded.",
          "Stock Rover goes deeper on the portfolio itself. It measures performance against any benchmark, not only the S and P 500, and breaks down allocation by sector, region, market size and style. It plans rebalancing, meaning the trades that bring each holding back to its target weight, and it projects dividend income. A portfolio performance report added in 2026 packages return, income and allocation into one document.",
          "Seeking Alpha keeps portfolio tracking simpler. It shows prices, news and ratings for your holdings, sends alerts when something changes, and runs a portfolio health check. That is enough for an investor who mainly wants to keep an eye on what they own and read analysis when a holding moves. It is less useful if you manage several accounts and want detailed attribution for what drove your return.",
        ],
      },
      {
        heading: "Pricing compared",
        paragraphs: [
          "Prices change, and both sites run sales, so treat the figures here as a snapshot checked on 20 November 2026 and confirm the current price on the pricing page before you pay. Seeking Alpha was running a Black Friday sale when this article was checked, which may affect first-year prices.",
          "Stock Rover has a free plan with basic screening and portfolio tracking, and new users get a 14-day trial of the paid features. The paid plans are Premium, Premium Plus, Ultimate and Ultimate Pro. Premium is listed at $29 a month on annual billing, or $34 month to month. Premium Plus is listed at $49 a month on annual billing. Ultimate is listed at $79 a month on annual billing, and Ultimate Pro, which is aimed at advisers, at $149 a month on annual billing. Each step up adds metrics, history, screening power and portfolio limits.",
          "Seeking Alpha has a free Basic plan with market news, one free Premium article, portfolios, watchlists and price alerts. Premium is listed at $239 for the first year and gives unlimited analyst articles, Quant Ratings, screeners, top stock and ETF rankings, and the AI research assistant. PRO is listed at $1,920 for the first year and adds a weekly high-conviction portfolio, daily upgrades and downgrades driven by Quant signals, and top analyst ideas with filters for success rate and past returns.",
          "On price alone, the entry points are close: Stock Rover Premium at $348 a year on annual billing against Seeking Alpha Premium at $239 for the first year. The top ends are far apart, with Seeking Alpha PRO aimed at active professionals and Stock Rover Ultimate Pro aimed at advisers. Most individual investors will be choosing between the two Premium plans, not the top tiers.",
        ],
      },
      {
        heading: "Which one fits which investor",
        paragraphs: [
          "The right choice depends on how you actually research, not on which feature list is longer. Think about what you do first when you look at a stock.",
        ],
        subsections: [
          {
            heading: "Choose Stock Rover if you screen by the numbers",
            paragraphs: [
              "Pick Stock Rover if you build your own screens, compare stocks metric by metric, and manage a portfolio across several accounts. Value, growth, dividend and quantitative investors who want ten or twenty years of history and the ability to write their own screening formulas will get the most from it. Premium Plus is the tier most serious individual investors land on, because it adds equation screening and ten years of fundamentals without the institutional scale of Ultimate.",
            ],
          },
          {
            heading: "Choose Seeking Alpha if you read before you decide",
            paragraphs: [
              "Pick Seeking Alpha if you want to read the bull and bear case for a stock, follow analyst ideas, and check a Quant Rating before you dig deeper. It suits investors who hold a smaller number of positions and want news, earnings insight and ratings tied to what they own. The free Basic plan is a fair way to test whether the writing and the ratings earn a subscription.",
            ],
          },
          {
            heading: "Using both",
            paragraphs: [
              "Some investors pay for one and use the free tier of the other. A common split is Stock Rover for screening and portfolio work, with Seeking Alpha Basic for news and the occasional free Premium article, or Seeking Alpha Premium for reading and ratings, with Stock Rover's free plan for basic screening. There is no rule that you must pick one, and the free tiers make it cheap to try the combination before paying for either.",
            ],
          },
        ],
      },
      {
        heading: "What neither tool does",
        paragraphs: [
          "Neither Stock Rover nor Seeking Alpha is a broker, so neither one buys or sells stocks for you. You still place trades through a brokerage account, and linking that account to a research tool is for tracking only.",
          "Neither tool gives personal financial advice either. Stock Rover gives you data and scores to work with. Seeking Alpha publishes other people's opinions and a data-driven rating. Both can help you ask better questions, but the decision about your own money is yours, and for a decision with real consequences a licensed adviser is the right person to talk to.",
          "Finally, remember that ratings and screens look backwards. A Quant Rating is built on reported financials, and a screen finds stocks that matched your rules in the past. Neither one can tell you what a company will earn next year or where its price will go, so treat both tools as research aids, not answers.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is there a free version of Stock Rover?",
        a: "Yes. Stock Rover offers a free plan with basic screening and portfolio tracking, and new users get a 14-day trial of the paid features. The paid plans start at Premium, listed at $29 a month on annual billing.",
      },
      {
        q: "Is Seeking Alpha free?",
        a: "Partly. The free Basic plan includes breaking market news, one free Premium article, portfolios, watchlists and price alerts. Unlimited analyst articles, Quant Ratings and the full screener need Premium, listed at $239 for the first year.",
      },
      {
        q: "Can I use Stock Rover and Seeking Alpha together?",
        a: "Yes, many investors do. A common split is one paid plan for the main work and the other tool's free tier for what it does best, such as Stock Rover for screening and Seeking Alpha Basic for news. The free tiers make it easy to try the combination first.",
      },
      {
        q: "Do Stock Rover or Seeking Alpha buy and sell stocks?",
        a: "No. Neither is a broker. Both can link to a brokerage account to track holdings, but trades are placed through the broker itself.",
      },
      {
        q: "Which is better for dividend investors?",
        a: "It depends on how you research dividends. Stock Rover screens on dividend metrics such as yield, payout and growth history, and projects dividend income for a portfolio. Seeking Alpha has dividend-focused analyst coverage and Quant grades that include dividend safety. A dividend investor who screens will lean toward Stock Rover, and one who reads analysis will lean toward Seeking Alpha.",
      },
    ],
    sources: [
      { label: "Stock Rover: investment research and portfolio management", url: "https://www.stockrover.com/" },
      { label: "Stock Rover pricing", url: "https://www.stockrover.com/pricing" },
      { label: "Seeking Alpha subscriptions: Basic, Premium and PRO", url: "https://seekingalpha.com/subscriptions" },
      { label: "Liberated Stock Trader: Stock Rover pricing plans", url: "https://www.liberatedstocktrader.com/stock-rover-pricing-discounts/" },
    ],
    status: "published",
  },
  {
    slug: "terracycle-stock",
    title: "TerraCycle Stock: Is TerraCycle Publicly Traded?",
    excerpt:
      "TerraCycle is private, so no TerraCycle stock trades on any exchange. Shares are available directly from the company through its Regulation A offering.",
    category: "stocks",
    primaryKeyword: "TerraCycle stock",
    secondaryKeywords: ["is TerraCycle publicly traded", "TerraCycle stock symbol", "how to buy TerraCycle stock", "TerraCycle IPO"],
    publishedAt: "2026-11-20",
    updatedAt: "2026-11-20",
    readingMinutes: 9,
    image: "/images/terracycle-stock-recycling.svg",
    imageAlt:
      "Simple illustration of three recycling bins labelled collect, recycle and reuse, with a circular arrow above them",
    intro:
      "No. TerraCycle is a private company, so there is no TerraCycle stock symbol and no shares trading on the NYSE, Nasdaq or any other exchange. The one route to owning a piece of it is to buy non-voting preferred shares directly from TerraCycle US Inc. through its Regulation A offering, which works very differently from buying a listed stock.",
    takeaways: [
      "TerraCycle is private. There is no TerraCycle stock symbol, no listing and no share price on any exchange.",
      "TerraCycle US Inc. sells non-voting Class B preferred shares directly to the public through a Regulation A offering. The price was $7.02 a share after a November 2026 supplement, with a minimum investment of 146 shares.",
      "Those shares are not listed anywhere, and the company says no public market exists for them and none is expected to develop, so the money is tied up for an indefinite period.",
      "There is no TerraCycle IPO on file. The chief executive has talked about a listing one day, but no date and no filing exist.",
    ],
    sections: [
      {
        heading: "Why people search for TerraCycle stock",
        paragraphs: [
          "TerraCycle is a familiar name. Its recycling programmes run in schools and offices, its Zero Waste Boxes turn up in workplaces, and its Loop reusable packaging platform has drawn years of press coverage. A company that visible looks like a listed company, so people search for a ticker and a share price.",
          "Searchers usually want one of three things: a stock symbol, a current price, or a way to invest. The answer to the first two is no. The third has a real answer, but it is not the one most people expect.",
          "The confusion is understandable, because TerraCycle does sell shares to the public. It just does not sell them on an exchange. That distinction is the whole story.",
        ],
      },
      {
        heading: "What TerraCycle is and who owns it",
        paragraphs: [
          "TerraCycle was founded in September 2001 by Tom Szaky and Jon Beyer, then freshmen at Princeton University. It started with a fertiliser made from worm compost and sold in used soda bottles, and it grew into a recycling business built on waste that normal municipal recycling does not take. Today it runs brand-funded collection programmes, sells Zero Waste Boxes for hard-to-recycle items, and recycles what it collects into raw material that manufacturers use to make new products. Its headquarters is in Trenton, New Jersey.",
          "The ownership structure matters for anyone thinking about buying in. The global business is TerraCycle, Inc., the parent company. TerraCycle US Inc., incorporated in Delaware in August 2017, is the United States operating business and the parent's largest subsidiary. The parent owns all of its common stock, which is the only voting stock, and about 71 percent of its total equity. The remaining roughly 29 percent is held by people who bought shares in its earlier Regulation A and Regulation Crowdfunding offerings.",
          "Loop, the reusable packaging platform, is part of the same group, not a separate listed company. It launched at the World Economic Forum meeting in Davos in January 2019, with pilots in Paris and New York that May. The United States pilots did not reach commercial scale. As of late 2025 Loop operates at national scale in France, where Carrefour carries more than 370 Loop products across 345 stores, with a smaller footprint in Japan.",
        ],
      },
      {
        heading: "The one way to buy TerraCycle shares",
        paragraphs: [
          "The current route is a Regulation A offering from TerraCycle US Inc. The offering circular is dated March 30, 2026, and it offers up to about 9.8 million shares of non-voting Class B preferred stock, plus bonus shares. DealMaker Securities LLC, a registered broker-dealer, acts as broker-dealer of record. Sales began on March 31, 2026.",
          "The price and the minimum have both moved since the circular was published. The circular priced the shares at $6.74 each, with a minimum of 150 shares, or $1,011, plus a 3.5 percent transaction fee. Supplement No. 6, dated November 12, 2026, raised the price to $7.02 a share, so the minimum is now 146 shares, or $1,024.92, plus the fee. As of November 5, 2026, the company had sold about 1,364,434 shares in this offering.",
          "This is not TerraCycle's first public offering of its own shares. An earlier Regulation A round sold non-voting Class A preferred stock at $100 a share and raised $19.5 million, closing in October 2020. A Regulation Crowdfunding round then raised about $4.99 million from 1,788 investors at $6.67 a share. The two rounds show the pattern: TerraCycle raises money directly from the public, in small pieces, without listing.",
          "In practice, you subscribe through the platform run by DealMaker, agree to the subscription agreement, and your money is held in a segregated account until the company accepts your subscription. There is no minimum offering amount, the offering is conducted on a best-efforts basis, and subscriptions are accepted on a rolling basis. For most non-accredited investors, Regulation A also caps the purchase: generally no sale may be made if the total price is more than 10 percent of the greater of your annual income or net worth.",
        ],
      },
      {
        heading: "What those shares are not",
        paragraphs: [
          "The most important thing to understand is what you are not getting. These shares are not a listed stock. There is no ticker, no exchange, no daily price and no way to buy them through a brokerage app. The subscription agreement says it plainly: no public market exists for the securities, and no public market is expected to develop after the offering.",
          "They are also non-voting shares, so buyers get no vote on company decisions except where Delaware law requires one. And they are illiquid. The same agreement warns that the investment is suitable only for people who can bear the economic risk for an indefinite period and who can afford to lose their entire investment. If you need the money back on a schedule, these shares do not fit.",
          "Dividends are not something to count on either. The earlier Class A round paid a dividend of $2.61 a share in 2020, described at the time as half of after-tax income per share. That was one year, for one class of shares, and it is not a promise about the current Class B shares. The terms of the current offering govern, and they should be read in the circular itself before any money is committed.",
        ],
        subsections: [
          {
            heading: "A listed stock compared with TerraCycle's offering",
            paragraphs: [
              "A listed stock is bought through a broker, carries a ticker, has a market price that moves every trading day, and can usually be sold the same day. Voting rights are standard for common stock, and the minimum purchase is one share.",
              "TerraCycle's Class B shares are bought directly from the company, carry no ticker, and have a price set by the company, currently $7.02 a share after the November 2026 supplement. There is no market to sell into, no voting rights, and a minimum purchase of 146 shares. The two things share the word stock and little else.",
            ],
          },
        ],
      },
      {
        heading: "Is a TerraCycle IPO coming?",
        paragraphs: [
          "No. TerraCycle has not filed for an initial public offering, and it has not announced a listing date. An S-1 registration statement on SEC EDGAR would be the real signal, and there is none.",
          "The chief executive has spoken about a listing as a future ambition. In an interview in December 2021, Tom Szaky said the company had ambitions to look at an IPO at some point, and that about $150 million in revenue felt like the right time for serious consideration. At that point the whole group was doing about $75 million in revenue for the year, so a listing was still some way off even on his own measure.",
          "The numbers since then do not point to an imminent listing either. In its February 2026 crowdfunding filing, TerraCycle US Inc. reported revenue of about $43.1 million for its most recent fiscal year, with net income of about $851,000 and 162 employees. That is the United States subsidiary only, not the whole group, so it is not the figure to compare with the $150 million comment.",
          "Until a filing appears, IPO talk about TerraCycle is just talk. If you want to follow it, the place to watch is SEC EDGAR under TerraCycle US Inc., not a price page for a ticker that does not exist.",
        ],
      },
      {
        heading: "How to check any private company yourself",
        paragraphs: [
          "You do not need to take a website's word for whether a company is listed. Two free checks settle it for any United States company. First, search the name in SEC EDGAR. Companies that sell shares to the public must register and file reports there. Second, check the NYSE and Nasdaq directories of listed companies. A company in neither place, with no symbol assigned, is not traded on those exchanges.",
          "If a company does sell shares directly, as TerraCycle does, the offering circular is the document that matters. Read the risk factors and the language about public markets before anything else. The circular is the company's own description of what you are buying.",
          "Be careful with anyone offering TerraCycle stock through a broker, or promising that a listing is about to happen. There is no listed TerraCycle stock for a broker to sell. And match the legal name: the issuer is TerraCycle US Inc., a subsidiary, while the parent company is TerraCycle, Inc. Mixing the two up is an easy way to read the wrong document.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the TerraCycle stock symbol?",
        a: "There is none. TerraCycle is a private company, so no exchange has assigned it a symbol, and there is no TerraCycle ticker to look up.",
      },
      {
        q: "Can I buy TerraCycle stock on Robinhood or E*TRADE?",
        a: "No. The shares are not listed on any exchange, so no brokerage app can sell them. The only route is to buy non-voting preferred shares directly from TerraCycle US Inc. through its Regulation A offering.",
      },
      {
        q: "How much does it cost to invest in TerraCycle?",
        a: "Under the November 12, 2026 supplement, the minimum is 146 shares at $7.02 each, or $1,024.92, plus a 3.5 percent transaction fee. The price can change with later supplements, so check the current offering circular before investing.",
      },
      {
        q: "Does TerraCycle pay a dividend?",
        a: "Not as a promise. The earlier Class A round paid a dividend of $2.61 a share in 2020. Nothing in the current offering guarantees a dividend on the Class B shares, and the circular's terms govern.",
      },
      {
        q: "Will TerraCycle go public with an IPO?",
        a: "There is no filing and no date. The chief executive has said the company would consider a listing one day, once revenue is much larger, but nothing is scheduled. An S-1 filing on SEC EDGAR would be the first real sign.",
      },
    ],
    sources: [
      { label: "SEC: TerraCycle US Inc. offering circular, March 30, 2026", url: "https://www.sec.gov/Archives/edgar/data/1714781/000110465926036635/tm2533875d3_253g2.htm" },
      { label: "SEC: Supplement No. 6 to the offering circular, November 12, 2026", url: "https://www.sec.gov/Archives/edgar/data/1714781/000110465926126853/tm2629717d1_253g2.htm" },
      { label: "SEC: TerraCycle US Inc. Form C, signed February 18, 2026", url: "https://www.sec.gov/Archives/edgar/data/1714781/000207002426000001/xslC_X01/primary_doc.xml" },
      { label: "Senior Executive: TerraCycle CEO on why and when to pursue equity crowdfunding", url: "https://seniorexecutive.com/terracycle-ceo-on-why-and-when-to-pursue-equity-crowdfunding/" },
      { label: "InvestorPlace: Invest in TerraCycle Stock to Buy a Stake in the Future of Consumption", url: "https://www.nasdaq.com/articles/invest-in-terracycle-stock-to-buy-a-stake-in-the-future-of-consumption-2020-08-11" },
    ],
    status: "published",
  },
  {
    slug: "liquid-piston-stock",
    title: "LiquidPiston Stock: Is LiquidPiston Publicly Traded?",
    excerpt:
      "LiquidPiston is private, so no LiquidPiston stock trades on any exchange. Shares are sold directly through crowdfunding rounds on StartEngine.",
    category: "stocks",
    primaryKeyword: "LiquidPiston stock",
    secondaryKeywords: ["is LiquidPiston publicly traded", "LiquidPiston stock symbol", "how to buy LiquidPiston stock", "LiquidPiston IPO"],
    publishedAt: "2026-11-21",
    updatedAt: "2026-11-21",
    readingMinutes: 8,
    image: "/images/liquid-piston-stock-rotary-engine.svg",
    imageAlt:
      "Simple illustration of a triangular rotary engine rotor inside a round housing, beside a large question mark",
    intro:
      "No. LiquidPiston is a private company, so there is no LiquidPiston stock symbol and no shares trading on the NYSE, Nasdaq or any other exchange. The one route to owning a piece of it is to buy common stock directly through its Regulation Crowdfunding rounds on StartEngine. The latest round closed on October 15, 2026, priced at $13.50 a share, and it is now closed to new investors.",
    takeaways: [
      "LiquidPiston is private. There is no LiquidPiston stock symbol, no listing and no share price on any exchange.",
      "The latest Regulation Crowdfunding round closed on October 15, 2026, at $13.50 a share, and raised about $3.9 million. Total crowdfunding now exceeds $50 million from nearly 20,000 investors across seven rounds.",
      "Crowdfunding shares are common stock bought through StartEngine, not a listed stock. They are illiquid, with no public market and no expectation of one.",
      "There is no LiquidPiston IPO on file. The company funds its work with government contracts, about $65 million to date, and with crowdfunding while it licenses its engine technology.",
    ],
    sections: [
      {
        heading: "Why people search for LiquidPiston stock",
        paragraphs: [
          "LiquidPiston shows up in the news every time it opens a crowdfunding round, and each round brings a fresh wave of searches for a stock symbol and a share price. The company has raised more than $50 million from nearly 20,000 small investors, which makes it look like a public company to anyone who has not checked.",
          "Searchers usually want one of three things: a symbol, a current price, or a way to invest. The answer to the first two is no. The third has a real answer, but it is not the one most people expect.",
          "The confusion is understandable, because LiquidPiston does sell shares to the public. It just does not sell them on an exchange. That distinction is the whole story.",
        ],
      },
      {
        heading: "What LiquidPiston is and who owns it",
        paragraphs: [
          "LiquidPiston, Inc. is a Delaware company based in Bloomfield, Connecticut. It was founded in 2004 by father and son Nikolay Shkolnik and Alexander Shkolnik, a physicist and a computer scientist who set out to rethink the internal combustion engine from the thermodynamics up. Alexander Shkolnik is the chief executive, and Nikolay Shkolnik is the chief technology officer.",
          "The product is the X-Engine, a rotary engine built around a patented thermodynamic cycle the company calls the high-efficiency hybrid cycle. It has two primary moving parts, a rotor and an eccentric shaft, and the company says it can be up to three to ten times smaller and lighter than a diesel engine of the same power, and up to twice as efficient as a small turbine engine. It is also the first rotary engine that can burn heavy fuels such as diesel and jet fuel using compression ignition, which matters for military use, where those fuels are the ones on hand.",
          "LiquidPiston describes itself as a technology company, not an engine manufacturer. The plan is to license the engine design to manufacturers and to sell engineering services, while building engines in low volumes for customer pilots and demonstrators. The intellectual property sits behind that plan: the company's annual report lists 113 US and international patents granted or pending.",
          "The first customer is the US military. The company says it has secured about $65 million in US Department of War contracts to date, including a three-year, $35 million US Air Force contract awarded in September 2023 to develop a larger X-Engine and hybrid power systems. A 2025 Army SBIR CATALYST award added a one-year, $1 million base phase to develop an auxiliary power unit for a mobile command post, with the possibility of $7 million in matching funding.",
        ],
      },
      {
        heading: "The crowdfunding route to owning shares",
        paragraphs: [
          "LiquidPiston has turned to the public for capital again and again. Its first crowdfunding rounds ran on Wefunder in 2018, and it has since raised through Regulation A and Regulation Crowdfunding rounds, with a ten-for-one stock split in March 2022 along the way. The pattern is steady: small investments from many people, in exchange for common stock in a private company.",
          "The most recent round ran on StartEngine and closed on October 15, 2026. Shares were priced at $13.50 each, which put a valuation of $297.35 million on the company, and the minimum investment was $1,012.50, or 75 shares. The round had a $3.5 million goal and a $5 million ceiling, and the company's invest page showed about $3.9 million raised when it closed. More than 900 investors had joined the round by early September, when the company announced the closing date.",
          "The round before that ran in August 2024, also as a Regulation Crowdfunding offering, at $11.50 a share. It was fully subscribed within about two months, and the company later issued 251,558 common shares for gross proceeds of $2,780,171. Investors in that round did not hold the shares directly: they bought membership interests in a special purpose vehicle, LiquidPiston 2024 Reg CF SPV, LLC, which in turn held the company's common stock.",
          "The 2026 round carried an extra draw. Up to $3.5 million of the raise could be matched by up to $7 million in Army SBIR funding through the Army CATALYST program, if the company also secured $3.5 million from a non-SBIR Army transition partner. The company said the combined funding could reach $10.5 million, to be applied to an auxiliary power system for next generation command and control. That match was never guaranteed, and the company's own materials said so.",
          "Regulation Crowdfunding also puts a cap on what an ordinary investor can put in. A non-accredited investor is limited each year to a percentage of the greater of annual income or net worth, so the amount you can invest depends on your own finances, not just on the minimum the company sets.",
        ],
      },
      {
        heading: "What those shares are not",
        paragraphs: [
          "The most important thing to understand is what you are not getting. These shares are not a listed stock. There is no ticker, no exchange, no daily price and no way to buy them through a brokerage app. The offering documents say it plainly: the investment is speculative and illiquid, and it involves a high degree of risk, including the possible loss of the entire investment.",
          "They are also hard to sell. There is no public market for the shares, and none is expected to develop. Anyone who buys in should expect the money to be tied up for an indefinite period, with no set date for getting it back. That is the trade for buying into a private company at an early stage.",
          "The price is set by the company, not by a market. It moved from $11.50 a share in the 2024 round to $13.50 in the 2026 round, and it can move again in the next round. A higher price in a later round is not the same as a rising share price on an exchange, because there is no market testing the price each day.",
        ],
        subsections: [
          {
            heading: "A listed stock compared with LiquidPiston's shares",
            paragraphs: [
              "A listed stock is bought through a broker, carries a ticker, has a market price that moves every trading day, and can usually be sold the same day. The minimum purchase is one share.",
              "LiquidPiston's crowdfunding shares are bought directly through StartEngine, carry no ticker, and have a price set by the company, currently $13.50 a share from the round that closed in October 2026. There is no market to sell into, and a minimum purchase of 75 shares. The two things share the word stock and little else.",
            ],
          },
        ],
      },
      {
        heading: "Is a LiquidPiston IPO coming?",
        paragraphs: [
          "No. LiquidPiston has not filed for an initial public offering, and it has not announced a listing date. An S-1 registration statement on SEC EDGAR would be the real signal, and there is none.",
          "The company has never said it plans to list. Its filings describe a business funded by government contracts and by selling shares directly to the public, while it works toward licensing deals with manufacturers. A listing would be a change of direction, not the next step in a stated plan.",
          "Until a filing appears, IPO talk about LiquidPiston is just talk. If you want to follow it, the place to watch is SEC EDGAR under LiquidPiston, Inc., not a price page for a ticker that does not exist.",
        ],
      },
      {
        heading: "How to check any private company yourself",
        paragraphs: [
          "You do not need to take a website's word for whether a company is listed. Two free checks settle it for any United States company. First, search the name in SEC EDGAR. Companies that sell shares to the public must register and file reports there. Second, check the NYSE and Nasdaq directories of listed companies. A company in neither place, with no symbol assigned, is not traded on those exchanges.",
          "If a company does sell shares directly, as LiquidPiston does, the offering documents are the ones that matter. Read the Form C and the risk factors before anything else. The filing is the company's own description of what you are buying, including the price, the minimum, and the warning that the shares are illiquid.",
          "Be careful with anyone offering LiquidPiston stock through a broker, or promising that a listing is about to happen. There is no listed LiquidPiston stock for a broker to sell. And match the legal name: the issuer is LiquidPiston, Inc., a Delaware company based in Bloomfield, Connecticut. Mixing it up with another company of a similar name is an easy way to read the wrong document.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the LiquidPiston stock symbol?",
        a: "There is none. LiquidPiston is a private company, so no exchange has assigned it a symbol, and there is no LiquidPiston ticker to look up.",
      },
      {
        q: "Can I buy LiquidPiston stock on Robinhood or E*TRADE?",
        a: "No. The shares are not listed on any exchange, so no brokerage app can sell them. The only route has been to buy common stock directly through the company's Regulation Crowdfunding rounds on StartEngine.",
      },
      {
        q: "How much did shares cost in the latest round?",
        a: "The round that closed on October 15, 2026 priced shares at $13.50 each, with a minimum investment of $1,012.50, or 75 shares. The round raised about $3.9 million. The price can change in any future round.",
      },
      {
        q: "Is the LiquidPiston crowdfunding round still open?",
        a: "No. The latest round closed on October 15, 2026. The company's invest page now shows the raise as ended. A new round would be announced on the same page and filed on SEC EDGAR.",
      },
      {
        q: "Will LiquidPiston go public with an IPO?",
        a: "There is no filing and no date. The company has not announced a listing, and its filings describe a business funded by government contracts and direct share sales. An S-1 filing on SEC EDGAR would be the first real sign.",
      },
    ],
    sources: [
      { label: "SEC: LiquidPiston, Inc. Form 1-K, fiscal year ended September 30, 2025", url: "https://www.sec.gov/Archives/edgar/data/1446275/000168316826000460/liquidpiston_1k.htm" },
      { label: "GlobeNewswire: LiquidPiston Crowdfunding Round Closes Oct. 15, September 3, 2026", url: "https://www.globenewswire.com/news-release/2026/09/03/3356098/0/en/liquidpiston-crowdfunding-round-closes-oct-15.html" },
      { label: "LiquidPiston: invest page and 2026 offering terms", url: "https://invest.liquidpiston.com/" },
      { label: "StartEngine: LiquidPiston offering update", url: "https://www.startengine.com/offering/liquidpiston/update/3fe21ac9-a78f-492b-8cf6-82a433be50f9" },
      { label: "SEC: LiquidPiston, Inc. Form C/A, August 12, 2026", url: "https://www.sec.gov/Archives/edgar/data/1446275/000144627526000011/0001446275-26-000011-index-headers.html" },
    ],
    status: "published",
  }
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
