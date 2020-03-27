const generateUniqueId = require('../../src/utils/geberateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).toHaveLength(8); //espera que o id tenha  8 caracters
    });
});