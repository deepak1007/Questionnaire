export interface Question {
    id: number,
    question : string,
    type: string,
    options : string[],
    createdAt : Date | string,
    answered : boolean,
    correctAnswer: string[] | string,
    answeredAt: Date | string,
}