import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Period {
  id: string;
  century: string;
  years: string;
  title: string;
  description: string;
  style: {
    bg: string;
    text: string;
    accent: string;
  };
}

interface Edition {
  title: string;
  year: string;
  period: string;
  description: string;
  image?: string;
  author?: string;
  significance?: string;
}

const periods: Period[] = [
  {
    id: 'complex',
    century: 'X-XI',
    years: 'до XI века',
    title: 'Комплексный период: от первых памятников до XI века',
    description: 'Эволюция учебной книги в X–XI веках на Руси представляла собой переход от устной традиции к систематической письменной грамотности, заложившей основу школьного образования. Этот процесс был обусловлен государственными, религиозными и культурными факторами, приведшими к появлению первых комплексных учебных сборников.',
    style: {
      bg: 'from-amber-50 to-orange-50',
      text: 'text-amber-900',
      accent: 'bg-amber-700'
    }
  },
  {
    id: 'church',
    century: 'XII-XIII',
    years: 'XII-XIII века',
    title: 'Церковный период: XII-XIII века',
    description: 'В XII-XIII веках учебные книги ограничивались церковной литературой, служившей основой для обучения чтению и моральному воспитанию.',
    style: {
      bg: 'from-stone-100 to-slate-100',
      text: 'text-stone-800',
      accent: 'bg-stone-700'
    }
  },
  {
    id: 'typology',
    century: 'XIV-XVI',
    years: 'XIV-XVI века',
    title: 'Период типологизации знаний: XIV-XVI век',
    description: 'С XIV по XVI век возникают первые специализированные учебники, отделенные от общей литературы.',
    style: {
      bg: 'from-blue-50 to-indigo-50',
      text: 'text-blue-900',
      accent: 'bg-blue-800'
    }
  },
  {
    id: 'secular',
    century: 'XVII',
    years: 'XVII век',
    title: 'Период секуляризации и заимствований: XVII век',
    description: 'Основными чертами развития учебной литературы в данное время стали постепенное снижение духовной составляющей образования и адаптация европейского образовательного опыта.',
    style: {
      bg: 'from-purple-50 to-violet-50',
      text: 'text-purple-900',
      accent: 'bg-purple-700'
    }
  },
  {
    id: 'scientific',
    century: 'XVIII',
    years: 'XVIII век',
    title: 'Научный период: XVIII век',
    description: 'XVIII век ознаменовал трансформацию отечественной учебной книги из эпизодических, преимущественно церковных изданий в системный элемент светского образования, обусловленный государственными реформами и влиянием европейского Просвещения.',
    style: {
      bg: 'from-emerald-50 to-teal-50',
      text: 'text-emerald-900',
      accent: 'bg-emerald-700'
    }
  },
  {
    id: 'disciplinary',
    century: 'XIX',
    years: 'XIX век',
    title: 'Дисциплинарный период: XIX век',
    description: 'XIX век характеризуется разделением учебников по дисциплинам и жанрам, с учетом школьных программ, поэтому стал этапом дифференциации и профессионализации учебной книги.',
    style: {
      bg: 'from-rose-50 to-pink-50',
      text: 'text-rose-900',
      accent: 'bg-rose-700'
    }
  },
  {
    id: 'standard',
    century: 'XX',
    years: 'XX век',
    title: 'Период стандартизации: XX век',
    description: 'Характеризовался переходом от сословной системы к универсальной, централизованной и идеологически ориентированной модели, направленной на ликвидацию неграмотности и формирование «нового советского человека».',
    style: {
      bg: 'from-red-50 to-orange-50',
      text: 'text-red-900',
      accent: 'bg-red-700'
    }
  },
  {
    id: 'digital',
    century: 'XXI',
    years: 'XXI век',
    title: 'Период цифровизации: XXI век',
    description: 'Характеризуется переходом от жесткой идеологической унификации советской эпохи к свободной модели.',
    style: {
      bg: 'from-cyan-50 to-sky-50',
      text: 'text-cyan-900',
      accent: 'bg-cyan-700'
    }
  }
];

