
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  var text = text.trim();
  if (text === 'quit') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }  
  else if(text.startsWith('hello')){
   newHello(text)
  }
  else if(text === 'tomato'){
    tomato();
  }
  else if(text === 'exit'){
    exit();
  }
  else if(text === 'help'){
    help();
  }else if(text === 'list'){
    list()
  }
  else if (text.startsWith("add")) {
    addTask(text);
  }
  else if (text.startsWith("remove")) {
    removeTask(text);
  }
  else{
    unknownCommand(text);
  }

}



/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
  console.log('--------------------')

}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!' )
  console.log('--------------------')
}
function tomato(){
  console.log('tomato!')
  console.log('--------------------')
}
function newHello(text){
  text == 'hello' ? console.log('hello!') : console.log(text + '!')
  console.log('--------------------')
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function exit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
// This help function displays all the possible commands that could be written inside tasks.js
const List = [help , hello, newHello ,list, addTask, removeTask, tomato, quit ,exit];
function help(){
 List.forEach(element => console.log('-',element))
 console.log('--------------------')
}
// list function
const tasks = [];

function list(){
  console.log(`Here are the tasks:`)
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
  console.log('--------------------')
}
// Add function
  function addTask(text) {
    if (text == "add") {
    console.log('ERROR name a task to be added!')
    } else {
    arg = text.replace("add ", "");
    tasks.push(arg);
    console.log(arg + ' has been added to list!')
    }
    console.log('--------------------')
}
// Remove function
  function removeTask(text){
    if(text === 'remove'){
      tasks.pop()
      console.log('last task has been removed from list!')
    }
    else {
      let arr = text.split(" ");
      let index = parseInt(arr[1]);
      if (index < 1 || index > tasks.length) {
        console.log('this task number does not exist!');
      }
      else {
        tasks.splice(index - 1, 1);
        console.log('task ' + index + ' has been removed from list!')
      }
}
console.log('--------------------')
}
// The following line starts the application
startApp("Hadi Abou Homein")
