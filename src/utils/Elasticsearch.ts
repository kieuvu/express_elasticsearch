import { Client, ClientOptions } from "@elastic/elasticsearch";
import { ElasticSearchConfig } from "../config";

class ElasticsearchConnection {
  private client: Client;

  public constructor() {
    this.client = this.setClient();
  }

  setClient(): Client {
    const host: string = ElasticSearchConfig.get("NodeUrl");
    const port: number = ElasticSearchConfig.get("NodePort");

    const option: ClientOptions = {
      node: `${host}:${port}`,
    };

    return new Client(option);
  }

  getClient(): Client {
    return this.client;
  }

  async indexDocument(index: any, id: any, document: any) {
    try {
      await this.client.index({
        index: index,
        id: id,
        body: document,
      });
    } catch (error) {}
  }
}

export default ElasticsearchConnection;
