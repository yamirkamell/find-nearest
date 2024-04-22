export const resources = {
    _example_label: { es: 'ejemplo', en: 'example' },
}

export function retuResource(resource: any) {
    switch (window.navigator.language) {
        case 'es':
            return resource.es;
        case 'en':
            return resource.en;
        default:
            return resource.es;
    }
}