const menuData = [
    {
        col: 'col-6',
        parentClass: 'one',
        items: [
            {
                title: 'Core Features 🔥',
                items: [
                    {
                        label: 'Locum Services',
                        subItems: [
                            { label: 'Browse Job Listings', href: '/sign-up' },
                            { label: 'Manage Profiles', href: '/sign-up' },
                            { label: 'Schedule Availability', href: '/sign-up' },
                        ]
                    },
                    {
                        label: 'Tools for Clients',
                        subItems: [
                            { label: 'Find Available Locums', href: '/sign-up' },
                            { label: 'Manage Contracts', href: '/sign-up' },
                            { label: 'Generate Invoices', href: '/sign-up' },
                        ]
                    }
                ]
            }
        ]
    },
    {
        col: 'col-6',
        parentClass: 'two',
        items: [
            {
                title: 'Support & Services ❇️',
                items: [
                    {
                        label: 'Help Center',
                        subItems: [
                            { label: 'Knowledge Base', href: '#' },
                            { label: 'Faq', href: '#' },
                            { label: 'Client Success Stories', href: '#' },
                        ]
                    },
                    {
                        label: 'Billing & Payments 💳',
                        subItems: [
                            { label: 'Process Payments', href: '/sign-up' },
                            { label: 'Track Invoices', href: '/sign-up' },
                            { label: 'Manage Payroll', href: '/sign-up' },
                        ]
                    }
                ]
            }
        ]
    },
    {
        col: 'col-12',
        parentClass: 'three',
        items: [
            {
                title: 'About Quicklocum 💎',
                items: [
                    {
                        label: null, // Section without a main label
                        subItems: [
                            { label: 'Who We Are', href: '/about-us' },
                            { label: 'Our Mission', href: 'our-services' },
                            { label: 'Contact Quicklocum', href: '/contact-us' },
                            { label: 'Join Our Team', href: '/', badge: 'Hiring' }
                        ]
                    }
                ]
            },
            {
                title: 'Why Choose Us? 🌟',
                items: [
                    { label: 'What Our Clients Say', href: '#' },
                    { label: 'Our Success Stories', href: '#' }
                ]
            }
        ]
    }
];

export default menuData;
