import { Table } from "sst/node/table";
import handler from "@bkmrk/core/handler";
import dynamoDb from "@bkmrk/core/dynamodb";

// TODO: we won't want to hardcode this
const userId = "matt"

export const main = handler(async (event) => {
  const params = {
    TableName: Table.bookmarks.tableName,
    // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId': only return items with matching 'userId'
    //   partition key
    KeyConditionExpression: "userId = :userId",
    // 'ExpressionAttributeValues' defines the value in the condition
    // - ':userId': defines 'userId' to be the id of the author
    ExpressionAttributeValues: {
      ":userId": userId,
    },
  };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return JSON.stringify(result.Items);
});