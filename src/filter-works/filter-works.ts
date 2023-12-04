import Foriio from "../index";

/**
 * Function to filter the type of works
 * 
 * @param works array of works objects;
 * @param worksType type of works;
 * @returns
 */
function filterWorks<K extends keyof Foriio.WorksTypeMap> (works: Foriio.Work[], worksType: K | Foriio.WorksType): Foriio.WorksTypeMap[K] {
    return works.filter(work => work.type === worksType) as Foriio.WorksTypeMap[K];
};

export {
    filterWorks
};