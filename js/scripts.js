$(document).ready(function(){
    $("form#form1").submit(function(event){
        event.preventDefault();
        const userName = $("#name").val();
        const progExp = $("#purpose").val();
        const selectOfProgLang = $("#purpose1").val();
        const typeOfProgramming = $("input:radio[name=purpose3]:checked").val();
        const hoursPerDay = parseInt($("#hours").val());
        const x = document.getElementById("volume");
        const defaultVal = x.defaultValue;
        const currentVal = x.ariaValueMax;

        // if(progExp == "Yes" && selectOfProgLang == "Yes" && typeOfProgramming == "Back end"){
        //    $("#quote").html(". Dear " + userName + " the best language for you is C++"); 
        // }
        // if(progExp == "No" && selectOfProgLang == "No" && typeOfProgramming == "Front end"){
        //     $("#quote").html(". Dear " + userName + " the best language for you is JavaScript"); 
        //  } 
        //  if(progExp == "No" && selectOfProgLang == "No" && typeOfProgramming == "Front end"){
        //     $("#quote").html(". Dear " + userName + " the best language for you is JavaScript"); 
        //  }  
        if (progExp == "Yes"){
            if (selectOfProgLang == "Yes" && typeOfProgramming == "Back end"){
                $("#quote").html(". Dear " + userName + ", the best language for you is C++");
            }
            if (selectOfProgLang == "No" && typeOfProgramming == "Front end"){
                $("#quote").html(". Dear " + userName + ", the best language for you is Python, Ruby");
            }
            if (selectOfProgLang == "No" && typeOfProgramming == "Back end"){
                $("#quote").html(". Dear " + userName + ", the best language for you is Python, C++");
            }
            if (selectOfProgLang == "Yes" && typeOfProgramming == "Front end"){
                $("#quote").html(". Dear " + userName + ", the best language for you is Ruby, C++");
            }
        } else{
            if(hoursPerDay<3){
                $("#quote").html(". Dear " + userName + ", the better way to star is reading!");
            } else{
                if (selectOfProgLang == "Yes" && typeOfProgramming == "Back end"){
                    $("#quote").html(". Dear " + userName + ", the best language for you is JavaScript");
                }
                if (selectOfProgLang == "No" && typeOfProgramming == "Front end"){
                    $("#quote").html(". Dear " + userName + ", the best language for you is JavaScript");
                }
                if (selectOfProgLang == "No" && typeOfProgramming == "Back end"){
                    $("#quote").html(". Dear " + userName + ", the best language for you is JavaScript");
                }
                if (selectOfProgLang == "Yes" && typeOfProgramming == "Front end"){
                    $("#quote").html(". Dear " + userName + ", the best language for you is JavaScript");
                }
            }
        }
    });

});