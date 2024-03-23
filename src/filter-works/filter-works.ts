import Foriio from '../';

export function filterWorks<T extends keyof Foriio.WorksTypeMap> (works: Foriio.Work[], worksType: T | Foriio.WorksType): Foriio.WorksTypeMap[T] {
    return works.filter(work => work.type === worksType) as Foriio.WorksTypeMap[T];
};