import { generateId } from "../Utils/generateId.js"

export class Question{
    constructor(data) {
        this.id = data.id || generateId()
        this.question = data.question
        this.correctAnswer = data.correct_answer
    }
}