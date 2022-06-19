import React from 'react';
import { H1, IntroductionSection, Image, P } from './styles';

const Introduction = () => {
    return (
        <>
            <H1>portfolio</H1>
            <IntroductionSection>
                <Image src='../jelistrop2-cropped.png' alt='illustration' />
                <P>
                    My name is Monika. Among great many things that I am curious about, things that
                    I fill my days with - books, writing, photography, languages - there's also the
                    vast, exciting world of frontend development. I'm grasping at every learning
                    opportunity, because ultimately I see my purpose in creating and building. I
                    want to build things big and small, things beautiful and functional and inviting
                    and whimsical. Be it an idea, a component, a project, I’m interested in the
                    whole spectrum. Below are some examples of my work so far.
                </P>
            </IntroductionSection>
        </>
    );
};

export default Introduction;
