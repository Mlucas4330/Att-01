import { GlobalStyle, Header, Tittle, Section, Card, SectionImg, Wraper, Contato, Footer, Ul } from './styles';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header>
                <Tittle>Primeira página com React.</Tittle>
            </Header>
            <Section>
                <Card>
                    <h3>Somente para desktop</h3>
                    <p>Vamos aprender a utilizar um framework.</p>
                </Card>
                <Card>
                    <h3>Criando componentes</h3>
                    <p>Utilizamos o Styled Componentes.</p>
                </Card>
                <Card>
                    <h3>Fácil aproveitamento</h3>
                    <p>Estamos no caminho.</p>
                </Card>
            </Section>
            <SectionImg>
                <Wraper>
                    <Wraper>
                      <h1>lorem Ipsum</h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem ea ullam eius tempora animi dicta nesciunt rerum
                          repellat dolor. Beatae eum sed debitis inventore, expedita vero aspernatur consequuntur nostrum.
                      </p>
                    </Wraper>
                </Wraper>
                <Wraper>
                    <div>aaaa</div>
                </Wraper>
            </SectionImg>
            <SectionImg>
                <Wraper>
                    <div>aaaa</div>
                </Wraper>
                <Wraper>
                    <Wraper>
                      <h1>lorem Ipsum</h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem ea ullam eius tempora animi dicta nesciunt rerum
                          repellat dolor. Beatae eum sed debitis inventore, expedita vero aspernatur consequuntur nostrum.
                      </p>
                    </Wraper>
                </Wraper>
            </SectionImg>
            <SectionImg>
                <Wraper>
                    <Wraper>
                      <h1>lorem Ipsum</h1>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo autem ea ullam eius tempora animi dicta nesciunt rerum
                          repellat dolor. Beatae eum sed debitis inventore, expedita vero aspernatur consequuntur nostrum.
                      </p>
                    </Wraper>
                </Wraper>
                <Wraper>
                    <div>aaaa</div>
                </Wraper>
            </SectionImg>
            <Contato>
                <Tittle>Contato</Tittle>
            </Contato>
            <Footer>
                <Wraper>
                    <Ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </Ul>
                    <p>Your website 2020. All right Reserved</p>
                </Wraper>
                <Wraper>
                    <Ul>
                        <li>a</li>
                        <li>a</li>
                        <li>a</li>
                    </Ul>
                </Wraper>
            </Footer>
        </>
    );
}

export default App;
