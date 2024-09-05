

export const getDataPokemon = async (url: string) => {
    try {
        const res: Response = await fetch(url);
        if (!res.ok) {
            throw new Error('Error al obtener informacion de la api: PokeApi');
        }
        const data = await res.json();
        console.log('data..........: pokemn1',data);
        return data;
    } catch (error) {
        console.error('Falo inesperado al consultar la api', error);
    }
}