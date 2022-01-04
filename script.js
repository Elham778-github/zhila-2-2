$(document).ready(function(){
    $("a[href^='#']").on("click" , function(){
        if(this.hash!==""){
            event.preventDefault();
            var hash=this.hash;
        }
    })
})