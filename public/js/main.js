 
const plats = [

    {
        
        img: "../img/bluelagoon.jpg",
        nom: "BLUELAGOON",
        genre: "no fruit",
        chaleur: "froid",
        type: "alcool",
        prix: 10 + "$",
        icon: "../img/snowflake.png"

    },
    {
        
        img: "../img/pinklady.jpg",
        nom: "PINKLADY",
        genre: "fruit",
        chaleur: "froid",
        type: "no alcool",
        prix: 12 + "$",
        icon: "../img/snowflake.png"

    },
    {
        
        img: "../img/irish.jpg",
        nom: "IRISH",
        genre: "no fruit",
        chaleur: "chaud",
        type: "alcool",
        prix: 200 + "$",
        icon: "../img/coffee-cup.png"

    },
    {
        
        img: "../img/orange.jpg",
        nom: "SUNYFRESH",
        genre: "fruit",
        chaleur: "froid",
        type: "no alcool",
        prix: 500 + "$",
        icon: "../img/snowflake.png"

    },
    {
        
        img: "../img/Cocktail-sunrise.jpg",
        nom: "SUNRISE",
        genre: "fruit",
        chaleur: "froid",
        type: "no alcool",
        prix: 10000 + "$",
        icon: "../img/snowflake.png"

    },
    {
        
        img: "../img/macca.jpg",

        nom: "MACCA",
        genre: "fruit",
        chaleur: "chaud",
        type: "alcool",
        prix: 100 + "$",
        icon: "../img/coffee-cup.png"
    },
    {
        
        img: "../img/purple.jpg",
        nom: "PURPLE LEAN",
        genre: "no fruit",
        chaleur: "froid",
        type: "alcool",
        prix: 100 + "$",
        icon: "../img/snowflake.png"
    },
    {
        
        img: "../img/rainbow.jpg",
        nom: "RAINBOW",
        genre: "no fruit",
        chaleur: "froid",
        type: "no alcool",
        prix: 100 + "$",
        icon: "../img/snowflake.png"
    },
]

let main = document.createElement('main')
let body = document.querySelector('body')
let content = document.querySelector('.content')
content.appendChild(main)

function display(array) {
    main.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let article = document.createElement('article')
        article.className='hello'
        main.appendChild(article)
        let figure = document.createElement('figure')
        article.appendChild(figure)
        let img = document.createElement('img')
        img.classList = "image"
        
        figure.appendChild(img)
        img.src = array[i].img
        let figcaption = document.createElement("figcaption")
        figure.appendChild(figcaption)
        figcaption.innerHTML = array[i].type;
        let section = document.createElement('section')
        article.appendChild(section)
        let h2 = document.createElement('h2')
        section.appendChild(h2)
        h2.innerHTML = array[i].nom
        let p = document.createElement('p')


        section.appendChild(p)


        p.innerHTML = array[i].prix
        let footer = document.createElement('footer')
        article.appendChild(footer)
        let h31 = document.createElement("h3")
        let h32 = document.createElement("h3")
        let div = document.createElement('div')
        div.className = "icon"
        footer.appendChild(div)
        let img2 = document.createElement('img')
        div.appendChild(img2)
        img2.src = array[i].icon
        div.appendChild(h31)
        footer.appendChild(h32)
        h31.innerHTML = array[i].chaleur
        h32.innerHTML = array[i].genre
    }
}

display(plats)


let input = document.querySelector('#input')

input.addEventListener('keyup', function (e) {
    const lower = e.target.value.toLowerCase()
    const result = plats.filter(plat => plat.genre.toLocaleLowerCase().startsWith(lower));
    display(result)

})


let select = document.querySelector('#select')

select.addEventListener('change', function () {
    let valeur = select.value
    if (valeur === "genre") {
        input.addEventListener('keyup', function (e) {
            const lower = e.target.value.toLowerCase()
            const result = plats.filter(plat => plat.genre.toLocaleLowerCase().startsWith(lower));
            display(result)

        })
    } else if (valeur === "type") {
        input.addEventListener('keyup', function (e) {
            const lower = e.target.value.toLowerCase()
            const result = plats.filter(plat => plat.type.toLocaleLowerCase().startsWith(lower));
            display(result)

        })
    } else if (valeur === "chaleur") {
        input.addEventListener('keyup', function (e) {
            const lower = e.target.value.toLowerCase()
            const result = plats.filter(plat => plat.chaleur.toLocaleLowerCase().startsWith(lower));
            display(result)

        })
    } else {
        input.addEventListener('keyup', function (e) {
            const lower = e.target.value.toLowerCase()
            const result = plats.filter(plat => plat.nom.toLocaleLowerCase().startsWith(lower));
            display(result)

        })
    }
})

