function mattynator()
{
    var text;     //Creates a variable called text
    text = document.getElementById("textinator").value;     //Saves the user input in the variable "text"
    text = text.replace(/ /g, "");      //Removes all spaces ("Hello there") by replacing them with nothing ("Hellothere")
    text = text.toUpperCase();      //Makes all text upper case("Hellothere" -> "HELLOTHERE")
    text = text.split('').join(" ");        //Adds spaces between all characters ("HELLO THERE" -> "H E L L O T H E R E")
    text = ("// " + text + " // L O V E");      //Adds the "// " and " // L O V E" at the end ("H E L L O T H E R E" -> "// H E L L O T H E R E // L O V E")
    document.getElementById("output").innerHTML = text;     //Outputs the result
}
