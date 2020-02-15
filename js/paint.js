
{
const painter = {};


painter.colors = ['black', 'blue', 'red', 'yellow', 'green', 'purple', 'brown', 'orange'];
painter.currentColor = "black";
painter.currentTool = "pen";





painter.insertColors = () => {

    for (const color of painter.colors) {
        var newElement = document.createElement('div');
        newElement.setAttribute('id', color);
        newElement.setAttribute('class', "hvr-box-shadow-outset colors_opacity hvr-outline-in");
        newElement.style.backgroundColor = color;
        newElement.style.width = '40px';
        newElement.style.height = '40px';
        newElement.style.cursor="pointer";
        newElement.style.border = `'${color} 2px solid'`;
        newElement.style.borderRadius="5px";
        newElement.style.borderStyle="ridge";

        document.querySelector("#colors-bar").appendChild(newElement);




    }
}

painter.insertColors();





var my_canvas = document.querySelector("#canvas");
var my_color_bar = document.querySelector('#colors-bar');
var my_left_menu = document.querySelector('#left-menu');
var clear_btn=document.querySelector('#clear');
var edit_size_btn=document.querySelector('#edit_size');
var save_btn=document.querySelector('#save');
var my_middle=document.querySelector('#middle');





painter.initializer = (canvas_height = 500, canvas_width = 500) => {

    my_canvas.style.height = `${canvas_height}px`;
    my_canvas.style.width = `${canvas_width}px`;




    var flag = true;




    painter.draw = () => {

        if (flag) {


            var new_Div = document.createElement('div');
            document.body.appendChild(new_Div);
            new_Div.style.position = "absolute";
            new_Div.style.left = `${event.pageX}px`;
            new_Div.style.top = `${event.pageY}px`;
            new_Div.style.backgroundColor = painter.currentColor;

            if (painter.currentTool == "pen") {
                new_Div.style.width = "2px";
                new_Div.style.height = "2px";
            }
            else if (painter.currentTool == "eraser") {
                new_Div.style.backgroundColor = "white";
                new_Div.style.borderRadius="50%";
                new_Div.style.width = "30px";
                new_Div.style.height = "30px";

            }

            else if (painter.currentTool == "brush") {
                new_Div.style.width = "7px";
                new_Div.style.height = "7px";

            }


        }
       
    }


    painter.stop = () => {
        flag = false;
        // return flag;
    }


    painter.start = () => {
        flag = true;

    }


    my_canvas.addEventListener('mousedown', () => { my_canvas.addEventListener('mousemove', painter.draw) });
    window.addEventListener('mouseup', painter.stop);
    window.addEventListener('mousedown', painter.start);



    changeColor = () => {

        var temp = event.target;

        if (temp.id == "colors-bar") {
            return;
        }
        painter.currentColor = temp.id;


    }


    my_color_bar.addEventListener('click', changeColor);


    changeTool = () => {

        var temp = event.target;
        if (temp.id == "left-menu" || temp.id == "clear") {
            return;
        }

        painter.currentTool = temp.id;


    }

    my_left_menu.addEventListener('click', changeTool);



painter.clear=()=>{


    location.reload();
    

}

clear_btn.addEventListener("click",painter.clear);








painter.change_canvas_size=()=>{


    var canvas_height = prompt("Insert the Height of your canvas:");
    var canvas_width = prompt("Insert the Width of your canvas:");
    
    
    
    if((isNaN(canvas_height)) || (isNaN(canvas_width)) || (canvas_height=='') || (canvas_width=='') ) {
        canvas_height=500;
        canvas_width=500;
    
    }
    
    
    painter.initializer(canvas_height,canvas_width);
    
    

    }




edit_size_btn.addEventListener('click',painter.change_canvas_size)






painter.save = () => {
    localStorage.setItem('currentTool', JSON.stringify(painter.currentTool));
    localStorage.setItem('currentColor', JSON.stringify(painter.currentColor));
    localStorage.setItem('colors', JSON.stringify(painter.colors));
    // localStorage.setItem('divs', JSON.stringify(new_Div.innerHTML));
    // localStorage.setItem('colors', JSON.stringify(my_canvas));
  	
    
    
    alert('Saved!');
}

save_btn.addEventListener('click',painter.save);



// var load_btn=document.querySelector('#load');

// painter.load=()=>{

    
//         const divs = JSON.parse(localStorage.getItem("canvas"));
//         divs.forEach((div) =>  canvas.appendChild(new DOMParser().parseFromString(div,"text/xml").documentElement));
      
      
// }


// load_btn.addEventListener('click',painter.load);


}








painter.initializer();


}