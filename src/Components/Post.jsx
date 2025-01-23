// props: {author:"", content:""}
import { useContext } from "react";
import { PostsContext } from "../Context/PostsContext";


export function Post() {

    const posts = useContext(PostsContext)
  
    return (
      <main class="flex-1 mt-5">
      <article class="pb-14 mt-12 mr-12 border-b border-black/[0.1]">
        {posts.map(post => (
          <div>
            <div class="post-author flex items-center">
                    <img class="w-7 h-7" alt="Icone Autor" src="../assets/icone.png" />
                    <span class="ml-2 text-[#b7b7b7] text-[18px]">{post.name}</span>
                </div>
          <h2 class="text-[#5f5f5f] text-[32px] font-medium tracking-[-1.6px] mt-5 w-[80%]">{post.title}</h2>
          <p class="mt-6 w-[90%] text-[#b7b7b7] text-[18px] tracking-[-0.9px]">{post.description}</p>
        </div>
        ))}
      </article>
      </main>
    );
}

// defualt export vs named export