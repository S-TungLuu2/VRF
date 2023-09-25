// @ts-ignore
import io from 'socket.io-client';
import { getCookieStorage } from 'src/helpers/storage';
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

  public connect(): void {
    const accessToken = getCookieStorage('access_token');
    this.socket = io(process.env.REACT_APP_BASE_SOCKET, {
      query: {
        authorization: accessToken,
      },
      transports: ['websocket'],
    });
    this.listen24Ticker();
    this.socket.on('reconnect', () => {});
  }

  public reconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
    this.connect();
    this.socket.on('connect', () => {});
  }

  listen24Ticker(): void {
    this.socket.on(`tickers`, () => {});
  }
}
