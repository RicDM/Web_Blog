import { useContext } from 'react';
import { PostsContext } from '../Context/PostsContext';

function Post() {
  const { posts } = useContext(PostsContext);

  return (
    <div class="flex-1 mt-5">
      <div class="pb-14 mt-12 mr-12 border-b border-black/[0.1]">
      {posts.length === 0 ? (
        <p>Não há posts para mostrar.</p>
      ) : (
        posts.map((post, index) => (
          <div key={index}>
            <div class=" flex items-center">
            {/* <img class="w-7 h-7" alt="Icone Autor" src="../assets/icone.png" /> */}
            <span class="ml-2 text-[#b7b7b7] text-[18px]">{post.name}</span>
            </div>
            <h3 class="text-[#5f5f5f] text-left text-[32px] font-medium tracking-[-1.6px] mt-5 w-[80%]">{post.title}</h3>
            <p class="mt-6 w-[90%] text-[#b7b7b7] text-[18px] tracking-[-0.9px] text-justify">{post.description}</p>
          </div>
        ))
      )}
      </div>
    </div>
  );
}

export default Post;
