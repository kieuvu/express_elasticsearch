import dotenv from "dotenv";
dotenv.config();

class Config {
  public static configs: any = {};

  protected static env(key: string, defaultValue: any = null) {
    return process.env[key] ?? defaultValue;
  }

  public static get(key: string): any {
    return this.configs[key];
  }
}

export default Config;
