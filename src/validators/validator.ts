export class Validator {
  private static emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public static isLoginValid(login?: string): boolean {
    return login?.length > 4;
  }

  public static isPasswordValid(password?: string): boolean {
    return !!password;
  }

  public static isEmailValid(email: string): boolean {
    return Validator.emailRegex.test(email);
  }
}
