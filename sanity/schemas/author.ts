import { defineField, defineType } from "sanity";

/**
 * Author. Kidawood articles are published under the site's editorial
 * team byline. Keep one Author document named "Kidawood Editorial
 * Team" and use it for every article. Do not add invented individual
 * people.
 */
export default defineType({
  name: "author",
  title: "Author",
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
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "For the editorial team byline, use: Editorial Team.",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
});
