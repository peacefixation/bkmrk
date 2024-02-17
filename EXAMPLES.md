# Create

curl -X POST \
-H 'Content-Type: application/json' \
-d '{"bookmarkUrl":"https://github.com","bookmarkTitle":"GitHub"}' \
https://rnfg6jz6va.execute-api.ap-southeast-2.amazonaws.com/bookmarks


{"userId":"matt","bookmarkId":"c7857420-cd6f-11ee-8f4c-694ff056f3aa","bookmarkUrl":"https://github.com","bookmarkTitle":"GitHub","createdAt":1708159046754}

# Get by ID

curl https://rnfg6jz6va.execute-api.ap-southeast-2.amazonaws.com/bookmarks/c7857420-cd6f-11ee-8f4c-694ff056f3aa

{"createdAt":1708159046754,"bookmarkTitle":"GitHub","bookmarkUrl":"https://github.com","bookmarkId":"c7857420-cd6f-11ee-8f4c-694ff056f3aa","userId":"matt"}

# Get all

curl https://rnfg6jz6va.execute-api.ap-southeast-2.amazonaws.com/bookmarks

[{"createdAt":1708159046754,"bookmarkTitle":"GitHub","bookmarkUrl":"https://github.com","bookmarkId":"c7857420-cd6f-11ee-8f4c-694ff056f3aa","userId":"matt"}]

# Update

curl -X PUT \
-H 'Content-Type: application/json' \
-d '{"bookmarkUrl":"deck.gl","bookmarkTitle":"deck.gl"}' \
https://rnfg6jz6va.execute-api.ap-southeast-2.amazonaws.com/bookmarks/c7857420-cd6f-11ee-8f4c-694ff056f3aa

{"status":true}

## Get By ID

{"createdAt":1708159046754,"bookmarkTitle":"deck.gl","bookmarkUrl":"deck.gl","bookmarkId":"c7857420-cd6f-11ee-8f4c-694ff056f3aa","userId":"matt"}

# Delete

curl -X DELETE https://rnfg6jz6va.execute-api.ap-southeast-2.amazonaws.com/bookmarks/c7857420-cd6f-11ee-8f4c-694ff056f3aa

{"status":true}

## Get By ID

{"error":"Item not found."}


