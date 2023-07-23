export const WHITE_LIST = ["/", "/create-user", "/forget-password"];
export const STATUS = {
  LOADING: "LOADING",
  INIT: "INIT",
  DATA_FETCHING: "DATA_FETCHING",
  DATA_FETCHED: "DATA_FETCHED",
  DATA_FETCH_ABORTED: "DATA_FETCH_ABORTED",
}
export type STATUS = keyof typeof STATUS;