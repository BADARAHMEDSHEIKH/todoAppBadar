console.log("helio1");
console.log("helio3");
console.log("helio3");
console.log("helio4");
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
let todos: TodoItem[] = [
 new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
 new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];
let collection: TodoCollection = new TodoCollection("Adam", todos);
collection.addTodo("badar11");
//console.clear();
console.log(`${collection.userName}'s Todo List `
 + `(${ collection.getItemCounts().incomplete } items to do22 \n)`
 +`(${ collection.getItemCounts().total } items total22)`);
console.log(`${collection.userName}'s Todo List`);
collection.addTodo("badar22");
collection.getTodoItems(true).forEach(item => item.printDetails());
collection.removeComplete();