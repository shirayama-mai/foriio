import { filterWorks } from './filter-works';
import { getForiioUser } from './get-foriio-user';
import { getForiioWorks } from './get-foriio-works';

export const Foriio = (apiKey: string) => {
    
    return {
        /**
         * Function to filter the type of works
         * 
         * @param works array of works objects;
         * @param worksType type of works;
         * @returns
         */
        filterWorks,
        /** 
         * Function to asynchronously get User`s info in Foriio
         * 
         * @returns 
         */
        getForiioUser: () => getForiioUser(apiKey),
        /**
         * Function to asynchronously get Works in Foriio
         * 
         * @returns 
         */
        getForiioWorks: () => getForiioWorks(apiKey)
    }
};

export namespace Foriio {
    /** An Object of works published in the category 'Image' */
    export type ImageWork = {
        images: Foriio.Data.Image[];
        type: 'image';
    } & Work;

    /** An object of user infomation */
    export type User = {
        id: number;
        screen_name: string;
        profile: {
            id: number;
            name: string;
            profession: string;
            twitter_url?: string;
            avatar: {
                original: string;
                thumb2x: string;
                thumb: string;
                phone: string;
                profile_header_image: string | null;
            }
        };
        status: 'approved' | string;
        is_pro: boolean;
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

    export namespace Data {
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
    }
    
    export namespace Response {
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
    }

    export namespace WorksType {
        export type COPY_WRITING = 'copy_writing';
        export type IMAGE = 'image';
        export type VIDEO = 'video';
        export type WEB_ARTICLE = 'web_article';
    }
};

export default Foriio;
