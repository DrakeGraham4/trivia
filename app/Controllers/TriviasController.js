import { ProxyState } from "../AppState.js";
import { triviasservice } from "../Services/TriviasService.js"
import { Pop } from "../Utils/Pop.js";


function _drawQuestion() {
    let template = ''
    ProxyState.question.forEach(q => template += `
     <ul>
     <li id="'${q.id}'">${q.question}</li>
     </ul>
        </div>
        <div class="col-6"><button class="btn btn-success" onclick="app.triviasController.guessAnswer('True', '${q.id}')">True</button></div>
        <div class="col-6"><button class="btn btn-danger" onclick="app.triviasController.guessAnswer('False', '${q.id}' )">False</button></div>
      </div>
    `)
    document.getElementById('question').innerHTML = template
}

export class TriviasController{
    constructor() {
        console.log('trivias controller loaded');
        ProxyState.on('question', _drawQuestion)
        this.getQuestion()
    }

    async getQuestion() {
        try {
            console.log('started to get question');
            await triviasservice.getQuestion()
            console.log('finished');
        } catch (error) {
            console.error(error);
            Pop.toast(error.message, 'error')
        }
    }

    guessAnswer(guess, id) {
        console.log(guess);
        console.log(id);
        triviasservice.guessAnswer(guess, id)
    }

}