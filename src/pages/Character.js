import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () =>
{
    const id = await getHash();
    console.log(id)
    const character = await getData(id);

    const {
        image,
        name,
        episode,
        status,
        specie,
        gender,
        origin,
        location,
    } = character;

    const view = `
        <div class="character-inner">
            <article class="character__card">
                <img src="${image}" alt="${name}" />
                <h2>${name}</h2>
            </article>
            <article class="character__card">
                <h3>Episodes: <span>${episode.length}</span></h3>
                <h3>Status: <span>${status}</span></h3>
                <h3>Species: <span>${specie}</span></h3>
                <h3>Gender: <span>${gender}</span></h3>
                <h3>Origin: <span>${origin.name}</span></h3>
                <h3>Last location: <span>${location.name}</span></h3>
            </article>
        </div>
    `;

    return view;
}
export default Character;
