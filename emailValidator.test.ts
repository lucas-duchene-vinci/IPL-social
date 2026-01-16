import { EmailValidator } from "./EmailValidator"

describe('emailValidator', () => {
    describe('Contain "@" ', () => {
        it('Should return something.', () => {
            let verify = EmailValidator;

            const actual = EmailValidator.isValid("lucas@outlook.com");

            expect(actual).toBe(true);
        });
    });


});