function sym(args) {
var t=[];
args = Array.from(arguments);
for(i=0;i<args.length-1;i++)
{
	for(j=0;j<args[i].length;j++)
    {
    	if(args[i+1].indexOf(args[i][j])==-1 && t.indexOf(args[i][j])==-1)
          t.push(args[i][j]);
     }
    
    for(k=0;k<args[i+1].length;k++)
    {
    	if(args[i].indexOf(args[i+1][k])==-1 && t.indexOf(args[i+1][k])==-1)
          t.push(args[i+1][k]);
     }
    args[i+1]=t;
    t=[];
  }
return args[i];

}