// *** Main JavaScript for 1st JavaScript Project file ***

// Language List
var languagesЈSОN = {   
    python :{
        name: "Python",
        description: "Python is an interpreted high-levelgeneral-purpose programming language. ... It supports multiple programming paradigms, including structured(particularly, procedural), object-oriented and functional programming. Python is often described as a batteries included language due to its comprehensivestandard library.",
        imgURL: "../assets/img/pnghut_python-logo-programmer-brand-fierce-cliparts.png"
    },
     csharp :{
        name: "C#",
        description:"C# is a modern, general purpose, object-oriented programming language designed around the Common Language Infrastructure. ... C# is a modern, general purpose, object-oriented programming language designed around the Common Language Infrastructure.",
        imgURL: "../assets/img/pnghut_c-programming-language-computer-program.png"
    },
    c :{
        name: "C",
        description: "C  is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
        imgURL: "../assets/img/pnghut_the-c-programming-language-computer-operator-programmer.png"
    },
    cPlusPlus :{
        name: "C++",
        description: "C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.",
        imgURL: "../assets/img/pnghut_the-c-programming-language-computer-symbol.png"
    },
    java :{
        name: "Java",
        description: "Java is a high-level programming language developed by Sun Microsystems. It was originally designed for developing programs for set-top boxes and handheld devices, but later became a popular choice for creating web applications. The Java syntax is similar to C++, but is strictly an object-oriented programming language",
        imgURL: "../assets/img/pnghut_java-platform-enterprise-edition-spring-framework-hibernate-programming-language-database-connectivity-computer-software.png"
    },
    javascript :{
        name: "JavaScript",
        description: "JavaScript is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. ... JavaScript can function as both a procedural and an object oriented language.",
        imgURL: "../assets/img/javascriptLogo.jpg"
    },
    php :{
        name: "PHP",
        description: "PHP is a server side scripting language. that is used to develop Static websites or Dynamic websites or Web applications. PHP stands for Hypertext Pre-processor, that earlier stood for Personal Home Pages. ... A PHP file contains PHP tags and ends with the extension PHP",
        imgURL: "../assets/img/pnghut_php-computer-software-development-kit-android.png"
    },
    kotlin :{
        name: "Kotlin",
        description: "Kotlin is a general purpose, free, open source, statically typed “pragmatic” programming language initially designed for the JVM (Java Virtual Machine) and Android that combines object-oriented and functional programming features. ... JetBrains uses Kotlin in many of its products including its flagship IntelliJ IDEA",
        imgURL: "../assets/img/pnghut_kotlin-android-software-development-anonymous-function-programming-language.png"
    },
    ruby :{
        name: "Ruby",
        description: "Ruby is dynamically typed and uses garbage collection. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.",
        imgURL: "../assets/img/pnghut_ruby-on-rails-programming-language-computer-logo-red.png"
    }
}

// *** First Section: User Validation

// Text Animation 'Hello + ... '
var helloList =  ['Programmer','Javascripter'];
var count = 0;
var index = 0;
var currentText = '';
var letter = '';

// *** Check User Values Button Disabled ***
var buttonDisabled = document.getElementById("checkUserValues");;
var userNameEl = document.getElementById("enterName");
userNameEl.addEventListener('input', disabledFunc); 

function disabledFunc(){
    var userNameCheck = document.getElementById("enterName").value;
    if((userNameCheck == null)
     ||(userNameCheck == '')){
        buttonDisabled.setAttribute("disabled", "disabled");
    }
    else{
        buttonDisabled.removeAttribute("disabled");
    }
};

// Get User Values + Add Name to Hello List
function getUserValues() {
    var userName = document.getElementById("enterName").value;
    var userSurname = document.getElementById("enterLastName").value;
    var userGender = document.getElementById("enterGender").value;
    var buttonCheck = document.getElementById('checkUserValues');

    if((userName === null || undefined) 
    ||(userName === '')){ 
        helloList.push('Pro');
        helloList.push('New Problems');
    }
    else{      
        buttonCheck.style.backgroundColor = "red";
        buttonCheck.style.border = "1px solid red ";
        helloList.push(userName.toUpperCase());
        if(userGender.toLowerCase() == "male"){
            helloList.push("Mr" + " " + userSurname.toUpperCase());
        } 
        else if(userGender.toLowerCase() == "female"){
            helloList.push("Mrs" + " " + userSurname.toUpperCase());
        }   
        else{
            helloList.push(userSurname.toUpperCase());
        }    
    }  
}

