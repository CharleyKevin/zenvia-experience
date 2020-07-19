import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import logoZenvia from '../../assets/logo-novo-zenvia.svg';
import avatar from '../../assets/avatar.svg';

import { Nav, Container,  Content, ContentRigth, Logo, Person, Body, Card, Cards, Conteudo,  Column} from './styles';

const Dashboard: React.FC = () => (
  <>
    <Nav>
      <Container>
        <Logo>
          <img src={logoZenvia} alt="Zenvia" />
        </Logo>
        <Content>
          <div className="nav_black">Zenvia Flow</div>
          <div className="nav_gray">Integrações</div>
          <div className="nav_gray">API</div>
          <div className="nav_gray">Zenvia Chat</div>
          <div className="nav_gray">Zenvia Message</div>
        </Content>
        <ContentRigth>
            <Person>
              <div className="nav_gray">Thiago S.</div>
              <img className="avatar" src={avatar} alt="Zenvia" />
              <FiChevronDown />
            </Person>
        </ContentRigth>
      </Container>
    </Nav>



    <Body>
    <Column>
    <h1 className="title">Dashboard</h1>
      <Conteudo>

        <Cards>
          <Card className="nav_gray">Total de mensagens</Card>
          <Card className="nav_gray">Mensagens enviadas</Card>
          <Card className="nav_gray">Falhas de envio</Card>
        </Cards>

      </Conteudo>

      <Cards>
      <h1 className="subtitle">Meus fluxos</h1>

        <button>Criar novo fluxo</button>

      </Cards>


      <Conteudo>

        <Cards>
        <li>Nome do fluxo <FiChevronDown /></li>
        <li>ID do Fluxo</li>
        <li>Última atualização <FiChevronDown /></li>
        </Cards>

      </Conteudo>
      </Column>
    </Body>
  </>
)

export default Dashboard;
