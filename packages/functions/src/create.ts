import * as uuid from "uuid";
import { Table } from "sst/node/table";
import handler from "@bkmrk/core/handler";
import dynamoDb from "@bkmrk/core/dynamodb";

export const main = handler(async (event) => {
  let data = {
    bookmarkUrl: "",
    bookmarkTitle: "",
  };

  if (event.body != null) {
    data = JSON.parse(event.body);
  }

  const params = {
    TableName: Table.Bookmarks.tableName,
    Item: {
      // The attributes of the item to be created
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      bookmarkId: uuid.v1(), // A unique uuid
      bookmarkUrl: data.bookmarkUrl, // Parsed from request body
      bookmarkTitle: data.bookmarkTitle, // Parsed from request body
      createdAt: Date.now(), // Current Unix timestamp
    },
  };

  await dynamoDb.put(params);

  return JSON.stringify(params.Item);
});
