# Vi IMproved (and beyond!)
Before we start I wanted to say how fun it is being able to look in the past and actually use the 
exact same software that was used. Like when you do a report on printing it's rather hard to get
your hands on a printing press... Anyway, without further ado lets talk about... 
*(scroll for effect)* 

## Ed
Maybe unsurprisingly, the story of vi starts here. Ed was 
one of the first text editors, it was developed by Ken Thompson in August 1969. It was influenced by 
qed text editor, which was developed at UC Berkeley, Ken's alma mater. Thompson implemented regular
expressions on qed, which was notable.

Ed is a line based text editor with no GUI, just simple command line options.
*(on fedora, write an express app using ed then demonstrate g/re/p)*
`g/re/p` was influenced by an ed command **g**lobally find by **re**gex and **p**rint.  
[some common ed commands](https://www.computerhope.com/unix/ued.htm)


## Vi origins
The text editor that caused us to start down this twisted (righteous?) path was called vi, written 
by Bill Joy in 1976. This was the **vi(sual)** mode for a line editor called **ex**, and was released 
as part of the first Berkely Software Distribution (BSD) / Unix release in March 1978.

"**ex** stands for extended, because it was originally an extension of the simple line editor **ed**. Similarly, "vi" stands for visual, because vi is the "visual" (full-screen) editing mode, which was eventually added to ex."  
-- [computerhope.com](https://www.computerhope.com/unix/uex.htm)

## Vi
"The commands ex and vi point to the same program, started in different modes. You can start ex by running vi -e, or you can start vi by running ex -v. Additionally, from within ex, you can start vi with the visual command (or vi for short). From inside vi, you can start ex with the command Q."

Most Linux distros come with a binary called vi but it is really vim in disguise with a few features
taken out. 

    ssh jack@jacktrusler.com

I'm going to use Vi on BSD because it feels like Bill Joy would've liked it that way, plus installing it
on Linux is actually pretty annoying because of terminal features.

(Q to go into Ex program and vi from ex to go into Vi)

[Here's a list of original Vi commands](https://www.atmos.albany.edu/daes/atmclasses/atm350/vi_cheat_sheet.pdf)

commands that work that list missed: 

    f -- find char in line
    ; -- next
    , -- previous
underlying ex commands: 

    :%s/foo/bar/g -- global search and replace

*(on jack@jacktrusler.com write a node cli tool in vi)*

## Vi IMproved
Vi IMproved was actually taken from Stevie (**ST** **E**ditor for **VI** **Enthusiasts**) written by
Tim Thompson  but I couldn't find much in terms of the history of Stevie except for changing undo 
functionality. It seems that a vast majority of what makes Vim, Vim is Bram Moolenaar in 1991. Here's the 
wikipedia summary on Bram: 

> Bram Moolenaar is a Dutch computer programmer and an active member of the open-source software community. He is the original author, maintainer, release manager, and benevolent dictator for life of Vim,[1] a vi-derivative text editor that is very popular among programmers and power users. From July 2006 until September 2021 Moolenaar was employed by Google working in the Zürich office.[2] He was able to spend part of his time maintaining Vim.[3]

Praise be to Bram Moolenaar! He really did go so far above and beyond what Vi is/was, and made this editor awesome. 
The benevolent dictator part is worth mentioning, because it ended up being part of the reason why
vim derivatives exist and also why vim9script was invented. For now though, lets jump into Vim. 

*(rename vimrc file then open vim)*

Vim is massively different from Vi, it has a crazy (like seriously there's so many new features) depth of new 
functionality, so much that i'm going to miss probably 90% of it, but here are some of the major differences:  

1. USER INTERFACE -- buffers / windows / tabs 
2. MODES -- normal / insert / visual / terminal / command / replace
3. COLORS -- Syntax highlighting / themes
4. GENERAL FUNCTIONALITY -- jump list / registers / undo history / code folding
5. MOTIONS -- new combinations introduced to move around the page and edit text
6. KEYMAPS -- customizable ways to automate your vim experience
7. PLUGINS -- the true next level of Vim written by users

Vim on startup looks at its runtime path and searches for a 

Here's an example of a .vimrc (mine)

    " ----------------------------
    " Variables
    " ----------------------------

    let mapleader = " "
    nnoremap <leader>so <CMD>w<CR><CMD>so%<CR>
    let g:netrw_banner=0 "turns netrw banner off

    set smartindent 
    set termguicolors "Enables 24-bit RGB color in the TUI
    set nohlsearch "turns off highlighting on search
    set expandtab "insert mode puts in spaces when tabbing
    set tabstop=4 "number of spaces a tab counts for
    set softtabstop=4 "editing operations (like <BS>) are deleting 2 spaces
    set shiftwidth=4 "number of spaces to use for each autoindent
    set nowrap "makes it so text runs off the screen instead of wrapping
    set number "sets number on side column
    set relativenumber "makes line number relative to cursor position
    set numberwidth=2 "number column char width
    set scrolloff=10 "scroll (x) lines from top and bottom
    set ignorecase  "can sEarch case ignoring caps

    set mouse=a "mouse in all modes
    set formatoptions-=cro "comments don't continue when enter is pressed

    set noswapfile "Living life on the edge

    " ----------------------------
    " Status Line 
    " ----------------------------
      set laststatus=2                             " always show statusbar  
      set statusline=  
      set statusline+=%-4.3n\                      " buffer number  
      set statusline+=%f\                          " filename   
      set statusline+=%h%m%r%w                     " status flags  
      set statusline+=\[%{strlen(&ft)?&ft:'none'}] " file type  
      set statusline+=%=                           " right align remainder  
      set statusline+=0x%-8B                       " character value  
      set statusline+=%-14(%l,%c%V%)               " line, character  
      set statusline+=%<%P                         " file position  

    colorscheme slate 

    " ----------------------------
    " Remaps
    " ----------------------------
    let mapleader = " "
    " Normal Mode
    nnoremap <leader>V :Vexplore<CR>
    nnoremap <leader>v :vsplit<CR>
    nnoremap <leader>S :Sexplore<CR>
    nnoremap <leader>s :split<CR>
    nnoremap <leader>e :Explore<CR>
    nnoremap <leader>rg :Rg<CR>
    nnoremap <leader>edit :vsplit $MYVIMRC<CR>
    nnoremap <leader>D :bd<CR>
    nnoremap <leader>d :bp \| sp \| bn \| bd<CR>
    nnoremap <leader>term :bel 12 split \| term <CR>
    nnoremap <leader>p "+p

    " Visual Mode
    vnoremap <leader>p "+p
    vnoremap <leader>y "+y

    " Command Mode
    cnoremap %% <C-R>=expand('%:h').'/'<CR> 

    " Terminal Mode
    tnoremap qq <C-\><C-N>:q!<CR>
    tnoremap qk <C-\><C-N><C-W>k

## NeoVim
Neovim was created as a community fork for Vim with the goals of making a faster, more collaborative
and more user friendly and configurable Vim. It can basically be downloaded and run on any operating
system and has hundreds of open source projects currently in the ecosystem.

Here's the About on github.com/neovim/neovim:  
> Vim-fork focused on extensibility and usability  

And here's the first paragraph of the README:  

> Neovim is a project that seeks to aggressively refactor Vim in order to:   
> - Simplify maintenance and encourage contributions
> - Split the work between multiple developers
> - Enable advanced UIs without modifications to the core
> - Maximize extensibility

I think Neovim does a great job on delivering on all of these goals honestly, and part of the reason 
is because of their decision to use Lua.  

### What is Lua
[I stole the notes from this video, one of the core maintainers of Neovim](youtube.com/watch?v=IP3J56sKtn0)  
Lua is a language created in Brazil in 1993. 

Neovim decided to embed the Lua language into the program. There were 5 main reasons for this.
1. simplicity (reference manual is only 100 pages, and covers the entire language, standard lib, and C api)
2. small size (200kb binary size for Linux)
3. portability (Lua is implemented in ISO C, which can be used basically anywhere)
4. embeddability (Lua functions can be used inside of vimscript) 
5. speed (LuaJIT is only 10-40% slower than C, which is extremely fast)

For a text editor, these goals seem like an obvious win. Simplicity is really also key because it 
allows developers to quickly get up and running with a relatively popular and simple language instead 
of having to learn vimscript which only really has one use, which is to extend vim. 

## NeoVim Advanced features
Neovim comes built in with a lot of advanced features that were not present in Vi Improved. One of 
the biggest changes that is integrated into Neovim core is the addition of a language server protocol. 
(LSP)

### Language Server Protocol (LSP)
(These are both great talks btw i'd really recommend watching both videos)  
[I stole notes from TJ again](https://www.youtube.com/watch?v=C9X5VF9ASac)  

> "Language Server Protocol (LSP) defines the protocol used between an editor or IDE and a language 
> server that provides language features like auto complete, go to definition, find all references etc"

> Created in June, 2016 by Microsoft in collaboration with Red Hat and Codenvy.

Splits the problem into languages and editors where languages implement LSP and editors implement 
LSP instead of editors having to implement the language and the protocol simultaneously. 

Neovim ships with a client (something that sends requests to the server), the client (Neovim)
sends a request (go\_to\_definition() for example) to a server (An installed language server running in the 
background) and gets a response for each function.

So the question is, how do you install the *Language Servers* you want to get all of the goodness
that you expect from a full blown IDE like VScode or Intellij? Right now all we have is a client 
implementing Language Server Protocol, but remember we still need a server that provides us (the client)
with the response.

### Completion menu with LSP


### Extras ed/vi/vim/nvim

I found some preserved source code for a legacy version of vi:  

    https://github.com/n-t-roff/heirloom-ex-vi  
