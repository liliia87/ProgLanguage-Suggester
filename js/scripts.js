$(document).ready(function(){
    $("form#form1").submit(function(event){
        event.preventDefault();
        //$("#output").html("");
        const userName = $("#name").val();
        const progExp = $("#purpose").val();
        const selectOfProgLang = $("#purpose1").val();
        const typeOfProgramming = $("input:radio[name=purpose3]:checked").val();
        const hoursPerDay = parseInt($("#hours").val());
        const t = $("#volume").val();
        let message = "";
        


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
            if(hoursPerDay < 3){
                message = "Dear " + userName + ", the best language for you is Python. With "+t+"% of success";
            } else{ 
                if (selectOfProgLang == "Yes" && typeOfProgramming == "Back end"){
                    message = "Dear " + userName + ", the best language for you is C++. With "+t+"% of success";
                }
                if (selectOfProgLang == "No" && typeOfProgramming == "Front end"){
                    message = "Dear " + userName + ", the best language for you is Ruby. With "+t+"% of success";
                }
                if (selectOfProgLang == "No" && typeOfProgramming == "Back end"){
                    message = "Dear " + userName + ", the best language for you to start is Python. With "+t+"% of success";
                }
                if (selectOfProgLang == "Yes" && typeOfProgramming == "Front end"){
                    message = "Dear " + userName + ", the best language for you is JavaScript. With "+t+"% of success";
                }
            }
        } else{
            if(hoursPerDay < 3){
                message = "Dear " + userName + ", the best language for you is Python. With "+t+"% of success";
            } else{
                if (selectOfProgLang == "Yes" && typeOfProgramming == "Back end"){
                    message = "Dear " + userName + ", the best language for you is C++. With "+t+"% of success";
                }
                if (selectOfProgLang == "No" && typeOfProgramming == "Front end"){
                    message = "Dear " + userName + ", the best language for you is JavaScript. With "+t+"% of success";
                }
                if (selectOfProgLang == "No" && typeOfProgramming == "Back end"){
                    message = "Dear " + userName + ", the best language for you is Python. With "+t+"% of success";
                }
                if (selectOfProgLang == "Yes" && typeOfProgramming == "Front end"){
                    message = "Dear " + userName + ", the best language for you is JavaScript. With "+t+"% of success";
                }
            }
        }

        $("#output").fadeOut("slow", function() {
            $("#output").html(message);
        });

        $("#output").fadeIn('slow');
         
    });



});