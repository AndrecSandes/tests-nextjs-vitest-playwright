import { sanitizeStr } from './sanitize-str';

describe ('sanitizeStr (unit)', () => {
    test('retorna uma string vazia quando recebe um valor falsy', () => {
        // @ts-expect-error testando uma função sem parâmetros
        expect(sanitizeStr()).toBe('');
    });

    test('retorna uma string vazia quando recebe um valor que NÃO é uma string', () => {
        // @ts-expect-error testando uma função com tipagem incorreta
        expect(sanitize(123)).toBe('');
    });
});