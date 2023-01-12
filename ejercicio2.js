function getCharacters(done){
    var api = fetch("https://rickandmortyapi.com/api/character");

    api
    .then(data => data.json())
    .then(data =>{
        done(data)
    })
};

getCharacters(data =>{

    data.results.forEach(personaje => {

       const article = document.createRange().createContextualFragment(/*html*/`
        <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="personaje">
        </div>
        <h3>${personaje.name}</h3>
        <span>Status: ${personaje.status}</span><br/>
        <span>Gender: ${personaje.gender}</span>
        </article>

        `)

    var main = document.querySelector("main");

    main.append(article)

    });
})
