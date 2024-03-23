import { AuthenticationError, ParameterTypeError } from './error/index';

export class Foriio {
    private static readonly _URL = 'https://api.foriio.com';
    private static readonly _ENDPOINT_USER = '/api/v1/developer/users';
    private static readonly _ENDPOINT_WORKS = '/api/v1/developer/works';
    
    private readonly _apiKey: string;

    constructor (apiKey: string) {
        if (typeof apiKey !== 'string') {
            throw new ParameterTypeError(`apiKey required type 'string' but was given '${ typeof apiKey }`);
        }
        
        this._apiKey = apiKey;
    }

    /**
     * Function to filter the type of works
     * 
     * @param works array of works objects;
     * @param worksType type of works;
     * @returns
     */
    public filterWorks<T extends keyof Foriio.WorksTypeMap> (works: Foriio.Work[], worksType: T | Foriio.WorksType): Foriio.WorksTypeMap[T] {
        return works.filter(work => work.type === worksType) as Foriio.WorksTypeMap[T];
    };

    /** Function to asynchronously get User`s info in Foriio
     * 
     * If an invalid API access key is passed, return AuthenticationError.
     * 
     * @param token API access key.
     * @returns 
     */
    public async getForiioUser () {
        const res = await this._request<Foriio.Response.User>(Foriio._ENDPOINT_USER);
        
        return res.user;
    }

    /** Function to asynchronously get Works in Foriio
     * 
     * If an invalid API access key is passed, reject AuthenticationError.
     * 
     * @param token API access key.
     * @returns 
     */
    public async getForiioWorks () {
        const res = await this._request<Foriio.Response.Works>(Foriio._ENDPOINT_WORKS);

        return res.works;
    };

    public async _request<T> (endpoint: string) {
        if (typeof endpoint !== 'string') {
            throw new ParameterTypeError(`endpoint required type 'string' but was given '${ typeof endpoint }`);
        }

        const url = Foriio._URL + endpoint;

        const res = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                token: this._apiKey
            }
        });

        const json = await res.json();

        if (json.status === 401) {
            throw (new AuthenticationError(json.exception.message));
        }

        return json as T;
    }
};

declare namespace Foriio {
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
