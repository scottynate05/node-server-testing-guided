const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('hobbits').truncate();
        });

        it('should insert the provided hobbits into the db', async () => {
            await Hobbits.insert({ name: 'chubbers'});
            await Hobbits.insert({ name: 'chancla'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        });

        it('should return the hobbit we inserted', async () => {
            let hobbit = await Hobbits.insert({ name: 'Chunker' });
            expect(hobbit.name).toBe('Chunker');

            hobbit = await Hobbits.insert({ name: 'Chancla' });
            expect(hobbit.name).toBe('Chancla');
        });

        it('is pointless', () => {
            expect(true).toBe(true);
        });
    });
});