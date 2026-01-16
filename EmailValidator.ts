export class EmailValidator {
    static isValidEmail(email: string): boolean {
    if(!email.includes("@")) {
      return false;
    }


    return true;
  }
}