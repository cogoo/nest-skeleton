export class NotFoundException extends Error {
    constructor(url?: string) {
        super(`The resource '${url}' has not been found.`);
    }
}
