
let message = ""
for (const user of users) {
    message +=
        `Hello, ${user.name} , ID: ${user.id} from ${user.address.city} !\n`
}
alert(message)

let id = Number(prompt("Add your ID"));

// console.log("users: ", window.users);
// console.log("todos: ", window.todos);