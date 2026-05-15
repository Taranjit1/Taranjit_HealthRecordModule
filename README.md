# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# How to Use
In this file all the functions are already called, just run using node Taranjit_HealthRecords in terminal

## Import to another file
Place the module in same folder as your file and use this code.
```ruby
const hrm = require ("./Taranjit_HealthRecords");
console.log(hrm.avgAgeHealth("healthy"));
```
## Parameters
addNewRecords(name, gender, age, email, healthStatus)

searchByName(name)

avgAgeHealth(healthStatus)

amtOfRecordsByHealth(healthStatus)

updateByName(name, {newName, gender, age, email, healthStatus }) - Use at least one of the parameters in the {}. To be used like {newName: "New Name", age: 25}

deleteByName(name)
# AI Declaration
I used Gemini to generate the mock dataset array and ideas for the application.

# References
Provide the references that you have used to support your assignment. 

https://www.semble.io/
