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
