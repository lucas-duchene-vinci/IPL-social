export class EmailValidator {
    static isValidEmail(email: string): boolean {

    
    const domain = email.split('@')[1] ?? "";
    if(!this.containsAt(email)) {
      return false;
    }

    if(!domain.includes('.') || domain.endsWith('.')) {
      return false;
    }

    if(this.hasSpace(email)) {
      return false;
    }

    if(this.hasCharBeforeOrAfterAt(email)) {
      return false;
    }

    return true;
  }

  private static containsAt(email: string): boolean {
    return email.includes("@");
  }

  private static hasSpace(email: string): boolean {
    return email.includes(' ');
  }

  private static hasCharBeforeOrAfterAt(email: string): boolean {
    const atIndex = email.indexOf('@');
    return atIndex <= 0 || atIndex > email.length-1;
  }
}
