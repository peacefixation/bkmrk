import { Table } from "sst/node/table";
import handler from "@bkmrk/core/handler";
import dynamoDb from "@bkmrk/core/dynamodb";

// TODO: we won't want to hardcode this
const userId = "matt"

export const main = handler(async (event) => {
  const params = {
    TableName: Table.Bookmarks.tableName,
    Key: {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      bookmarkId: event?.pathParameters?.id, // The id of the note from the path
    },
  };

  await dynamoDb.delete(params);

  return JSON.stringify({ status: true });
});
