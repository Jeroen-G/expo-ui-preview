import {listFiles} from "./listFiles";

const testDir = './../../tests'

describe('listFiles', () => {
    it('should list available files', () => {
        const expected = [
            'Button.preview.tsx'
        ];

        expect(listFiles(testDir)).toBe(expected);
    });
});
