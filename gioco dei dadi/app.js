//player vs pc
//genero numeri random da 1 a 6

//random number player
const randomNumberPlayer = Math.floor(Math.random() * 6);

//random number pc
const randomNumberPc = Math.floor(Math.random() * 6);


for (let i = 0; i <= 6; i++) {
    if (randomNumberPlayer > randomNumberPc) {
        //se il numero random player è maggiore del numero random del pc, vince il player
        alert("player win");
    } 

    if (randomNumberPc > randomNumberPlayer) {
        //se il numero random pc è maggiore del numero random del player, vince il pc
        alert("pc win");
    }
}

console.log(randomNumberPlayer)
console.log(randomNumberPc)





