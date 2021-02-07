fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
  .then(response => response.json())
  .then(json => console.log(json))

  