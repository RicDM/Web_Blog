import { useContext } from 'react';
import { NameContext } from '../Context/NameContext';
import { TitleContext } from '../Context/TitleContext';
import { DescriptionContext } from '../Context/DescriptionContext';
import { PostsContext } from '../Context/PostsContext';

function Forms() {
  const { name, setName } = useContext(NameContext);
  const { title, setTitle } = useContext(TitleContext);
  const { description, setDescription } = useContext(DescriptionContext);
  const { posts, setPosts } = useContext(PostsContext);

  const handleSubmit = () => {
    // Cria um novo post
    const newPost = { name, title, description };
    setPosts([...posts, newPost]);

    // Limpa os campos de entrada
    setName('');
    setTitle('');
    setDescription('');
  };

  return (
    <div className='flex flex-col m-20'>
      <h1>Crie um novo post</h1>
      <input class="ml-2 text-gray-400 text-lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome"
      />
      <input class="text-[#5f5f5f] text-2xl tracking-[-1.4px] w-[65%] mt-20 font-normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <input class="mt-6 w-[90%] text-gray-400 text-lg tracking-[-0.9px]"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
      />
      <button class="w-[45%] h-14 rounded bg-blue-600 border-0 text-white text-lg mt-10 cursor-pointer" onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default Forms;
