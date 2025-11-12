export const JokeAPI = {
    getRandomJoke: (): string => '/jokes/random',
    getTenJokes: (): string => '/jokes/ten',
    getProgrammingJoke: (): string => '/jokes/programming/random',
    getGeneralJoke: (): string => '/jokes/general/random'
};
