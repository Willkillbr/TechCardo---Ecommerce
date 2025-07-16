const products = [
  {
    id: 1,
    name: 'Tênis Nike Revolution 6',
    price: 299.90,
    buyed: 2892,
    star: 4.5,
    HaveOffer: true,
    offer: 28,    
    LocalCep: '01000000',    
    LocalCity: 'São Paulo - SP',
    haveType: true,
    haveColor: true,
    haveSize: true,
    types: {
      type: {
        title: 'Cor',
        options: [
          {
            value: 'branco',
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752253046/nike_revolutuion_branco_az31ju.avif'
          },
          {
            value: 'azul',
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752253139/nike_revolutuion_azul_hps5b9.avif'
          },
          {
            value: 'preto',
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752082552/T%C3%AAnis_Nike_Revolution_6_zwmtm1.webp'
          }
        ]
      },
      size: {
        title: 'Tamanho',
        options: [
          { value: '39' },
          { value: '40' },
          { value: '41' },
          { value: '42' },
          { value: '43' }
        ]
      }
    },
    description: `O Tênis Nike Revolution 6 foi desenvolvido para proporcionar máximo conforto e desempenho em suas atividades diárias e esportivas. Com design moderno e leve, oferece excelente amortecimento graças à sua entressola em espuma que absorve impactos, reduzindo o desgaste nas articulações. A parte superior em tecido respirável garante ventilação constante, mantendo seus pés secos e frescos durante o uso prolongado. Ideal para corridas, treinos e uso casual, alia tecnologia e estilo para você se destacar em qualquer ocasião.`
  },
  {
    id: 2,
    name: 'Jaqueta Jeans Levis',
    price: 419.00,
    buyed: 1847,
    star: 3.0,
    HaveOffer: false,
    offer: 12,    
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Cor',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071018/Jaqueta_Jeans_Levis_uvy88q.png'
          }
        ]
      }
    },
    description: `A Jaqueta Jeans Levis é sinônimo de tradição e estilo atemporal. Produzida com tecido denim de alta qualidade, oferece durabilidade e resistência para o uso diário. Seu corte clássico proporciona um ajuste confortável e versátil, perfeito para diversas ocasiões, do casual ao despojado. Detalhes exclusivos da marca conferem autenticidade e personalidade, tornando esta peça um item indispensável no guarda-roupa de quem valoriza moda e qualidade.`
  },
  {
    id: 3,
    name: 'Fone de Ouvido Bose QuietComfort',
    price: 1299.00,
    buyed: 2765,
    star: 5.0,
    HaveOffer: true,
    offer: 24,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071018/Fone_de_Ouvido_Bose_QuietComfort_tryhzn.jpg'
          }
        ]
      }
    },
    description: `O Fone de Ouvido Bose QuietComfort é a escolha ideal para quem busca excelência em qualidade sonora e conforto. Equipado com tecnologia avançada de cancelamento de ruído ativo, proporciona uma imersão total na música ou chamadas, eliminando ruídos externos indesejados. Seu design ergonômico e materiais premium garantem conforto prolongado mesmo em longas sessões de uso. Compatível com múltiplos dispositivos, oferece conectividade sem fio estável e bateria de longa duração para acompanhar seu dia inteiro.`
  },
  {
    id: 4,
    name: 'Smart TV Samsung 55"',
    price: 2499.00,
    buyed: 2998,
    star: 2.5,
    HaveOffer: false,
    offer: 8,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071020/Smart_TV_Samsung_55_tmawre.jpg'
          }
        ]
      }
    },
    description: `A Smart TV Samsung 55" oferece uma experiência visual imersiva com sua tela ampla e resolução Full HD. Projetada para conectar você ao universo do entretenimento digital, conta com sistema operacional intuitivo que facilita o acesso a aplicativos de streaming, navegação web e jogos. Com design elegante e acabamento sofisticado, integra-se facilmente a qualquer ambiente, trazendo modernidade e praticidade para sua sala de estar.`
  },
  {
    id: 5,
    name: 'Câmera DSLR Canon EOS',
    price: 3799.00,
    buyed: 1123,
    star: 4.0,
    HaveOffer: true,
    offer: 19,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071017/C%C3%A2mera_DSLR_Canon_EOS_bnqnbj.jpg'
          }
        ]
      }
    },
    description: `A Câmera DSLR Canon EOS é a ferramenta perfeita para fotógrafos que buscam alta performance e versatilidade. Com sensor avançado e sistema de autofoco rápido e preciso, captura imagens nítidas e vibrantes em diversas condições de iluminação. Possui múltiplas opções de lentes intercambiáveis, permitindo total controle criativo. Seu corpo robusto e ergonômico garante conforto para longas sessões de fotos, enquanto os recursos de vídeo oferecem qualidade profissional para produções multimídia.`
  },
  {
    id: 6,
    name: 'Relógio Garmin Forerunner',
    price: 1199.00,
    buyed: 876,
    star: 1.0,
    HaveOffer: false,
    offer: 30,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071020/Rel%C3%B3gio_Garmin_Forerunner_ls0r9g.jpg'
          }
        ]
      }
    },
    description: `O Relógio Garmin Forerunner é ideal para atletas e entusiastas do esporte que desejam monitoramento preciso e completo de suas atividades físicas. Com GPS integrado, oferece métricas detalhadas como distância, ritmo e frequência cardíaca, auxiliando no planejamento e melhora do desempenho. Seu design leve e resistente é pensado para uso diário, com bateria de longa duração e conectividade para sincronização com smartphones e aplicativos especializados.`
  },
  {
    id: 7,
    name: 'Notebook Dell Inspiron',
    price: 4299.00,
    buyed: 2456,
    star: 4.8,
    HaveOffer: true,
    offer: 7,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071019/Notebook_Dell_Inspiron_onuvit.jpg'
          }
        ]
      }
    },
    description: `O Notebook Dell Inspiron combina potência, eficiência e design moderno para atender tanto profissionais quanto estudantes. Equipado com processador de última geração, memória RAM ampliada e armazenamento SSD rápido, garante desempenho fluido para multitarefas, edição de vídeos e jogos. Sua tela de alta definição proporciona imagens nítidas e cores vibrantes, enquanto o teclado confortável e bateria de longa duração asseguram produtividade mesmo longe da tomada.`
  },
  {
    id: 8,
    name: 'Mochila Swissgear',
    price: 349.00,
    buyed: 1345,
    star: 2.0,
    HaveOffer: true,
    offer: 21,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071020/Mochila_Swissgear_ijgocm.png'
          }
        ]
      }
    },
    description: `A Mochila Swissgear é projetada para oferecer máxima organização, conforto e durabilidade. Com múltiplos compartimentos e bolsos específicos, facilita o transporte seguro de notebooks, acessórios e itens pessoais. Seu material resistente à água protege seus pertences contra intempéries, enquanto as alças acolchoadas e ajustáveis proporcionam ergonomia para longos períodos de uso. Ideal para o dia a dia, viagens ou uso profissional.`
  },
  {
    id: 9,
    name: 'Óculos Ray-Ban Aviador',
    price: 699.00,
    buyed: 998,
    star: 3.7,
    HaveOffer: false,
    offer: 13,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071020/%C3%93culos_Ray-Ban_Aviador_iiqz4m.png'
          }
        ]
      }
    },
    description: `Os Óculos Ray-Ban Aviador são clássicos que unem estilo, proteção e conforto. Com lentes de alta qualidade que oferecem proteção contra raios UV, garantem visão clara e segura em ambientes externos. A armação metálica leve proporciona durabilidade e design elegante, tornando-os uma peça indispensável para quem valoriza moda e funcionalidade. Perfeitos para uso diário e diversas ocasiões.`
  },
  {
    id: 10,
    name: 'Bicicleta Caloi Elite',
    price: 2999.00,
    buyed: 2345,
    star: 0.0,
    HaveOffer: true,
    offer: 25,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071019/Bicicleta_Caloi_Elite_fahvho.jpg'
          }
        ]
      }
    },
    description: `A Bicicleta Caloi Elite é perfeita para quem busca desempenho e estilo nas pedaladas urbanas e trilhas leves. Com quadro leve e resistente em alumínio, oferece agilidade e estabilidade. Equipada com câmbio preciso e freios confiáveis, garante segurança e controle em diferentes terrenos. Seu design moderno e componentes de alta qualidade fazem dela uma excelente escolha para praticantes de ciclismo em qualquer nível.`
  },
  {
    id: 11,
    name: 'Cafeteira Nespresso',
    price: 599.00,
    buyed: 1543,
    star: 4.2,
    HaveOffer: true,
    offer: 16,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071019/Cafeteira_Nespresso_i0v9n3.jpg'
          }
        ]
      }
    },
    description: `A Cafeteira Nespresso une praticidade, design sofisticado e tecnologia para preparar cafés de alta qualidade em segundos. Compatível com cápsulas exclusivas, oferece diversas opções de sabores e intensidades para agradar todos os paladares. Seu sistema automático garante extração perfeita e consistência, enquanto o tamanho compacto facilita a instalação em qualquer ambiente, seja em casa ou no escritório.`
  },
  {
    id: 12,
    name: 'Livro O Hobbit',
    price: 49.90,
    buyed: 2109,
    star: 5.0,
    HaveOffer: false,
    offer: 5,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071020/Livro_O_Hobbit_ju1ezw.jpg'
          }
        ]
      }
    },
    description: `"O Hobbit" é uma obra-prima da literatura fantástica, escrita por J.R.R. Tolkien. Esta edição oferece uma narrativa envolvente que transporta o leitor para um mundo de aventuras, magia e heróis improváveis. Ideal para fãs de fantasia, o livro traz uma história rica em detalhes, personagens cativantes e uma linguagem acessível, perfeita para todas as idades. Um clássico indispensável para colecionadores e amantes da leitura.`
  },
  {
    id: 13,
    name: 'Mouse Logitech MX Master 3',
    price: 399.00,
    buyed: 1876,
    star: 3.3,
    HaveOffer: true,
    offer: 29,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071019/Mouse_Logitech_MX_Master_3_lrrdpl.jpg'
          }
        ]
      }
    },
    description: `O Mouse Logitech MX Master 3 é projetado para profissionais que exigem precisão, conforto e eficiência em seu trabalho diário. Com sensores avançados que oferecem rastreamento ultra-rápido e preciso, permite controle absoluto em diferentes superfícies. Seus botões personalizáveis e design ergonômico reduzem a fadiga, aumentando a produtividade em longas jornadas. Compatível com múltiplos sistemas operacionais, oferece conectividade sem fio estável e bateria de longa duração.`
  },
  {
    id: 14,
    name: 'Teclado Mecânico Redragon',
    price: 299.00,
    buyed: 2678,
    star: 2.8,
    HaveOffer: true,
    offer: 11,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071019/Teclado_Mec%C3%A2nico_Redragon_uexndp.jpg'
          }
        ]
      }
    },
    description: `O Teclado Mecânico Redragon é ideal para gamers e profissionais que buscam desempenho e resposta rápida. Com switches mecânicos de alta qualidade, oferece sensação tátil satisfatória e durabilidade superior. Iluminação RGB personalizável, design robusto e teclas anti-ghosting garantem precisão em jogos e digitação intensa. Compatível com sistemas Windows e Mac, é um equipamento que alia estilo e funcionalidade.`
  },
  {
    id: 15,
    name: 'Monitor LG UltraWide',
    price: 1499.00,
    buyed: 1345,
    star: 1.5,
    HaveOffer: false,
    offer: 23,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071019/Monitor_LG_UltraWide_qjirvm.png'
          }
        ]
      }
    },
    description: `O Monitor LG UltraWide proporciona uma experiência visual expandida, ideal para multitarefa, edição de vídeo e jogos. Com tela ampla e resolução Full HD, oferece maior campo de visão e detalhamento preciso das imagens. Seu design moderno e acabamento fino contribuem para um ambiente de trabalho elegante e funcional. Conta com conectividade múltipla para integração facilitada a diversos dispositivos.`
  },
  {
    id: 16,
    name: 'Echo Dot 4ª Geração',
    price: 349.00,
    buyed: 2901,
    star: 4.9,
    HaveOffer: true,
    offer: 18,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071018/Echo_Dot_4%C2%AA_Gera%C3%A7%C3%A3o_geqnnv.jpg'
          }
        ]
      }
    },
    description: `O Echo Dot 4ª Geração é um assistente inteligente com controle por voz, que integra praticidade e tecnologia para facilitar seu dia a dia. Compacto e com design moderno, conecta-se facilmente à sua rede doméstica para controlar dispositivos inteligentes, tocar música, informar notícias e realizar diversas tarefas por comandos simples. Compatível com Alexa, oferece uma experiência interativa e personalizada para sua casa conectada.`
  },
  {
    id: 17,
    name: 'Patins Rollerblade',
    price: 799.00,
    buyed: 1234,
    star: 0.5,
    HaveOffer: true,
    offer: 27,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071018/Patins_Rollerblade_lbgzol.jpg'
          }
        ]
      }
    },
    description: `Os Patins Rollerblade oferecem uma combinação de conforto, performance e segurança para quem gosta de deslizar com estilo. Com estrutura resistente, rodas de alta qualidade e sistema de freios eficiente, garantem estabilidade e controle durante o uso. Indicados para iniciantes e praticantes intermediários, proporcionam diversão e atividade física ao ar livre, promovendo equilíbrio e coordenação motora.`
  },
  {
    id: 18,
    name: 'Camiseta Adidas Originals',
    price: 129.90,
    buyed: 1678,
    star: 3.9,
    HaveOffer: false,
    offer: 6,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071018/Camiseta_Adidas_Originals_a7swjn.png'
          }
        ]
      }
    },
    description: `A Camiseta Adidas Originals é uma peça essencial para quem busca estilo casual aliado a conforto. Confeccionada em tecido de alta qualidade, proporciona toque suave e durabilidade. Seu design icônico, com o logo clássico da marca, garante autenticidade e personalidade, podendo ser combinada facilmente com diferentes looks do dia a dia.`
  },
  {
    id: 19,
    name: 'Chuteira Nike Mercurial',
    price: 499.00,
    buyed: 1987,
    star: 2.2,
    HaveOffer: true,
    offer: 30,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071017/Chuteira_Nike_Mercurial_h6cu8e.png'
          }
        ]
      }
    },    
  },
  {
    id: 20,
    name: 'Tablet Samsung Galaxy Tab',
    price: 1299.00,
    buyed: 2456,
    star: 5.0,
    HaveOffer: true,
    offer: 9,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071018/Tablet_Samsung_Galaxy_Tab_dhmanq.jpg'
          }
        ]
      }
    },
    description: `O Tablet Samsung Galaxy Tab oferece alta performance com tela ampla e resolução vibrante, ideal para consumo de mídia, trabalho e navegação. Equipado com processador potente e bateria de longa duração, permite uso prolongado sem preocupações. Seu sistema operacional intuitivo e conectividade avançada facilitam a integração com outros dispositivos, tornando-o uma ferramenta versátil para todas as necessidades.`
  },
  {
    id: 21,
    name: 'Aspirador Robô Xiaomi',
    price: 1099.00,
    buyed: 2789,
    star: 1.8,
    HaveOffer: true,
    offer: 14,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071017/Aspirador_Rob%C3%B4_Xiaomi_rcdosx.jpg'
          }
        ]
      }
    },
    description: `O Aspirador Robô Xiaomi combina tecnologia e praticidade para manter sua casa limpa com autonomia. Equipado com sensores inteligentes, mapeia ambientes e evita obstáculos, garantindo limpeza eficiente em diversos tipos de piso. Seu design compacto facilita o acesso a áreas difíceis, enquanto a programação automática permite que funcione mesmo quando você está ausente, otimizando seu tempo.`
  },
  {
    id: 22,
    name: 'Cadeira Gamer ThunderX3',
    price: 1399.00,
    buyed: 1101,
    star: 0.0,
    HaveOffer: false,
    offer: 17,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071017/Cadeira_Gamer_ThunderX3_tanqwc.jpg'
          }
        ]
      }
    },
    description: `A Cadeira Gamer ThunderX3 foi desenvolvida para oferecer suporte ergonômico durante longas sessões de jogo. Com ajustes personalizáveis, apoio para cabeça e lombar, proporciona conforto e postura correta, prevenindo fadiga. Seu design robusto e materiais resistentes garantem durabilidade e estilo, fazendo dela uma escolha ideal para gamers e profissionais que passam muitas horas sentados.`
  },
  {
    id: 23,
    name: 'Batedeira Planetária Arno',
    price: 499.00,
    buyed: 1888,
    star: 4.7,
    HaveOffer: true,
    offer: 22,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: false,
    haveColor: false,
    haveSize: false,
    types: {
      type: {
        title: 'Imagem',
        options: [
          {
            value: null,
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071017/Batedeira_Planet%C3%A1ria_Arno_qwmppp.jpg'
          }
        ]
      }
    },    
  },
  {
    id: 24,
    name: 'Tênis Adidas Ultraboost',
    price: 799.00,
    buyed: 2222,
    star: 2.0,
    HaveOffer: true,
    offer: 26,
    LocalCep: '01000-000',
    LocalCity: 'São Paulo - SP',
    haveType: true,
    haveColor: true,
    haveSize: false,
    types: {
      type: {
        title: 'Cor',
        options: [
          {
            value: 'preto',
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071017/T%C3%AAnis_Adidas_Ultraboost_r2zniz.jpg'
          },
          {
            value: 'branco',
            image: 'https://res.cloudinary.com/dzuvl4k2f/image/upload/v1752071017/T%C3%AAnis_Adidas_Ultraboost_r2zniz.jpg'
          }
        ]
      }
    },
    description: `O Tênis Adidas Ultraboost combina tecnologia de amortecimento Boost com design moderno para proporcionar conforto e performance superiores. Ideal para corredores e uso casual, oferece retorno de energia a cada passo e respirabilidade graças ao cabedal em tecido knit. Leve e durável, é a escolha perfeita para quem busca unir estilo e funcionalidade.`
  }
]

export default products;
