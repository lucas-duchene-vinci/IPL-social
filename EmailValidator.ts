export class EmailValidator {
    static isValid(email: string): boolean {
    return email.includes("@");
  }
}