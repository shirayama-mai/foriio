import { filterWorks } from './filter-works/filter-works';
import { requestUser } from './request-user/request-user';
import { requestWorks } from './request-works/request-works';

const Foriio = {
    /**
     * Function to filter the type of works
     * 
     * @param works array of works objects;
     * @param worksType type of works;
     * @returns
     */
    filterWorks,
    /** Function to asynchronously get User`s info in Foriio
     * 
     * If an invalid API access key is passed, return AuthenticationError.
     * 
     * @param token API access key.
     * @returns 
     */
    requestUser,
    /** Function to asynchronously get Works in Foriio
     * 
     * If an invalid API access key is passed, reject AuthenticationError.
     * 
     * @param token API access key.
     * @returns 
     */
    requestWorks
};

declare namespace Foriio {
    /** An Object of works published in the category 'Image' */
    export type ImageWork = {
        images: Foriio.Data.Image[];
        type: 'image';
    } & Work;

    /** An object of user infomation */
    export type User = {
        avatar: {
            original: string;
            profile_header_image: string | null;
            /** "https://d1yy3fmo6s8c2k.cloudfront.net/store/b79bd73a723d9c0d986ba6294ead799b.jpg" */
            thumb2x: string;
            /** "https://d1yy3fmo6s8c2k.cloudfront.net/store/7b1be39516759d5eb82d304b9c59d8a5.jpg" */
            thumb: string;
            /** "https://d1yy3fmo6s8c2k.cloudfront.net/store/1e69dd7c19d2b72f7fd82188f802c373.jpg" */
            phone: string;
        };
        id: number;
        profession: string;
        screen_name: string;
        /** Linked Twitter`s url.
         * 
         * e.g.) https://twitter.com/mai_shirayama
         */
        twitter_url: string;
    };

    /** An Object of works published in the category 'Video' */
    export type VideoWork = {
        type: 'video';
        videos: Foriio.Data.Video[]
    } & Work;

    /** An Object of works published in the category 'Web Article' */
    export type WebArticleWork = {
        type: 'web_article';
        web_ariticles: Foriio.Data.WebArticle[]
    } & Work;

    /** Abstract object of works */
    export type Work = {
        author: Foriio.User;
        author_id: number;
        description: string;
        id: number;
        is_nsfw: string;
        notes_count: number;
        published_at: string;
        title: string;
        thumbnail: string;
        thumbnail_id: number | null;
        type: Foriio.WorksType;
    };

    /** Type of works */
    export type WorksType = 'copy_writing' | 'image' | 'video' | 'web_article';


    /** Interface between worksType and works type */
    export type WorksTypeMap = {
        'copy_writing': Work[];
        'image': ImageWork[];
        'video': VideoWork[];
        'web_article': WebArticleWork[]
    };
};

declare namespace Foriio.Data {
    export type Image = {
        id: number;
        height: number;
        srcset: string;
        urls: {
            detail: string;
            detail2x: string;
            list: string;
            list2x: string;
            profile_header_image: string | null;
        };
        width: number;
    };

    export type Video = {
        description: string;
        picture_url: string;
        platform: 'youtube' | '';
        title: string;
        url: string;
        video_id: string;
    };

    export type WebArticle = {
        description: string;
        domain: string;
        image: string;
        og_type: 'article' | 'website';
        title: string;
        url: string;
    };
};

declare namespace Foriio.Response {
    /** Error thrown when authentication fails */
    export type AuthenticationError = {
        status: 401 | number;
        error: 'Unauthorized',
        exception: {
            class: 'ErrorHandler::AuthenticationError';
            message: 'Authentication error'
        };
    };

    /** Information about the user associated with the API Key */
    export type User = {
        user: Foriio.User;
    };

    /** Information on the Works in which the user participates associated with the API key */
    export type Works = {
        meta: {
            current_page: number;
            per_page: number;
            total_pages: number;
            total_count: number;
        };
        works: Foriio.Work[];
    };
};

declare namespace Foriio.WorksType {
    export type COPY_WRITING = 'copy_writing';
    export type IMAGE = 'image';
    export type VIDEO = 'video';
    export type WEB_ARTICLE = 'web_article';
};

export default Foriio;

export {
    filterWorks,
    requestUser,
    requestWorks
};