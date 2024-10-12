export const CONFIG_APP = {
  APP_NAME: import.meta.env.APP_NAME,
  BASE_URL: import.meta.env.APP_BASE_URL,
};

export const API_ENDPOINT = {
  customers: `${CONFIG_APP.BASE_URL}/customers`,
}