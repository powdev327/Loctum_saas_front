const menuData = [
    {
        col: 'col-6',
        parentClass: 'one',
        items: [
            {
                title: 'Products 🔥',
                items: [
                    {
                        label: 'HR Management',
                        subItems: [
                            { label: 'Invoice System', href: '#' },
                            { label: 'Profile Management', href: '#' },
                            { label: 'Web Services', href: '#' },
                            { label: 'Employee Onboarding', href: '#' },
                        ]
                    },
                    {
                        label: 'Marketing Tools',
                        subItems: [
                            { label: 'Newsletter Templates', href: '#' },
                            { label: 'Email Campaigns', href: '#' },
                            { label: 'Social Media Analytics', href: '#' },
                        ]
                    },
                    {
                        label: 'Payment Solutions',
                        subItems: [
                            { label: 'Ecommerce Invoicing', href: '#' },
                            { label: 'Marketplace', href: '#' },
                            { label: 'Risk Scoring', href: '#' },
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
                title: 'Resources ❇️',
                items: [
                    { label: 'Latest Blog', href: '#' },
                    {
                        label: 'Help and Support',
                        subItems: [
                            { label: 'Knowledgebase', href: '#' },
                            { label: 'FAQs', href: '#' },
                            { label: 'Partners and Affiliates', href: '#' },
                            { label: 'Customer Stories', href: '#' },
                        ]
                    }
                ]
            },
            {
                title: 'Developer Docs 📈',
                items: [
                    {
                        label: null, // Represents a section without a main label
                        subItems: [
                            { label: 'Documentation', href: '#' },
                            { label: 'Tutorials', href: '#' }
                        ]
                    },
                    { label: 'Changelog', href: '#' },
                    { label: 'Community Forum', href: '#' }
                ]
            }
        ]
    },
    {
        col: 'col-12',
        parentClass: 'three',
        items: [
            {
                title: 'Company 💎',
                items: [
                    {
                        label: null, // Represents a section without a main label
                        subItems: [
                            { label: 'About', href: '#' },
                            { label: 'What We Do', href: '#' },
                            { label: 'Contact Us', href: '#' },
                            { label: 'Careers', href: '#', badge: 'Hiring' }
                        ]
                    }
                ]
            },
            {
                title: 'Why Choose 🌟',
                items: [
                    { label: 'Customer Stories', href: '#' },
                    { label: 'Feedbacks', href: '#' }
                ]
            }
        ]
    }
];

export default menuData;
