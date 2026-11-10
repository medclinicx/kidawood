import { defineArrayMember, defineField, defineType } from "sanity";

/**
 * Article schema. Field names match the Article type in
 * ../lib/articles.ts and the GROQ projection in ../lib/sanity.ts,
 * so an article written in Studio is read by the website as it is.
 *
 * Two fields are flattened for the website:
 * - imageUrl is a plain URL string. Paste the public URL of the
 *   featured image (for example a file in the site's public/images
 *   folder, or an uploaded asset URL copied from the media library).
 * - category is stored as the category slug string, matching the
 *   Category documents' slugs.
 */
export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt (meta description)",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(320),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Stock Market (stocks)", value: "stocks" },
          { title: "Investing (investing)", value: "investing" },
          { title: "Stock Management (stock-management)", value: "stock-management" },
          { title: "Finance and Legal (finance)", value: "finance" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "primaryKeyword",
      title: "Primary keyword",
      type: "string",
    }),
    defineField({
      name: "secondaryKeywords",
      title: "Secondary keywords",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated date",
      type: "date",
    }),
    defineField({
      name: "readingMinutes",
      title: "Reading time (minutes)",
      type: "number",
    }),
    defineField({
      name: "imageUrl",
      title: "Featured image URL",
      type: "url",
      description:
        "Public URL of the featured image. The website field is called image; the query in lib/sanity.ts maps imageUrl to it.",
    }),
    defineField({
      name: "image",
      title: "Featured image (uploaded)",
      type: "image",
      options: { hotspot: true },
      description:
        "Optional uploaded version of the featured image, kept for Studio use. The website reads imageUrl.",
    }),
    defineField({
      name: "imageAlt",
      title: "Image alt text",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Intro (short answer shown first)",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "section",
          fields: [
            { name: "heading", title: "Heading (H2)", type: "string" },
            {
              name: "paragraphs",
              title: "Paragraphs",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "subsections",
              title: "Subsections (H3)",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "subsection",
                  fields: [
                    { name: "heading", title: "Heading (H3)", type: "string" },
                    {
                      name: "paragraphs",
                      title: "Paragraphs",
                      type: "array",
                      of: [{ type: "string" }],
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
          },
        }),
      ],
    }),
    defineField({
      name: "faqs",
      title: "Frequently asked questions",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "faq",
          fields: [
            { name: "q", title: "Question", type: "string" },
            { name: "a", title: "Answer", type: "text", rows: 3 },
          ],
          preview: { select: { title: "q" } },
        }),
      ],
    }),
    defineField({
      name: "sources",
      title: "Sources and references",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "source",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "url", title: "URL", type: "url" },
          ],
          preview: { select: { title: "label" } },
        }),
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
