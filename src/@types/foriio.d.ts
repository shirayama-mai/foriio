declare namespace Foriio {

    /** Information on the Works in which the user participates associated with the API key */
    export interface Works {
        "meta": {
            "current_page": number,
            "per_page": number,
            "total_pages": number,
            "total_count": number
        },
        "works": {
            "id": number,
            "title": string,
            "thumbnail": "string",
            "thumbnail_id": number,
            "notes_count": number,
            "decription": string,
            /** Stringified pbliced date.
             * 
             * 
             * Format example)
             * 
             * "2022-11-11T11:39:22.342Z"
             */
            "published_at": string,
            "is_nsfw": boolean,
            "author": User,
            "type": "image" | "",
            "author_id": number
        }[]
    };

    /** Information about the user associated with the API Key */
    export interface User {
        'user': {
            "id": number,
            "screen_name": string,
            "profile": {
                "id": nubmer,
                "name": string,
                "profession": "UI" | "",
                /** Linked Twitter`s url.
                 * 
                 * e.g.) "https://twitter.com/mai_shirayama"
                 */
                "twitter_url": string,
                "avatar": {
                    "original": string,
                    "profile_header_image": string | null,
                    /** "https://d1yy3fmo6s8c2k.cloudfront.net/store/b79bd73a723d9c0d986ba6294ead799b.jpg" */
                    "thumb2x": string,
                    /** "https://d1yy3fmo6s8c2k.cloudfront.net/store/7b1be39516759d5eb82d304b9c59d8a5.jpg" */
                    "thumb": string,
                    /** "https://d1yy3fmo6s8c2k.cloudfront.net/store/1e69dd7c19d2b72f7fd82188f802c373.jpg" */
                    "phone": string
                }
            },
            "status": "approved" | "",
            "is_pro": boolean
        };
    }

    /** Error thrown when authentication fails */
    export interface AuthenticationError {        
        "status": 401,
        "error": "Unauthorized",
        "exception": {
            "class": "ErrorHandler::AuthenticationError",
            "message": AuthenticationErrorMessage
        }
    };

    export type AuthenticationErrorMessage = "Authentication error";

    export type RequestWorks = (token: string) => Promise<Foriio.Works | Foriio.AuthenticationError>;

    export type RequestUser = (token: string) => Promise<User | AuthenticationError>;
}

// declare namespace Foriio {
//     export type Works = {
//         "meta": {
//             "current_page": 1,
//             "per_page": 50,
//             "total_pages": 1,
//             "total_count": 1
//         },
//         "works": {
//             "id": 10,
//             "title": "image 13",
//             "thumbnail": "string",
//             "thumbnail_id": 11,
//             "notes_count": 0,
//             "decription": "sample work",
//             "published_at": "2022-11-11T11:39:22.342Z",
//             "is_nsfw": false,
//             "author": {
//                 "id": 2,
//                 "screen_name": "john",
//                 "profile": User,
//                 "status": "approved",
//                 "is_pro": true
//             },
//             "type": "image",
//             "author_id": 1543
//         }[]
//     };

//      export type User = {
//          'user': {
//              "id": 2,
//              "screen_name": "john",
//              "profile": {
//                  "id": 223,
//                  "name": "sample author",
//                  "profession": "UI",
//                  "twitter_url": "https://twitter.com/",
//                  "avatar": {
//                      "thumb2x": "https://d1yy3fmo6s8c2k.cloudfront.net/store/b79bd73a723d9c0d986ba6294ead799b.jpg",
//                      "thumb": "https://d1yy3fmo6s8c2k.cloudfront.net/store/7b1be39516759d5eb82d304b9c59d8a5.jpg",
//                      "phone": "https://d1yy3fmo6s8c2k.cloudfront.net/store/1e69dd7c19d2b72f7fd82188f802c373.jpg"
//                  }
//              },
//              "status": "approved",
//              "is_pro": true
//          };
//      }
// }