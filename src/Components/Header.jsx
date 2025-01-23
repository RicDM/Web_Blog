export function Header() {
    return (
      <header class="flex justify-between items-center w-full border-b border-black/[0.1] py-11">
    <div class="text-[#5f5f5f] text-[28px] tracking-[-1.4px]">
        Web<span class="text-[#006edf] font-semibold">Blog</span>
    </div>
    <div class="text-[#b7b7b7] text-[20px]">powered by WebII</div>
    <button class="hidden w-[164px] h-[48px] bg-[#006edf] rounded-[4px] text-white text-[18px]">
        Criar post
    </button>
</header>
    );
}

// defualt export vs named export