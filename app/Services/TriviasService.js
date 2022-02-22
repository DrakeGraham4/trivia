import { ProxyState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { Pop } from "../Utils/Pop.js";


class TriviasService{
    async getQuestion() {
        const response = await axios.get('https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=boolean')
        console.log('response data results', response.data.results);
        let question = response.data.results.map(q => new Question(q))
        ProxyState.question = question
    }

    guessAnswer(guess, id) {
        let currentQuestion = ProxyState.question.find(q => q.id == id)
        console.log(currentQuestion);
        if (currentQuestion.correctAnswer == guess) {
            Pop.toast('You are the smartest!', 'success')
        } else {
            Pop.toast("You're an idiot!", 'error')
        }
    }
    
    }



export const triviasservice = new TriviasService()