(function typed() {
    if(count === helloList.length){
        count = 0;
    } 
    currentText = helloList[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0
    }

    setTimeout(typed, 400);
})();

// *** Second Section: Programming Languages
var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var selectFilter = document.querySelector(".filter-todo");
var languagesList = new Array;

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// selectFilter.addEventListener("click", selectTodo);

// Content Elements for Language Div
var langTitleContent = "";
var langDescriptionContent = "";
var langImgUrl = "";
var languageMainDiv;
var divID = "";
///// TEST
var languagePHPMainDivHTML;
var languageRubyMainDivHTML;
var languageKotlinMainDivHTML;
var mainDivArray = new Array;
var ButtonId = "";

function addTodo(event){
    var item = event.target;
    var todo = item.parentElement;
    descSection = document.getElementById("descriptionSection");

    if(todoInput.value == "" || todoInput.value.length >= 15){
        event.preventDefault();
        todoInput.value = "Enter Correct Value";
    }
    else{   
        event.preventDefault();

        var todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create List Item
        var newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value.toUpperCase();
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // Add Item to Array
        var language = todoInput.value;
        languagesList.push(language);
        // console.log(languagesList);

        // Check Mark Button
        const completedButton = document.createElement('button');
        completedButton.innerText = 'Check';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton); 
             
        // Check Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerText = 'Trash';
        ButtonId = trashButton.setAttribute("id", language)
        // console.log(id);
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        // Append To List
        todoList.appendChild(todoDiv);

        // Clear Input
        todoInput.value = ''; 

        // Add Language Div
        if(languagesЈSОN.python.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.python.name;
            langDescriptionContent = languagesЈSОN.python.description;
            langImgUrl = languagesЈSОN.python.imgURL;

           //Create HTML Elements & Add Class
           languageMainDiv = document.createElement("div");
           languageMainDiv.setAttribute("id", langTitleContent.toLowerCase());
           languageMainDiv.classList.add("row");
           languageDivImageHTML = document.createElement("div");
           languageDivImageHTML.classList.add('col-4');
           languageDivImageHTML.classList.add("text-center");

           languageDivDescriptionHTML = document.createElement("div");  
           languageDivDescriptionHTML.classList.add('col-8');

           var langTitleHTML = document.createElement("h2");
           langTitleHTML.textContent = language.toUpperCase();

           var langDescriptionHTML = document.createElement("p");
           langDescriptionHTML.textContent = langDescriptionContent;

           var langImgHTML = document.createElement("img");
           langImgHTML.classList.add("img-fluid");
           langImgHTML.classList.add("w-50");
           langImgHTML.src = langImgUrl;

           // Append HTML Elements
           descSection.appendChild(languageMainDiv);
           languageMainDiv.appendChild(languageDivImageHTML);
           languageMainDiv.appendChild(languageDivDescriptionHTML);
           languageDivDescriptionHTML.appendChild(langTitleHTML);
           languageDivDescriptionHTML.appendChild(langDescriptionHTML);
           languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.c.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.c.name;
            langDescriptionContent = languagesЈSОN.c.description;
            langImgUrl = languagesЈSОN.c.imgURL;

           //Create HTML Elements & Add Class
           languageMainDiv = document.createElement("div");
           languageMainDiv.setAttribute("id", langTitleContent.toLowerCase());
           languageMainDiv.classList.add("row");
           languageDivImageHTML = document.createElement("div");
           languageDivImageHTML.classList.add('col-4');
           languageDivImageHTML.classList.add("text-center");

           languageDivDescriptionHTML = document.createElement("div");  
           languageDivDescriptionHTML.classList.add('col-8');

           var langTitleHTML = document.createElement("h2");
           langTitleHTML.textContent = language.toUpperCase();

           var langDescriptionHTML = document.createElement("p");
           langDescriptionHTML.textContent = langDescriptionContent;

           var langImgHTML = document.createElement("img");
           langImgHTML.classList.add("img-fluid");
           langImgHTML.classList.add("w-50");
           langImgHTML.src = langImgUrl;

           // Append HTML Elements
           descSection.appendChild(languageMainDiv);
           languageMainDiv.appendChild(languageDivImageHTML);
           languageMainDiv.appendChild(languageDivDescriptionHTML);
           languageDivDescriptionHTML.appendChild(langTitleHTML);
           languageDivDescriptionHTML.appendChild(langDescriptionHTML);
           languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.cPlusPlus.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.cPlusPlus.name;
            langDescriptionContent = languagesЈSОN.cPlusPlus.description;
            langImgUrl = languagesЈSОN.cPlusPlus.imgURL;

            //Create HTML Elements & Add Class
            languageMainDiv = document.createElement("div");
            languageMainDiv.setAttribute("id", langTitleContent.toLowerCase());
            languageMainDiv.classList.add("row");
            languageDivImageHTML = document.createElement("div");
            languageDivImageHTML.classList.add('col-4');
            languageDivImageHTML.classList.add("text-center");

            languageDivDescriptionHTML = document.createElement("div");  
            languageDivDescriptionHTML.classList.add('col-8');

            var langTitleHTML = document.createElement("h2");
            langTitleHTML.textContent = language.toUpperCase();

            var langDescriptionHTML = document.createElement("p");
            langDescriptionHTML.textContent = langDescriptionContent;

            var langImgHTML = document.createElement("img");
            langImgHTML.classList.add("img-fluid");
            langImgHTML.classList.add("w-50");
            langImgHTML.src = langImgUrl;

            // Append HTML Elements
            descSection.appendChild(languageMainDiv);
            languageMainDiv.appendChild(languageDivImageHTML);
            languageMainDiv.appendChild(languageDivDescriptionHTML);
            languageDivDescriptionHTML.appendChild(langTitleHTML);
            languageDivDescriptionHTML.appendChild(langDescriptionHTML);
            languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.csharp.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.csharp.name;
            langDescriptionContent = languagesЈSОN.csharp.description;
            langImgUrl = languagesЈSОN.csharp.imgURL;

            //Create HTML Elements & Add Class
            languageMainDiv = document.createElement("div");
            languageMainDiv.setAttribute("id", langTitleContent.toLowerCase());
            languageMainDiv.classList.add("row");
            languageDivImageHTML = document.createElement("div");
            languageDivImageHTML.classList.add('col-4');
            languageDivImageHTML.classList.add("text-center");

            languageDivDescriptionHTML = document.createElement("div");  
            languageDivDescriptionHTML.classList.add('col-8');

            var langTitleHTML = document.createElement("h2");
            langTitleHTML.textContent = language.toUpperCase();

            var langDescriptionHTML = document.createElement("p");
            langDescriptionHTML.textContent = langDescriptionContent;

            var langImgHTML = document.createElement("img");
            langImgHTML.classList.add("img-fluid");
            langImgHTML.classList.add("w-50");
            langImgHTML.src = langImgUrl;

            // Append HTML Elements
            descSection.appendChild(languageMainDiv);
            languageMainDiv.appendChild(languageDivImageHTML);
            languageMainDiv.appendChild(languageDivDescriptionHTML);
            languageDivDescriptionHTML.appendChild(langTitleHTML);
            languageDivDescriptionHTML.appendChild(langDescriptionHTML);
            languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.java.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.java.name;
            langDescriptionContent = languagesЈSОN.java.description;
            langImgUrl = languagesЈSОN.java.imgURL;

           //Create HTML Elements & Add Class
           languageMainDiv = document.createElement("div");
           languageMainDiv.setAttribute("id", langTitleContent.toLowerCase());
           languageMainDiv.classList.add("row");
           languageDivImageHTML = document.createElement("div");
           languageDivImageHTML.classList.add('col-4');
           languageDivImageHTML.classList.add("text-center");

           languageDivDescriptionHTML = document.createElement("div");  
           languageDivDescriptionHTML.classList.add('col-8');

           var langTitleHTML = document.createElement("h2");
           langTitleHTML.textContent = language.toUpperCase();

           var langDescriptionHTML = document.createElement("p");
           langDescriptionHTML.textContent = langDescriptionContent;

           var langImgHTML = document.createElement("img");
           langImgHTML.classList.add("img-fluid");
           langImgHTML.classList.add("w-50");
           langImgHTML.src = langImgUrl;

           // Append HTML Elements
           descSection.appendChild(languageMainDiv);
           languageMainDiv.appendChild(languageDivImageHTML);
           languageMainDiv.appendChild(languageDivDescriptionHTML);
           languageDivDescriptionHTML.appendChild(langTitleHTML);
           languageDivDescriptionHTML.appendChild(langDescriptionHTML);
           languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.javascript.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.javascript.name;
            langDescriptionContent = languagesЈSОN.javascript.description;
            langImgUrl = languagesЈSОN.javascript.imgURL;

            //Create HTML Elements & Add Class
            languageMainDiv = document.createElement("div");
            languageMainDiv.setAttribute("id", langTitleContent.toLowerCase());
            languageMainDiv.classList.add("row");
            languageDivImageHTML = document.createElement("div");
            languageDivImageHTML.classList.add('col-4');
            languageDivImageHTML.classList.add("text-center");

            languageDivDescriptionHTML = document.createElement("div");  
            languageDivDescriptionHTML.classList.add('col-8');

            var langTitleHTML = document.createElement("h2");
            langTitleHTML.textContent = language.toUpperCase();

            var langDescriptionHTML = document.createElement("p");
            langDescriptionHTML.textContent = langDescriptionContent;

            var langImgHTML = document.createElement("img");
            langImgHTML.classList.add("img-fluid");
            langImgHTML.classList.add("w-50");
            langImgHTML.src = langImgUrl;

            // Append HTML Elements
            descSection.appendChild(languageMainDiv);
            languageMainDiv.appendChild(languageDivImageHTML);
            languageMainDiv.appendChild(languageDivDescriptionHTML);
            languageDivDescriptionHTML.appendChild(langTitleHTML);
            languageDivDescriptionHTML.appendChild(langDescriptionHTML);
            languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.kotlin.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.kotlin.name;
            langDescriptionContent = languagesЈSОN.kotlin.description;
            langImgUrl = languagesЈSОN.kotlin.imgURL;

            //Create HTML Elements & Add Class
            languageKotlinMainDivHTML = document.createElement("div");
            languageKotlinMainDivHTML.setAttribute("id", langTitleContent.toLowerCase());
            languageKotlinMainDivHTML.classList.add("row");
            languageDivImageHTML = document.createElement("div");
            languageDivImageHTML.classList.add('col-4');
            languageDivImageHTML.classList.add("text-center");

            languageDivDescriptionHTML = document.createElement("div");  
            languageDivDescriptionHTML.classList.add('col-8');

            var langTitleHTML = document.createElement("h2");
            langTitleHTML.textContent = language.toUpperCase();

            var langDescriptionHTML = document.createElement("p");
            langDescriptionHTML.textContent = langDescriptionContent;

            var langImgHTML = document.createElement("img");
            langImgHTML.classList.add("img-fluid");
            langImgHTML.classList.add("w-50");
            langImgHTML.src = langImgUrl;
            mainDivArray.push(languageKotlinMainDivHTML);

            // Append HTML Elements
            descSection.appendChild(languageKotlinMainDivHTML);
            languageKotlinMainDivHTML.appendChild(languageDivImageHTML);
            languageKotlinMainDivHTML.appendChild(languageDivDescriptionHTML);
            languageDivDescriptionHTML.appendChild(langTitleHTML);
            languageDivDescriptionHTML.appendChild(langDescriptionHTML);
            languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.ruby.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.ruby.name;
            langDescriptionContent = languagesЈSОN.ruby.description;
            langImgUrl = languagesЈSОN.ruby.imgURL;

            //Create HTML Elements & Add Class
            languageRubyMainDivHTML = document.createElement("div");
            languageRubyMainDivHTML.setAttribute("id", langTitleContent.toLowerCase());
            languageRubyMainDivHTML.classList.add("row");
            languageDivImageHTML = document.createElement("div");
            languageDivImageHTML.classList.add('col-4');
            languageDivImageHTML.classList.add("text-center");

            languageDivDescriptionHTML = document.createElement("div");  
            languageDivDescriptionHTML.classList.add('col-8');

            var langTitleHTML = document.createElement("h2");
            langTitleHTML.textContent = language.toUpperCase();

            var langDescriptionHTML = document.createElement("p");
            langDescriptionHTML.textContent = langDescriptionContent;

            var langImgHTML = document.createElement("img");
            langImgHTML.classList.add("img-fluid");
            langImgHTML.classList.add("w-50");
            langImgHTML.src = langImgUrl;
            mainDivArray.push(languageRubyMainDivHTML);

            // Append HTML Elements
            descSection.appendChild(languageRubyMainDivHTML);
            languageRubyMainDivHTML.appendChild(languageDivImageHTML);
            languageRubyMainDivHTML.appendChild(languageDivDescriptionHTML);
            languageDivDescriptionHTML.appendChild(langTitleHTML);
            languageDivDescriptionHTML.appendChild(langDescriptionHTML);
            languageDivImageHTML.appendChild(langImgHTML);
        }          
        else if(languagesЈSОN.php.name.toLowerCase() == language.toLowerCase()){
            langTitleContent = languagesЈSОN.php.name;
            langDescriptionContent = languagesЈSОN.php.description;
            langImgUrl = languagesЈSОN.php.imgURL;

            //Create HTML Elements & Add Class
            languagePHPMainDivHTML = document.createElement("div");
            var id = languagePHPMainDivHTML.setAttribute("id", langTitleContent.toLowerCase());
            languagePHPMainDivHTML.classList.add(ButtonId)
            divID = id;
            languagePHPMainDivHTML.classList.add("row");
            languageDivImageHTML = document.createElement("div");
            languageDivImageHTML.classList.add('col-4');
            languageDivImageHTML.classList.add("text-center");

            languageDivDescriptionHTML = document.createElement("div");  
            languageDivDescriptionHTML.classList.add('col-8');

            var langTitleHTML = document.createElement("h2");
            langTitleHTML.textContent = language.toUpperCase();

            var langDescriptionHTML = document.createElement("p");
            langDescriptionHTML.textContent = langDescriptionContent;

            var langImgHTML = document.createElement("img");
            langImgHTML.classList.add("img-fluid");
            langImgHTML.classList.add("w-50");
            langImgHTML.src = langImgUrl;
            mainDivArray.push(languagePHPMainDivHTML);

            // Append HTML Elements
            descSection.appendChild(languagePHPMainDivHTML);
            languagePHPMainDivHTML.appendChild(languageDivImageHTML);
            languagePHPMainDivHTML.appendChild(languageDivDescriptionHTML);
            languageDivDescriptionHTML.appendChild(langTitleHTML);
            languageDivDescriptionHTML.appendChild(langDescriptionHTML);
            languageDivImageHTML.appendChild(langImgHTML);
        }
    }
}

function deleteCheck(e) {
    var item = e.target;
    // console.log(e.target);
    //Delete Language Name
    if(item.classList[0] === 'trash-btn'){
        var todo = item.parentElement;
        todo.classList.add("fall");        
        
        for (var index = 0; index < languagesList.length; index++) {
            if(ButtonId == divID){
                var element = document.getElementsByClassName(divID);
                element.remove();
            }
        }
        todo.remove();
    };

    //Check Mark
    if(item.classList[0] === 'complete-btn'){
        var todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}