export const clx = (...classes: any[]) => {
    return classes.filter(Boolean).join(' ');
};

export const withHttps = (url: string) => {
    return url.replace(
        /^(?:(.*:)?\/\/)?(.*)/i,
        (match, schema, nonSchemaUrl) =>
            schema ? match : `https://${nonSchemaUrl}`
    );
};

/**
 * Generate a unique id.
 * @returns {string} The generated unique id.
 */
export const uid = () => {
    // Way 1: return Date.now().toString(36) + Math.random().toString(36).substr(5);
    return crypto.randomUUID();
};

