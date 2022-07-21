import { AuditTrail } from "./AuditTrail";

export abstract class Task {
  private _auditTrail: AuditTrail;
  constructor() {
    this._auditTrail = new AuditTrail();
  }

  public execute() {
    this._auditTrail.addToLog();
    this.doExecute();
  }

  protected abstract doExecute(): void;
}
