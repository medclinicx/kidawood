import { defineField, defineType } from "sanity";

/**
 * Category. The four site sections. Article documents store the
 * category slug as a string, and the Category documents carry the
 * same slugs plus the hub page wording.
 */
export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      description: "Must match the website paths: stocks, investing, stock-management, finance.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "intro",
      title: "Hub introduction paragraphs",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "tagline" },
  },
});
