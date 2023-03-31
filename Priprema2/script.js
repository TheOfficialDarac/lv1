//  Zad.3)
var oPredmet={
    naziv: "Web Programiranje",
    opis: "web programiranje",
    ects_bodovi: 9
};
// Zad.7)
$(document).ready(function(){
    let selected = $("ul li:first-child[data-oib]");
    selected.mouseover(function(){
        alert("Ovo radi.");
    })
})

//  Zad.9)
$(document).ready(function(){
    let item=$("h1");
    item.mouseover(function(){
        alert("Klik se desio.");
    })
});
