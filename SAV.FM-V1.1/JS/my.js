$(document).ready(function() {  
    //Show all 
    $(".genre").click(function () {
     $("tr.rap, tr.RB, tr.Rock, tr.Indie, tr.Dance, tr.Metal ") .show(500)
   });
   //Show Rap genre and hide the others 
     $(".rapp").click(function () {
     $(".rap").show(500) 
     $("tr.RB, tr.Rock, tr.Indie, tr.Dance, tr.Metal").hide("slow")
   });
   //Show r&b
    $(".rbb").click(function () {
    $(".RB").show(500) 
    $("tr.rap, tr.Rock, tr.Indie, tr.Dance, tr.Metal").hide("slow")
   });
   //Show Rock
    $(".rockk").click(function () {
    $(".Rock").show(500) 
    $("tr.rap, tr.RB, tr.Indie, tr.Dance, tr.Metal").hide("slow")
   });
    //Show indie
    $(".indiee").click(function () {
    $(".Indie").show(500) 
    $("tr.rap, tr.RB, tr.Rock, tr.Dance, tr.Metal").hide("slow")
   });
   //Show Dance
   $(".dancee").click(function () {
    $(".Dance").show(500) 
    $("tr.rap, tr.RB, tr.Rock, tr.Indie, tr.Metal").hide("slow")
   });
   //Show metal
    $(".metall").click(function () {
    $(".Metal").show(500) 
    $("tr.rap, tr.RB, tr.Rock, tr.Indie, tr.Dance").hide("slow")
   });


   
});