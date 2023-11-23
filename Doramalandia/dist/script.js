var nomes = ["King the Land",
             "True Beauty",
             "A Business Proposal",
             "Crash Landing on You",
             "Itaewon Class",
             "It's Okay to Not Be Okay"];

var listaFilmes = ["https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYFCS-4sX2yu-h3J5MxRThqg_73xyfycIL6_870zneERMTLhwJ","https://i.pinimg.com/736x/79/06/1a/79061ad0a66b771b9c400fd780f8865b.jpg", "https://media.fstatic.com/un-0RsK54_7_bab5Q8ELukivy2Q=/322x478/smart/filters:format(webp)/media/movies/covers/2022/02/FK9jOgqaQAAaBDc.jpg","https://br.web.img3.acsta.net/pictures/20/03/29/03/16/1391037.jpg","https://i.pinimg.com/564x/b0/c7/ea/b0c7eade9e99fce2a294c3a22f4368cf.jpg","https://br.web.img3.acsta.net/pictures/20/07/20/21/56/0290110.jpg"];

// listaFilmes[0] = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYFCS-4sX2yu-h3J5MxRThqg_73xyfycIL6_870zneERMTLhwJ";
//listaFilmes[1] = "https://i.pinimg.com/736x/79/06/1a/79061ad0a66b771b9c400fd780f8865b.jpg";
//listaFilmes[2] = "https://media.fstatic.com/un-0RsK54_7_bab5Q8ELukivy2Q=/322x478/smart/filters:format(webp)/media/movies/covers/2022/02/FK9jOgqaQAAaBDc.jpg";
//listaFilmes[3] = "https://br.web.img3.acsta.net/pictures/20/03/29/03/16/1391037.jpg";
// listaFilmes[4] = "https://i.pinimg.com/564x/b0/c7/ea/b0c7eade9e99fce2a294c3a22f4368cf.jpg";
//listaFilmes[5]= "https://br.web.img3.acsta.net/pictures/20/07/20/21/56/0290110.jpg";


for(var i=0; i<listaFilmes.length; i++){
  document.write("<div style='display: inline-block; margin: 10px;'>");
  document.write('<img src=' + listaFilmes[i] +'>');
  document.write("<p style='color: white'>" + nomes[i]+ "</p>")
     document.write("</div>")

   

}