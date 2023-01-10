import Style from "../Main/Style"



const Main = () => {


    

    return (
        <Style about="Span">
        <main className="" id=''>
            <section about="Gallery">
                <picture>
                    <img src="https://pisoscia.com.br/wp-content/uploads/2021/08/ambientada_residencial_quarto-residencial_mantas-residenciais_decorflex_0_jura-brown_manta_5337046_1548355456_3000x2000-scaled.jpg"></img>
                </picture>
                <span id="btns">
                    <button>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
                        </span>
                        Previus
                    </button>
                    <button>play</button>
                    <button>
                        Next 
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"/></svg>
                        </span>
                    </button>
                </span>
                <span></span>
            </section>
            <section className="about" about="About">
                <h2>Sobre nós</h2>
                <span className="subtitle">Construa bons momentos com qualidade de vida</span>
                <span className="">
                    Com base nos princípios Familiares nossa estratégia de negocio se baseia em valores morais de clientes satisfeitos e visa desenvolver soluções que contribuam positivamente para a qualidade de vida das pessoas, e a cada etapa de venda e a aplicação dos produtos. Escolher materiais de qualidade mostra respeito à expectativa do cliente que irá contribuir tanto na sua saúde como no ambiente em que vão morar.  
                </span>
            </section>
            <section about="Services">

            </section>
            <section about="Clients">
                <h2>
                    O que estão falando sobre nós
                </h2>

                <ul>
                    <li>
                        <span>
                           Thiago Souza
                        </span>
                       
                        <span>
                            O atendimento e o capricho na execução do trabalho. O Régis é muito experiente e cuidadoso em todos os detalhes. Recomendo o trabalho dele!
                        </span>
                       
                        
                        <span>
                            Volta Redonda-RJ
                        </span>
                  
                    </li>

                    <li>
                        <span>
                            Josiane Motta
                        </span>
                       
                        <span>
                            Serviço excepcional! Profissional comprometido, esclarece todas as dúvidas, cumpre os prazos além de ser super caprichoso!
                        </span>
                       
                        
                        <span>
                            Tijuca-RJ
                        </span>
                  
                    </li>
                    <li>
                        <span>
                            Mário
                        </span>
                       
                        <span>
                            Profissional sério e competente. Deixou excelente impressão pela forma como conduziu seus serviços contratados. Recomendo. 
                        </span>
                       
                        
                        <span>
                            Leme-RJ
                        </span>
                  
                    </li>
                </ul>

            </section>
            <section about="Contact">

                <form>
                    <label>Nome<input type="text"/></label>
                    <label>E-mail<input type="email" placeholder="jonh@email.com"/></label>
                    <label>Número<input type="number" placeholder="***********"/></label>
                    <label>Celular<input/></label>
                    <input/>
                </form>
          

            </section>
        </main>
        </Style>
    )
}

export default Main