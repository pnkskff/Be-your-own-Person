document.querySelector('#birthPerson').addEventListener('click', personFace)
document.querySelector('#birthInfo').addEventListener('click', personInfo)
document.querySelector('#birthQuote').addEventListener('click', personQuote)


function personFace(){

    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.message
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

function personInfo(){

    fetch('https://random-data-api.com/api/users/random_user')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('#personInfo').innerText = data.first_name
    })
    .catch(err => {
        console.log(`error ${err}`)
      });
     }

function personQuote(){
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('#personQuote').innerText = data.quotes[0].text
    })
    .catch(err => {
        console.log(`error ${err}`)
      });
    }
