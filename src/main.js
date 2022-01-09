function buscar() {
    const tableReg = document.getElementById('tabla');
    const searchText = document.getElementById('filtro').value.toLowerCase();
    let total = 0;

    // Recorremos todas las filas con contenido de la tabla
    for (let i = 1; i < tableReg.rows.length; i++) {
        // Si el td tiene la clase "noSearch" no se busca en su cntenido
        if (tableReg.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;
        const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        // Recorremos todas las celdas
        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            // Buscamos el texto en el contenido de la celda
            if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            // si no ha encontrado ninguna coincidencia, esconde la
            // fila de la tabla
            tableReg.rows[i].style.display = 'none';
        }
    }
}

/**
 * Funcion para ordenar una tabla... tiene que recibir el numero de columna a
 * ordenar y el tipo de orden
 * @param int n
 * @param str type - ['str'|'int']
 */
function ordenarTabla(n,type) {
let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

table = document.getElementById("tabla");
switching = true;
//Ordenar tabla en dirección ascendete
dir = "asc";

/*Bucle que se mantendrá en uso mientras no se hayan realizado los cambios*/

while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Con el for se toman todos los valores excepto los cabezales:*/
    for (i = 1; i < (rows.length - 1); i++) {

        shouldSwitch = false;
        /*Obtenemos los dos valores a comprobar */
       x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*Se comprueba si está en orden ascendente o descente:*/
        if (dir == "asc") {
            if ((type=="str" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) > parseFloat(y.innerHTML))) {
                //Sí se ha realizado cambiamos a true y se termina bucle
                shouldSwitch= true;
                break;
            }
        } else if (dir == "desc") {
            if ((type=="str" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) < parseFloat(y.innerHTML))) {
                //Sí se ha realizado cambiamos a true y se termina bucle
                shouldSwitch = true;
                break;
                }   
            }
    }
    if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;

        switchcount ++;
    } else {
        if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
            }
        }
    }
}

function imprimirEtiquetas(){
    let valor = document.getElementById("buscador").value;
    console.log(valor)

    var newLabel = document.createElement('label');
    newLabel.innerHTML = valor;
    
    var contenedor = document.getElementById('imprimir-etiquetas');
    contenedor.appendChild(newLabel);
}   