const featuredEditions: Edition[] = [
  // I период X-XI века
  { 
    title: 'Остромирово Евангелие', 
    year: '1056-1057', 
    period: 'complex',
    author: 'Дьякон Григорий',
    description: 'Древнейшая датированная рукописная книга Древней Руси, созданная для новгородского посадника Остромира. Написана уставом на пергаменте, содержит 294 листа с богатым орнаментом и тремя миниатюрами евангелистов.',
    significance: 'Выдающийся памятник древнерусского искусства и письменности, демонстрирующий высокий уровень книжной культуры XI века.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/ff3f0e93-62ed-4f61-aefd-ce540ae902b8.jpg'
  },
  { 
    title: 'Изборник Святослава', 
    year: '1073', 
    period: 'complex',
    author: 'Перевод с греческого',
    description: 'Энциклопедический сборник статей философского, богословского и нравственно-дидактического содержания. Создан для князя Святослава Ярославича, содержит 266 листов пергамента.',
    significance: 'Первая русская энциклопедия, отражающая византийскую образованность и служившая учебным пособием для высших слоев общества.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/ff3f0e93-62ed-4f61-aefd-ce540ae902b8.jpg'
  },
  { 
    title: 'Архангельское Евангелие', 
    year: '1092', 
    period: 'complex',
    description: 'Рукописное Евангелие апракос (избранные чтения по церковным дням), написанное на пергаменте. Один из важнейших памятников древнерусского языка конца XI века.',
    significance: 'Ценный источник для изучения древнерусского языка, палеографии и орфографии.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/ff3f0e93-62ed-4f61-aefd-ce540ae902b8.jpg'
  },
  
  // III период XIV-XVI века (включая Ивана Федорова)
  { 
    title: 'Азбука Ивана Фёдорова', 
    year: '1574', 
    period: 'typology',
    author: 'Иван Фёдоров',
    description: 'Первый печатный русский учебник, изданный во Львове. Содержит азбуку, склады (слоги), образцы спряжения глаголов и тексты для чтения. Формат небольшой — карманная книжица на 40 страниц.',
    significance: 'Революционное издание, положившее начало массовому книгопечатанию на Руси и демократизации образования. Первая печатная учебная книга для детей.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/7cf9451d-b370-4c11-aa96-2100bf5f00e1.jpg'
  },
  { 
    title: 'Часослов', 
    year: 'XV-XVI века', 
    period: 'typology',
    description: 'Богослужебная книга, содержащая тексты церковных служб суточного круга. Использовалась для обучения чтению в церковно-приходских школах.',
    significance: 'Одна из самых распространенных учебных книг позднего средневековья.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/7cf9451d-b370-4c11-aa96-2100bf5f00e1.jpg'
  },

  // V период XVIII век
  { 
    title: 'Арифметика Леонтия Магницкого', 
    year: '1703', 
    period: 'scientific',
    author: 'Леонтий Филиппович Магницкий',
    description: 'Первый печатный учебник математики в России. Энциклопедический труд, содержащий арифметику, алгебру, геометрию, тригонометрию и их практические применения в навигации, астрономии, фортификации.',
    significance: 'Основной учебник для Навигацкой школы и других петровских учебных заведений. Использовался более 50 лет. М.В. Ломоносов называл его «вратами своей учености».',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/72f66c2b-2258-4146-b7a7-b22f6902bdde.jpg'
  },
  { 
    title: 'Российская грамматика Михаила Ломоносова', 
    year: '1755', 
    period: 'scientific',
    author: 'Михаил Васильевич Ломоносов',
    description: 'Первая научная грамматика русского языка, написанная на русском языке. Содержит систематическое описание фонетики, морфологии, словообразования и синтаксиса.',
    significance: 'Заложила основы научного изучения русского языка, нормализовала литературный язык и стала образцом для последующих грамматик.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/f6acb743-a85b-402f-b54d-de7115f93271.jpg'
  },
  { 
    title: 'Юности честное зерцало', 
    year: '1717', 
    period: 'scientific',
    description: 'Первое светское пособие по этикету и правилам поведения для молодежи. Содержит правила поведения в обществе, за столом, азбуку и цифры.',
    significance: 'Отражает петровские реформы в области образования и воспитания, внедрение европейских норм поведения.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/f6acb743-a85b-402f-b54d-de7115f93271.jpg'
  },

  // VI период XIX век
  { 
    title: 'Родное слово К.Д. Ушинского', 
    year: '1864-1865', 
    period: 'disciplinary',
    author: 'Константин Дмитриевич Ушинский',
    description: 'Двухтомная книга для чтения, содержащая художественные тексты, сказки, загадки, пословицы, научно-популярные статьи. Построена по принципу от простого к сложному с учетом детской психологии.',
    significance: 'Революционный учебник, основанный на научных педагогических принципах. Выдержал десятки изданий, воспитал несколько поколений российских детей. Основа отечественной методики начального обучения.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/730313ab-41c4-4eca-a533-741dbe341344.jpg'
  },
  { 
    title: 'Геометрия А.П. Киселёва', 
    year: '1892-1896', 
    period: 'disciplinary',
    author: 'Андрей Петрович Киселёв',
    description: 'Систематический курс элементарной геометрии в двух частях (планиметрия и стереометрия). Отличается строгостью изложения, четкостью определений и последовательностью доказательств.',
    significance: 'Стал классическим учебником, по которому училось более 70 лет (до 1960-х годов). Один из самых долгоживущих учебников в истории российского образования.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/3c49e5bf-3770-43be-a0db-da907da08a9a.jpg'
  },
  { 
    title: 'Русский язык Ф.И. Буслаева', 
    year: '1869-1907', 
    period: 'disciplinary',
    author: 'Федор Иванович Буслаев',
    description: 'Учебник русского языка, основанный на историко-сравнительном методе. Содержит грамматику, синтаксис и стилистику с многочисленными примерами из классической литературы.',
    significance: 'Заложил научные основы преподавания русского языка, связав грамматику с историей языка и литературой.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/3c49e5bf-3770-43be-a0db-da907da08a9a.jpg'
  },

  // VII период XX век
  { 
    title: 'Алгебра под редакцией А.Н. Колмогорова', 
    year: '1970-1980-е', 
    period: 'standard',
    author: 'Андрей Николаевич Колмогоров (ред.)',
    description: 'Систематический курс алгебры и начал анализа для старших классов. Отличается строгим научным подходом, введением элементов математического анализа, теории вероятностей.',
    significance: 'Один из лучших советских учебников математики, созданный выдающимся математиком. Обеспечивал высокий уровень математического образования в СССР.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/9046aeca-b475-48e6-babc-9e6a54d9fa39.jpg'
  },
  { 
    title: 'Родная речь В.П. Канина', 
    year: '1930-1960-е', 
    period: 'standard',
    description: 'Книга для чтения в начальных классах советской школы. Содержала рассказы о пионерах, труде, Родине, отрывки из классики с идеологическим содержанием.',
    significance: 'Стандартный учебник начальной школы СССР, формировавший мировоззрение советского человека.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/9046aeca-b475-48e6-babc-9e6a54d9fa39.jpg'
  },
  { 
    title: 'История СССР А.В. Шевякова', 
    year: '1937', 
    period: 'standard',
    author: 'Шевяков А.В.',
    description: 'Учебник истории для средней школы, созданный по личному указанию И.В. Сталина. Излагает марксистско-ленинскую концепцию исторического процесса.',
    significance: 'Эталон советского идеологического учебника, формировавший историческое сознание нескольких поколений.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/9046aeca-b475-48e6-babc-9e6a54d9fa39.jpg'
  },

  // VIII период XXI век
  { 
    title: 'Московская электронная школа (МЭШ)', 
    year: '2016-настоящее время', 
    period: 'digital',
    description: 'Облачная интерактивная образовательная платформа с электронными учебниками, сценариями уроков, тестами и библиотекой образовательных материалов. Доступна через веб-интерфейс и мобильные приложения.',
    significance: 'Пример цифровой трансформации образования, интеграция мультимедиа, интерактивности и персонализированного обучения.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/b8fe920a-98b8-4cc6-9e0c-efebb173e989.jpg'
  },
  { 
    title: 'Российская электронная школа (РЭШ)', 
    year: '2016-настоящее время', 
    period: 'digital',
    description: 'Полный интерактивный курс уроков по всем предметам школьной программы. Включает видеоуроки, конспекты, тренировочные задания и контрольные работы.',
    significance: 'Обеспечивает равный доступ к качественному образованию независимо от места проживания. Активно использовалась во время пандемии.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/b8fe920a-98b8-4cc6-9e0c-efebb173e989.jpg'
  },
  { 
    title: 'Учи.ру', 
    year: '2012-настоящее время', 
    period: 'digital',
    description: 'Интерактивная образовательная онлайн-платформа с курсами для школьников по математике, русскому языку, окружающему миру, английскому. Использует геймификацию и адаптивное обучение.',
    significance: 'Популярнейшая платформа дополнительного образования, внедрившая игровые механики в обучение. Более 10 миллионов пользователей.',
    image: 'https://cdn.poehali.dev/projects/eebc666f-84c9-4857-bc6e-f4d9f980f5dd/files/b8fe920a-98b8-4cc6-9e0c-efebb173e989.jpg'
  },
];

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('complex');
  const [selectedEdition, setSelectedEdition] = useState<Edition | null>(null);
  const currentPeriod = periods.find(p => p.id === selectedPeriod) || periods[0];

  const filteredFeaturedEditions = featuredEditions.filter(e => e.period === selectedPeriod);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentPeriod.style.bg} transition-all duration-700`}>
      <header className="border-b border-primary/20 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold text-primary font-serif">Эволюция учебной книги в России</h1>
            </div>
            <p className="text-sm text-muted-foreground">X-XXI века</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <Card className="p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                  <Icon name="Scroll" size={32} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-primary font-serif">О проекте</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Интерактивное исследование тысячелетней истории учебной книги в России — 
                  от рукописных свитков X века до цифровых платформ XXI столетия. 
                  Путешествие через эпохи, технологии и педагогические традиции.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3 font-serif">
            <Icon name="Calendar" size={28} />
            Периодизация эволюции учебной книги
          </h2>
          
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max">
                {periods.map((period) => (
                  <button
                    key={period.id}
                    onClick={() => setSelectedPeriod(period.id)}
                    className={`flex-shrink-0 w-48 p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      selectedPeriod === period.id
                        ? `${period.style.accent} text-white border-transparent shadow-lg`
                        : 'bg-card border-border hover:border-primary'
                    }`}
                  >
                    <div className="text-2xl font-bold mb-1 font-serif">{period.century}</div>
                    <div className="text-sm opacity-90">{period.years}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 animate-scale-in">
            <Card className="p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${currentPeriod.style.accent} flex items-center justify-center flex-shrink-0`}>
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-3xl font-bold mb-2 ${currentPeriod.style.text} font-serif`}>
                    {currentPeriod.title}
                  </h3>
                  <p className="text-muted-foreground font-semibold">{currentPeriod.years}</p>
                </div>
              </div>
              
              <p className="text-lg leading-relaxed text-foreground">{currentPeriod.description}</p>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3 font-serif">
            <Icon name="Star" size={28} />
            Знаковые издания периода
          </h2>
          
          {filteredFeaturedEditions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFeaturedEditions.map((edition, idx) => (
                <Dialog key={idx}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img 
                          src={edition.image} 
                          alt={edition.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                            {edition.year}
                          </Badge>
                          <h4 className="font-bold text-lg line-clamp-2">{edition.title}</h4>
                          {edition.author && (
                            <p className="text-sm opacity-90 mt-1">{edition.author}</p>
                          )}
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground line-clamp-3">{edition.description}</p>
                        <div className="mt-3 flex items-center gap-2 text-primary text-sm font-semibold">
                          <span>Подробнее</span>
                          <Icon name="ArrowRight" size={16} />
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold font-serif pr-8">{edition.title}</DialogTitle>
                      <DialogDescription className="text-base">
                        {edition.year} {edition.author && `• ${edition.author}`}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                      <img 
                        src={edition.image} 
                        alt={edition.title}
                        className="w-full h-80 object-cover rounded-lg mb-6"
                      />
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                            <Icon name="FileText" size={20} className="text-primary" />
                            Описание
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">{edition.description}</p>
                        </div>
                        {edition.significance && (
                          <div>
                            <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                              <Icon name="Award" size={20} className="text-primary" />
                              Историческое значение
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{edition.significance}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <Card className="p-8 text-center text-muted-foreground">
              <Icon name="BookOpen" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Для этого периода пока нет детальных карточек изданий</p>
            </Card>
          )}
        </section>

        <Tabs defaultValue="trends" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="trends">Тенденции развития</TabsTrigger>
            <TabsTrigger value="timeline">Хронология</TabsTrigger>
          </TabsList>

          <TabsContent value="trends" className="animate-fade-in space-y-8">
            
            {/* 1. Жанровая циклическая эволюция */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="RefreshCw" size={24} />
                1. Жанровая циклическая эволюция учебной книги
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Жанровая эволюция учебной литературы демонстрирует цикличность. Так, в современных терминах, 
                первые учебные книги средних веков можно назвать хрестоматиями, так как они представляли собой 
                сборники (изборники) текстов, не адаптированных для образовательных целей, которые использовались 
                учителями как вспомогательный материал. Развитие образования в XVII-XVIII веках привело к появлению 
                полноценных учебников, которые с XIX веке были дополнены методическими материалами для педагогов.
              </p>
              
              <div className="relative flex items-center justify-center py-12">
                <svg className="w-full max-w-2xl" viewBox="0 0 600 400">
                  <ellipse cx="300" cy="200" rx="120" ry="80" fill="#60a5fa" className="animate-pulse" style={{ animationDuration: '3s' }} />
                  <text x="300" y="205" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">УЧЕБНИК</text>
                  
                  <ellipse cx="300" cy="60" rx="140" ry="50" fill="#3b82f6" />
                  <text x="300" y="48" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">ХРЕСТОМАТИЙНЫЕ</text>
                  <text x="300" y="65" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">ТЕКСТЫ</text>
                  <text x="300" y="80" textAnchor="middle" fill="white" fontSize="10">(дополнительный материал)</text>
                  
                  <ellipse cx="80" cy="200" rx="70" ry="80" fill="#3b82f6" />
                  <text x="80" y="190" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">МЕТОДИЧЕСКИЕ</text>
                  <text x="80" y="205" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">РЕКОМЕНДАЦИИ</text>
                  <text x="80" y="220" textAnchor="middle" fill="white" fontSize="9">(пособия для учителей)</text>
                  
                  <ellipse cx="520" cy="200" rx="70" ry="80" fill="#3b82f6" />
                  <text x="520" y="190" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ЗАДАНИЯ И</text>
                  <text x="520" y="205" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">УПРАЖНЕНИЯ</text>
                  <text x="520" y="220" textAnchor="middle" fill="white" fontSize="9">(рабочие тетради)</text>
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                    </marker>
                  </defs>
                  
                  <path d="M 300 120 L 300 140" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 155 180 L 180 190" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 445 180 L 420 190" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center">
                Рис. 1. Жанровая циклическая эволюция учебной книги
              </p>
            </Card>

            {/* 2. Композиционная векторная эволюция */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="ArrowRight" size={24} />
                2. Композиционная векторная эволюция учебной книги
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                С точки зрения композиции русские учебные книги еще в XII-XIII веках строились авторами по 
                принципу «от простого к сложному», и сохранили эту тенденцию на протяжении почти тысячелетия. 
                Одновременно на протяжении всего исследуемого периода наблюдается система постепенного усвоения 
                учебного материала по принципу «информация → тренировка → (контроль)».
              </p>
              
              <div className="relative py-8">
                <div className="flex items-center justify-center gap-6 mb-8">
                  <div className="relative group">
                    <div className="w-48 h-32 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                      <div className="text-center text-white">
                        <Icon name="Info" size={32} className="mx-auto mb-2" />
                        <div className="font-bold text-lg">ИНФОРМАЦИЯ:</div>
                        <div className="text-sm">теоретический материал</div>
                      </div>
                    </div>
                  </div>
                  
                  <Icon name="ArrowRight" size={40} className="text-primary animate-pulse" />
                  
                  <div className="relative group">
                    <div className="w-48 h-32 bg-green-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                      <div className="text-center text-white">
                        <Icon name="Zap" size={32} className="mx-auto mb-2" />
                        <div className="font-bold text-sm">ПРОДУКТИВНАЯ ДЕЯТЕЛЬНОСТЬ:</div>
                        <div className="text-xs">упражнения, тренировка</div>
                      </div>
                    </div>
                  </div>
                  
                  <Icon name="ArrowRight" size={40} className="text-primary animate-pulse" />
                  
                  <div className="relative group">
                    <div className="w-48 h-32 bg-amber-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                      <div className="text-center text-white">
                        <Icon name="CheckCircle" size={32} className="mx-auto mb-2" />
                        <div className="font-bold text-lg">КОНТРОЛЬ:</div>
                        <div className="text-sm">проверка усвоения</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center">
                Рис. 2. Композиционная векторная эволюция учебной книги
              </p>
            </Card>

            {/* 3. Содержательная волновая эволюция */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="Activity" size={24} />
                3. Содержательная волновая эволюция учебной книги
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Динамика содержания учебного материала развивалась волнообразно с постепенным ускорением. 
                За основу взята характеристика унификации – диверсификация материала учебной книги. 
                Так, первым трем периодам развития учебной литературы свойственна высокая степень 
                религиозно-нравственного содержания и универсальная грамматика материала и познаний православной культуры.
              </p>
              
              <div className="relative py-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6">
                <svg className="w-full" viewBox="0 0 800 300" preserveAspectRatio="xMidYMid meet">
                  <line x1="50" y1="250" x2="750" y2="250" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="50" y1="50" x2="50" y2="250" stroke="#cbd5e1" strokeWidth="2" />
                  
                  <text x="150" y="275" textAnchor="middle" fontSize="14" fill="#475569">10-16 век</text>
                  <text x="350" y="275" textAnchor="middle" fontSize="14" fill="#475569">17-19 век</text>
                  <text x="550" y="275" textAnchor="middle" fontSize="14" fill="#475569">20 век</text>
                  <text x="700" y="275" textAnchor="middle" fontSize="14" fill="#475569">21 век</text>
                  
                  <path 
                    d="M 50,80 Q 150,60 150,70 T 350,180 T 550,60 T 700,200" 
                    stroke="#3b82f6" 
                    strokeWidth="4" 
                    fill="none"
                    className="animate-pulse"
                  />
                  
                  <circle cx="150" cy="70" r="8" fill="#2563eb" />
                  <circle cx="350" cy="180" r="8" fill="#2563eb" />
                  <circle cx="550" cy="60" r="8" fill="#2563eb" />
                  <circle cx="700" cy="200" r="8" fill="#2563eb" />
                  
                  <line x1="600" y1="30" x2="650" y2="30" stroke="#3b82f6" strokeWidth="3" />
                  <text x="660" y="35" fontSize="12" fill="#475569">содержание учебной книги</text>
                </svg>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center mt-4">
                Рис. 3. Содержательная волновая эволюция учебной книги
              </p>
            </Card>

            {/* 4. Методическая многовекторная эволюция */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="Sparkles" size={24} />
                4. Методическая многовекторная эволюция учебной книги
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Развитие методических подходов к организации учебной книги показывает устойчивую тенденцию к поиску 
                новых решений. Сохраняя базовый принцип «от простого к сложному», педагоги и авторы учебников 
                на протяжении веков не оставляют попыток найти и внедрить успешные методические приемы.
              </p>
              
              <div className="relative py-12">
                <div className="flex items-center justify-center gap-12">
                  <div className="text-center">
                    <div className="relative">
                      <div className="w-40 h-40 rounded-full bg-blue-500 flex items-center justify-center shadow-xl animate-pulse mb-4">
                        <div className="text-white font-bold text-center px-4">
                          <div className="text-lg">ЕДИНЫЙ</div>
                          <div className="text-lg">МЕТОД</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">заучивание,<br/>повторение</p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Icon name="ArrowRight" size={36} className="text-primary" />
                    <Icon name="ArrowRight" size={36} className="text-primary" />
                    <Icon name="ArrowRight" size={36} className="text-primary" />
                  </div>
                  
                  <div className="text-center">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                      <div className="absolute w-16 h-16 rounded-full bg-blue-600 top-0 left-12 animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute w-24 h-24 rounded-full bg-blue-500 top-8 right-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute w-12 h-12 rounded-full bg-blue-700 top-16 left-4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="absolute w-20 h-20 rounded-full bg-blue-400 bottom-16 left-16 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                      <div className="absolute w-14 h-14 rounded-full bg-blue-600 bottom-8 right-12 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                      <div className="absolute w-18 h-18 rounded-full bg-blue-500 bottom-4 left-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute w-28 h-28 rounded-full bg-blue-600 opacity-60" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                    </div>
                    <p className="text-sm font-semibold text-foreground mt-2">МЕТОДИЧЕСКОЕ<br/>РАЗНООБРАЗИЕ</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center mt-6">
                Рис. 4. Методическая многовекторная эволюция учебной книги
              </p>
            </Card>

          </TabsContent>

          <TabsContent value="timeline" className="animate-fade-in">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="Clock" size={24} />
                Хронология ключевых изданий
              </h3>
              <div className="space-y-6">
                {periods.map(period => {
                  const periodEditions = featuredEditions.filter(e => e.period === period.id);
                  if (periodEditions.length === 0) return null;

                  return (
                    <div key={period.id} className="border-l-4 pl-6 pb-6" style={{ borderColor: period.style.accent.replace('bg-', '#') }}>
                      <Badge className={`${period.style.accent} text-white mb-3`}>
                        {period.century} век
                      </Badge>
                      <h4 className="text-xl font-bold font-serif mb-4">{period.title}</h4>
                      <div className="space-y-4">
                        {periodEditions.map((edition, idx) => (
                          <div key={idx} className="flex gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex-shrink-0 w-20 h-28 bg-gray-200 rounded overflow-hidden">
                              <img src={edition.image} alt={edition.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h5 className="font-semibold text-foreground">{edition.title}</h5>
                                  <p className="text-sm text-muted-foreground">{edition.year}</p>
                                  {edition.author && (
                                    <p className="text-sm text-muted-foreground italic">{edition.author}</p>
                                  )}
                                </div>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <button className="text-primary hover:underline text-sm flex items-center gap-1">
                                      <span>Подробнее</span>
                                      <Icon name="ExternalLink" size={14} />
                                    </button>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-3xl">
                                    <DialogHeader>
                                      <DialogTitle className="text-2xl font-bold font-serif">{edition.title}</DialogTitle>
                                      <DialogDescription>{edition.year} {edition.author && `• ${edition.author}`}</DialogDescription>
                                    </DialogHeader>
                                    <div className="mt-4">
                                      <img src={edition.image} alt={edition.title} className="w-full h-80 object-cover rounded-lg mb-6" />
                                      <div className="space-y-4">
                                        <div>
                                          <h4 className="font-semibold mb-2">Описание</h4>
                                          <p className="text-muted-foreground">{edition.description}</p>
                                        </div>
                                        {edition.significance && (
                                          <div>
                                            <h4 className="font-semibold mb-2">Историческое значение</h4>
                                            <p className="text-muted-foreground">{edition.significance}</p>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>
                              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{edition.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-card py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Проект «Эволюция учебной книги в России». Исследовательский образовательный портал.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
