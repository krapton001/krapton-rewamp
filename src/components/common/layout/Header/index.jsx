'use client';
import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HyperLink from '../../HyperLink';
import LazyImg from '../../LazyImg';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Careers', href: '/careers' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const onCloseDialog = () => {};

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={` ${isScrolled ? ' backdrop-blur-sm bg-white/70' : 'bg-transparent'}  sticky top-0 z-[999] font-poppins `}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:py-1 xl:px-0" aria-label="Global">
                <div className="flex items-center gap-x-12">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Krapton</span>
                        <LazyImg className="h-8 w-auto" src="/assets/custom_icons/krapton-logo.webp" alt="krapton_icon" title="krapton_icon" />
                    </a>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-md font-normal leading-6 text-gray-900 hover:text-primary">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex">
                    <div className="py-3">
                        <HyperLink title={'hire us'} href={'/hire-us'}>
                            Hire Us
                        </HyperLink>
                    </div>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden z-[1000] relative" open={mobileMenuOpen} onClose={onCloseDialog}>
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="-m-1.5 p-1.5 flex sm:hidden">
                            <span className="sr-only">Krapton</span>
                            <LazyImg className="h-8 w-auto" src="assets/custom_icons/krapton-logo.webp" alt="krapton_icon" title="krapton_icon" />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-md font-normal leading-7 text-gray-900 hover:bg-gray-50">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <HyperLink title={'hire us'} href={'/hire-us'}>
                                    Hire Us
                                </HyperLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
