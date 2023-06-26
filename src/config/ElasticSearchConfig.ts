import { Config } from "../core";

class ElasticSearchConfig extends Config {
  public static configs = {
    NodeUrl: this.env("ELASTICSEARCH_NODE_URL", "http://localhost"),
    NodePort: this.env("ELASTICSEARCH_NODE_PORT", 9200),
  };
}

export default ElasticSearchConfig;
