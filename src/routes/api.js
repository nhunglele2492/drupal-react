export const HTTP_URL = 'https://dev-d8react.pantheonsite.io';

export function getBlockUrl(id) {
  return HTTP_URL + '/block/' + id + '?_format=json';
}

export function getParagraphUrl(id) {
  return HTTP_URL + '/entity/paragraph/' + id + '?_format=json';
}

export function getWebformRest(webform_id) {
  return HTTP_URL + '/webform_rest/' + webform_id + '/elements?_format=json';
}

export function getNodeUrl(node_id) {
  return HTTP_URL + '/node/' + node_id + '?_format=hal_json';
}

export function getUserLogin() {
  return HTTP_URL + '/user/login?_format=json';
}

export function getUserRegister() {
  return HTTP_URL + '/user/register?_format=json';
}

export function getUserById(uid) {
  return HTTP_URL + '/user/' + uid + '?_format=json';
}

export function getFromView(str) {
  return HTTP_URL + '/api/' + str;
}

export function notEmpty(obj) {
  return Object.keys(obj).length !== 0;
}
