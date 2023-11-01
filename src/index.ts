import { AuthenticationError } from './authentication-error/index';
import { requestUser } from './request-user/index';
import { requestWorks } from './request-works/index';
import { Rejecter, Resolver } from './result/index';

export {
    requestUser,
    requestWorks,
    AuthenticationError,
    Rejecter,
    Resolver
};

class Foriio {
    static requestUser = requestUser;
    static requestWorks = requestWorks;
};

namespace Foriio {
    export type AuthenticationErrorMessage = "Authentication error";

    export interface User {
        "id": number,
        "screen_name": string,
        "profile": {
            "id": number,
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
        }
    }

    export type WorksType = "copy_writing" | "image" | "video" | "web_article";

    export type ResusltRequest<T extends AbstractResponse, E extends Error> = Promise<Resolver<T>>;

    export interface AbstractResponse {};

    /** Information on the Works in which the user participates associated with the API key */
    export interface ResponseWorks extends AbstractResponse {
        "meta": {
            "current_page": number,
            "per_page": number,
            "total_pages": number,
            "total_count": number
        },
        "works": Works.DefaultWork[]
    }

    /** Information about the user associated with the API Key */
    export interface ResponseUser extends AbstractResponse {
        'user': User,
        "status": "approved" | "",
        "is_pro": boolean
    }

    /** Error thrown when authentication fails */
    export interface ResponseFailed extends AbstractResponse {
        "status": 401,
        "error": "Unauthorized",
        "exception": {
            "class": "ErrorHandler::AuthenticationError",
            "message": AuthenticationErrorMessage
        }
    }
}

namespace Foriio.Works {
    export interface DefaultWork {
        "id": number,
        "title": string,
        "thumbnail": string,
        "thumbnail_id": number | null,
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
        "type": WorksType,
        "author_id": number
    }

    export interface ImageWork extends DefaultWork {
        "type": "image"
        "images": WorksObject.Image[]
    }

    export interface VideoWork extends DefaultWork {
        "type": "video",
        "videos": WorksObject.Video[]
    }

    export interface WebArticleWork extends DefaultWork {
        "type": "web_article",
        "web_article": WorksObject.WebArticle[]
    }
}

namespace Foriio.WorksObject {
    export interface Image {
        "id": number,
        "urls": {
            "list": string,
            "list2x": string,
            "detail": string,
            "detail2x": string,
            "profile_header_image": string | null;
        },
        "srcset": string,
        "width": number,
        "height": number
    }

    export interface Video {
        "platform": "youtube" | "",
        "video_id": string,
        "url": string
        "title": string,
        "description": string,
        "picture_url": string
    }

    export interface WebArticle {
        "url": string,
        "title": string,
        "description": string,
        "og_type": "article" | "website",
        "domain": string,
        "image": string
    }
}

export default Foriio;