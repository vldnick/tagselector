const FAKE_DELAY = 300;

export const mockedFetch = <T>(data: T): Promise<T> =>
  new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, FAKE_DELAY);
  });
