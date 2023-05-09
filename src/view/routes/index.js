import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Projects from '../screens/projects';
import HomePage from '../screens/homepage';
import History from '../../controller/history';
import Skills from '../screens/skills';
import SelectCurriculum from '../screens/curriculum/selectcp';
import SelectLanguageCurriculum from '../screens/curriculum/selectl';
import FlutterEnglish from '../screens/curriculum/flutter/english';
import FlutterPortuguese from '../screens/curriculum/flutter/portuguese';
import ReactEnglish from '../screens/curriculum/react/english';
import ReactPortuguese from '../screens/curriculum/react/portuguese';
import SelectCurriculumPortuguese from '../screens/curriculum/selectcp';
import SelectCurriculumEnglish from '../screens/curriculum/selectce';
import Style from '../../style';
import GlobalStyle from '../styles/global';


function RoutesPage() {
    return (
        <>
            <Style />
            <GlobalStyle />
            <Router history={History}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/homepage' element={<HomePage />} />
                    <Route path='/portfolio/homepage' element={<HomePage />} />
                    <Route path="/portfolio/projects" element={<Projects />} />
                    <Route path="/portfolio/skills" element={<Skills />} />
                    <Route path='/portfolio/curriculumlanguage' element={<SelectLanguageCurriculum />} />
                    <Route path="/portfolio/curriculumtecnology" element={<SelectCurriculum />} />
                    <Route path="/portfolio/englishflutter" element={<FlutterEnglish />} />
                    <Route path="/portfolio/portugueseflutter" element={<FlutterPortuguese />} />
                    <Route path="/portfolio/englishreact" element={<ReactEnglish />} />
                    <Route path="/portfolio/portuguesereact" element={<ReactPortuguese />} />
                    <Route path="/portfolio/selectcurriculumenglish" element={<SelectCurriculumEnglish />} />
                    <Route path="/portfolio/selectcurriculumportuguese" element={<SelectCurriculumPortuguese />} />
                </Routes>
            </Router>
        </>
    )
}

export default RoutesPage;