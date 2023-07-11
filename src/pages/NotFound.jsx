import './NotFound.css';
import Header from '../componets/Header';

const NotFound = () => {
  return (
    <>
      <Header title={"Página no encontrada"} />
      <div className='not-found'>
        <div className='big-text'>
          <p>ERROR 404</p>

        </div>
        <img src="/public/travolta-alpha.gif" alt="Travolta meme page not found" />
      </div>
    </>
  );
};

export default NotFound;