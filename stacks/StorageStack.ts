import { StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  // Create the DynamoDB table
  const table = new Table(stack, "bookmarks", {
    fields: {
      userId: "string",
      bookmarkId: "string",
      bookmarkUrl: "string",
      bookmarkTitle: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "bookmarkId" },
  });

  return {
    table,
  };
}
