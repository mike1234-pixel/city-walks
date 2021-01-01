## Data

### Admin

### The Walks Data is structured as follows:

All values are strings. \_id is set by MongoDB.

        {
            "_id": "UNIQUE_ID",
            "route": "URL_ROUTE", ** used to create routes, e.g. stoke-newington. lowercase, no spaces or non-alphabetic characters**
            "walk": "stoke newington",
            "city": "london",
            "description": "MAX 136 CHARS",
            "starting_point": "old street",
            "content_1": "MAX 569 CHARS",
            "content_2": "MAX 569 CHARS",
            "content_3": "MAX 569 CHARS",
            "cover_img_link": "https://...",
            "img_1_link": "https://...",
            "img_2_link": "https://...",
            "img_3_link": "https://..."
        },
