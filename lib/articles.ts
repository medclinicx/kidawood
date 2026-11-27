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
  },
  {
    slug: "accounting-and-stock-management-software",
    title: "Accounting and Stock Management Software: What It Does and How to Choose",
    excerpt:
      "Combined accounting and stock software keeps your books and your shelves in step. Here is how it works and how to pick the right setup.",
    category: "stock-management",
    primaryKeyword: "accounting and stock management software",
    secondaryKeywords: ["accounting and inventory management software", "stock management software with accounting", "inventory accounting software for small business"],
    publishedAt: "2026-11-22",
    updatedAt: "2026-11-22",
    readingMinutes: 8,
    image: "/images/accounting-and-stock-management-software.svg",
    imageAlt:
      "Simple illustration of an open ledger book beside stacked storage boxes with a barcode label",
    intro:
      "Accounting and stock management software keeps two records in one place: the money coming in and going out, and the goods sitting on the shelves. When a sale is recorded, the stock count falls and the accounts update at the same time, so the books and the warehouse stop drifting apart. This guide explains what the combined tools do, the three common ways businesses set them up, and the questions worth asking before you pay for one.",
    takeaways: [
      "Combined software links every sale and purchase to both the accounts and the stock record, so one entry updates the books, the stock count and the cost of goods sold.",
      "The core features are real time stock levels, low stock alerts at a reorder point you set, invoicing and purchase orders, and reports that show margin and cash tied up in stock.",
      "There are three common setups: an accounting tool with built in stock tracking, a dedicated inventory tool connected to your accounts, and a full ERP system for larger operations.",
      "QuickBooks Online only tracks inventory on its Plus and Advanced plans, and Xero's tracked inventory suits finished goods sold by invoice, so check the plan and the limits before you buy.",
    ],
    sections: [
      {
        heading: "What combined accounting and stock software does",
        paragraphs: [
          "A business that sells physical goods has two records to keep, and they describe the same events from different sides. The accounting record says what was sold, what it cost and what is owed. The stock record says how many units are left, where they are and when more are needed. Kept apart, the two records drift. The books say a product is profitable while the shelf is empty, or the stockroom is full of a line that has not sold in months.",
          "Combined software joins the two records at the point where the work happens. When a sale is entered, the stock count falls, the sale is posted to the accounts, and the cost of the goods sold is recorded against the same item. When a delivery arrives, the stock count rises and the supplier bill is raised in the same step. Nothing is typed twice, which removes the most common source of error in a small business: one system updated and the other forgotten.",
          "The result is a single view of the business. A dashboard can show cash in the bank, money owed by customers, and the value of stock on hand in one place. That matters when decisions are close, such as whether to reorder a slow line or to put cash into a best seller. The software does not make the decision, but it stops the decision being made from a spreadsheet that was last updated on a Friday.",
        ],
      },
      {
        heading: "The features that matter most",
        paragraphs: [
          "Products in this area look alike on a feature list, so it helps to sort the features by what they do for you each day. The accounting side covers invoicing, expenses, bank reconciliation and tax, and it produces the profit and loss report and the balance sheet. The stock side covers quantities on hand, purchase orders, receiving, and the value of stock. The link between them is the costing: the price you paid for the goods that just sold, posted to the accounts as cost of goods sold.",
          "Low stock alerts are the feature small businesses notice first. You set a reorder point for each item, and the software flags it when the count falls to that level. Some tools go further and raise a purchase order for the supplier. Either way, the point is the same: the alert arrives before the shelf is empty, not after a customer has asked for something you do not have.",
          "Reports are where the combination pays for itself. A stock valuation report shows what your shelves are worth. A sales report shows which lines earn their space. A margin report shows the difference between what an item sells for and what it cost, after the cost of goods sold is posted. Read together, those three reports answer the question every owner asks at month end: is the money tied up in stock earning its keep.",
        ],
        subsections: [
          {
            heading: "On the accounting side",
            paragraphs: [
              "Look for invoicing that posts to the right accounts without manual journals, expense tracking that attaches receipts to purchases, and bank feeds that reconcile payments against invoices. Tax handling should match how your business actually sells, including sales tax on goods, and the reports should include a profit and loss statement and a balance sheet you can hand to your accountant.",
            ],
          },
          {
            heading: "On the stock side",
            paragraphs: [
              "Look for quantities that update with every sale, purchase and adjustment, not once a day. Barcode scanning helps at receiving and at the till, and it is worth reading our guide to barcode stock management software if scanning is part of your plan. If you handle food, medicine or anything with a use by date, batch and expiry tracking is not optional, and if you hold stock in more than one place, each location needs its own count.",
            ],
          },
        ],
      },
      {
        heading: "The three common setups",
        paragraphs: [
          "The first setup is an accounting tool with stock tracking built in. QuickBooks Online and Xero both offer this, and for a business with a modest product list it is the simplest route. There is one login, one set of records and no sync to maintain. The trade off is depth: the stock features are designed around the books, so they cover quantities, reorder points and costing, but not the warehouse work such as bin locations, pick lists and serial numbers.",
          "The second setup pairs a dedicated inventory tool with the accounting software you already use. Zoho Inventory works this way with Zoho Books, and it also connects to QuickBooks Online and Xero. The inventory tool handles the warehouse side, multiple locations, batch and serial tracking, and sales across several channels, and it sends invoices, bills and payments into the accounts. This suits a business that has outgrown the built in stock features but does not want to change its bookkeeping.",
          "The third setup is an ERP system, where accounting, stock, ordering and often payroll and customer records run in one system built for a larger operation. This is the right answer for a business with several warehouses, manufacturing steps or complex pricing, and the wrong answer for a shop with two hundred products. It costs more, takes longer to set up, and needs someone on staff who owns it.",
        ],
      },
      {
        heading: "What the main tools actually cover",
        paragraphs: [
          "The names below are the ones most small businesses meet first. What each one covers, and where it stops, is worth knowing before a trial, because the limits only show up once your own products are loaded in.",
        ],
        subsections: [
          {
            heading: "QuickBooks Online",
            paragraphs: [
              "QuickBooks Online tracks inventory only on its Plus and Advanced plans. The lower plans, Simple Start and Essentials, do not include it, so a business that sells stock and sits on one of those plans has to upgrade or track stock elsewhere. On Plus and Advanced it keeps a running quantity on hand, values stock using first in, first out costing, supports reorder point alerts, and lets you raise purchase orders and run reports on best sellers, stock on hand and cost of goods.",
              "What it does not do natively is the deeper warehouse work: no lot or batch numbers, no expiry dates, no serial numbers, no multi warehouse or bin level stock, and no bills of material for making things. Businesses that need those features usually keep QuickBooks as the accounting record and add a dedicated inventory app beside it.",
            ],
          },
          {
            heading: "Xero",
            paragraphs: [
              "Xero offers tracked inventory inside its accounting software. You set up items, record purchases as bills and sales as invoices, and Xero keeps the quantity and value of each item and works out the cost of goods sold using the weighted average cost method. It also handles purchase orders, inventory adjustments for damage or spoilage, and reports on stock value and turnover.",
              "Xero's own guidance says tracked inventory suits businesses that sell finished goods by invoice, without a point of sale or an online shop, and it cannot track raw materials or work in progress. It caps tracked items at 4,000 finished items, and it does not offer batch or expiry tracking. A retailer with a till or an online store is usually better served by a connected inventory app.",
            ],
          },
          {
            heading: "Zoho Inventory and Zoho Books",
            paragraphs: [
              "Zoho splits the job in two. Zoho Books is the accounting side, with basic item tracking, and Zoho Inventory is the stock side, with several warehouses and bin locations, sales and purchase orders, packing and shipping, and serial and batch tracking. The two share items and contacts, so an invoice raised in Inventory lands in the books without retyping.",
              "Zoho Inventory also connects to sales channels such as Shopify and Amazon, and it has a native integration with QuickBooks Online for businesses whose accounting already lives there. It is the most warehouse capable of the three options here, and the one to look at first if you hold stock in more than one place or sell through more than one channel.",
            ],
          },
        ],
      },
      {
        heading: "Costs, trials and switching",
        paragraphs: [
          "Most of these tools charge a monthly subscription, and the price rises with the number of users, locations and orders. The subscription is only part of the cost. There is the time to load your products, set reorder points and train staff, and some tools charge extra for additional users, premium support or the warehouse features you may need a year from now. Ask for the full price of the setup you will actually use, not the starting plan.",
          "A trial is worth more than a demonstration, but only if you run it with your own data. Load a real slice of your product list, including the awkward items: the ones sold in packs, the ones with variants, the ones that expire. Raise a purchase order, receive it, sell some of it, and run the stock valuation report. If the numbers do not match what you counted by hand, find out why before you commit.",
          "Switching later is possible but never free. Moving products, open orders and stock values from one system to another takes a stocktake and a careful import, and the history rarely comes across cleanly. That is why the choice deserves a week of testing rather than an afternoon of reading feature lists. The cheapest tool is the one you do not have to replace in a year.",
        ],
      },
      {
        heading: "Questions to ask before you buy",
        paragraphs: [
          "Start with your own stock, not the seller's feature list. How many products do you hold, how many move on a busy day, and how many locations are involved. Then ask whether the plan you are buying includes the stock features at all, since QuickBooks and Xero both gate them by plan, and whether batch, expiry or multi location features cost extra.",
          "Ask how your data comes out if you leave, in a standard export you can open yourself, and what happens if the internet connection drops mid shift. Ask how the tool handles the barcodes already on your products, and whether it works with the scanners or phones your staff already use. Finally, ask who on your team will own the system. Software that nobody owns ends up as a second spreadsheet, and the business is back where it started.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is accounting and stock management software?",
        a: "It is software that keeps your accounts and your stock records in one system, so a sale or a delivery updates both at once. The accounts show the money, the stock record shows the goods, and the cost of the goods sold is posted to the books automatically.",
      },
      {
        q: "Does QuickBooks track inventory on every plan?",
        a: "No. In QuickBooks Online, inventory tracking is only available on the Plus and Advanced plans. Simple Start and Essentials do not include it, so you need to upgrade or track stock in a separate tool.",
      },
      {
        q: "Does Xero track stock?",
        a: "Yes, Xero has tracked inventory for finished goods sold by invoice. It records quantities and values, works out cost of goods sold by weighted average cost, and caps tracked items at 4,000. It does not cover raw materials, work in progress, or batch and expiry tracking.",
      },
      {
        q: "Can I use separate inventory software with my accounting tool?",
        a: "Yes, and it is a common setup. Zoho Inventory connects to Zoho Books, QuickBooks Online and Xero, sending invoices, bills and payments into the accounts. Other dedicated inventory tools offer similar connections, so check that the sync covers the documents you use.",
      },
      {
        q: "How much does accounting and stock management software cost?",
        a: "Most tools charge a monthly subscription that rises with users, locations and order volume, and some charge extra for warehouse features or premium support. The setup time and staff training are part of the real cost, so ask for the full price of the setup you will actually use before you buy.",
      },
    ],
    sources: [
      { label: "Stripe: Accounting and inventory management software, a guide", url: "https://stripe.com/en-si/resources/more/accounting-and-inventory-management-software-for-small-businesses-a-quick-guide" },
      { label: "Intuit: Set up and track your inventory in QuickBooks Online", url: "https://quickbooks.intuit.com/learn-support/en-ca/help-article/inventory-management/set-track-inventory-quickbooks-online/L22FZLBGN_CA_en_CA" },
      { label: "Xero Central: Options for managing inventory in Xero", url: "https://central.xero.com/0/article/Options-for-managing-inventory-in-Xero" },
      { label: "Zoho Inventory: inventory management software", url: "https://www.zoho.com/inventory/?src=zblog-header" },
      { label: "Unleashed: Xero inventory management guide, how it works and its limitations", url: "https://www.Unleashedsoftware.com/app-marketplace/xero-inventory-management/xero-inventory-management-guide/" },
    ],
    status: "published",
  },
  {
    slug: "kepler-communications-stock",
    title: "Kepler Communications Stock: Can You Buy Shares in Kepler?",
    excerpt:
      "Kepler Communications is private, so no Kepler stock trades on any exchange. Accredited investors can buy shares on the secondary market.",
    category: "stocks",
    primaryKeyword: "Kepler Communications stock",
    secondaryKeywords: ["Kepler Communications stock symbol", "is Kepler Communications publicly traded", "how to buy Kepler Communications stock", "Kepler Communications IPO"],
    publishedAt: "2026-11-23",
    updatedAt: "2026-11-23",
    readingMinutes: 8,
    image: "/images/kepler-communications-stock-satellite.svg",
    imageAlt:
      "Simple illustration of a small satellite with two solar panels above the Earth, beside a large question mark",
    intro:
      "No. Kepler Communications is a private company, so there is no Kepler Communications stock symbol and no shares trading on the NYSE, Nasdaq or any other exchange. The one route to owning shares runs through the secondary market for private company stock, and it is open only to accredited entities and institutional investors. Everyone else can only watch, and wait for an IPO that the company has not announced.",
    takeaways: [
      "Kepler Communications is private. There is no Kepler Communications stock symbol, no listing and no share price on any exchange.",
      "The company has raised more than $200 million in equity, including a $92 million Series C in April 2023, and launched the first ten satellites of its optical relay network in January 2026.",
      "Shares change hands only on the secondary market for private stock, through venues such as Nasdaq Private Market, and buying is limited to accredited entities and institutional investors.",
      "There is no Kepler Communications IPO on file. The company has not announced a listing date, and similarly named companies such as Kepler Interactive and Kepler Computing are different businesses.",
    ],
    sections: [
      {
        heading: "Why people search for Kepler Communications stock",
        paragraphs: [
          "Kepler Communications launches satellites, signs government and defence contracts, and raises large funding rounds, so it looks like a public company to anyone who has not checked. The launch of the first ten satellites of its optical relay network in January 2026 brought a fresh wave of searches for a stock symbol and a share price.",
          "Searchers usually want one of three things: a symbol, a current price, or a way to invest. The answer to the first two is no. The third has a real answer, but only for a small group of investors.",
          "The confusion is easy to understand, because Kepler is a real operating business with real revenue and a growing satellite fleet. It also shares its name with other companies, which adds a second layer of mix-ups that we untangle later in this article.",
        ],
      },
      {
        heading: "What Kepler Communications is and who owns it",
        paragraphs: [
          "Kepler Communications Inc. is a satellite telecommunications company based in Toronto, Canada, with a presence in the United Kingdom and the United States. It was founded in 2015 by four graduate students from the University of Toronto, Wen Cheng Chong, Mark Michael, Mina Mitry and Jeffrey Osborne, who had worked together on the university aerospace team. Mina Mitry is the chief executive.",
          "The company's stated mission is to build the internet for space. Its network, called the Kepler Network, is meant to move data between satellites in orbit and down to the ground in real time, using radio links and laser links. The services built on it include Kepler Connect for space communications, Kepler Compute for processing data on board the satellites, and hosted payloads, where a customer's equipment rides on a Kepler satellite.",
          "Kepler started with small shoebox-sized CubeSats that offered store-and-forward connectivity for internet-of-things devices. Around 2020 it shifted focus to an optical relay network, with larger satellites that use lasers to pass data between spacecraft. The first generation constellation reached 21 satellites. The second generation Aether satellites weigh about 300 kilograms each, far larger than the CubeSats they replace.",
          "Ownership sits with the founders, staff and venture investors. There are no public shareholders, no annual report for the public markets, and no obligation to publish quarterly results. That is the normal shape of a venture-backed private company, and it is why so little of its financial detail is public.",
        ],
      },
      {
        heading: "The funding rounds so far",
        paragraphs: [
          "Kepler's funding history is public because the company announced each round. It raised about $5 million in a seed round at Techstars, then $16 million in a Series A in 2018, led by Costanoa Ventures. The Series B followed in June 2021: $60 million, led by Tribe Capital, with Canaan Partners, IA Ventures and Costanoa Ventures taking part. That round brought total funding to $90 million and paid for the company's expansion into the United States.",
          "The largest round came in April 2023, a $92 million Series C led by IA Ventures, with Costanoa Ventures, Canaan Partners, Tribe Capital, BDC Capital and other investors. After that round, total equity raised stood above $200 million. One of its investors, BDC Capital, says the company has raised more than $300 million to date, which points to further funding after the Series C that the company has not announced in the same detail.",
          "That money paid for a real fleet and a real factory. Kepler builds its satellites in-house at a production facility in downtown Toronto, and at the time of the Series B it said it could manufacture ten satellites a month. The January 2026 launch put the first ten Aether satellites into orbit aboard a SpaceX Falcon 9 from Vandenberg Space Force Base in California, and the company says the satellites carry optical terminals and on-board computing that can process data in space.",
        ],
      },
      {
        heading: "Can you buy Kepler Communications stock?",
        paragraphs: [
          "Not through a broker, and not through a crowdfunding page. Kepler has never sold shares directly to the public, so there is no offering page for ordinary investors, and no brokerage app can sell you the stock because there is no listed stock to sell.",
          "The route that does exist is the secondary market for private company stock. Nasdaq Private Market lists Kepler Communications and explains the terms plainly: the stock does not trade on public exchanges, and buying is limited to accredited entities and institutional investors. Employees and former employees can sell their shares through the same venue, but only with the company's approval, which Nasdaq Private Market manages on their behalf.",
          "That is a very different picture from a company such as LiquidPiston, which has sold common stock directly to the public through crowdfunding rounds. Kepler has taken the venture capital path instead, raising from funds and institutions, so its shares sit with a small number of professional holders.",
          "Be careful with anyone offering Kepler Communications stock through an ordinary broker, or promising a pre-IPO allocation before a listing is announced. There is no listed stock for a broker to sell, and private share sales to ordinary investors are restricted in the United States and Canada. If an offer sounds like a shortcut around those rules, it is worth treating as a warning sign rather than an opportunity.",
        ],
      },
      {
        heading: "Is a Kepler Communications IPO coming?",
        paragraphs: [
          "No. Kepler Communications has not filed for an initial public offering, and it has not announced a listing date. A Canadian company in its position would most likely list on the Toronto Stock Exchange or a US exchange, and a prospectus on SEDAR+ or SEC EDGAR would be the real signal. There is none.",
          "The January 2026 launch and the company's growing defence and government work feed IPO talk, but talk is not a filing. A launch is a business milestone, not a step toward a listing, and the company has said nothing about going public.",
          "Until a filing appears, the honest answer is that nobody outside the company knows if or when it will list. If you want to follow it, the places to watch are the company's own news page and the securities regulators, not a price page for a ticker that does not exist.",
        ],
      },
      {
        heading: "How to check any private company yourself",
        paragraphs: [
          "You do not need to take a website's word for whether a company is listed. Two free checks settle it for most companies. First, search the name in SEC EDGAR for US companies, or SEDAR+ for Canadian ones such as Kepler. Companies that sell shares to the public must register and file reports there. Second, check the NYSE, Nasdaq and Toronto Stock Exchange directories of listed companies. A company in none of those places, with no symbol assigned, is not traded on those exchanges.",
          "Match the legal name, because Kepler is a shared name. Kepler Communications Inc. of Toronto builds satellite networks. Kepler Interactive, founded in London in 2020, is a video game publisher. Kepler Computing, founded in California in 2018, builds computer chips. All three are private, all three are unrelated, and reading about the wrong one is an easy mistake when search results mix them together.",
          "A final caution concerns prices. Some data sites publish indicative estimates for private companies, and one put Kepler near $47 a share in late November 2026. Those figures are model-derived estimates based on private trades, not market prices, and different providers give different numbers. They tell you roughly where private holders have traded, not what a share is worth on any open market.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the Kepler Communications stock symbol?",
        a: "There is none. Kepler Communications is a private company, so no exchange has assigned it a symbol, and there is no Kepler ticker to look up.",
      },
      {
        q: "Can I buy Kepler Communications stock on Robinhood or E*TRADE?",
        a: "No. The shares are not listed on any exchange, so no brokerage app can sell them. The only route is the secondary market for private stock, which is limited to accredited entities and institutional investors.",
      },
      {
        q: "How can accredited investors buy Kepler Communications stock?",
        a: "Through a secondary market venue such as Nasdaq Private Market, which works with accredited entities and institutional investors. Employees and former employees can sell through the same venue, but only with the company's approval.",
      },
      {
        q: "How much has Kepler Communications raised?",
        a: "The company raised a $92 million Series C in April 2023, led by IA Ventures, which brought total equity raised above $200 million. One of its investors, BDC Capital, says the company has raised more than $300 million to date.",
      },
      {
        q: "Will Kepler Communications go public with an IPO?",
        a: "There is no filing and no date. The company has not announced a listing, and its announcements describe a business funded by venture capital while it builds out its satellite network. A prospectus on SEDAR+ or SEC EDGAR would be the first real sign.",
      },
    ],
    sources: [
      { label: "Nasdaq Private Market: Kepler Communications stock", url: "https://www.nasdaqprivatemarket.com/company/kepler-communications/" },
      { label: "Kepler Communications: Kepler Successfully Launches First Tranche of Optical Relay Satellites, January 11, 2026", url: "https://kepler.space/kepler-successfully-launches-first-tranche-of-optical-relay-satellites/" },
      { label: "Wikipedia: Kepler Communications", url: "https://en.wikipedia.org/wiki/Kepler_Communications" },
      { label: "SpaceQ: Kepler Communications raises US$60 million in Series B funding, June 9, 2021", url: "https://spaceq.ca/kepler-communications-raises-us60-million-in-series-b-funding/" },
      { label: "BDC: How Kepler Communications is building real-time space infrastructure", url: "https://www.bdc.ca/en/articles-tools/business-strategy-planning/innovate/kepler-communications-building-canada-space-infrastructure" },
    ],
    status: "published",
  },
  {
    slug: "pharmacy-stock-management-software",
    title: "Pharmacy Stock Management Software: What It Does and How to Choose",
    excerpt:
      "Pharmacy stock software tracks every medicine by lot and expiry date, handles controlled drugs, and keeps the records inspectors ask for.",
    category: "stock-management",
    primaryKeyword: "pharmacy stock management software",
    secondaryKeywords: ["pharmacy inventory management software", "pharmacy inventory software", "pharmacy stock control software"],
    publishedAt: "2026-11-24",
    updatedAt: "2026-11-24",
    readingMinutes: 8,
    image: "/images/pharmacy-stock-management-software.svg",
    imageAlt:
      "Simple illustration of pharmacy shelves holding medicine bottles, with a clipboard checklist and a barcode label",
    intro:
      "Pharmacy stock management software is the system a pharmacy uses to track every medicine it holds, from the moment a delivery is received to the moment a prescription is filled. It keeps a live count of each drug, follows every batch by lot number and expiry date, and holds the records that federal and state rules require for controlled substances and drug tracing. This guide explains what the software does, the features that matter, and the questions worth asking before you buy.",
    takeaways: [
      "Pharmacy stock is tracked as a live record moved by each dispensing event, with every batch followed by lot number and expiry date so the shortest dated stock is used first.",
      "The features that matter most are perpetual inventory, lot and expiry tracking, controlled substance records, and electronic ordering with the wholesaler.",
      "Federal rules shape the software: the Drug Supply Chain Security Act requires package level tracing, and the DEA requires a full controlled substance inventory at least every two years.",
      "Most pharmacy stock software is a module inside a pharmacy management system such as PioneerRx, PrimeRx, Liberty Software or QS/1, and pricing is quoted for each pharmacy rather than listed.",
    ],
    sections: [
      {
        heading: "What makes pharmacy stock different",
        paragraphs: [
          "A pharmacy's stock is not like a shop's stock. Every item is a regulated medicine, and each bottle carries a lot number, an expiry date and a record of where it came from. Selling the wrong batch, or a bottle past its date, is a patient safety problem, not just a stock error.",
          "The core idea is perpetual inventory: the count is a live record that moves with each event, not a number updated at the end of the day. When a prescription is filled, the count falls and the batch is recorded. When a delivery arrives, the count rises against the purchase order. PioneerRx, one of the systems independent pharmacies use most, works this way, with every fill, return and adjustment leaving a traceable record that staff can reconcile.",
          "In practice, pharmacy stock software usually lives inside the pharmacy management system rather than as a separate tool. The same system that holds the patient record and the prescription also holds the stock, because the dispensing event is what moves the stock. PrimeRx describes its inventory the same way, as part of a system that tracks levels in line with state and federal requirements and sends electronic orders to wholesalers.",
        ],
      },
      {
        heading: "The features that matter most",
        paragraphs: [
          "Lot and expiry tracking sits at the top of the list. Each delivery is recorded by lot number and expiry date, and the system should dispense the shortest dated stock first, a practice known as first expiry, first out. It should also warn staff well before a batch expires, so the stock can be used or returned to the wholesaler while the supplier will still take it back.",
          "Controlled substance handling is the second feature that sets pharmacy software apart. The system must keep controlled drugs in records that are separate from the rest of the stock, track each movement, and produce the counts an audit needs.",
          "Ordering is the third feature. A good system raises purchase orders from low stock levels, sends them electronically to the wholesaler, and receives the delivery against the order so quantities and costs are checked at the door. PrimeRx shows cost comparisons between wholesalers and updates actual costs from the electronic files the wholesaler sends back.",
        ],
        subsections: [
          {
            heading: "Reports that pay for themselves",
            paragraphs: [
              "Three reports do most of the work. A stock valuation report shows what the shelves are worth. A slow moving stock report shows what has not sold and is tying up cash. A shrink report compares what the system says should be on hand with what a count finds, which is how diversion and errors surface.",
            ],
          },
          {
            heading: "Multi location and special inventories",
            paragraphs: [
              "A pharmacy that runs more than one shop, or serves a long term care home, or holds 340B stock, needs the system to keep those inventories apart. PrimeRx handles this with separate inventory buckets inside one system, each with its own rules. If your pharmacy holds stock for different purposes, ask whether the system keeps those buckets genuinely separate, because mixing them is a compliance problem as well as a counting problem.",            ],
          },
        ],
      },
      {
        heading: "The compliance rules that shape the software",
        paragraphs: [
          "The Drug Supply Chain Security Act, a federal law from 2013, requires prescription drugs to be traced at the package level as they move from manufacturer to dispenser. Trading partners must exchange transaction information electronically, and each package carries a product identifier with its national drug code, serial number, lot number and expiry date. The enhanced requirements took effect in November 2023, and the FDA gave different trading partners different exemption end dates, with larger dispensers reaching theirs in November 2025.",
          "Small dispensers have more time. The FDA has exempted small dispensers, and where applicable their trading partners, from certain requirements of the Act until November 27, 2027. A dispenser counts as small if, as of November 27, 2026, the company that owns it has 25 or fewer full time employees licensed as pharmacists or qualified as pharmacy technicians. No filing is needed to use the exemption, but a pharmacy buying software now should still ask how it handles transaction data, because the exemption ends and the record keeping duties stay in place throughout.",
          "Controlled substances carry their own federal rule. Under 21 CFR 1304.11, every registrant must take a complete inventory of all controlled substances on hand when they first start dispensing them, and again at least every two years. Schedule I and II drugs need an exact count. Schedules III to V can be estimated, unless a container holds more than 1,000 dosage units. The records must be kept for two years, and records for Schedule I and II substances must be kept separately from all other pharmacy records.",
          "State boards of pharmacy add their own rules on top of the federal ones, including how often a pharmacy must count stock and what an inspection will ask to see. Software cannot know your state's rules for you, but it should make the records easy to produce: dated counts, separate controlled substance lists, and an audit trail that shows who changed what and when.",        ],
      },
      {
        heading: "The main systems pharmacies use",
        paragraphs: [
          "Most independent pharmacies in the United States run one of a small set of pharmacy management systems, and inventory is one module inside them. The four names that come up most often are PioneerRx, PrimeRx, Liberty Software and QS/1.",
          "PioneerRx is the benchmark for independent pharmacies. Its inventory is built around the dispensing event, with lot and expiry tracking tied to how stock is actually used, and a mobile app that lets staff do cycle counts, check in wholesale shipments and manage bins from a phone.",
          "PrimeRx, from Micro Merchant Systems, is the breadth play. It suits a pharmacy that is also a compounding lab, a long term care provider or a 340B contract pharmacy, because its separate inventory buckets keep those worlds apart in one system. Its inventory features include electronic ordering with wholesalers and cost comparisons between them.",
          "Liberty Software, whose system is called PharmacyOne, pairs inventory control with point of sale and prescription management, and its perpetual stock updates are driven by dispensing transactions, with lot and expiry detail carried into reconciliation records. QS/1 is the name most often linked to controlled substance accounting. None of these vendors publish prices, so every quote depends on the size of the pharmacy, the number of locations and the modules chosen.",
        ],
      },
      {
        heading: "Costs, trials and switching",
        paragraphs: [
          "Pricing is almost always quoted rather than listed, and it usually takes the form of a monthly subscription that rises with the number of users, locations and modules. The subscription is only part of the cost. There is the time to load the product list, set reorder points and train staff, and some vendors charge separately for data migration, hardware such as scanners, or premium support.",
          "A trial is worth more than a demonstration, but only if you run it with your own data. Load a real slice of your product list, including controlled drugs, short dated stock, and products sold in more than one pack size. Receive a delivery, fill some prescriptions, and run the expiry report and the stock valuation report. If the numbers do not match what you counted by hand, find out why before you commit.",
          "Switching later is possible but never free. Moving products, open orders and stock values from one system to another takes a stocktake and a careful import, and the history rarely comes across cleanly. That is why the choice deserves a week of testing rather than an afternoon of reading feature lists. If your current system is also your dispensing system, switching stock software usually means switching the whole platform, so weigh that before you start.",
        ],
      },
      {
        heading: "Questions to ask before you buy",
        paragraphs: [
          "Start with your own pharmacy, not the seller's feature list. How many products do you hold, how many move on a busy day, how many locations are involved, and how much of the stock is controlled substances. Then ask whether the system tracks lots and expiry dates on every item, whether it warns you before stock expires, and whether it dispenses the shortest dated batch first.",          "Ask how the system handles the Drug Supply Chain Security Act, including receiving and storing transaction data from your wholesaler, and whether it can produce the records an inspector would ask for. Ask how it handles the biennial controlled substance inventory, and whether Schedule I and II records are kept separately as the rule requires. Ask how your data comes out if you leave, and what happens if the internet connection drops mid shift.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is pharmacy stock management software?",
        a: "It is software that tracks every medicine a pharmacy holds, from delivery to dispensing. It keeps a live count of each drug, follows every batch by lot number and expiry date, and holds the records that federal and state rules require for controlled substances and drug tracing.",
      },
      {
        q: "Can a pharmacy use generic inventory software instead?",
        a: "It can for the counting, but generic software does not know about lot and expiry tracking by batch, controlled substance records, or the Drug Supply Chain Security Act. Most pharmacies run inventory as a module inside a pharmacy management system such as PioneerRx, PrimeRx, Liberty Software or QS/1, because the dispensing event is what moves the stock.",
      },
      {
        q: "What does the Drug Supply Chain Security Act require a pharmacy's software to do?",
        a: "The Act requires prescription drugs to be traced at the package level, with transaction information exchanged electronically between trading partners. Larger dispensers reached the end of their exemption in November 2025. Small dispensers, whose owning company had 25 or fewer full time pharmacists or pharmacy technicians as of November 27, 2026, are exempt from certain requirements until November 27, 2027, but the record keeping duties stay in place.",
      },
      {
        q: "How often must a pharmacy count its controlled substances?",
        a: "At least every two years, under 21 CFR 1304.11, with a complete inventory when the pharmacy first starts dispensing controlled substances. Schedule I and II drugs need an exact count. Schedules III to V can be estimated unless a container holds more than 1,000 dosage units. Records must be kept for two years, and Schedule I and II records must be kept separately.",
      },
      {
        q: "How much does pharmacy stock management software cost?",
        a: "Vendors do not publish prices. It is usually a monthly subscription quoted for each pharmacy, rising with users, locations and modules, plus the cost of setup, data migration and staff training. Ask for the full price of the setup you will actually use before you buy.",
      },
    ],
    sources: [
      { label: "FDA: Exemptions under the Drug Supply Chain Security Act", url: "https://www.fda.gov/drugs/drug-supply-chain-security-act-dscsa/exemptions-under-drug-supply-chain-security-act" },
      { label: "PrimeRx: Pharmacy management software", url: "https://www.primerx.io/primerx-software" },
      { label: "21 CFR 1304.11: Inventory requirements for controlled substances", url: "https://www.gpo.gov/fdsys/pkg/CFR-2011-title21-vol9/pdf/CFR-2011-title21-vol9-sec1304-11.pdf" },
      { label: "Aeroz: DSCSA deadlines and exemption end dates", url: "https://aeroz.io/dscsa-deadlines" },
    ],
    status: "published",
  },
  {
    slug: "wonder-restaurant-stock",
    title: "Wonder Restaurant Stock: Can You Buy Shares in Wonder Group?",
    excerpt:
      "Wonder Group is still private, so there is no Wonder stock to buy. It filed confidentially for an IPO in November 2026. Here is what that means.",
    category: "stocks",
    primaryKeyword: "wonder restaurant stock",
    secondaryKeywords: ["wonder group stock", "wonder stock symbol", "is wonder publicly traded", "wonder group IPO"],
    publishedAt: "2026-11-25",
    updatedAt: "2026-11-25",
    readingMinutes: 8,
    image: "/images/wonder-restaurant-stock-food-hall.svg",
    imageAlt:
      "Simple illustration of a food hall counter with dishes from several restaurants under heat lamps, beside a large question mark",
    intro:
      "Wonder Group is a private company, so there is no Wonder restaurant stock to buy and no ticker symbol to look up. The food hall and delivery business, founded in 2018 by Marc Lore, filed confidentially for an initial public offering on November 5, 2026, but it has not said how many shares it will sell, at what price, or when trading might start. Until a public filing appears, the only figures available are the private funding rounds the company has announced.",
    takeaways: [
      "Wonder Group is private. There is no Wonder stock, no ticker symbol, and no exchange where its shares trade.",
      "Wonder filed a confidential draft registration statement for an IPO on November 5, 2026, but has disclosed no share count, price range or listing date.",
      "Its July 2026 Series D raised $650 million at a $9 billion pre-money valuation, and the company has raised more than $3 billion in total since 2021.",
      "Before an IPO, the only routes to Wonder shares are the private secondary market and employee stock, both of which carry strict limits and real risks.",
    ],
    sections: [
      {
        heading: "Is there a Wonder stock?",
        paragraphs: [
          "No. Wonder Group is a private company, and its shares do not trade on any public exchange. There is no ticker symbol, no listed price, and no way to buy Wonder stock through a brokerage account today.",
          "That surprises some people, because Wonder is a large and visible business. Its food halls sit on busy streets across the Northeast, its Grubhub marketplace delivers food across the country, and its founder, Marc Lore, is well known from Diapers.com and Jet.com. Size and visibility do not make a company public, though. A company only becomes publicly traded when it completes an IPO and lists its shares, and Wonder has not done that yet.",
          "Search results can mislead here. Some finance sites show a page for Wonder with a chart or a price, and some show tickers that belong to other companies with similar names. None of those is Wonder Group stock, because no such stock exists. If a site offers you Wonder shares at a set price, treat it with care and check the company's own announcements before acting.",
        ],
      },
      {
        heading: "What Wonder Group actually is",
        paragraphs: [
          "Wonder started in 2018 as a food delivery idea built around vans that cooked meals on the way to the customer. It has since become a food technology platform with several parts. Its food halls let customers order dishes from many restaurant brands in a single order, with the food cooked in one kitchen. Its marketplace, Grubhub, delivers food from hundreds of thousands of local restaurants. It also owns meal kit company Blue Apron and media company Tastemade, and it bought Sweetgreen's kitchen robotics unit, Spyce, to automate parts of food preparation.",
          "The company said its footprint tripled from 46 locations to 140 between its May 2025 funding announcement and July 2026. It has also said it plans to open more than 100 locations in Texas by the end of 2027, and it is testing drone delivery there with Zipline.",
          "Wonder is based in New York and run by founder and chief executive Marc Lore. Lore sold Diapers.com to Amazon and Jet.com to Walmart, and he has said openly for years that he wants to take Wonder public rather than sell it.",
        ],
      },
      {
        heading: "Funding history and valuation",
        paragraphs: [
          "Wonder has raised more than $3 billion from private investors since 2021. The rounds reported so far show a valuation that has climbed steeply. In May 2025 it raised $600 million at a valuation reported as more than $7 billion, led by existing shareholders including New Enterprise Associates, Accel, Google Ventures and Forerunner, with Amex Ventures among the strategic investors.",
          "In July 2026 it raised $650 million in a Series D round at a $9 billion pre-money valuation, which puts the post-money value at $9.65 billion. Existing investors Accel, GV and New Enterprise Associates took part, and new investors included funds managed by AllianceBernstein, ARK Invest and Kayne Anderson Rudnick. Goldman Sachs, Jefferies and J.P. Morgan acted as placement agents.",
          "A private valuation is not a share price. It is the value the company and its investors agreed for one funding round, based on the terms of that round. It does not tell you what the shares would be worth on a public exchange, and the IPO price, when it comes, could be higher or lower.",
        ],
        subsections: [
          {
            heading: "The funding rounds so far",
            paragraphs: [
              "The pattern is easy to follow. A $700 million round in March 2024, when Wonder had 11 brick and mortar locations, was followed by the $600 million round in May 2025 and the $650 million Series D in July 2026. Each round funded the same plan: more food halls, growth of the Grubhub marketplace, and investment in robotics and artificial intelligence.",
              "Along the way, Wonder spent more than $1 billion on acquisitions. It bought Blue Apron for $103 million in 2023, Grubhub for $650 million in early 2025, and Sweetgreen's robotics unit for $186 million. It has also started buying individual restaurant brands, such as Blue Ribbon Fried Chicken and Mighty Quinn's BBQ, and adding them to its food halls.",
            ],
          },
        ],
      },
      {
        heading: "The IPO filing: what we know and what we do not",
        paragraphs: [
          "On November 5, 2026, Wonder announced that it had confidentially submitted a draft registration statement to the US Securities and Exchange Commission for a proposed offering of Class A common stock. A confidential filing lets a company start the IPO process without publishing its financial statements yet. The public version of the filing, called an S-1, appears later, and that is when revenue, losses and the share count become public.",
          "Wonder has not disclosed how many shares it plans to sell, the price range, the exchange it would list on, or the date trading might start. Reporting around the filing has pointed to a possible listing in 2027, but the company itself has not confirmed a date, and a confidential filing does not guarantee an IPO will happen at all. Companies sometimes withdraw or delay after filing.",
          "What the filing does tell you is intent. Wonder has spent years saying it wants to go public, it hired a chief financial officer with IPO experience, and it added former Chipotle chief financial officer Jack Hartung to its board in 2026. The confidential filing is the concrete step that follows those preparations.",
          "Until the public S-1 appears, there is no audited picture of Wonder's revenue or losses. Some reports have cited investor materials projecting revenue of just under $2 billion for 2026, but those figures are not audited disclosures, and the public filing will be the first reliable source.",
        ],
      },
      {
        heading: "Can you buy Wonder stock before the IPO?",
        paragraphs: [
          "For most people, the answer is no. Wonder shares are held by the company, its employees and its private investors. They do not trade on a public exchange, and a regular brokerage account cannot buy them.",
          "There are two routes that exist in principle. The first is the private secondary market, where existing shareholders sometimes sell shares to other private investors through specialist platforms. These sales are usually limited to accredited investors, the prices are set by private negotiation, and the company often has a right to approve or block the sale. The second is employee stock, which only applies to people who work at Wonder or used to.",
          "Both routes carry risks that do not apply to public shares. There is no public price to check, so you cannot tell easily whether the price offered is fair. The shares cannot be sold quickly if you need the money. And private company shares are a common target for scams, including websites that list a fake ticker or promise shares in a company that has not listed.",
          "For most readers, the practical step is to wait for the public filing. When Wonder publishes its S-1, it will name the ticker, the exchange and the price range, and any brokerage account will then be able to buy the shares once trading starts. Until then, checking the SEC's EDGAR database for a Wonder filing is the most reliable way to follow the story.",
        ],
      },
      {
        heading: "What to watch next",
        paragraphs: [
          "The next public milestone is the S-1 filing itself. When it appears on EDGAR, it will show Wonder's revenue, losses, cash position and share structure for the first time. Watch for the ticker symbol, the exchange, the number of shares offered and the price range.",
          "After the S-1, the usual steps are a roadshow, a priced offering and the first day of trading. The gap between a confidential filing and a listing is often a few months, but it can stretch longer if markets turn or the company needs more time.",
          "A second thing to watch is the Texas expansion. Wonder has tied much of its growth story to opening more than 100 locations there by the end of 2027, and the pace of those openings will feature in the story it tells public investors.",
          "If you want to follow the company without buying anything, the reliable sources are Wonder's own newsroom, its SEC filings on EDGAR, and established business reporting. Be wary of any site that claims to sell Wonder stock today, and check the ticker against an exchange directory before trusting it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Wonder publicly traded?",
        a: "No. Wonder Group is a private company. Its shares do not trade on any stock exchange, and it has no ticker symbol. It filed confidentially for an IPO on November 5, 2026, but has not announced a listing date.",
      },
      {
        q: "What is Wonder's stock symbol?",
        a: "It does not have one yet. A ticker symbol is assigned when a company lists on an exchange, and Wonder has not listed. Any ticker you see attached to the name Wonder belongs to a different company or is made up.",
      },
      {
        q: "When will Wonder IPO?",
        a: "No date has been announced. Wonder submitted a confidential draft registration statement on November 5, 2026, and reporting has pointed to a possible listing in 2027, but the company has not confirmed timing, a share count or a price range. A confidential filing does not guarantee an IPO will happen.",
      },
      {
        q: "How much is Wonder worth?",
        a: "Its last funding round, a $650 million Series D in July 2026, was done at a $9 billion pre-money valuation, which implies a post-money value of about $9.65 billion. That is a private funding valuation, not a public market value, and the IPO price could differ.",
      },
      {
        q: "Can I buy Wonder stock before the IPO?",
        a: "Not through a regular brokerage account. The only routes are the private secondary market, which is generally limited to accredited investors and subject to company approval, and employee stock, which only applies to Wonder staff. For most people, the practical step is to wait for the public S-1 filing and the listing that follows.",
      },
    ],
    sources: [
      { label: "TechCrunch: Food delivery startup Wonder files for IPO as it explores its next big bite", url: "https://techcrunch.com/2026/11/05/food-delivery-startup-wonder-files-for-ipo-as-it-explores-its-next-big-bite/" },
      { label: "Wonder via PR Newswire: Wonder Announces $650 Million Series D Round at a $9 Billion Pre-Money Valuation", url: "https://www.prnewswire.com/news-releases/wonder-announces-650-million-series-d-round-at-a-9-billion-pre-money-valuation-302827208.html" },
      { label: "Restaurant Dive: Wonder raises $600M, will nearly double unit count in 2025", url: "https://www.restaurantdive.com/news/wonder-raises-600-million-7-billion-valuation/747284/" },
      { label: "QSR Magazine: Wonder Raises $650 Million at $9 Billion Valuation", url: "https://www.qsrmagazine.com/story/wonder-raises-650-million-at-9-billion-valuation/" },
    ],
    status: "published",
  },
  {
    slug: "grocery-stock-management-software",
    title: "Grocery Stock Management Software: What It Does and How to Choose",
    excerpt:
      "Grocery stock software tracks perishable goods by lot and expiry date, rotates stock shortest dated first, and keeps the records a recall needs.",
    category: "stock-management",
    primaryKeyword: "grocery stock management software",
    secondaryKeywords: ["grocery inventory management software", "grocery store inventory software", "supermarket inventory software"],
    publishedAt: "2026-11-26",
    updatedAt: "2026-11-26",
    readingMinutes: 10,
    image: "/images/grocery-stock-management-software.svg",
    imageAlt:
      "Simple illustration of grocery shelves holding fruit and packaged goods, with a checklist and a barcode label",
    intro:
      "Grocery stock management software is the system a grocery store uses to track everything it holds, from canned goods with a two year shelf life to milk that must sell within days. It keeps a live count of each product, follows perishable stock by lot and expiry date, and raises orders when stock runs low.",
    takeaways: [
      "Grocery stock is tracked by lot and expiry date, not just by quantity, because so much of it is perishable and the shortest dated stock has to sell first.",
      "The features that matter most are lot and expiry tracking, first-expired first-out rotation, expiry alerts, and purchase orders tied to real sales.",
      "The FDA food traceability rule requires lot level records for high risk foods such as leafy greens, shell eggs and soft cheeses, with enforcement held off until July 20, 2028.",
      "Most grocery stock software is part of a point of sale system such as Lightspeed, or a grocery specific platform such as ECRS CATAPULT, and pricing is quoted for each store rather than listed.",
    ],
    sections: [
      {
        heading: "What makes grocery stock different",
        paragraphs: [
          "A grocery store holds thousands of products with very different shelf lives on the same shelves. A can of soup may sit for two years, a carton of milk has days, and fresh produce can turn in less than a week. A stock count that ignores expiry dates is not enough here, because the question is not only how many units are on hand, but how long each one can still be sold.",
          "The core idea is perpetual inventory: the count is a live record that moves with each event, not a number updated at the end of the day. When a customer buys a product at the till, the count falls. When a delivery arrives at the back door, the count rises against the purchase order. Barcode scanning at both points keeps the record honest, so a discrepancy can be traced rather than guessed at.",
          "Grocery stock also includes goods sold by weight. Produce, meat and deli items are priced by the pound, and the weight received is rarely the weight ordered, so a system built for groceries records the actual weight of each delivery. Shrink, the gap between what the system says should be on hand and what a count finds, comes from spoilage, damaged packaging, theft and scanning errors at the till. A good system reports where the losses happen, so the owner can see whether the problem is a cold case that runs warm, a product ordered in too large a quantity, or a till where items are regularly missed.",
        ],
      },
      {
        heading: "The features that matter most",
        paragraphs: [
          "Lot and expiry tracking sits at the top of the list. Each delivery is recorded by lot number and expiry date, and the system should warn staff well before a batch expires, so the stock can be moved to the front, marked down or returned to the supplier while there is still time. Some systems suggest markdowns from the sales rate and the days left, which beats a manager walking the aisles with a pricing gun and a guess.",
          "Ordering is the second feature. A good system raises purchase orders from low stock levels, sends them to the supplier, and receives the delivery against the order so quantities and prices are checked at the door. Lightspeed, one of the systems grocery stores use most, works this way, with real time stock tracking, reorder points and built in purchase orders.",
          "The third feature is the link between the shop floor and the online store. Many grocery stores now sell online for pickup or delivery, and those orders draw from the same stock as the shelves. If the online store shows its own count, it will sell items that are already gone. The stock record has to be one record, shared by the tills, the website and the stockroom.",
        ],
        subsections: [
          {
            heading: "First-expired first-out, not first-in first-out",
            paragraphs: [
              "Most inventory software rotates stock first in, first out, which means the oldest delivery sells first. That is not enough for perishable goods. A delivery received last week can expire sooner than one received two weeks ago, because shelf life depends on the production date, not the delivery date. First-expired first-out, known as FEFO, picks the batch with the nearest expiry date first, whatever order the batches arrived in.",
              "FEFO is what keeps short dated stock from becoming a write off. It only works if the system knows the expiry date of every batch, which is why lot level expiry tracking and FEFO belong together. When you compare systems, ask for a demonstration with two batches of the same product that arrived on different days with different expiry dates, and watch which one the system picks first.",
            ],
          },
        ],
      },
      {
        heading: "Traceability and the food safety rule",
        paragraphs: [
          "The FDA food traceability rule, issued under section 204 of the Food Safety Modernization Act, requires businesses that manufacture, process, pack or hold foods on the Food Traceability List to keep lot level records at defined points in the supply chain, known as Critical Tracking Events. The list covers high risk foods such as soft cheeses, shell eggs, nut butters, leafy greens and tomatoes.",
          "For each event, the business must record key data elements that link the lot code, the product, the quantity, the locations and the dates, and it must be able to hand the FDA an electronic sortable spreadsheet of those records within 24 hours of a request. Records must be kept for two years. The rule was published in November 2022 with an original compliance date of January 20, 2026. The FDA has since proposed moving that date by 30 months to July 20, 2028, and Congress has barred the agency from using appropriated funds to enforce the rule before that same date. The requirements have not changed, so the extra time is for building the record keeping, not for ignoring it.",
          "A grocery store that only sells food at retail is largely outside the rule, because retail food establishments are exempt from most of its requirements. But a store that packs produce, runs a deli that transforms listed foods, or operates a warehouse that ships to other stores can fall inside it, and the distribution centres that supply grocery stores are covered. Even where the rule does not apply, lot traceability is what makes a recall manageable: a store that can find every affected lot by code can pull it in an hour, while a store that cannot may have to pull the whole product line.",
        ],
      },
      {
        heading: "The main systems grocery stores use",
        paragraphs: [
          "Most grocery stock software arrives as part of a point of sale system rather than as a separate tool, because the sale at the till is what moves the stock. Lightspeed Retail is the name that comes up most often for independent and mid sized grocery stores. It pairs the till with real time inventory tracking, reorder points, purchase orders, barcode scanning and multi location stock views, and it handles online ordering for pickup and delivery from the same stock record. Its grocery page also notes age verification for alcohol sales and bottle fee charges. One trade off to check in a trial is that weighted goods need careful item setup, and lot and expiry tracking is less deep than in a system built for perishables.",
          "ECRS CATAPULT is the grocery specific option. Built for supermarkets rather than general retail, its expiry handling shapes receiving and stockroom work, so short dated stock is flagged when it arrives rather than discovered later on the shelf.",
          "Beyond the till, there are inventory platforms built for food businesses and distributors. DOSS, Cin7 Core, Fishbowl, NetSuite and Aptean all offer lot tracking with expiry date fields and FEFO picking, and they suit a grocery business that also runs a warehouse, a central kitchen, or several stores supplied from one depot. Fishbowl fits a small business on QuickBooks that wants basic lot tracking without moving to a full ERP system. NetSuite and Aptean are the deeper end, covering catch weight and full traceability, but they take longer to set up and usually need an implementation partner. None of these vendors publish prices, so every quote depends on the size of the store, the number of locations and the modules chosen.",
        ],
      },
      {
        heading: "Costs, trials and switching",
        paragraphs: [
          "Pricing is almost always quoted rather than listed, usually as a monthly subscription that rises with registers, locations and users. The subscription is only part of the cost. There is the time to load the product list, set reorder points and train staff, plus hardware such as scanners, scales and label printers, and data migration if you are moving from another system.",
          "A trial is worth more than a demonstration, but only if you run it with your own data. Load a real slice of your product list, including weighted items and short dated stock. Receive a delivery, sell through the till, run the expiry report, and count one aisle by hand. If the numbers do not match what you counted, find out why before you commit.",
          "Switching later is possible but never free. Moving products, open orders and stock values from one system to another takes a stocktake and a careful import, and the history rarely comes across cleanly. That is why the choice deserves a week of testing rather than an afternoon of reading feature lists. If your current system is also your till system, switching stock software usually means switching the whole platform, so weigh that before you start.",
        ],
      },
      {
        heading: "Questions to ask before you buy",
        paragraphs: [
          "Start with your own store, not the seller's feature list: how many products you hold, how many move on a busy day, how many locations are involved, and how much of the range is perishable. Then ask whether the system tracks lots and expiry dates on every item, whether it rotates stock first-expired first-out, and whether it warns you before stock expires and suggests a markdown while the stock can still be sold.",
          "Ask how the system handles weighted goods, from receiving to the till, and whether online orders for pickup and delivery draw from the same stock record as the shelves. Ask how it handles the FDA traceability rule for the listed foods you carry, and whether it can produce the lot records and the sortable spreadsheet the rule calls for. Ask how your data comes out if you leave, and what happens at the till if the internet connection drops mid shift.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is grocery stock management software?",
        a: "It is software that tracks everything a grocery store holds, from delivery to sale. It keeps a live count of each product, follows perishable stock by lot number and expiry date, raises purchase orders when stock runs low, and produces the reports that show stock value, slow movers and waste.",
      },
      {
        q: "What is FEFO and why does it matter for groceries?",
        a: "FEFO stands for first-expired first-out. It means the batch with the nearest expiry date sells first, whatever order the batches arrived in. It matters because shelf life depends on the production date, not the delivery date, so a first-in first-out system can leave short dated stock on the shelf until it has to be thrown away.",
      },
      {
        q: "Does the FDA food traceability rule apply to grocery stores?",
        a: "Mostly it applies to the supply chain behind the store, not the shop floor. Retail food establishments are exempt from most of its requirements, but a store that packs produce, runs a deli that transforms listed foods, or operates a warehouse can be covered. The compliance date has been proposed to move to July 20, 2028, and Congress has barred enforcement before that date, but the record keeping requirements have not changed.",
      },
      {
        q: "Can a small grocery store use generic inventory software instead?",
        a: "It can for the counting, but generic software does not know about lot and expiry tracking, FEFO rotation, weighted goods, or food traceability records. Most grocery stores run inventory as part of a point of sale system such as Lightspeed, or a grocery specific platform such as ECRS CATAPULT, because the sale at the till is what moves the stock.",
      },
      {
        q: "How much does grocery stock management software cost?",
        a: "Vendors do not publish prices. It is usually a monthly subscription quoted for each store, rising with registers, locations and users, plus setup, data migration, hardware such as scanners and scales, and staff training. Ask for the full price of the setup you will actually use before you buy.",
      },
    ],
    sources: [
      { label: "FDA: FSMA Final Rule on Requirements for Additional Traceability Records for Certain Foods", url: "https://www.fda.gov/food/food-safety-modernization-act-fsma/fsma-final-rule-requirements-additional-traceability-records-certain-foods" },
      { label: "Lightspeed: Grocery store POS and inventory management", url: "https://www.lightspeedhq.com/pos/retail/grocery-store-pos/" },
      { label: "DOSS: Best Food Inventory Management Software for Perishable Goods (2026)", url: "https://www.doss.com/resources/trends/best-food-inventory-management-software-for-perishable-goods-tracking" },
      { label: "OFW Law: FSMA 204 Delay and the Traceability Duties That Remain", url: "https://ofwlaw.com/fsma-204-food-traceability-rule/" },
    ],
    status: "published",
  },
  {
    slug: "how-to-buy-rad-intel-stock",
    title: "How to Buy RAD Intel Stock: Private Shares, the RADI Ticker and the CrowdSAFE Route",
    excerpt:
      "RAD Intel is still a private company, so you cannot buy its stock on an exchange. The only route open now is its Regulation CF CrowdSAFE offering.",
    category: "stocks",
    primaryKeyword: "how to buy rad intel stock",
    secondaryKeywords: ["rad intel stock", "RAD Intel stock price", "RADI stock ticker", "RAD Intel IPO"],
    publishedAt: "2026-11-27",
    updatedAt: "2026-11-27",
    readingMinutes: 8,
    image: "/images/how-to-buy-rad-intel-stock.svg",
    imageAlt:
      "Simple illustration of a laptop showing a rising chart line beside a large question mark",
    intro:
      "RAD Intel is still a private company, so there is no RAD Intel stock trading on the Nasdaq or the New York Stock Exchange. The company has reserved the ticker RADI, but that reservation is not a listing, and no IPO date has been announced. The only way to invest today is through the company's own Regulation CF offering, which sells a CrowdSAFE rather than shares.",
    takeaways: [
      "RAD Intel is private. You cannot buy its stock through a brokerage account, and the reserved RADI ticker is not a listing.",
      "The current route is a Regulation CF CrowdSAFE on the company's investor portal, with a $1,000 minimum and a $300 million valuation cap.",
      "A CrowdSAFE is not stock today. It converts into shares only if a triggering event happens, such as a priced funding round, an acquisition or an IPO.",
      "CrowdSAFE investments are illiquid, carry no maturity date and can lose everything, so read the Form C on SEC EDGAR before putting money in.",
    ],
    sections: [
      {
        heading: "Can you buy RAD Intel stock on the stock market?",
        paragraphs: [
          "You cannot buy RAD Intel stock on the stock market today. RAD Intel is the trading name of Rad Technologies Inc., a private company founded in 2018, and its shares do not trade on the Nasdaq, the New York Stock Exchange, or any other exchange. A search for RAD Intel in a brokerage app will return nothing to buy.",
          "The confusion comes from the ticker. RAD Intel has reserved RADI as its proposed Nasdaq symbol, and that reservation is widely quoted online as if a listing were already in place. The company itself is clear on this point: reserving a ticker is an administrative step only. It is not an application for listing, not an approval, and not a sign that the shares will trade on Nasdaq. No IPO date has been announced.",
          "That leaves two things to watch for. First, any website or social media post that shows a live price for RADI is showing something else, or nothing at all, because there is no public market to price the shares. Second, anyone offering to sell you RAD Intel shares outside the company's own offering should be treated with care. The only documented route in is the crowdfunding offering described below.",
        ],
      },
      {
        heading: "What RAD Intel does",
        paragraphs: [
          "RAD Intel sells AI marketing intelligence. Its platform studies content, creators and placements across brands and social channels, and tries to predict which combinations will perform before the money is spent. The name RAD stands for Remove All Doubt, which sums up the pitch: brands spend heavily on creators and media without knowing in advance what will land.",
          "The customer list is the strongest part of the story. The company says it works with more than 50 enterprise clients, signed more than 200 sales contracts in 2026 so far, and holds preferred partner status across Omnicom agencies in 2026 after scaling from a pilot that began in October 2023. Its investor page also names recurring seven figure contracts with Fortune 1000 brands across gaming, entertainment, fashion and healthcare.",
          "In February 2026 the company formalised a holding company structure. Two standalone operating businesses, RAD Amplify for managed marketing services and Lickly for mid market software, sit under the parent, and the parent holds the intellectual property, the data and the platform behind them. The strategy, which the company calls AIBO, is to buy founder led marketing companies and run them on that shared AI layer. The first such deal was a majority acquisition of AV Communications, a multicultural marketing agency, completed in June 2026.",
        ],
      },
      {
        heading: "The route open today: a Regulation CF CrowdSAFE",
        paragraphs: [
          "The route open today runs through the company's own investor portal at invest.radintel.ai, using DealMaker Securities LLC as the intermediary. It is a Regulation CF offering, which is the SEC rule that lets a private company raise money from the general public through a registered intermediary, with the offering statement filed on Form C.",
          "This round does not sell shares. It sells a CrowdSAFE, a simple agreement for future equity, and the difference matters enough to have its own section below. The minimum investment is $1,000, plus a 2 percent processing fee capped at $200, so the smallest commitment costs $1,020 in total. The CrowdSAFE carries a $300 million post money valuation cap, and the company adds a bonus to the SAFE principal that can reach 50 percent, including an 18 percent time bonus for investments funded by December 10, 2026. The offering deadline in the Form C is April 30, 2027.",
          "The filing history shows the round is already moving. The Form C was filed on October 9, 2026 and amended on October 28, and a progress update filed on November 17 said the offering had reached its target amount on November 5, having accepted $283,254. That is a small sum next to the maximum of about $3.95 million, so the round stays open until the deadline or until the company closes it.",
          "The practical steps are simple. Read the Form C on SEC EDGAR before anything else, starting with the risk factors and the CrowdSAFE terms. Check that DealMaker Securities LLC is the intermediary named in the filing, and confirm the firm on FINRA BrokerCheck. Then invest only through the link on the company's own investor portal, never through a third party who contacts you first.",
        ],
      },
      {
        heading: "What a CrowdSAFE is, and what it is not",
        paragraphs: [
          "A CrowdSAFE is a contract, not a share. You pay money now, and the agreement is designed to convert into equity later, when a triggering event happens. The usual triggers are a priced financing round, an acquisition, or an IPO. The price you convert at is set by the valuation cap, which in this round is $300 million, and any bonus is added to your principal before conversion.",
          "What it does not give you is a timetable. A CrowdSAFE has no maturity date, and the company is under no duty to repay you by any particular date. If no triggering event ever happens, the agreement may never convert, and you could lose some or all of your money. Even if it does convert, the shares you receive are private shares with transfer restrictions, so conversion does not create something you can sell.",
          "The last round was different, which is worth knowing if you compare prices online. In July 2026 the company ran a Regulation CF offering of actual Class B common stock at $1.05 per share, with a minimum of $999.60. That round closed having raised $1,048,901.42. The company says its offering price rose from $0.50 to $1.05 over the two years to 2026, and that more than 30,000 investors have put in more than $88 million across its rounds. Those figures come from the company itself, and the valuation is set by the company, so treat them as its own account rather than a market price.",
        ],
      },
      {
        heading: "Checks to run before you invest",
        paragraphs: [
          "Start with the filing, not the marketing page. The Form C for the current round is on SEC EDGAR under Rad Technologies Inc., CIK 1810055, and it carries the risk factors, the use of funds, and the full CrowdSAFE terms. The company's most recent annual report on Form C-AR showed revenue of $1.2 million and a net loss of $8.6 million, which is normal for a company at this stage but worth knowing before you invest.",
          "Check the intermediary and the channel. The offering runs through DealMaker Securities LLC, and the payment route should start at invest.radintel.ai. If someone offers you RAD Intel shares by message, email, or a different website, stop and compare what they are offering against the Form C. Secondary marketplaces for private shares do exist, and shares in private companies sometimes change hands there, but there is no verified listing for RAD Intel shares on any such platform, so do not assume one is genuine.",
          "Finally, weigh the wait. Crowdfunding investments in private companies are long term by nature. There may be years between your investment and any event that creates a return, and there may never be one. If that wait, and the chance of losing the money, does not fit what you can afford, the right move is to leave it alone and watch the company's filings instead. Nothing here is financial advice, and a licensed adviser can help you judge whether a private offering fits your position.",
        ],
        subsections: [
          {
            heading: "A short checklist before you invest",
            paragraphs: [
              "Read the Form C risk factors and the CrowdSAFE terms in full. Confirm DealMaker Securities LLC is the intermediary named in the filing and check the firm on FINRA BrokerCheck. Make sure you understand the $300 million valuation cap, the bonus terms, and the fact that the agreement has no maturity date. Confirm the investment is money you can afford to lose, and keep a copy of every document you sign.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is RAD Intel publicly traded?",
        a: "No. RAD Intel is a private company, and its shares do not trade on any exchange. It has reserved the Nasdaq ticker RADI, but the company says that is an administrative step only, not a listing, and no IPO date has been announced.",
      },
      {
        q: "What is the RAD Intel stock price?",
        a: "There is no public stock price because there is no public market. The last round that sold actual shares, a Regulation CF offering in July 2026, priced Class B common stock at $1.05 per share. The current round sells a CrowdSAFE with a $300 million valuation cap, which is not a share price.",
      },
      {
        q: "What is the minimum investment in RAD Intel?",
        a: "The current Regulation CF CrowdSAFE has a $1,000 minimum, plus a 2 percent processing fee capped at $200, so the smallest commitment costs $1,020 in total. The offering runs through DealMaker Securities LLC on the company's investor portal at invest.radintel.ai.",
      },
      {
        q: "What happens to a CrowdSAFE if RAD Intel never goes public?",
        a: "A CrowdSAFE can also convert on a priced financing round or an acquisition, not only on an IPO. But if no triggering event ever happens, it may never convert. CrowdSAFEs have no maturity date and no guaranteed return, so an investor could lose some or all of the money.",
      },
      {
        q: "Can I sell my RAD Intel investment later?",
        a: "Not easily. CrowdSAFEs and the private shares they convert into carry transfer restrictions and there is no public market for them. Secondary marketplaces sometimes list shares in private companies, but there is no verified listing for RAD Intel shares on any such platform, so expect to hold for years, if a sale is possible at all.",
      },
    ],
    sources: [
      { label: "RAD Intel: Invest in RAD Intel, Regulation CF CrowdSAFE", url: "https://invest.radintel.ai/" },
      { label: "SEC EDGAR: Rad Technologies Inc. Form C offering statement, July 2026", url: "https://www.sec.gov/Archives/edgar/data/1810055/000149315226037428/formca.htm" },
      { label: "SEC EDGAR: Rad Technologies Inc. filings, CIK 1810055", url: "https://www.sec.gov/edgar/browse/?CIK=1810055" },
      { label: "PitchBook: RAD Intel company profile", url: "https://pitchbook.com/profiles/company/433131-40" },
      { label: "Wefunder: RAD Intel updates, team and funding progress", url: "https://wefunder.com/rad/details" },
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
