import axios from 'axios';

import { LOADING } from './types';


export const setLoading = () => {
  return {
    type: LOADING
  }
}
