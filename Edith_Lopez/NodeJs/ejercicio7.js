var prompt = require("prompt");
    prompt.start();
    prompt.get(["numbera", "numberb", "numberc", "numberd", "numbere", "numberf"], function (err, result) {
     var numbera =Number(result.numbera);
     var numberb =Number(result.numberb);
     var numberc =Number(result.numberc);
     var numberd =Number(result.numberd);
     var numbere =Number(result.numbere);
     var numberf =Number(result.numberf);
     var x = ((numberc*numbere)-(numberb*numberf))/((numbera*numbere)-(numberb*numberd));
     console.log(x);

});
