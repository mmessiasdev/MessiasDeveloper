import { Container } from "../../styeles/container/style"
import { SecudnaryButton } from "../../styeles/secundarybutton/style"
import { Link } from "react-router-dom";

interface props{
    title?: any;
    icon?: any;
    route?: any;
    widths?: string;
    pad?: string;
}

const CurriculumButtom = ({title, icon, route, widths, pad}: props) => {
    return (
        <>
            <Link to={route}>
                <SecudnaryButton>
                    <Container disp='flex' justify='center' aligh='center' pad={pad}>
                        {icon}
                        {title}
                    </Container>
                </SecudnaryButton>
            </Link>

        </>
    )
}

export default CurriculumButtom;