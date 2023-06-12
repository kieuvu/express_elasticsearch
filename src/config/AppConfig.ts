import { Config } from "../core/config";

class AppConfig extends Config {
  public static configs = {
    AppPort: this.env("APP_PORT", 3000),
    AppUrl: this.env("APP_URL", "http://localhost"),
  };
}

export default AppConfig;
