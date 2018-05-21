
var prompt = require("prompt");
prompt.get(['a','b','c','d','e','f'], function (err,sist_ecu){
	var ai=Number(sist_ecu.a);
	var bi=Number(sist_ecu.b);
	var ci=Number(sist_ecu.c);
	var di=Number(sist_ecu.d);
	var ei=Number(sist_ecu.e);
	var fi=Number(sist_ecu.f);
	var rest=(ai*ei)-(bi*di);
		if(rest===0)
			{		
			console.log("No se puede dividir entre cero");
			}
		else if(rest !==0)
			{
		var x=((ci*ei)-(bi*fi))/((ai*ei)-(bi*di));
		var y=((ai*fi)-(ci*di))/((ai*ei)-(bi*di));
		console.log("El valor de x es:",x);
		console.log("El valor de y es",y);
			}
});
