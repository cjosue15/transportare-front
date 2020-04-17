export const menu: any = [
    {
        titulo: 'Modulo de gestión',
        icon: '',
        items: [
            {
                titulo: 'Mantenimientos',
                icon: 'mdi mdi-gauge',
                url: '',
                submenu: [
                    {
                        titulo: 'Clientes',
                        icon: 'mdi mdi-gauge',
                        url: 'gestion/mantenimientos/clientes',
                    },
                    {
                        titulo: 'Contactos',
                        icon: 'mdi mdi-gauge',
                        url: 'gestion/mantenimientos/contactos',
                    },
                    {
                        titulo: 'Servicios',
                        icon: 'mdi mdi-gauge',
                        url: 'gestion/mantenimientos/servicios',
                    },
                ],
            },
        ],
    },
];

class Menu {
    module: boolean;
    label: string;
}
