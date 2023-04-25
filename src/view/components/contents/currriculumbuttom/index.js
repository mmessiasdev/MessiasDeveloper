import { IoMdDocument } from "react-icons/io"
import { Container } from "../../styeles/container/style"
import { SecudnaryButton } from "../../styeles/secundarybutton/style"
import { Link } from "react-router-dom"

const   CurriculumButtom = ({title, icon, route}) => {
    return (
        <>
            <Link to={route}>
                <SecudnaryButton>
                    <Container disp='flex' justify='center' aligh='center'>
                        {icon}
                        {title}
                    </Container>
                </SecudnaryButton>
            </Link>

        </>
    )
}

export default CurriculumButtom;