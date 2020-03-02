export function urlHandler () {
    return process.env.NODE_ENV === 'development'
        ? '/' : '/swapi-app/'
}