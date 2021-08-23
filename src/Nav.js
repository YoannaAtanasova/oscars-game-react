import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul>
            <Link to="/privacy-policy">
                <li>Privacy Policy</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
