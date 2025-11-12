import { expect } from 'chai';
import { apiClient } from '../src/apiClient.js';
import { JokeAPI } from '../src/apiObjects.js';

describe('Official Joke API Tests', function () {

  it('GET /jokes/random — should return 200 OK', async function () {
    const res = await apiClient.get(JokeAPI.getRandomJoke());
    expect(res.status).to.equal(200);
  });

  it('GET /jokes/random — response should be JSON with required fields', async function () {
    const res = await apiClient.get(JokeAPI.getRandomJoke());
    const joke = res.data;

    expect(joke).to.have.property('id');
    expect(joke).to.have.property('type');
    expect(joke).to.have.property('setup');
    expect(joke).to.have.property('punchline');
  });

  it('GET /jokes/ten — should return array of 10 jokes', async function () {
    const res = await apiClient.get(JokeAPI.getTenJokes());
    const jokes = res.data;

    expect(jokes).to.be.an('array').that.has.lengthOf(10);
  });

  it('GET /jokes/programming/random — should return a programming joke', async function () {
    const res = await apiClient.get(JokeAPI.getProgrammingJoke());
    const joke = res.data;
    expect(joke.type).to.equal('programming');
  });

  it('GET /jokes/ten — all jokes should have unique IDs', async function () {
    const res = await apiClient.get(JokeAPI.getTenJokes());
    const jokes = res.data;
    const ids = jokes.map(j => j.id);
    const unique = new Set(ids);
    expect(unique.size).to.equal(jokes.length);
  });

});
