
const getBeers = (url) =>{ 

 return fetch(url)
.then((response) => {
	
	return response.json()
})
.then((data)=>{
	
	return data
	
})
.catch(er=>{
	console.log(er)
})
}