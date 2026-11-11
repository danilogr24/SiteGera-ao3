// Lista dos Desenvolvedores do Projeto
const desenvolvedores = [
    "Danilo Grigolli",
    "Monique Sanches",
    "Ana Beatriz Silva",
    "Ana Moya",
    "Verônica Brisola"
  ];
  
  // Banco de Dados na Ordem Cronológica Exata dos Marcos Solicitados
  const timelineData = [
    {
      id: "ibm-360",
      year: "1964",
      title: "IBM System/360",
      category: "hardware",
      categoryLabel: "Hardware",
      shortDesc: "A família de mainframes que popularizou o uso de Circuitos Integrados (CIs) padronizados na indústria.",
      context: "Lançado em abril de 1964, a IBM investiu $5 bilhões na época para criar uma arquitetura de computadores compatível entre modelos menores e maiores. Marcou o divisor de águas entre a 2ª geração (transistores individuais) e a 3ª geração (Circuitos Integrados).",
      impact: "Criou o padrão de arquitetura computacional corporativa, introduziu o byte de 8 bits e separou o conceito de arquitetura de software da implementação do hardware.",
      curiosity: "Foi o projeto mais caro e arriscado da história da IBM até então, quase levando a empresa à falência durante o desenvolvimento.",
      specs: "Tecnologia SLT (Solid Logic Technology), 8 a 8192 KB de memória principal."
    },
    {
      id: "pdp-8",
      year: "1965",
      title: "PDP-8 (Digital Equipment Corp)",
      category: "hardware",
      categoryLabel: "Hardware",
      shortDesc: "O primeiro minicomputador comercialmente bem-sucedido da história da computação.",
      context: "Criado pela DEC (Digital Equipment Corporation), o PDP-8 era compacto o suficiente para ser colocado sobre uma mesa, diferentemente dos mainframes que ocupavam salas inteiras.",
      impact: "Democratizou o acesso computacional a universidades, laboratórios de pesquisa e pequenas empresas devido ao seu preço drasticamente mais baixo (US$ 18.000).",
      curiosity: "Vendeu mais de 50.000 unidades ao longo de seu ciclo de vida, um recorde para a época.",
      specs: "Palavra de 12 bits, memória RAM magnética de 4.096 palavras (expandível para 32K)."
    },
    {
      id: "simula-67",
      year: "1967",
      title: "SIMULA 67 (Programação Orientada a Objetos)",
      category: "software",
      categoryLabel: "Software",
      shortDesc: "A linguagem norueguesa que introduziu os conceitos primordiais de Programação Orientada a Objetos.",
      context: "Desenvolvida por Ole-Johan Dahl e Kristen Nygaard no Norwegian Computing Center em Oslo. Evoluiu a partir do SIMULA I para simular sistemas complexos.",
      impact: "Introduziu pela primeira vez os conceitos de Classes, Objetos, Herança e Polimorfismo, que fundamentaram C++, Java, Python e linguagens modernas.",
      curiosity: "Os criadores do SIMULA ganharam o Prêmio Turing em 2001 por seu trabalho revolucionário na arquitetura de linguagens.",
      specs: "Compilador baseado em rotinas de blocos dinâmicos e alocação de memória por Garbage Collection simples."
    },
    {
      id: "banco-relacional",
      year: "1970",
      title: "Banco de Dados Relacional (Modelo de Codd)",
      category: "software",
      categoryLabel: "Software",
      shortDesc: "Edgar F. Codd (IBM) publica a teoria matemática dos bancos de dados organizados em tabelas e chaves.",
      context: "Antes de 1970, dados eram armazenados em estruturas hierárquicas ou de rede extremamente rígidas. O artigo de Codd propôs o uso da álgebra relacional.",
      impact: "Deu origem aos sistemas modernos de banco de dados (SQL, Oracle, MySQL, PostgreSQL) que sustentam o comércio e os aplicativos modernos.",
      curiosity: "A própria IBM relutou em implementar a ideia de Codd no início porque vendia muito com seus sistemas de banco hierárquicos legados.",
      specs: "Uso de Tuplas, Atributos, Chaves Primárias/Estrangeiras e Operadores de Seleção/Junção."
    },
    {
      id: "intel-4004",
      year: "1971",
      title: "Processador Intel 4004",
      category: "hardware",
      categoryLabel: "Hardware",
      shortDesc: "O primeiro microprocessador do mundo contido em um único chip de silício comercializado.",
      context: "Projetado por Federico Faggin, Marcian Hoff e Masatoshi Shima para uma fabricante de calculadoras japonesa (Busicom).",
      impact: "Substituiu múltiplos chips espalhados por uma única CPU completa no tamanho da unha de um polegar, iniciando a era dos microcomputadores.",
      curiosity: "O chip tinha o mesmo poder computacional que o ENIAC de 1946, que ocupava uma sala inteira de 167m².",
      specs: "Frequência de 740 kHz, 2.300 transistores, arquitetura de 4 bits, fabricado em 10 microns."
    },
    {
      id: "disquete",
      year: "1971",
      title: "Disquete de 8 Polegadas (Floppy Disk)",
      category: "hardware",
      categoryLabel: "Hardware",
      shortDesc: "Criado pela IBM para carregar microcódigo nos mainframes, tornou-se o padrão de armazenamento removível.",
      context: "Inventado sob a liderança de Alan Shugart na IBM. Tratava-se de um disco magnético flexível protegido por uma capa plástica com veludo interno.",
      impact: "Permitiu que softwares e dados fossem facilmente transportados e comercializados em massa pela primeira vez na história.",
      curiosity: "O apelido 'Floppy' (flexível) veio justamente do fato do disco de 8 polegadas dobrar facilmente com as mãos.",
      specs: "Capacidade inicial de apenas 80 Kilobytes (apenas leitura no protótipo original)."
    },
    {
      id: "intel-8008",
      year: "1972",
      title: "Processador Intel 8008",
      category: "hardware",
      categoryLabel: "Hardware",
      shortDesc: "O primeiro microprocessador de 8 bits do mercado, ancestral direto dos chips x86.",
      context: "Encomendado pela Computer Terminal Corporation (CTC) para uso no terminal Datapoint 2200, a Intel entregou a CPU de 8 bits em meados de 1972.",
      impact: "Expandiu a capacidade de processamento de texto e caracteres ASCII, abrindo caminho para o famoso Intel 8080 e a arquitetura PC.",
      curiosity: "Consistia em 3.500 transistores e conseguia desempenhar operações de texto muito mais complexas que o Intel 4004.",
      specs: "Frequência de 500 KHz a 800 KHz, 8 bits de barramento, suporte a até 16 KB de memória."
    },
    {
      id: "linguagem-c",
      year: "1972",
      title: "Linguagem de Programação C",
      category: "software",
      categoryLabel: "Software",
      shortDesc: "Dennis Ritchie cria no Bell Labs a linguagem mais influente da história dos Sistemas Operacionais.",
      context: "Criada a partir da linguagem B para reescrever o sistema operacional UNIX, tornando-o portátil entre diferentes arquiteturas de computadores.",
      impact: "Base estrutural de quase todos os SOs modernos (Linux, Windows, macOS, iOS, Android) e de linguagens como C++, C#, Java e JavaScript.",
      curiosity: "A sintaxe de chaves `{ }` e estruturas como `for` e `while` do C tornaram-se o padrão visual da maioria das linguagens de programação.",
      specs: "Linguagem estruturada de baixo/médio nível com acesso direto à memória via Ponteiros."
    },
    {
      id: "xerox-parc",
      year: "1973",
      title: "Interface Gráfica & Xerox Alto (PARC)",
      category: "hardware",
      categoryLabel: "Hardware / Software",
      shortDesc: "Criação do Xerox Alto: a primeira estação de trabalho com GUI, Mouse, Janelas e Redes Ethernet.",
      context: "Desenvolvido no laboratório Xerox PARC em Palo Alto. Reuniu conceitos visuais que substituíram as linhas de comando por ícones e área de trabalho.",
      impact: "Inspirou diretamente o desenvolvimento do Steve Jobs para o Apple Lisa/Macintosh e a criação do Microsoft Windows anos depois.",
      curiosity: "A Xerox nunca comercializou o Alto com sucesso para o público em geral, subestimando a invenção criada por seus próprios cientistas.",
      specs: "Monitor vertical de mapa de bits (Bitmapped Display), Mouse de 3 botões, Rede Ethernet de 3 Mbps."
    },
    {
      id: "altair-8800",
      year: "1974 / 1975",
      title: "Altair 8800 (Primeiro PC da História)",
      category: "empresas",
      categoryLabel: "Empresas & PCs",
      shortDesc: "O kit de microcomputador da MITS que deu início oficial à Revolução do Computador Pessoal.",
      context: "Capa da revista Popular Electronics em janeiro de 1975. Vendido como kit para montar em casa por US$ 439.",
      impact: "Inspirou milhares de entusiastas do Homebrew Computer Club a criarem seus próprios computadores e softwares de consumo.",
      curiosity: "O Altair original não vinha com teclado nem monitor: a entrada era feita por chaves no painel frontal e a saída por lâmpadas LED.",
      specs: "Processador Intel 8080 (2 MHz), 256 bytes de RAM no modelo básico, barramento Altair S-100."
    },
    {
      id: "fundacao-microsoft",
      year: "1975",
      title: "Fundação da Microsoft",
      category: "empresas",
      categoryLabel: "Empresas & PCs",
      shortDesc: "Bill Gates e Paul Allen fundam a Microsoft em Albuquerque para criar o Altair BASIC.",
      context: "Após verem o Altair 8800 na revista, Gates e Allen escreveram um interpretador de linguagem BASIC para a máquina sem mesmo possuir um Altair físico.",
      impact: "Transformou o desenvolvimento de software em uma indústria independente extremamente lucrativa e definiu os padrões de SO do mercado.",
      curiosity: "O nome original era 'Micro-Soft' (hífen indicando a fusão de Microcomputadores e Software), removido pouco tempo depois.",
      specs: "Primeiro produto: Altair BASIC carregado via fita de papel perfurada."
    },
    {
      id: "fundacao-apple",
      year: "1976",
      title: "Fundação da Apple Computer",
      category: "empresas",
      categoryLabel: "Empresas & PCs",
      shortDesc: "Steve Jobs, Steve Wozniak e Ronald Wayne fundam a Apple na garagem da família Jobs.",
      context: "Unindo a genialidade de engenharia de Wozniak com a visão comercial e de design de Jobs, a empresa nasceu para comercializar computadores acessíveis.",
      impact: "Tornou-se uma das empresas mais valiosas e influentes do mundo na integração perfeita entre Hardware, Software e Design.",
      curiosity: "Ronald Wayne vendeu sua participação de 10% da Apple 12 dias após a fundação por apenas US$ 800. Hoje valeria centenas de bilhões de dólares.",
      specs: "Capital inicial obtido vendendo a calculadora HP de Wozniak e a Kombi da Volkswagen de Jobs."
    },
    {
      id: "apple-1",
      year: "1976",
      title: "Lançamento do Apple I",
      category: "empresas",
      categoryLabel: "Empresas & PCs",
      shortDesc: "O primeiro computador desenhado por Steve Wozniak, consistindo em uma placa de circuito totalmente montada.",
      context: "Apresentado no Homebrew Computer Club. Diferente de outros kits que vinham dessoldados, o Apple I vinha com a placa-mãe pronta.",
      impact: "Provou que computadores pessoais podiam ser montados com custos reduzidos e conexão direta a monitores de TV simples.",
      curiosity: "Foi vendido no valor curioso de US$ 666,66 porque Wozniak gostava de dígitos repetidos.",
      specs: "Processador MOS 6502 (1 MHz), 4 KB de RAM padrão (expandível para 8KB ou 48KB), saída de vídeo para TV."
    },
    {
      id: "apple-2",
      year: "1977",
      title: "Lançamento do Apple II",
      category: "empresas",
      categoryLabel: "Empresas & PCs",
      shortDesc: "O primeiro computador pessoal de grande sucesso de massa, com gabinete de plástico e gráficos coloridos.",
      context: "Lançado na West Coast Computer Faire em 1977. Criado como um produto pronto para o consumidor final ('plug and play').",
      impact: "Solidificou a indústria de PCs de consumo e impulsionou a revolução dos softwares de escritório com o lançamento da planilha VisiCalc.",
      curiosity: "Tinha slots de expansão internos projetados por Wozniak que permitiram uma vida útil e atualizações no modelo por mais de 15 anos.",
      specs: "Processador MOS 6502, gráficos coloridos (4 bits NTSC), 4 KB a 64 KB RAM, ROM com BASIC embutido."
    }
  ];
  
  // Perguntas para o Quiz Interativo
  const quizQuestions = [
    {
      question: "Qual inovação marcou o início oficial da Terceira Geração da Computação em 1964?",
      options: ["Substituição de válvulas por transistores", "Uso de Circuitos Integrados (CIs) no IBM System/360", "Invenção da Internet Ethernet", "Lançamento do iPhone"],
      answer: 1
    },
    {
      question: "Qual marco introduziu o conceito de Classes e Herança no Software em 1967?",
      options: ["Linguagem C", "SIMULA 67", "Altair BASIC", "SQL Relacional"],
      answer: 1
    },
    {
      question: "Quem publicou a teoria dos Bancos de Dados Relacionais em 1970?",
      options: ["Steve Wozniak", "Dennis Ritchie", "Edgar F. Codd", "Bill Gates"],
      answer: 2
    },
    {
      question: "Qual foi o primeiro microprocessador contido em um único chip lançado pela Intel em 1971?",
      options: ["Intel 8080", "Intel 4004", "MOS 6502", "Pentium"],
      answer: 1
    },
    {
      question: "Qual computador lançado em 1977 trouxe gabinete de plástico e suporte a cores para o mercado consumidor?",
      options: ["PDP-8", "Apple I", "Apple II", "Altair 8800"],
      answer: 2
    }
  ];
  
  let currentQuizIndex = 0;
  let quizScore = 0;
  let activeCategory = 'all';
  
  // Renderizar a Linha do Tempo
  function renderTimeline() {
    const container = document.getElementById('timeline-container');
    const searchVal = document.getElementById('search-input').value.toLowerCase();
    
    container.innerHTML = '';
  
    const filtered = timelineData.filter(item => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchVal) ||
                            item.year.includes(searchVal) ||
                            item.shortDesc.toLowerCase().includes(searchVal);
      return matchesCat && matchesSearch;
    });
  
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-12 text-gray-500 font-mono text-sm">
          Nenhum marco histórico encontrado para os critérios de busca.
        </div>
      `;
      return;
    }
  
    filtered.forEach((item) => {
      let categoryBadgeColor = "bg-blue-900/40 text-blue-300 border-blue-700/50";
      if (item.category === 'software') categoryBadgeColor = "bg-emerald-900/40 text-emerald-300 border-emerald-700/50";
      if (item.category === 'empresas') categoryBadgeColor = "bg-amber-900/40 text-amber-300 border-amber-700/50";
  
      const card = document.createElement('div');
      card.className = "relative pl-6 sm:pl-8 group cursor-pointer";
      card.onclick = () => openModal(item.id);
  
      card.innerHTML = `
        <!-- Ponto na Linha do Tempo -->
        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-retro-bg group-hover:bg-blue-500 group-hover:scale-125 transition-all"></div>
        
        <!-- Ano (Visível à esquerda em telas grandes) -->
        <div class="hidden sm:block absolute -left-28 top-1 text-right font-mono text-xs font-bold text-blue-400 w-20">
          ${item.year}
        </div>
  
        <!-- Card do Evento -->
        <div class="timeline-card bg-retro-card border border-gray-800 rounded-xl p-5 hover:border-blue-500/50 shadow-lg">
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="sm:hidden font-mono text-xs font-bold text-blue-400">${item.year}</span>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${categoryBadgeColor}">
              ${item.categoryLabel}
            </span>
            <span class="text-[10px] font-mono text-gray-500 hover:text-blue-400 flex items-center gap-1">
              Detalhes <i data-lucide="chevron-right" class="w-3 h-3"></i>
            </span>
          </div>
  
          <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            ${item.title}
          </h3>
          <p class="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed">
            ${item.shortDesc}
          </p>
        </div>
      `;
  
      container.appendChild(card);
    });
  
    lucide.createIcons();
  }
  
  // Filtros de Categoria
  function setCategory(cat) {
    activeCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-blue-600', 'text-white');
      btn.classList.add('bg-gray-800', 'text-gray-300');
    });
  
    event.target.classList.add('active', 'bg-blue-600', 'text-white');
    event.target.classList.remove('bg-gray-800', 'text-gray-300');
  
    renderTimeline();
  }
  
  function filterEvents() {
    renderTimeline();
  }
  
  // Modal de Detalhes
  function openModal(id) {
    const item = timelineData.find(x => x.id === id);
    if (!item) return;
  
    document.getElementById('modal-year').innerText = item.year;
    document.getElementById('modal-category').innerText = item.categoryLabel;
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-summary').innerText = item.shortDesc;
    document.getElementById('modal-context').innerText = item.context;
    document.getElementById('modal-impact').innerText = item.impact;
    document.getElementById('modal-curiosity').innerText = item.curiosity;
    document.getElementById('modal-specs').innerText = item.specs;
  
    document.getElementById('modal').classList.remove('hidden');
  }
  
  function closeModal() {
    document.getElementById('modal').classList.add('hidden');
  }
  
  // Terminal CLI Retrô
  function handleTerminalCommand(e) {
    if (e.key === 'Enter') {
      const inputEl = document.getElementById('terminal-input');
      const command = inputEl.value.trim().toLowerCase();
      const outputEl = document.getElementById('terminal-output');
  
      if (!command) return;
  
      // Echo do comando
      const cmdLine = document.createElement('div');
      cmdLine.innerHTML = `<span class="text-gray-400">user@gen3-pc:~$</span> <span class="text-white">${command}</span>`;
      outputEl.appendChild(cmdLine);
  
      // Lógica dos Comandos
      const responseLine = document.createElement('div');
      responseLine.className = "pl-2 text-emerald-400 border-l border-emerald-800";
  
      if (command === 'help') {
        responseLine.innerHTML = `
          Comandos disponíveis:<br>
          - <b class="text-white">list</b>: Lista todos os 14 marcos históricos<br>
          - <b class="text-white">desenvolvedores</b> ou <b class="text-white">autores</b>: Lista a equipe do projeto<br>
          - <b class="text-white">info &lt;id&gt;</b>: Exibe detalhes (ex: info intel-4004, info c)<br>
          - <b class="text-white">quiz</b>: Inicia o quiz interativo no terminal<br>
          - <b class="text-white">clear</b>: Limpa a tela do terminal
        `;
      } else if (command === 'desenvolvedores' || command === 'autores' || command === 'equipe') {
        responseLine.innerHTML = `<b>Desenvolvedores do Projeto GEN-3 ARCHIVE:</b><br>${desenvolvedores.map(d => `• ${d}`).join('<br>')}`;
      } else if (command === 'list') {
        responseLine.innerHTML = timelineData.map(i => `[${i.year}] <b class="text-white">${i.id}</b> - ${i.title}`).join('<br>');
      } else if (command.startsWith('info ')) {
        const queryId = command.replace('info ', '').trim();
        const item = timelineData.find(x => x.id.includes(queryId) || x.title.toLowerCase().includes(queryId));
        if (item) {
          responseLine.innerHTML = `<b class="text-white">${item.title} (${item.year})</b><br>${item.context}<br><span class="text-amber-400">Specs: ${item.specs}</span>`;
        } else {
          responseLine.innerHTML = `<span class="text-red-400">Item não encontrado. Digite 'list' para ver os IDs válidos.</span>`;
        }
      } else if (command === 'clear') {
        outputEl.innerHTML = '';
        inputEl.value = '';
        return;
      } else if (command === 'quiz') {
        responseLine.innerHTML = `Responda ao painel de Quiz interativo à direita! Pontuação atual: ${quizScore}/5`;
      } else {
        responseLine.innerHTML = `<span class="text-red-400">Comando desconhecido: '${command}'. Digite 'help'.</span>`;
      }
  
      outputEl.appendChild(responseLine);
      inputEl.value = '';
      outputEl.scrollTop = outputEl.scrollHeight;
    }
  }
  
  // Lógica do Quiz
  function loadQuizQuestion() {
    const q = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-question').innerText = `${currentQuizIndex + 1}. ${q.question}`;
    
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
  
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = "w-full text-left p-2.5 rounded-lg text-xs bg-gray-900 hover:bg-gray-800 border border-gray-800 text-gray-300 transition flex items-center justify-between group";
      btn.onclick = () => checkAnswer(idx);
      btn.innerHTML = `
        <span>${opt}</span>
        <i data-lucide="circle" class="w-3.5 h-3.5 text-gray-600 group-hover:text-amber-400"></i>
      `;
      optionsContainer.appendChild(btn);
    });
  
    lucide.createIcons();
  }
  
  function checkAnswer(selectedIdx) {
    const q = quizQuestions[currentQuizIndex];
    const optionsButtons = document.getElementById('quiz-options').children;
  
    if (selectedIdx === q.answer) {
      optionsButtons[selectedIdx].classList.add('bg-emerald-950', 'border-emerald-500', 'text-emerald-300');
      quizScore++;
    } else {
      optionsButtons[selectedIdx].classList.add('bg-red-950', 'border-red-500', 'text-red-300');
      optionsButtons[q.answer].classList.add('bg-emerald-950', 'border-emerald-500', 'text-emerald-300');
    }
  
    // Desabilitar botões após resposta
    for (let btn of optionsButtons) {
      btn.onclick = null;
    }
  
    document.getElementById('quiz-score').innerText = `Score: ${quizScore}/5`;
  }
  
  function nextQuestion() {
    currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;
    loadQuizQuestion();
  }
  
  // Toggle CRT Efeito
  function toggleCRT() {
    const overlay = document.getElementById('crt-overlay');
    const body = document.body;
  
    if (overlay.classList.contains('opacity-100')) {
      overlay.classList.remove('opacity-100');
      overlay.classList.add('opacity-0');
      body.classList.remove('crt-active');
    } else {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      body.classList.add('crt-active');
    }
  }
  
  // Inicialização
  document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    loadQuizQuestion();
    lucide.createIcons();
  });