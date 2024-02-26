
    import { z } from 'zod';
    import axios from 'axios';
    
    // Definiera Zod-schema för karaktären
    const characterSchema = z.object({
        name: z.string(),
        height: z.string(),
        mass: z.string(),
        hair_color: z.string(),
        skin_color: z.string(),
        eye_color: z.string(),
        birth_year: z.string(),
        gender: z.string(),
        homeworld: z.string(),
        films: z.array(z.string()),
        species: z.array(z.string()),
    });
    
    // Funktion för att hämta och validera data från SWAPI
    async function fetchAndValidateCharacter(characterName: string): Promise<void> {
        try {
            // Hämta data från SWAPI
            const response = await axios.get(`https://swapi.dev/api/people/?search=${characterName}`);
            const results = response.data.results;
    
            if (results.length === 0) {
                console.error(`No character found with the name ${characterName}`);
                return;
            }
    
            // Validera och skriv ut data för första matchande karaktär
            const character = characterSchema.parse(results[0]);
            console.log('Valid character data:', character);
        } catch (error) {
            console.error(error);
        }
    }
    
    // Använd funktionen för att hämta och validera data för Luke Skywalker
    fetchAndValidateCharacter('Luke Skywalker');
       