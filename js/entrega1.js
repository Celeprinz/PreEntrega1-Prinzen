 let stock_Manzanas = 0
 let cantidad = 0
 


function recepcion() {
    stock_Manzanas = stock_Manzanas + cantidad
    return stock_Manzanas
        
}
function despacho(){
    stock_Manzanas = stock_Manzanas - cantidad
    return stock_Manzanas
    }

    

    let realizarTransaccion = prompt("Desea realizar una transaccion?")
    while(realizarTransaccion!="no") {
         
    let transaccion = prompt("Que transaccion desea realizar?") 

    const producto = prompt("Ingrese el producto") 

    if(producto === "manzanas") {

        cantidad = parseInt(prompt("Ingrese la cantidad"))
                
        if(transaccion=="recepcion"){
       
                     recepcion()
                     console.log(stock_Manzanas)  }
      
      
        else if(transaccion==="despacho"){
       
            despacho(cantidad)  
            console.log(stock_Manzanas) 
        }

        else {
           alert("Transaccion incorrecta")}

        }

     else {
     alert("Producto incorrecto")
     }

     realizarTransaccion = prompt("Desea realizar una transaccion?")
    }
   
