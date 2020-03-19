import getData from '../utils/getData';

const Home = async () =>
{
    const characters = await getData();

    const view = `
        <div class="characters">
            ${characters.results.map(character => `
            <article class="character__item">
                <a href="#/${characters.id}/">
                    <img src="${character.image} " alt="${characters.name} " />
                    <h2>${character.name} </h2>
                </a>
            </article>
            `).join('')}
        </div>
    `;

    console.log(view);
    return view;
}

export default Home;