const boxs = document.querySelectorAll(".app .canvas .box");
const resultInner = document.querySelector(".app .res p");
let xOrY = false; // false == x / true == y;
const results = [];
let randRes = [0,1,2,3,4,5,6,7,8];

let resultChecker = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let win = false;
console.log(resultChecker)
for(let k = 0; k < boxs.length; k++){
	boxs[k].addEventListener("click", (e) => {
		const classList = e.target.classList;
		if(xOrY === false && !classList.contains("o") && !classList.contains("x") && win != true){
		   e.target.classList.add("x");
			xOrY = true;
			const i = document.createElement("i");
			i.classList.add("fa-solid");
			i.classList.add("fa-x");
			e.target.append(i); 
			results[k] = "x";
			randRes = randRes.filter(val => val != k);
			let check = checkBoxsX();
			
			if(typeof check === 'object'){
			   resultInner.innerHTML = "Win X";
			   win = true;
			 
			   boxs[check[0]].innerHTML = "W"
			   boxs[check[1]].innerHTML = "I"
			   boxs[check[2]].innerHTML = "N"
			   document.querySelector(".app .canvas").classList.add("winnerX");
			}
			let ran = rand();
			let randApp = randRes[ran];
			
			
			if(k == 0){
			   resultChecker[0].push("0");
			   resultChecker[3].push("0");
			   resultChecker[6].push("0");
			} else if(k == 1){
			   resultChecker[0].push("1");
			   resultChecker[4].push("1");	  
			} else if(k == 2){
			   resultChecker[0].push("2");
			   resultChecker[5].push("2");	
			   resultChecker[7].push("2");	
			} else if(k == 3){
			   resultChecker[1].push("3");
			   resultChecker[3].push("3");	
			} else if(k == 4){
			   resultChecker[1].push("4");
			   resultChecker[4].push("4");	
			   resultChecker[7].push("4");	
			   resultChecker[6].push("4");	
			} else if(k == 5){
			   resultChecker[1].push("5");
			   resultChecker[5].push("5");	
			} else if(k == 6){
			   resultChecker[2].push("6");
			   resultChecker[3].push("6");	
			   resultChecker[7].push("6");
			} else if(k == 7){
			   resultChecker[2].push("7");
			   resultChecker[4].push("7");	
			} else if(k == 8){
			   resultChecker[2].push("8");
			   resultChecker[5].push("8");	
			   resultChecker[7].push("8");	
			}
			
		      
			console.log(resultChecker);
			if(randRes[0] != undefined){
			setTimeout(() => {
				if(xOrY === true && !boxs[randApp].classList.contains("x") &&  !boxs[randApp].classList.contains("o") && win != true) {
					
				//logic
					
				
		  		if(resultChecker.every(value => value.length != 5)){
				 boxs[randApp].classList.add("o");
				xOrY = false;
				const y = document.createElement("i");
				y.classList.add("fa-solid");
				y.classList.add("fa-o");
				boxs[randApp].append(y); 
				results[randApp] = "o";
				randRes = randRes.filter(val => val != randApp);
				}else {
					for(let f = 0; f < resultChecker.length; f++){
						if(resultChecker[f].length == 5){
							let resultCheckerId = resultChecker[f].filter(valll => {
								if(valll != resultChecker[f][3] && valll != resultChecker[f][4] ){
								  return valll;
								 }
							})
							console.log(resultCheckerId)
							if(xOrY === true && !boxs[resultCheckerId].classList.contains("x") &&  !boxs[resultCheckerId].classList.contains("o") && win != true){
							 	end(resultCheckerId);
							} else {
								end(randApp);
							}
							
							
							
							  function end(p){
								  if(xOrY === true && !boxs[p].classList.contains("x") &&  !boxs[p].classList.contains("o") && win != true){
							   		boxs[p].classList.add("o");
											xOrY = false;
											const y = document.createElement("i");
											y.classList.add("fa-solid");
											y.classList.add("fa-o");
											boxs[p].append(y); 
											results[p] = "o";
											randRes = randRes.filter(val => val != p);
											resultChecker[f].push("x");
								  } else {
								  
								  }
							   }
							   		
						}
					}
				}
					
					let check2 = checkBoxsY();
					if(typeof check2 === 'object'){
			  	 		resultInner.innerHTML = "Win O";
						win = true;
						 boxs[check2[0]].innerHTML = "W"
			  			 boxs[check2[1]].innerHTML = "I"
			  			 boxs[check2[2]].innerHTML = "N"
			  			 document.querySelector(".app .canvas").classList.add("winnerO");
					}
				   
				} 
				
			}, 500)
			}
		}
	})
}
console.log(results)
function checkBoxsX(){
	if(results[0] === "x" && results[1] === "x" && results[2] === "x"){
	   return [0,1,2];
	} else if(results[3] === "x" && results[4] === "x" && results[5] === "x") {
		return [3,4,5]; 
	} else if(results[6] === "x" && results[7] === "x" && results[8] === "x") {
		return [6,7,8]; 
	} else if(results[6] === "x" && results[7] === "x" && results[8] === "x") {
		return [6,7,8]; 
	} else if(results[0] === "x" && results[3] === "x" && results[6] === "x") {
		return [0,3,6];
	} else if(results[1] === "x" && results[4] === "x" && results[7] === "x") {
		return [1,4,7];  
	} else if(results[2] === "x" && results[5] === "x" && results[8] === "x") {
		return [2,5,8];  
	} else if(results[0] === "x" && results[4] === "x" && results[8] === "x") {
		return [0,4,8];  
	}  else if(results[2] === "x" && results[4] === "x" && results[6] === "x") {
		return [2,4,6];  
	}
	return;
}

function checkBoxsY(){
	if(results[0] === "o" && results[1] === "o" && results[2] === "o"){
	   return [0,1,2];
	} else if(results[3] === "o" && results[4] === "o" && results[5] === "o") {
		return [3,4,5];  
	} else if(results[6] === "o" && results[7] === "o" && results[8] === "o") {
		return [6,7,8];  
	} else if(results[6] === "o" && results[7] === "o" && results[8] === "o") {
		return [6,7,8];	  
	} else if(results[0] === "o" && results[3] === "o" && results[6] === "o") {
		return [0,3,6]; 
	} else if(results[1] === "o" && results[4] === "o" && results[7] === "o") {
		return [1,4,7];	  
	} else if(results[2] === "o" && results[5] === "o" && results[8] === "o") {
		return [2,5,8];	  
	} else if(results[0] === "o" && results[4] === "o" && results[8] === "o") {
		return [0,4,8];	  
	} else if(results[2] === "o" && results[4] === "o" && results[6] === "o") {
		return [2,4,6];	  
	} else {
		return;
	}
}

function rand() {
	   return Math.floor(Math.random() * randRes.length); 
}

