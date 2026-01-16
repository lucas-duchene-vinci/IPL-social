export class EmailValidator {
    static isValidEmail(email: string): boolean {
    if(!email.includes("@")) {
      return false;
    }

    if(!email.includes(".")) {
      return false;
    }

    if(email.includes(' ')) {
      return false;
    }

    const atIndex = email.indexOf('@');

    if(atIndex <= 0 || atIndex > email.length-1) {
      return false;
    }
    
    return true;
  }
}