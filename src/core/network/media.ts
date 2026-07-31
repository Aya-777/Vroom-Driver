export const API_BASE_URL = 'http://10.116.185.227:8000';

export const getMediaUrl = (path?: string | null): string | undefined => {
    if (!path) return undefined;
    if (path.startsWith('http')) return path;
    return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};