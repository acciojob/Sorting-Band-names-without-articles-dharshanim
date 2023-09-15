//your code here
let mp={};
let touristSpots=['The Virupaksha Temple' , 'Victoria Memorial' , 'Tajmahal'];
let articleLessArray=[];
let articleLessItem=[];
for(let i=0;i<touristSpots.length;i++){
	articleLessItem=touristSpots[i].replace(/\bthe\b|\ban\b|\ba\b/gi, " ").trim();
	articleLessArray.push(articleLessItem);
	mp[articleLessArray]=touristSpots[i];
}
articleLessArray.sort();
let ans=[];
for(let i of articleLessArray){
	ans.push(mp[i]);
}
console.log(ans);