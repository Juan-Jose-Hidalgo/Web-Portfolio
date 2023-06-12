type IconType = {
    [key: string]: string;
}

const iconClases = {
    angular: 'fa-brands fa-angular',
    node: 'fa-brands fa-node-js',
    postgresql: 'fa-solid fa-database',
    html5: 'fa-brands fa-html5',
    cs3: 'fa-brands fa-css3',
    js: 'fa-brands fa-square-js',
    scss: 'fa-brands fa-sass',
    default: 'fa-solid fa-circle-question'
}

export const getIconClass = (icon: string) => iconClases[icon] || iconClases['default'];