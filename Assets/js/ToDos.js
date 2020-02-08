console.log("Connected!");

// Adding .on() to replace .click, allows the dom to update functions on all elements as they are added, but it must first be attached to elements that exist at the time the page first loads...so if you want .on("click") for an li, then you need to first select the parent element...in this case $("ul").on("click", "li", function(){...) 



$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grab input text
        var toDoText = $(this).val();
        // append to toDo List
        // BugFix - originally; before refactoring there was a placeholder "X" in the span for deleting rather than the fontAwesome trash can, and any appended toDos did not update with the trash can, so the look was inconsistent.
        $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + toDoText + "</li>");
        $(this).val("");

    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})