declare type ServiceCreateQuestionsType = {
    name: string;
    endpoint: string;
    verbs: string[];
};
export declare const createQuestions: () => Promise<ServiceCreateQuestionsType>;
declare type InitQuestionsType = {
    host: string;
};
export declare const initQuestions: () => Promise<InitQuestionsType>;
export {};
