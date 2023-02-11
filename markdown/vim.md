# Vi IMproved (and beyond!)
Welcome to my presentation on Vim! Everyone's (favorite) text editor.
If you want to follow along, notes can be found at [alug.us](alug.us). Scroll down and click on __The Power of Vim__

<!-- stop -->

What's everyone's text editor of choice right now?

1. Vim
2. Emacs
3. Sublime Text
4. Nano
5. Ed
6. VScode
7. Intellij
8. Notepad++
9. Xcode
10. Some other abomination

<!-- stop -->

Well maybe surprisingly, we're going to start of the presentation with #5. Ed.

## Ed
The story of vi starts here. Ed was 
one of the first text editors, it was developed by Ken Thompson in August 1969. It was influenced by the
qed text editor, which was developed at UC Berkeley, Ken's Alma Mater. Thompson implemented regular
expressions on qed, which was notable.

Ed is a line based text editor with no GUI, just simple command line options.
`g/re/p` was influenced by an ed command `g`lobally find by `re`gex and `p`rint.  

<!-- stop -->

[some common ed commands](https://www.computerhope.com/unix/ued.htm)

| Command   | Description    |
|--------------- | --------------- |
| [.] | places cursor at line number "." meaning any number |
| [.,.]a | append to next line (default: last line of file) |
| [.,.]d | delete line(s) (default: last line of file |
| [.,.]m[.] | move line(s) from [range]m[new location] |
| [.,.]p | print range, current address is set to last line printed |
| [.,.]n | print all with line numbers, current address is set to last line printed |
| r [filename] | reads the file, and outputs the number of bytes |
| wq [filename] | writes the file, outputs the number of bytes, then quits |
| g/re/p | globally find lines by regular expression and print. (Also try g/re/n) |
| ,s/old/new/g | replace all occurances of [old] with [new] |



## Vi origins
The true inspiration for Vim, came from Bill Joy in 1976 with a text editor called Vi. This was the 
**vi(sual)** mode for a line editor called **ex**, and was released as part of the first Berkely 
Software Distribution (BSD) / Unix release in March 1978.

"**ex** stands for extended, because it was originally an extension of the simple line editor **ed**. Similarly, "vi" stands for visual, because vi is the "visual" (full-screen) editing mode, which was eventually added to ex."  
-- [computerhope.com](https://www.computerhope.com/unix/uex.htm)

## Vi
"The commands ex and vi point to the same program, started in different modes. You can start ex by running vi -e, or you can start vi by running ex -v. Additionally, from within ex, you can start vi with the visual command (or vi for short). From inside vi, you can start ex with the command Q."

Most Linux distros come with a binary called vi but it is really vim in disguise with a few features
taken out. 

    ssh jack@jacktrusler.com

I'm going to use Vi on BSD because it feels like Bill Joy would've liked it that way, plus installing it
on Linux is actually pretty annoying because of terminal features.

[Here's a list of original Vi commands](https://www.atmos.albany.edu/daes/atmclasses/atm350/vi_cheat_sheet.pdf)

<!-- stop -->

| Command   | Description    |
|--------------- | --------------- |
| [.]G | places cursor at line number "." meaning any number |
| dd | delete whole line |
| yy | yank whole line |
| p | put (paste) |
| ctrl-d ctrl-u | scroll down/up half a screen|
| ctrl-f ctrl-b | page forward/backward a full screen |
| f[char] | finds [char] in current line. ";" to repeat "," to go back. |
| u | undo, again to redo |
| J | join lines |
| }{ | jump paragraphs |
| / or ? | search forward or backward |
| :%s/old/new/g | replace all occurances of [old] with [new] in current file "%" |

## Vi IMproved
Vi IMproved was actually taken from Stevie (**ST** **E**ditor for **VI** **Enthusiasts**) written by
Tim Thompson  but I couldn't find much in terms of the history of Stevie except for changing undo 
functionality. It seems that a vast majority of what makes Vim, Vim is Bram Moolenaar in 1991. Here's the 
wikipedia summary on Bram: 

> Bram Moolenaar is a Dutch computer programmer and an active member of the open-source software community. He is the original author, maintainer, release manager, and benevolent dictator for life of Vim,[1] a vi-derivative text editor that is very popular among programmers and power users. From July 2006 until September 2021 Moolenaar was employed by Google working in the Zürich office.[2] He was able to spend part of his time maintaining Vim.[3]

Praise be to Bram Moolenaar! He really did go so far above and beyond what Vi is/was, and made this editor awesome. 
The benevolent dictator part is worth mentioning, because it ended up being part of the reason why
vim derivatives exist and also why vim9script was invented. For now though, lets jump into Vim. 

## Changes 

Vim is massively different from Vi, it has a crazy (like seriously there's so many new features) depth of new 
functionality, so much that i'm going to miss probably 90% of it, but here are some of the major differences:  

1. USER INTERFACE -- buffers / windows / tabs 
2. MODES -- normal / insert / visual / terminal / command / replace
3. COLORS -- Syntax highlighting / themes
4. GENERAL FUNCTIONALITY -- jump list / registers / undo history / code folding
5. MOTIONS -- new combinations introduced to move around the page and edit text
6. KEYMAPS -- customizable ways to automate your vim experience
7. PLUGINS -- the true next level of Vim written by users

<!-- stop -->

| Command   | Description    |
|--------------- | --------------- |
| di[w t p ) } " ' `] | delete in w(ord), t(ag), p(aragrphs), )}(blocks), or "`'(quotes) |
| V | visually select whole line, enters Visual Line mode |
| "[register]y | yank selection to register [0-9][a-z] |
| "[register]p | put (paste) from register [0-9][a-z] |
| u  ctrl-r | undo / redo, traverses undo tree |
| R | enter replace mode, type continuously to replace |
| :! [shell command]| run shell commands in vim |
| :term | open a terminal window in Terminal mode |
| ctrl + o  ctrl + i | jump backward/forward in jump list |
| m[char]  '[char] | mark a location in file with m / jump to mark with ' |
| q[char]  @[char]| record macro using q, use macro with @ |
| :h [keyword] | search for keyword in vim docs |

## .vimrc
Vim on startup looks at its runtime path and searches for a .vimrc file, this contains user settings 
and can run commands and programs written in vimscript.

Here's an example of a .vimrc (mine)
```vimrc
" ----------------------------
" Variables
" ----------------------------
let mapleader = " "
let g:netrw_banner=0 "turns netrw banner off
let g:netrw_liststyle=3 "changes the way the explorer tree looks

" set splitbelow "causes splits to happen below current window instead of above
set termguicolors "enables 24-bit RGB color in the TUI
set nohlsearch "turns off highlighting on search
set expandtab "insert mode puts in spaces when tabbing
set tabstop=4 "number of spaces a tab counts for
set softtabstop=4 "editing operations (like <BS>) are deleting 4 spaces
set shiftwidth=4 "number of spaces to use for each autoindent
set nowrap "makes it so text runs off the screen instead of wrapping
set number "sets number on side column
set relativenumber "makes line number relative to cursor position
set numberwidth=2 "number column char width
set scrolloff=10 "scroll (x) lines from top and bottom
set ignorecase  "can sEarch case ignoring caps
set cursorline "highlights current line

set mouse=a "mouse in all modes
set formatoptions-=cro "comments don't continue when enter is pressed

set noswapfile "Living life on the edge

colorscheme slate

" ----------------------------
" Remaps
" ----------------------------
nnoremap <leader>E :e $MYVIMRC<CR>
nnoremap <leader>W <CMD>w\|so%<CR>

let mapleader = " "

" Normal Mode
nnoremap <leader>V :Vexplore<CR>
nnoremap <leader>v :vsplit<CR>
nnoremap <leader>S :Sexplore<CR>
nnoremap <leader>s :split<CR>
nnoremap <leader>e :Explore<CR>
nnoremap <leader>D :bd<CR>
nnoremap <leader>d :bp \| sp \| bn \| bd<CR> " Keep splits, delete buffer
nnoremap <leader>bo :%bd\|e#\|bd#<CR>" Only keep current buffer
nnoremap <tab> :bn<CR>
nnoremap <S-tab> :bp<CR>

" If you have the + register
" vnoremap <leader>y "+y
" nnoremap <leader>p "+p
" vnoremap <leader>y "+p

" Visual Mode
vnoremap <leader>Y ygv<Esc>" Yank but keep cursor at current position

" Command Mode
cnoremap %% <C-R>=expand('%:h')<CR> 

" Terminal Mode
tnoremap qq <C-\><C-N>:q!<CR>
tnoremap <ESC> <C-\><C-N><CR>
```

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

## What is Lua
[I stole the notes from this video, one of the core maintainers of Neovim](youtube.com/watch?v=IP3J56sKtn0) 

Lua is a language created in Brazil in 1993. 

Neovim decided to embed the Lua language into the program. There were 5 main reasons for this.
1. simplicity (reference manual is only 100 pages, and covers the entire language, standard lib, and C api)
2. small size (200kb binary size for Linux)
3. portability (Lua is implemented in ISO C, which can be used basically anywhere)
4. embeddability (Lua functions can be used inside of vimscript) 
5. speed (LuaJIT is extremely fast, many operations comparable to C performance)

For a text editor, these goals seem like an obvious win. Simplicity is really also key because it 
allows developers to quickly get up and running with a relatively popular and simple language instead 
of having to learn vimscript which only really has one use, which is to extend vim. 

## NeoVim Advanced features
Neovim comes built in with a lot of advanced features that were not present in Vi Improved. One of 
the biggest changes that is integrated into Neovim core is the addition of a language server protocol. (LSP)

### Language Server Protocol (LSP)
(These are both great talks... i'd really recommend watching both videos)  

[Short history on LSP and why it's important.](https://www.youtube.com/watch?v=CJQqDdKl5TE)

[TJ again on why they included it in Neovim.](https://www.youtube.com/watch?v=C9X5VF9ASac)  

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

## Options 
Time check

Here I was thinking we could branch off and do one of these, and if there's time (or interest)
we can come back and do the other two.

1. Demonstrate Language Server Protocol
2. I can show you how I use Nvim for work
3. Configure Nvim

## Conclusion

Hopefully everyone enjoyed the presentation, here's a bunch of links to various stuff if you are 
interested in doing more digging into neovim. 
1. [My nvim files](https://github.com/jacktrusler/dotfiles/tree/main/nvim)
2. [alug.us files](https://github.com/jacktrusler/alug.us)
3. [TJ Devries for more in depth look into Neovim](https://www.youtube.com/@teej_dv)
4. [The Primeagen for blazingly fast Neovim content](https://www.youtube.com/c/theprimeagen)

<!-- stop -->

### Thanks for watching!
