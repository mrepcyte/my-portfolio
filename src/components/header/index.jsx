import React from 'react';
import { HeaderComponent, NAV, A } from './styles';

const Header = () => {
    return (
        <HeaderComponent>
            <NAV>
                <A href='mailto: monika.rep@gmail.com' target='_blank'>
                    mail
                </A>
                <A href='https://github.com/mrepcyte' target='_blank'>
                    github
                </A>
                <A href='https://www.frontendmentor.io/profile/mrepcyte' target='_blank'>
                    frontend mentor
                </A>
            </NAV>
        </HeaderComponent>
    );
};

export default Header;
