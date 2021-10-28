import { defaults } from 'autoprefixer';

const Navbar = () => {
    const navItems = ['Home', 'About Us', 'Showcase', 'Blog', 'Contact', 'Sign in'];
    //const selectedStyle = 'w-36 py-4 font-bold text-2xl text-center text-white bg-purple-900'
    const defaultStyle =
        'w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900';
    return (
        <nav className="inline-flex justify-between list-none w-max">
            {navItems.map((el) => (
                <li className={defaultStyle}>{el}</li>
            ))}
        </nav>
    );
};

export default Navbar;
