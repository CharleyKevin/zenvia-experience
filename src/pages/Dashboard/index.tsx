import React from 'react';
import { FiMenu } from 'react-icons/fi';

import logoZenvia from '../../assets/logo-novo-zenvia.svg';
import Table from '../../components/table/index';

import { Nav, Container,  Content, Logo} from './styles';

const Dashboard: React.FC = () => (
  <Nav>
      <Logo>
        <img src={logoZenvia} alt="Zenvia" />
      </Logo>
      <Content>
        <div>Zenvia Flow</div>
        <div>Integrações</div>
        <div>API</div>
        <div>Zenvia Chat</div>
        <div>Zenvia Message</div>
        <div>Empresa Time 24</div>
        <div>Central de Ajuda</div>
        <div>Time</div>
        <FiMenu />
      </Content>
  </Nav>
)

export default Dashboard;
