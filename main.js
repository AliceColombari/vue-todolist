// MILESTONE 1 
// Stampare all'interno di una lista, un item per ogni todo. 
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2 
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3 
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. 

const vue = new Vue(
    {
        el: '#app',
        data: {
            newtodo: "",
            todos: [
                {
                    text: "Crea una repo su GitHub",
                    done: true
                },
                {
                    text: "Copia la repo su VSCode",
                    done: true
                },
                {
                    text: "Crea un file index.html e main.js",
                    done: false
                },
                {
                    text: "Crea diversi commenti per aiutarti nella comprensione",
                    done: true
                },
                {
                    text: "Pushare i passaggi effettuati",
                    done: false
                },
            ]
        },
        methods: {
            // todo aggiunto alla lista
            addTodo() {
                // creo condizione per aggiunta di todo
                // pusho nuovo todo solo se inserisco testo altrimenti nulla
                if (this.newtodo != "") {
                    this.todos.push(
                        {
                            text: this.newtodo,
                            done: false
                        }
                    );
                    this.newtodo = "";
                }
            },
            // todo rimosso dalla lista
            removeTodo(index) {
                this.todos.splice(index, 1);
            }
        }
    }
);
