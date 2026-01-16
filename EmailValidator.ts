export class EmailValidator {
    static isValidEmail(email: string): boolean {

    const atIndex = email.indexOf('@');
    const domain = email.split('@')[1] ?? "";
    if(!email.includes("@")) {
      return false;
    }

    if(!domain.includes('.') || domain.endsWith('.')) {
      return false;
    }

    if(email.includes(' ')) {
      return false;
    }

    if(atIndex <= 0 || atIndex > email.length-1) {
      return false;
    }

    return true;
  }
}