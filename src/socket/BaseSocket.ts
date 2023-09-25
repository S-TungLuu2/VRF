// @ts-ignore
import store from 'src/store/store';

store.subscribe(() => {});
export class BaseSocket {
  private static instance: BaseSocket;
  // @ts-ignore
  private socket;

  public static getInstance(): BaseSocket {
    if (!BaseSocket.instance) {
      BaseSocket.instance = new BaseSocket();
    }
    return BaseSocket.instance;
  }

  public connect(): void {}

  public reconnect(): void {}
}
