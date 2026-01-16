export class EmailValidator {
    static isValid(email: string): boolean {
    if(!email.includes("@")) {
      return false;
    }

    return true;
  }
}