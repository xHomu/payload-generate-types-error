import { CollectionConfig } from "payload/types";

export const Orders: CollectionConfig = {
  slug: "_orders",
  fields: [
    {
      name: "total",
      type: "number",
      required: true,
    },
    {
      name: "placedBy",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
  ],
};
