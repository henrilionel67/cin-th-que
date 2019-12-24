var ajaxRequete = new XMLHttpRequest();
var titre = document.getElementById("film");//contenu du champ


var btn =document.getElementById("btn");
btn.addEventListener("click",function(){

})
var key ="f9fdb27834290807bff4be0f15bd2589"    // authentification
btn = document.getElementById("btn");// button 
btn.addEventListener("click",function() { // ajout evt 
    // onreadystatechange vérication
    ajaxRequete.onreadystatechange =function() {
        if(ajaxRequete.readyState===4 &&ajaxRequete.status===200) {// charg info
            console.log(ajaxRequete.response);
            var films =JSON.parse(ajaxRequete.response); // fichier en objet
            console.log(films);
        }

    };
    // ajx open recherche
    ajaxRequete.open("GET", "https://api.themoviedb.org/3/search/movie?api_key="+ key + "&query=" + titre.value+"&language=fr-FR" , true);
    // ajax send récupère
    ajaxRequete.send();

});

