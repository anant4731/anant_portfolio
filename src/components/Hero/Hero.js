import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hi, I'M <br />
          ANANT CHAUHAN
        </SectionTitle>
        <SectionText style={{paddingBottom:0}}>
        The purpose of this portfolio website is provide general information about me. <br/>
          Access contact links for more details and a possible collaboration.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;