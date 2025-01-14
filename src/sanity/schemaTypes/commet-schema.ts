import { Rule } from "postcss";
import { validation } from "sanity";

const comment = {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "commentText",
      type: "string",
      title: "Comment",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "stars",
      type: "number",
      title: "Stars",
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DDTHH:mm:ssZ",
      },
      readOnly: true,
    },
  ],
  initialValue: {
    createdAt: new Date().toISOString(),
  },
};

export default comment;
