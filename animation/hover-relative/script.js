var color1 = ["#f34234", "#ffa726", "#9ccc65", "#42a5f5", "#4dd0e1", "#ab47bc"]
var color2 = ["#c62525", "#ffc107", "#7cb342", "#0d47a1", "#0097a7", "#4a148c"]
var color3 = ["#e63632", "#ffd600", "#4caf50", "#2962ff", "#00bcd4", "#8e24aa"]
var color4 = ["#fe6e3f", "#ffea00", "#64dd17", "#64b5f6", "#00e5ff", "#d500f9"]
var c = 0




$(document).ready(function () {
    $(".container").hover(function () {
        $("#a").css("transform", "rotateX(-180deg) rotateZ(-90deg)")
        $("#a1").css("transform", "rotateZ(0deg) rotateX(180deg)")
        $("#c1").css("transform", "rotateZ(-120deg) rotateX(-180deg)")
        $("#c4").css("transform", "rotateZ(120deg) rotateX(180deg)")

        v = (c++) % 6
        $(".triangle.color1").css("border-color", "transparent transparent " + color1[v] + " transparent")
        $(".triangle.color2").css("border-color", "transparent transparent " + color2[v] + " transparent")
        $(".triangle.color3").css("border-color", "transparent transparent " + color3[v] + " transparent")
        $(".triangle.color4").css("border-color", "transparent transparent " + color4[v] + " transparent")

    }, function () {
        $("#a").css("transform", "rotateX(0deg) rotateZ(0deg)")
        $("#a1").css("transform", "rotateZ(0deg) rotateX(0deg)")
        $("#c1").css("transform", "rotateZ(-120deg) rotateX(0deg)")
        $("#c4").css("transform", "rotateZ(120deg) rotateX(0deg)")
    })
})