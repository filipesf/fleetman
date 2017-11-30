import React from 'react';

import Section from '../../containers/Section';

import SiteNav  from '../../components/SiteNav';
import Header   from '../../components/Header';
import Footer   from '../../components/Footer';
import Headline from '../../components/Headline';

const LandingPage = () =>
  <section id="LandingPage">
    <SiteNav />
    <Header />

    <Section>
      <Headline
        title="Tipos de serviços"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </Section>

    <Section>
      <Headline
        title="Como Funciona"
        subtitle="Chame um mensageiro em três passos simples"
      />
    </Section>

    <Section>
      <Headline
        title="Benefícios"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </Section>

    <Section theme="red">
      <Headline
        title="Clientes Satisfeitos"
      />
    </Section>

    <Section theme="tint">
      <Headline
        title="Marcas"
        subtitle="Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade."
      />
    </Section>

    <Footer />
  </section>

export default LandingPage;