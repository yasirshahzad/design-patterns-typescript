abstract class State {
  constructor(protected context: StopWatch) {}
  abstract onClick(): void;

  changeContext(context: StopWatch) {
    this.context = context;
  }
}

class StopState extends State {
  onClick(): void {
    throw new Error("Method not implemented.");
  }
}

class StartState extends State {
  onClick(): void {
    throw new Error("Method not implemented.");
  }
}

class StopWatch {
  private _state: State = new StopState(this);

  /**
   * onClick
   */
  public onClick() {
    this._state.onClick();
  }

  /**
   * changeState
   */
  public changeState(state: State) {
    this._state = state;
    this._state.changeContext(this);
  }
}

const watch = new StopWatch();

watch.changeState(new StartState(watch));
