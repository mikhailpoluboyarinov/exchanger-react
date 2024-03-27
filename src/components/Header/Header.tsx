import logo from '../../images/logo-exchanger.svg';

export const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="Логотип" />
            <h1 className="header__title">Exchanger</h1>
        </div>
    );
};
