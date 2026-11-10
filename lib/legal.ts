export interface LegalPageContent {
  slug: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

const UPDATED = "November 10, 2026";

export const LEGAL_PAGES: LegalPageContent[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "What information Kidawood collects from readers, why, and the choices readers have.",
    updated: UPDATED,
    intro:
      "This policy explains what information Kidawood collects when you read this website, what it is used for, and who it is shared with. It covers the website only.",
    sections: [
      {
        heading: "Information collected automatically",
        paragraphs: [
          "Like most websites, Kidawood's hosting and analytics tools record basic technical information when a page is loaded. This can include the page visited, the time of the visit, the type of browser and device, an approximate location taken from the IP address, and the site that referred you. This information is used in grouped form to understand which articles are read and whether the site works properly.",
          "We do not ask readers to create accounts, and the site does not collect names, payment details or financial information from readers.",
        ],
      },
      {
        heading: "Information you send us",
        paragraphs: [
          "If you contact the editorial team, we receive whatever you include in your message, such as your name, your email address and the contents of the message. It is used to answer you and, for corrections, to check and fix the article concerned. Please do not send account numbers, passwords or personal financial details, because we do not need them and cannot act on them.",
        ],
      },
      {
        heading: "How information is shared",
        paragraphs: [
          "Technical visit information is processed by the companies that provide our hosting and analytics. We do not sell reader information. Information may be disclosed where the law requires it, or to protect the site against abuse.",
        ],
      },
      {
        heading: "Your choices",
        paragraphs: [
          "You can limit cookies through your browser settings, as described in the cookie policy. If you have sent us a message and want it deleted, say so through the contact page and we will remove it, subject to anything we must keep for legal reasons.",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions",
    description: "The terms that apply when you use the Kidawood website and read its articles.",
    updated: UPDATED,
    intro:
      "By using kidawood.com you accept these terms. If you do not agree with them, please do not use the site.",
    sections: [
      {
        heading: "What the site provides",
        paragraphs: [
          "Kidawood provides general information articles about the stock market, investing topics and stock management software. Content is published for information and education. It is not financial, investment, tax or legal advice, and it is not an offer or a recommendation to buy or sell any security or product.",
        ],
      },
      {
        heading: "Accuracy and changes",
        paragraphs: [
          "We work to keep articles accurate and current, and each article shows the date it was published and last updated. Markets, company positions, software products and rules change, though, and we cannot guarantee that any article is complete or current on the day you read it. Check important facts against the primary sources listed in the article before acting on them.",
        ],
      },
      {
        heading: "Acceptable use",
        paragraphs: [
          "You may read, share and link to articles for personal or business reference. You may not copy the site's content in bulk, present it as your own work, use automated tools to overload the site, or use the site for unlawful purposes. Short quotations with a link back to the article are welcome.",
        ],
      },
      {
        heading: "External links and liability",
        paragraphs: [
          "Articles link to outside websites, such as regulators and standards bodies. We do not control those sites and are not responsible for their content. To the extent the law allows, Kidawood is not liable for losses arising from decisions made in reliance on articles on this site. Nothing in these terms limits liability that cannot be limited by law.",
        ],
      },
    ],
  },
  {
    slug: "disclaimer",
    title: "Disclaimer",
    description: "The general disclaimer for information published on Kidawood.",
    updated: UPDATED,
    intro:
      "Everything published on Kidawood is general information. This page explains what that means and what it does not mean.",
    sections: [
      {
        heading: "Information only",
        paragraphs: [
          "Articles explain topics in general terms: how a market practice works, whether a company is publicly traded, or what a type of software does. They are written for a general reader in the United States and are not tailored to any person's circumstances, finances or business.",
        ],
      },
      {
        heading: "Not professional advice",
        paragraphs: [
          "Kidawood is not a registered investment adviser, broker-dealer, law firm, accounting firm or financial institution. Reading an article does not create an adviser and client relationship. For advice about your own money, taxes, legal position or business systems, consult a licensed professional in your state.",
        ],
      },
      {
        heading: "No guarantees",
        paragraphs: [
          "Nothing on this site promises a return, an outcome or a saving. Past market behaviour described in an article is not a guide to future results, and software descriptions are not a promise that a product will suit a particular business.",
        ],
      },
    ],
  },
  {
    slug: "financial-disclaimer",
    title: "Financial Disclaimer",
    description:
      "Kidawood does not provide financial advice. This page explains the limits of its investing and stock market content.",
    updated: UPDATED,
    intro:
      "Kidawood publishes educational information about investing and the stock market. This disclaimer applies to every article in the stocks, investing and finance sections.",
    sections: [
      {
        heading: "Not financial advice",
        paragraphs: [
          "No article on this site is a recommendation to buy, sell, hold or short any stock or other security, and no article takes your income, debts, goals or risk tolerance into account. A licensed financial adviser who knows your position can advise you. A website article cannot.",
        ],
      },
      {
        heading: "Investing involves risk",
        paragraphs: [
          "The value of investments can fall as well as rise, and you may get back less than you put in. Some strategies described on this site carry higher risk. Short selling can produce losses larger than the amount of money committed at the start, because a share price can rise without a fixed limit. Margin borrowing adds interest costs and the risk of positions being closed by the broker. Options and pre-IPO investments carry their own significant risks. Read the risk sections in each guide, and the official investor education material the guides link to, before considering any of these strategies.",
        ],
      },
      {
        heading: "Accuracy of market information",
        paragraphs: [
          "Company and market facts are taken from public sources such as SEC filings and regulator publications, and articles show when they were last updated. Listings, symbols and company status can change. Confirm any fact that a decision depends on against the primary source.",
        ],
      },
      {
        heading: "No endorsement",
        paragraphs: [
          "Naming a company, broker, platform or product in an article explains how something works. It is not an endorsement, and Kidawood does not receive payment for naming them unless an article says so under the affiliate disclosure.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    description: "How Kidawood uses cookies and similar technologies, and how to control them.",
    updated: UPDATED,
    intro:
      "Cookies are small files stored by your browser when you visit a website. This page explains how Kidawood uses them.",
    sections: [
      {
        heading: "Cookies we use",
        paragraphs: [
          "Kidawood uses a small number of cookies and similar technologies for two purposes. The first is running the site itself, such as remembering display preferences where the site offers them. The second is measuring readership in grouped form, so we can see which articles are read and whether pages load correctly.",
          "If advertising is added to the site later, this policy and the advertising disclosure will be updated before those cookies are set.",
        ],
      },
      {
        heading: "Controlling cookies",
        paragraphs: [
          "You can block or delete cookies in your browser settings, and most browsers let you block cookies from individual sites. The site will still work for reading if you block cookies, although measurement of your visit will not take place.",
        ],
      },
      {
        heading: "Third party tools",
        paragraphs: [
          "Hosting and analytics providers may set their own cookies as part of providing their service. Their use of information is covered by their own privacy policies, and the privacy policy on this site describes the categories of information involved.",
        ],
      },
    ],
  },
  {
    slug: "affiliate-disclosure",
    title: "Affiliate Disclosure",
    description: "How Kidawood handles affiliate relationships and commissions on linked products and services.",
    updated: UPDATED,
    intro:
      "This disclosure is made in line with the US Federal Trade Commission's guidance on endorsements and paid relationships.",
    sections: [
      {
        heading: "How affiliate links work",
        paragraphs: [
          "Some links on Kidawood may be affiliate links. If you follow one and later buy a product or sign up for a service, the seller may pay Kidawood a commission. That payment does not change the price you pay.",
        ],
      },
      {
        heading: "What it does and does not affect",
        paragraphs: [
          "Affiliate relationships do not decide which topics are covered, and they do not buy a favourable description. Articles describe what a type of product does and the questions worth asking before buying. Where a specific article contains an affiliate link, that fact applies site wide under this disclosure, and the team aims to identify commercial links near the link itself as the site develops.",
          "As of the date on this page, most articles contain no affiliate links. Links to regulators, exchanges and standards bodies, such as the SEC and GS1, are not affiliate links and earn nothing.",
        ],
      },
    ],
  },
  {
    slug: "advertising-disclosure",
    title: "Advertising Disclosure",
    description: "How advertising, if shown, is identified on Kidawood, and how it is kept apart from editorial content.",
    updated: UPDATED,
    intro:
      "This page explains how advertising works on Kidawood and how it is separated from the articles the editorial team writes.",
    sections: [
      {
        heading: "Identifying advertising",
        paragraphs: [
          "Paid advertising, where it appears, is placed in clearly marked advertising positions and is labelled as advertising. Sponsored content, if ever published, will be labelled as sponsored at the top of the page. Advertising is never written to look like an editorial article.",
        ],
      },
      {
        heading: "Editorial independence",
        paragraphs: [
          "Advertisers do not choose article topics, see articles before publication, or have a say in what an article concludes. A company cannot pay to be described favourably, to have criticism removed, or to keep a topic off the site. Corrections follow the corrections policy regardless of any commercial relationship.",
        ],
      },
      {
        heading: "Current position",
        paragraphs: [
          "Kidawood is a new website. If advertising arrangements change, this page will be updated with the new position and the date of the change.",
        ],
      },
    ],
  },
  {
    slug: "editorial-policy",
    title: "Editorial Policy",
    description: "How Kidawood chooses topics, checks facts, writes articles and handles updates.",
    updated: UPDATED,
    intro:
      "This policy sets out how articles on Kidawood are chosen, researched, written and maintained. It applies to every section of the site.",
    sections: [
      {
        heading: "Choosing topics",
        paragraphs: [
          "Topics come from the questions readers search for: whether a company is publicly traded, how an investing practice works, or how a type of business software is used. Related searches with the same intent are grouped into one article rather than split into thin copies, so each published page is meant to answer its question fully.",
        ],
      },
      {
        heading: "Research and sources",
        paragraphs: [
          "Articles are written by the Kidawood Editorial Team. Company and market facts are checked against primary sources where they exist, such as SEC filings and company search records, exchange listing directories, and regulator guidance from bodies such as the SEC and FINRA. Software articles are based on how the type of product is generally used in the trade, and they avoid product rankings and prices, which change too often to state responsibly without a test.",
          "Each article lists its sources at the foot of the page, shows the dates it was published and last updated, and opens with a short direct answer to the question in its title.",
        ],
      },
      {
        heading: "Accuracy and balance",
        paragraphs: [
          "Writers must not invent figures, prices, statistics or quotations. Where a fact cannot be confirmed from a reliable source, the article either leaves it out or says plainly that it is unverified. On investing topics, risks are explained in the body of the article, not only in the disclaimer. Kidawood does not accept payment to cover, praise or criticise a company or product.",
        ],
      },
      {
        heading: "Updates",
        paragraphs: [
          "Articles are reviewed when the underlying facts change, such as a company listing on an exchange or a regulator updating its guidance. Changes are reflected in the updated date on the page. Material errors are handled under the corrections policy.",
        ],
      },
    ],
  },
  {
    slug: "corrections-policy",
    title: "Corrections Policy",
    description: "How to report an error in a Kidawood article and how confirmed corrections are made.",
    updated: UPDATED,
    intro:
      "Kidawood aims to be accurate, and corrects the record openly when an article turns out to be wrong.",
    sections: [
      {
        heading: "Reporting an error",
        paragraphs: [
          "If you believe an article contains a factual error, contact the team through the contact page. It helps to name the article, quote the sentence you believe is wrong, and give the correct position with a source if you have one. Reports about matters of opinion are read, but the corrections process covers facts.",
        ],
      },
      {
        heading: "How corrections are made",
        paragraphs: [
          "A reported error is checked against the article's sources and, where needed, the primary record. If the report is right, the article is corrected and its updated date is changed to the date of the fix. For a significant error, one that changes the article's answer or advice context, a short note is added to the article saying what changed and when.",
          "If the article is right as published, we will say so and point to the source relied on.",
        ],
      },
      {
        heading: "What corrections do not cover",
        paragraphs: [
          "Corrections fix facts. They are not a route to remove accurate but unwelcome information, and requests to delete accurate content about a company or product will not be granted. Legal concerns about an article can be raised through the contact page and will be reviewed on their merits.",
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string): LegalPageContent {
  return LEGAL_PAGES.find((p) => p.slug === slug) as LegalPageContent;
}
