import React from 'react';
import { useTranslation } from 'react-i18next';

const FooterOneMenuList = () => {
    const { t } = useTranslation();

    const getMenuData = () => [
        {
            col: 'col-6',
            parentClass: 'one',
            items: [
                {
                    title: t('home.footerMenu.coreFeatures'),
                    items: [
                        {
                            label: t('home.footerMenu.locumServices'),
                            subItems: [
                                { label: t('home.footerMenu.browseJobs'), href: '/sign-up' },
                                { label: t('home.footerMenu.manageProfiles'), href: '/sign-up' },
                                { label: t('home.footerMenu.scheduleAvailability'), href: '/sign-up' },
                            ]
                        },
                        {
                            label: t('home.footerMenu.clientTools'),
                            subItems: [
                                { label: t('home.footerMenu.findLocums'), href: '/sign-up' },
                                { label: t('home.footerMenu.manageContracts'), href: '/sign-up' },
                                { label: t('home.footerMenu.generateInvoices'), href: '/sign-up' },
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
                    title: t('home.footerMenu.supportServices'),
                    items: [
                        {
                            label: t('home.footerMenu.helpCenter'),
                            subItems: [
                                { label: t('home.footerMenu.knowledgeBase'), href: '#' },
                                { label: t('home.footerMenu.faq'), href: '#' },
                                { label: t('home.footerMenu.clientSuccess'), href: '#' },
                            ]
                        },
                        {
                            label: t('home.footerMenu.billing'),
                            subItems: [
                                { label: t('home.footerMenu.processPayments'), href: '/sign-up' },
                                { label: t('home.footerMenu.trackInvoices'), href: '/sign-up' },
                                { label: t('home.footerMenu.managePayroll'), href: '/sign-up' },
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
                    title: t('home.footerMenu.about'),
                    items: [
                        {
                            label: null, // Section without a main label
                            subItems: [
                                { label: t('home.footerMenu.whoWeAre'), href: '/about-us' },
                                { label: t('home.footerMenu.ourMission'), href: 'our-services' },
                                { label: t('home.footerMenu.contact'), href: '/contact-us' },
                                { label: t('home.footerMenu.joinTeam'), href: '/', badge: t('home.footerMenu.hiring') }
                            ]
                        }
                    ]
                },
                {
                    title: t('home.footerMenu.whyUs'),
                    items: [
                        { label: t('home.footerMenu.testimonials'), href: '#' },
                        { label: t('home.footerMenu.successStories'), href: '#' }
                    ]
                }
            ]
        }
    ];

    const menuData = getMenuData();

    return (
        <div className="footer-one-menu-list">
            <div className="row">
                {menuData.map((column, colIdx) => (
                    <div key={colIdx} className={`col-md-4 ${column.col}`}>
                        <div className={`footer1menu-list-col ${column.parentClass}`}>
                            {column.items.map((menu, menuIdx) => (
                                <aside key={menuIdx} className="footer-widget">
                                    {menu.title && (
                                        <div className="widget-title">
                                            <h6>{menu.title}</h6>
                                        </div>
                                    )}
                                    <div className="widget-body">
                                        <ul className="widget-list">
                                            {menu.items.map((item, itemIdx) => (
                                                <li key={itemIdx}>
                                                    {item.label && (
                                                        <a href={item.href || '#'}>{item.label}</a>
                                                    )}
                                                    {item.subItems && (
                                                        <ol className={item.label === null ? 'label-none' : ''}>
                                                            {item.subItems.map((subItem, subIdx) => (
                                                                <li key={subIdx}>
                                                                    <a href={subItem.href}>{subItem.label}</a>
                                                                    {subItem.badge && (
                                                                        <span className="template-badge">{subItem.badge}</span>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ol>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </aside>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FooterOneMenuList;
