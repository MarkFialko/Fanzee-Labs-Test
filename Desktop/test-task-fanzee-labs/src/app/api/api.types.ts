type FetchParams = Parameters<typeof fetch>;
type FetchInput = FetchParams[0];
type FetchInit = FetchParams[1];

export const fetchJson = <T>(
  input: FetchInput,
  init: FetchInit = {},
): Promise<T> => {
  return window
    .fetch(input, {
      ...init,
    })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp;
    })
    .then((resp) => resp.json() as Promise<T>);
};
