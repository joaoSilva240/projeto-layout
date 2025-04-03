import './App.css';
import CardProjetos from './components/CardProjetos';
import Header from './components/Header';
import ProjectArq from './components/ProjectArq';
import { arquivos } from './database/db';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='section--projetos'>
        {/* adicionar cards de forma dinâmica */}
        <CardProjetos color="#7DD0D7" t_status="Plano de Ação" periodo={[4, 5, 6, 7]} currentDay = {6} qntPartici = {7}/>
        <CardProjetos color="#7AA9F7" t_status="Plano de Ação" periodo={[5, 6, 7]} currentDay = {6} qntPartici = {3}/>
        <CardProjetos color="#EC7F74" t_status="Plano de Ação" periodo={[10, 11, 12, 13]} currentDay = {6} qntPartici = {6}/>
        <CardProjetos color="#9FCC6A" t_status="Plano de Ação" periodo={[5,6]} currentDay = {6} qntPartici = {10}/>
      </div>
      <div className='section--main'>
        <div className='section--arqv'>
          {/* adicionar arquivos de forma dinâmica */}
          {arquivos.map((arquivo)=>(
          <ProjectArq arqType={arquivo.tipo} title={arquivo.titulo} data={arquivo.data}/>
          ))}

        </div>
        <div className='section--clnd'></div>
        {/* Criar o calendário interativo */}
      </div>
    </div>
  );
}

export default App;
