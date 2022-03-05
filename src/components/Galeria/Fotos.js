import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import '../Galeria/fotos.css';
const Fotos = () => {
  return (
    <main>
        <header className='header-fotos'>
            <a href='/'><AiOutlineHome className='icon-house-fotos'/></a>
            <h1>Galeria de Fotos</h1>
        </header>

        <article>
            <img src='./img/f1-mercedez-1.png' alt='carros' />
            <img src='./img/f1-mercedez-oficial.png' alt='carros' />
            <img src='https://media.gazetadopovo.com.br/2019/02/e27d049663d84c627d7f228524c01e16-gpLarge.jpg' alt='carros' />
            <img src='./img/f1-mercedez3.png' alt='carros' />
            <img src='https://quatrorodas.abril.com.br/wp-content/uploads/2019/06/mercedes-benz-glb-4-e1560384333308.jpg?quality=70&strip=info' alt='carros' />
            <img src='./img/f1-mercedez4.png' alt='carros' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHq-zXnVL2iW4hUFtD0pmHWllnc0WQv4gOH2VYE7nWXHuVtYhy-ZdY9KwOJCZ5LjGqfsw&usqp=CAU' alt='carros' />
            <img src='./img/f1-mercezes2.png' alt='carros' />
            <img src='https://quatrorodas.abril.com.br/wp-content/uploads/2018/10/img_4019-2-1-e1539213505667.jpg?quality=70&strip=info' alt='carros' />
        </article>
    </main>
  )
}

export default Fotos