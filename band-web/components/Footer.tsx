"use client";
import { usePathname } from 'next/navigation';
import Socials from './Socials';

const Footer: React.FC = () => {
    const pathName = usePathname();
    return (
        <footer className="p-4 text-center bg-footer-bg text-footer-text">
            {pathName != '/contact' && (
                <div className="flex justify-center my-4">
                    <Socials />
                </div>
            )}
            <p>Stránky jsou stále v procesu vývoje.</p>
            <p>&copy; {new Date().getFullYear()} M.H.</p>
        </footer>
    );
}

export default Footer;