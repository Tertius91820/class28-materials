
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem("books")


function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  if(!choice){
    return
  }

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        //put title into localstarage
        if(!localStorage.getItem("books")){
          localStorage.setItem("books",data.title)
        }else{
          let books = localStorage.getItem("books")  + " ;\n " + data.title
          localStorage.setItem("books", books)
    
        }
        
        document.querySelector('h2').innerText = localStorage.getItem("books")
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

