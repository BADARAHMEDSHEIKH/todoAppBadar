console.log("helio1");
console.log("helio3");
console.log("helio3");
console.log("helio4");
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from 'inquirer';
let todos: TodoItem[] = [
 new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
 new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let collection: TodoCollection = new TodoCollection("Adam", todos);
function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List `
    + `(${ collection.getItemCounts().incomplete } items to do)`);
    collection.getTodoItems(true).forEach(item => item.printDetails());
   }
   enum Commands {
    Quit = "Quit"
   }
   function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
            }
            })
           }
           promptUser();
collection.addTodo("badar11");
//console.clear();
console.log(`${collection.userName}'s Todo List `
 + `(${ collection.getItemCounts().incomplete } items to do22 \n)`
 +`(${ collection.getItemCounts().total } items total22)`);
console.log(`${collection.userName}'s Todo List`);
collection.addTodo("badar22");
collection.getTodoItems(true).forEach(item => item.printDetails());
collection.removeComplete();