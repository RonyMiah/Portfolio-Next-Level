"use server"
import Cookies from 'js-cookie';

// Function to set a cookie
export const setCookie = (name: string, value: string) => {
  Cookies.set(name, value);
};

// Function to get a cookie
export const getCookie = (name:string) => {
  return Cookies.get(name);
};

// Function to delete a cookie
export const eraseCookie = (name: string) => {
  Cookies.remove(name);
};