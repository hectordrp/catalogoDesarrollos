export class Flow {
  constructor(
    public name: string,
    public input: string,
    public inputTopic: string,
    public output: string,
    public outputTopic,
    public traces: boolean,
    public description: string
  ) {
  }
}

export class Application {
  public name: string;
  public flows: Flow[];
  public path: string;

  constructor(name: string, flows: Flow[], path: string) {
    this.name = name;
    this.flows = flows;
    this.path = path;
  }
}
