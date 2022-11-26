import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            Страница не найдена!!!
            <Link to='/'>Перейти на главную</Link>
        </div>
    )
}

export default NotFound;