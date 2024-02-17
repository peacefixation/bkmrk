# bkmrk

Store bookmarks to the AWS cloud.

This project uses SST to configure:
- API Gateway
- Lambda
- DynamoDB

API routes are exposed to:
- create a bookmark
- get a bookmark by ID
- get all bookmarks
- update a bookmark by ID
- delete a bookmark by ID

Based on the [SST guide](https://sst.dev/guide.html)

## Run in development

`npx sst dev`
