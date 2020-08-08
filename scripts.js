

 var request = new XMLHttpRequest()
 request.open('GET', 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true)
 request.onload = function() {
 var data = JSON.parse(this.response)
 console.log(data)
 }
 request.onerror=function(){console.log("Error")}
 request.send()

var request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
request.onload = function() {
 var data = JSON.parse(this.response)
 var asia= data.filter((item)=>{ 
     return item.region=="Asia"})
 var population=data.filter((item)=>{
	 return item.population<200000})
 var currentPop= data.map((item)=>{
	 var value=item.population
	 curpopulation=value+100000;
	 return curpopulation})
var capName=data.map((item)=>{
	name=item.name.toUpperCase();
	return name
})
var alldetail=data.filter((item)=>{console.log(item.name, item.flag, item.capital)})
 data.forEach((item)=>{
	console.log("name:",item.name, " ","falg:", item.flag ," ","capital:", item.capital)
	
})
var totalPopulation= data.reduce((currentvalue,item)=>{return item.population+currentvalue},0)

var total=data.filter((item)=>{return item.region=="Asia"})
var totalAsiaPop=total.reduce((currentvalue,item)=>{return item.population+currentvalue},0)
console.log(data)
console.log("countries in Asia:",asia)
console.log("population less than 2L:",population)
console.log("Bumpup Population by 1L:",currentPop)
console.log("convert all names in Capital:",capName)
console.log("total population:",totalPopulation)
console.log("total Asia Population:",totalAsiaPop)

}
request.send()