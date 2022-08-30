import { default as home } from './home/services';

/**
 * By exposing all services used in the module,
 * they are written by axios, responsible for the http control,
 * and are exposed to be used as metadata returning a promise
 */

export default {
  home,
};
