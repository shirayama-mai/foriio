import Foriio from "../index";
import { filterWorks } from "./filter-works";

const worksFactory = <T extends Foriio.Work> (type: Foriio.WorksType, description: string): T => {
    const mock = jest.createMockFromModule<T>('../_index');
    mock.type = type;
    mock.description = description;

    return mock;
};

describe('test function filterWorks', () => {
    afterAll(() => {
        jest.restoreAllMocks();
    });

    const copyWritingWork1 = worksFactory<Foriio.Work>('copy_writing', 'copyWritingWork1');
    const copyWritingWork2 = worksFactory<Foriio.Work>('copy_writing', 'copyWritingWork2');

    const imageWork1 = worksFactory<Foriio.ImageWork>('image', 'imageWork1');
    const imageWork2 = worksFactory<Foriio.ImageWork>('image', 'imageWork2');

    const videoWork1 = worksFactory<Foriio.ImageWork>('video', 'videoWork1');
    const videoWork2 = worksFactory<Foriio.ImageWork>('video', 'videoWork2');

    const webArticleWork1 = worksFactory<Foriio.ImageWork>('web_article', 'webArticleWork1');
    const webArticleWork2 = worksFactory<Foriio.ImageWork>('web_article', 'webArticleWork2');

    const works = [
        copyWritingWork1,
        imageWork1,
        videoWork1,
        webArticleWork1,
        copyWritingWork2,
        imageWork2,
        videoWork2,
        webArticleWork2
    ];

    it('filter by "copy_writing"', () => {
        expect(filterWorks(works, 'copy_writing')).toEqual([copyWritingWork1, copyWritingWork2]);
    });

    it('filter by "image"', () => {
        expect(filterWorks(works, 'image')).toEqual([imageWork1, imageWork2]);
    });

    it('filter by "video"', () => {
        expect(filterWorks(works, 'video')).toEqual([videoWork1, videoWork2]);
    });

    it('filter by "web_article"', () => {
        expect(filterWorks(works, 'web_article')).toEqual([webArticleWork1, webArticleWork2]);
    });
});