import { Routes, Route } from 'react-router-dom';
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

function RoutesPage() {

    return (
        <Router history={History}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path='/curriculumlanguage' element={<SelectLanguageCurriculum />} />
                <Route path="/curriculumtecnology" element={<SelectCurriculum />} />
                <Route path="/englishflutter" element={<FlutterEnglish />} />
                <Route path="/portugueseflutter" element={<FlutterPortuguese />} />
                <Route path="/englishreact" element={<ReactEnglish />} />
                <Route path="/portuguesereact" element={<ReactPortuguese />} />

                <Route path="/selectcurriculumenglish" element={<SelectCurriculumEnglish />} />
                <Route path="/selectcurriculumportuguese" element={<SelectCurriculumPortuguese />} />


            </Routes>

        </Router>

    )
}

export default RoutesPage;