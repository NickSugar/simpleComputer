function computer(){
	var programCode = [
{
    command: 'print',
    parameter: 'Starting program run'
},
{
    command: 'double',
    parameter: 7
},
{
    command: 'print',
    parameter:'Number doubled'
},
{
    command: 'print',
    parameter: 'program execution ended'    
}
]
	function print(){
		console.log(programCode[i].parameter);
	}

	function double(Number){
		console.log(Number *2);
	}
	for (var i = 0; i <= programCode.length; i++){
		if(programCode[i].command==='print'){
			print();
		};	 
		if(programCode[i].command==='double'){
			double(programCode[i].parameter);
		};
	}
}

computer();








