import { EmailValidator } from "./EmailValidator"

describe('emailValidator', () => {
    let verify = EmailValidator;

    describe('Contain "@" ', () => {
        it('Should return true upon receiving a valid email.', () => {

            const actual = EmailValidator.isValidEmail("lucas@outlook.com");

            expect(actual).toBe(true);
        });
    });

    describe('Domain name doest not contain at least one "."', () => {
        it('Should return false upon receiving an unvalid email.', () => {
            
            const actual = EmailValidator.isValidEmail('lucas@outlookcom');

            expect(actual).toBe(false);
        });
    });

    describe('Domain does contain space.', () => {
        it('should return false if there is space in the mail', () => {

            const actual = EmailValidator.isValidEmail('luc as@outlook.com');

            expect(actual).toBe(false);
        });
    });

    describe('Domain has not char before or after @ symbol.', () => {
        it('should return false if no char is after or before @', () => {
            const actual = EmailValidator.isValidEmail('@gmail.com');

            expect(actual).toBe(false);
        });
    });
});