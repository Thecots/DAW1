function mesa(){
    console.log("Abriendo menu mesas")
    document.getElementById("a-mesa").style.display="block";

}

var canvas = new fabric.Canvas('canvas');  


function redonda(){
    document.getElementById("a-mesa").style.display="none";
        fabric.Image.fromURL('img/mesa-redonda.png', function(mesa_redonda) {
            var mesa_redonda = mesa_redonda.scale(0.25).set({ left: 0, top: 0 });
                canvas.add(new fabric.Group([mesa_redonda], { left: 450, top: 210 }))
        });
}

function cuadrada(){
    document.getElementById("a-mesa").style.display="none";
        fabric.Image.fromURL('img/mesa-cuadrada.png', function(mesa_cuadrada) {
            var mesa_cuadrada = mesa_cuadrada.scale(0.25).set({ left: 0, top: 0 });
                canvas.add(new fabric.Group([mesa_cuadrada], { left: 450, top: 210 }))
        });
    console.log("Añdiendo mesa cuadrada")

}

function rectangular(){
    document.getElementById("a-mesa").style.display="none";
        fabric.Image.fromURL('img/mesa-rectangular.png', function(mesa_rectangular) {
            var mesa_rectangular = mesa_rectangular.scale(0.25).set({ left: 0, top: 0 });
                canvas.add(new fabric.Group([mesa_rectangular], { left: 390, top: 210 }))
        });
    console.log("Añdiendo mesa rectangular")

}

function silla(){
    document.getElementById("a-mesa").style.display="none";
    fabric.Image.fromURL('img/silla.png', function(silla) {
        var silla = silla.scale(0.25).set({ left: 0, top: 0 });
            canvas.add(new fabric.Group([silla], { left: 480, top: 240 }))
    });
    console.log("Añdiendo silla")
}

function borrar(){
    console.log("borrar mesa/silla")
    canvas.remove(canvas.getActiveObject());
}

window.onkeydown = presionar_tecla;

function presionar_tecla(){
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            console.log("Cerrando añadir mesa")
            document.getElementById("a-mesa").style.display="none";
        }
        if(event.key == 'Backspace') {
            console.log("borrar mesa/silla")
            canvas.remove(canvas.getActiveObject());
        }else{
            console.log(event.key)
        }

      });
}



