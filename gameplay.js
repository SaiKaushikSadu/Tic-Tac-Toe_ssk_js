let turn = "X";
const btn=document.querySelector(".restart");

function changeTurn() {
    if (turn === "X") return "O";
    else return "X";
}

let isgameOver=false;
let count=0;

function gameWin() {
    let boxtexts=document.querySelectorAll(".boxtxt");
    wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    let cou=-1;
    wins.forEach(e=>{
        cou++;
        if((boxtexts[e[0]].innerText==boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText==boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText!=""){
            isgameOver=true;
            document.getElementsByClassName("res")[0].innerText=`${boxtexts[e[0]].innerText} Wins!!`;
            setTimeout(function(){
                window.location.reload();
             }, 5000);
            // console.log(cou);
            document.getElementById(`${wins[cou][0]}`).style.backgroundColor="darkorange";
            document.getElementById(`${wins[cou][0]}`).style.color="black";
            document.getElementById(`${wins[cou][1]}`).style.backgroundColor="darkorange";
            document.getElementById(`${wins[cou][1]}`).style.color="black";
            document.getElementById(`${wins[cou][2]}`).style.backgroundColor="darkorange";
            document.getElementById(`${wins[cou][2]}`).style.color="black";
        }
    })
}

const boxes = document.getElementsByClassName("box");//box classname vale tho bhaut saare hai
// so use array
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtxt");
    element.addEventListener('click',function(){
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeTurn();
            count++;
            gameWin();
            if(!isgameOver && count!=9)
                document.getElementsByClassName("res")[0].innerText=`Turn for ${turn}`;
            else if(!isgameOver && count==9){
                document.getElementsByClassName("res")[0].innerText=`Its Draw :|`;
                // reset();
            }
        }
    })
})

btn.addEventListener('click',function(){
    let empty=document.querySelectorAll('.boxtxt');
    Array.from(empty).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isgameOver=false;
    document.getElementsByClassName("res")[0].innerText=`Turn for ${turn}`;
    location.reload();
})

// function reset(){
//     let empty=document.querySelectorAll('.boxtxt');
//     Array.from(empty).forEach(element=>{
//         element.innerText="";
//     })
//     turn="X";
//     isgameOver=false;
//     document.getElementsByClassName("res")[0].innerText=`Turn for ${turn}`;
// }



