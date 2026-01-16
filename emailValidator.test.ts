import { EmailValidator } from "./EmailValidator"

describe('emailValidator', () => {
    let verify = EmailValidator;

    describe('Contain "@" ', () => {
        it('Should return true upon receiving a valid email.', () => {

            const actual = EmailValidator.isValidEmail("lucas@outlook.com");

            expect(actual).toBe(true);
        });
    });

    describe('Domain name contain at least one "."', () => {
        it('Should return false upon receiving an unvalid email.', () => {
            
            const actual = EmailValidator.isValidEmail('lucas@outlookcom');

            expect(actual).toBe(false);
        });
    });

    describe('Domain does not contain space.', () => {
        it('should return false if there is space in the mail', () => {
            
            const actual = EmailValidator.isValidEmail('luc as@outlook.com');

            expect(actual).toBe(false);
        })
    })
});