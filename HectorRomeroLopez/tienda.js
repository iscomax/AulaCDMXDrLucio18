
var prompt = require("prompt");
prompt.start();
////
var k           = 0.0,
    res         = "S" ,
    pago        = 0.0,
    cambio      = 0.0,
    monto       = 0.0,
    iva         = 0.0,
    monto2      = 0.0;
//
//do {
        //funcion anonima ---> function no tiene nombre
         console.log("Dame el precio del producto y S para contiuar");
        //
        prompt.get(['precio_producto','continuar'],function(err,result){
        //console.log("Dame el precio del producto y  Continuar");
        monto = Number(result.precio_producto);
        iva = (monto * 0.16);
        monto2 = (monto + iva);
        res = result.continuar.toUpperCase();
        res = res.substr(0,1);
        //
	k = k + monto2;
        //
        //console.log("El monto de IVA es: " + iva);
        //alert("El monto de IVA es: "+ iva);
        //
        //alert("El total a pagar es: "+ monto2);
	if (res != "S"){ 

        	console.log("El total a pagar es: " + monto2);
		//
		console.log("Fin del programa " + res); 
		//break;
	}

        });
	//
	//
//} while (res = "S");
//
        //console.log("Dame el monto del pago");
        //alert("Dame el monto del pago");
        //
        //console.log("dame el monto del pago");
        //prompt.get(['pago'],function(err2,result2){
        //pago = Number(result2.pago);
        //
        //if(pago > monto2) {
        //        cambio = pago - monto2;
        //       //
        //        console.log("Su cambio es: " + cambio);
        //        }
        //});
        /*
        console.log("Si desea terminar oprima '0'");
        prompt.get(['desea_teminar'],function(err3,result3){
        if (result3.desea_terminar = "0")
                i = 0;
        else
                {
                        k = k + monto2;
                        i = i + 1;
                }
        });
        //
//}
*/
