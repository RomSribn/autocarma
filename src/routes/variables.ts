export const home: string = '/';
export const autocarma: string = '/autocarma';
export const accidents: string = '/accidents';
export const createAccident: string = '/createAccident';
export const about: string = '/about';
export const profile: string = '/profile';
export const logout: string = '/logout';
export const viewpage: string = '/viewpage';

export const signup: string = '/signup';
export const login: string = '/login';

export const routesUser: Array<string> = [
  autocarma,
  accidents,
  createAccident,
  about,
  profile,
  logout,
];

export const routesGuest: Array<string> = [home, signup, login];
