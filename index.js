// const sabiha =()=>{
//       fetch('https://randomuser.me/api/?results=5')
//       .then(res=>res.json())
//       .then(data=>jahan(data.results))
// }
// const jahan=(values)=>{
//       console.log(values)
// }
// sabiha()

const sabiha = () =>{
      fetch('https://randomuser.me/api/?results=50')
      .then(res=>res.json())
      .then(data=>jahan(data.results))
}
// const jahan = (value) =>{
//       for(const information of value){
//             console.log(information.gender)
//       }
// }
const firstDiv = document.getElementById('first-div')
const jahan = (value) =>{
      const result = value.forEach(values=>{
            // console.log(values)
            const div = document.createElement('div')
            div.style.border = '2px solid black'
            div.innerHTML = `<p>${values.name.title} ${values.name.first} ${values.name.last}</p>
            <img  src= "${values.picture.thumbnail}"  alt="img" /> <br>
            <button onclick = "anotherFunction(${values.login.uuid})">Get Details</button>
            `
            firstDiv.appendChild(div)
      })
}

const anotherFunction = (parametre) =>{
      console.log(parametre)
}
sabiha()