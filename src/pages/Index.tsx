import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
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
  description?: string;
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

const editions: Edition[] = [
  // I период X-XI века
  { title: 'Остромирово Евангелие', year: '1056-1057', period: 'complex' },
  { title: 'Изборник Святослава', year: '1073', period: 'complex' },
  { title: 'Изборник Святослава', year: '1076', period: 'complex' },
  { title: 'Архангельское Евангелие', year: '1092', period: 'complex' },
  { title: 'Новгородские служебные Минеи', year: '1095-1097', period: 'complex' },
  
  // II период XII-XIII века
  { title: 'Псалтирь', year: '', period: 'church' },
  { title: 'Евангелие (в разных редакциях, включая апракос)', year: '', period: 'church' },
  { title: 'Изборники', year: '', period: 'church' },
  { title: 'Азбуковники и алфавиты', year: '', period: 'church' },
  { title: '«Поучение Владимира Мономаха»', year: '', period: 'church' },
  { title: '«Хождение игумена Даниила»', year: '', period: 'church' },
  { title: '«Слово» и «Моление» Даниила Заточника', year: 'XII век', period: 'church' },
  { title: '«Пчела»', year: 'переводной сборник, популярный в XII–XVI вв.', period: 'church' },
  
  // III период XIV-XVI века
  { title: 'Псалтирь', year: '', period: 'typology' },
  { title: 'Апостол', year: '', period: 'typology' },
  { title: '«Часослов»', year: '', period: 'typology' },
  { title: '«Азбука» Ивана Фёдорова', year: 'Львов, 1574', period: 'typology' },
  { title: '«Домострой»', year: '', period: 'typology' },
  { title: '«Четьи-Минеи» митрополита Макария', year: 'многотомный свод, сер. XVI в.', period: 'typology' },
  { title: '«Толковая Палея»', year: '', period: 'typology' },
  { title: '«Хронограф»', year: 'редакции XVI в.', period: 'typology' },
  { title: '«Степенная книга»', year: 'сер. XVI в.', period: 'typology' },
  { title: '«Пазлектикъ» Иоанна Дамаскина', year: 'в переводах и компиляциях', period: 'typology' },
  { title: 'Сборники поучений «слова» церковных авторов', year: '', period: 'typology' },
  { title: 'Азбуковники и лексикографические сборники', year: '', period: 'typology' },
  { title: 'Летописец начала царства', year: 'сер. XVI в.', period: 'typology' },
  
  // IV период XVII век
  { title: 'Букварь и азбуки', year: 'основные пособия для начального обучения чтению и письму', period: 'secular' },
  { title: '«Букварь» Василия Бурцова', year: '1634', period: 'secular' },
  { title: '«Букварь» Кариона Истомина', year: '1694, издан в 1694, с гравюрами Л. Бунина', period: 'secular' },
  { title: '«Большой букварь» Кариона Истомина', year: '1696, тираж 20 экз.', period: 'secular' },
  { title: '«Грамматика» Мелетия Смотрицкого', year: '1648', period: 'secular' },
  { title: 'Исторические и правительственные', year: '', period: 'secular' },
  { title: 'Практические руководства и «светские» пособия', year: '', period: 'secular' },
  { title: '«Учение о хитрости ратных людей»', year: 'середина XVII в.', period: 'secular' },
  { title: '«Соборное уложение»', year: '1649', period: 'secular' },
  { title: '«Гражданство обычаев детских» Епифания Славинецкого', year: 'сер. XVII в.', period: 'secular' },
  { title: 'Арифметика Магнитцкого', year: '1703', period: 'secular' },
  { title: 'Геометрия Осипа Коржа', year: '1708', period: 'secular' },
  { title: 'География и первые буквари', year: '', period: 'secular' },
  
  // V период XVIII век
  { title: 'Юности честное зерцало', year: '1717', period: 'scientific' },
  { title: 'Российская грамматика Михаила Ломоносова', year: '1755', period: 'scientific' },
  { title: 'Краткий российский летописец Михаила Ломоносова', year: '1760, Петербург', period: 'scientific' },
  { title: 'Письмовник Николая Курганова', year: '1762, 2-е изд.', period: 'scientific' },
  { title: 'Детская философия Андрея Болотова', year: '1776-1779', period: 'scientific' },
  { title: 'Древняя и средняя история Феодора Брукнера', year: '1731-1736, 7 томов', period: 'scientific' },
  { title: 'Краткая российская история Ф. И. Янковича де Мириево', year: '1799', period: 'scientific' },
  { title: '«Теоретическая и практическая Арифметика» Дмитрия Аничкова', year: 'первое издание — 1764', period: 'scientific' },
  { title: 'Начальные сведения физики для гимназий Г. В. Крафта', year: '1750, пер. И. Голубцов, ред. Ломоносов', period: 'scientific' },
  { title: 'Естественная история Н. Г. Курганова', year: '1760-е', period: 'scientific' },
  { title: 'Круг земной В. И. Берри', year: '1710, пер.', period: 'scientific' },
  { title: 'Сферическая тригонометрия для Морского кадетского корпуса', year: '1760-е', period: 'scientific' },
  { title: 'Хрестоматии и сборники текстов на', year: '', period: 'scientific' },
  { title: 'Руководства по специальным дисциплинам', year: '', period: 'scientific' },
  { title: 'Энциклопедии и справочники', year: '', period: 'scientific' },
  
  // VI период XIX век
  { title: 'Родное слово К. Д. Ушинский', year: '1864-1865', period: 'disciplinary' },
  { title: 'Чтение и говорение К. Д. Ушинский', year: '1865-1869', period: 'disciplinary' },
  { title: 'История России С. М. Соловьев', year: 'сокращенное издание 1860-х', period: 'disciplinary' },
  { title: 'Арифметика Ю. Н. Бялей', year: '1870-е', period: 'disciplinary' },
  { title: 'Физика А. В. Думнов', year: '1880-е', period: 'disciplinary' },
  { title: 'Русский язык Ф. И. Буслаев', year: '1869-1907', period: 'disciplinary' },
  { title: 'Полный курс арифметики и алгебры А. Н. Страгонова', year: '1880-1890-е', period: 'disciplinary' },
  { title: 'Геометрия А. П. Киселева', year: '1892-1896, 2 части', period: 'disciplinary' },
  { title: 'Алгебра П. И. Сомова', year: '1870-е', period: 'disciplinary' },
  { title: 'Сборник задач по арифметике и геометрии В. А. Дарузеса', year: '1890-е', period: 'disciplinary' },
  { title: 'Краткий курс естествознания А. Я. Герда', year: '1895', period: 'disciplinary' },
  { title: 'Курс естествознания Н. П. Вагнера', year: '1870-е', period: 'disciplinary' },
  { title: 'Естественная история Н. А. Грузлева', year: '1880-е', period: 'disciplinary' },
  { title: 'Краткое начертание физики П. И. Страхов', year: '1810', period: 'disciplinary' },
  { title: 'Общая и прикладная физика Э. Х. Ленц', year: '1838-1847, 2 части', period: 'disciplinary' },
  { title: 'Курс физики К. Д. Краевич', year: '1866, многократные переиздания', period: 'disciplinary' },
  
  // VII период XX век
  { title: 'Геометрия А. П. Киселева', year: '1940-е – 1980-е, многократные переиздания', period: 'standard' },
  { title: 'Алгебра под ред. А. Н. Колмогорова', year: '1970-е – 1980-е, 7–9 кл.', period: 'standard' },
  { title: 'Физика И. В. Мещанинова и Г. И. Кобзаренко', year: '1950-е – 1970-е, 7–10 кл.', period: 'standard' },
  { title: 'Арифметика А. Н. Теляковского и М. И. Мордковича', year: '1930-1950-е, начальная школа', period: 'standard' },
  { title: 'История СССР А. В. Шевякова', year: '1937, 6–10 кл.', period: 'standard' },
  { title: 'Родная речь В. П. Канина', year: '1930-е, 1–4 кл.', period: 'standard' },
  { title: 'Ботаника В. А. Корчагиной', year: '1985, 5–6 кл.', period: 'standard' },
  { title: 'Общая биология под ред. Ю. И. Полянского', year: '1987, 9–10 кл.', period: 'standard' },
  { title: 'Физическая география В. П. Максаковского', year: '1980-е, 9 кл.', period: 'standard' },
  { title: 'Экономическая география В. П. Максаковского', year: '1988, 5 кл.', period: 'standard' },
  { title: 'Химия П. А. Оржековского', year: '1970-е, 8–10 кл.', period: 'standard' },
];

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('complex');
  const [filterPeriod, setFilterPeriod] = useState<string>('all');
  const currentPeriod = periods.find(p => p.id === selectedPeriod) || periods[0];

  const filteredEditions = filterPeriod === 'all' 
    ? editions 
    : editions.filter(e => e.period === filterPeriod);

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

        <Tabs defaultValue="trends" className="mb-12">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="trends">Тенденции развития</TabsTrigger>
            <TabsTrigger value="editions">Перечень изданий</TabsTrigger>
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
                  {/* Центральный учебник */}
                  <ellipse cx="300" cy="200" rx="120" ry="80" fill="#60a5fa" className="animate-pulse" style={{ animationDuration: '3s' }} />
                  <text x="300" y="195" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">УЧЕБНИК</text>
                  
                  {/* Хрестоматийные тексты (вверху) */}
                  <ellipse cx="300" cy="60" rx="140" ry="50" fill="#3b82f6" />
                  <text x="300" y="50" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ХРЕСТОМАТИЙНЫЕ</text>
                  <text x="300" y="67" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">ТЕКСТЫ (дополнительный,</text>
                  <text x="300" y="82" textAnchor="middle" fill="white" fontSize="11" fontWeight="normal">несистематизированный</text>
                  <text x="300" y="95" textAnchor="middle" fill="white" fontSize="11" fontWeight="normal">материал)</text>
                  
                  {/* Методические рекомендации (слева) */}
                  <ellipse cx="80" cy="200" rx="70" ry="80" fill="#3b82f6" />
                  <text x="80" y="190" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">МЕТОДИЧЕСКИЕ</text>
                  <text x="80" y="205" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">РЕКОМЕНДАЦИИ</text>
                  <text x="80" y="220" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ПЕДАГОГАМ</text>
                  <text x="80" y="235" textAnchor="middle" fill="white" fontSize="9">(пособия для учителей)</text>
                  
                  {/* Задания и упражнения (справа) */}
                  <ellipse cx="520" cy="200" rx="70" ry="80" fill="#3b82f6" />
                  <text x="520" y="185" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">ЗАДАНИЯ И</text>
                  <text x="520" y="200" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">УПРАЖНЕНИЯ</text>
                  <text x="520" y="220" textAnchor="middle" fill="white" fontSize="9">(учебные пособия и</text>
                  <text x="520" y="233" textAnchor="middle" fill="white" fontSize="9">рабочие тетради)</text>
                  
                  {/* Стрелки */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                    </marker>
                  </defs>
                  
                  <path d="M 300 120 L 300 140" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 155 180 L 180 190" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 445 180 L 420 190" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  
                  <path d="M 180 210 L 155 220" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 420 210 L 445 220" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 300 280 L 300 350 Q 300 370, 320 370 L 520 370 Q 540 370, 540 350 L 540 280" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 300 280 L 300 350 Q 300 370, 280 370 L 80 370 Q 60 370, 60 350 L 60 280" stroke="#94a3b8" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center">
                Рис. 1. Жанровая циклическая эволюция учебной книги — от разрозненных материалов к единому учебнику
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
                        <div className="text-sm">теоретический</div>
                        <div className="text-sm">материал</div>
                      </div>
                    </div>
                  </div>
                  
                  <Icon name="ArrowRight" size={40} className="text-primary animate-pulse" />
                  
                  <div className="relative group">
                    <div className="w-48 h-32 bg-green-500 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                      <div className="text-center text-white">
                        <Icon name="Zap" size={32} className="mx-auto mb-2" />
                        <div className="font-bold text-sm">ПРОДУКТИВНАЯ</div>
                        <div className="font-bold text-sm">ДЕЯТЕЛЬНОСТЬ:</div>
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
                        <div className="text-sm">проверка усвоения,</div>
                        <div className="text-sm">творческие задания</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center">
                Рис. 2. Композиционная векторная эволюция учебной книги — единый вектор «от простого к сложному»
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
                  {/* Сетка */}
                  <line x1="50" y1="250" x2="750" y2="250" stroke="#cbd5e1" strokeWidth="2" />
                  <line x1="50" y1="50" x2="50" y2="250" stroke="#cbd5e1" strokeWidth="2" />
                  
                  {/* Подписи периодов */}
                  <text x="150" y="275" textAnchor="middle" fontSize="14" fill="#475569">10-16 век</text>
                  <text x="350" y="275" textAnchor="middle" fontSize="14" fill="#475569">17-19 век</text>
                  <text x="550" y="275" textAnchor="middle" fontSize="14" fill="#475569">20 век</text>
                  <text x="700" y="275" textAnchor="middle" fontSize="14" fill="#475569">21 век</text>
                  
                  {/* Ось Y */}
                  <text x="35" y="50" textAnchor="end" fontSize="11" fill="#475569">Высокая</text>
                  <text x="35" y="155" textAnchor="end" fontSize="11" fill="#475569">Средняя</text>
                  <text x="35" y="250" textAnchor="end" fontSize="11" fill="#475569">Низкая</text>
                  
                  {/* Волновая линия */}
                  <path 
                    d="M 50,80 Q 150,60 150,70 T 350,180 T 550,60 T 700,200" 
                    stroke="#3b82f6" 
                    strokeWidth="4" 
                    fill="none"
                    className="animate-pulse"
                  />
                  
                  {/* Точки данных */}
                  <circle cx="150" cy="70" r="8" fill="#2563eb" className="animate-pulse" />
                  <circle cx="350" cy="180" r="8" fill="#2563eb" className="animate-pulse" />
                  <circle cx="550" cy="60" r="8" fill="#2563eb" className="animate-pulse" />
                  <circle cx="700" cy="200" r="8" fill="#2563eb" className="animate-pulse" />
                  
                  {/* Легенда */}
                  <line x1="600" y1="30" x2="650" y2="30" stroke="#3b82f6" strokeWidth="3" />
                  <text x="660" y="35" fontSize="12" fill="#475569">содержание учебной книги</text>
                </svg>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center mt-4">
                Рис. 3. Содержательная волновая эволюция учебной книги — от унификации к разнообразию
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold mb-2">📖 10-16 века</div>
                  <p className="text-sm text-muted-foreground">Высокое религиозное содержание, универсальная грамматика</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="font-semibold mb-2">📚 17-19 века</div>
                  <p className="text-sm text-muted-foreground">Снижение религиозности, диверсификация по дисциплинам</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <div className="font-semibold mb-2">📕 20 век</div>
                  <p className="text-sm text-muted-foreground">Пик унификации, марксистско-ленинская идеология</p>
                </div>
                <div className="p-4 bg-cyan-50 rounded-lg">
                  <div className="font-semibold mb-2">💻 21 век</div>
                  <p className="text-sm text-muted-foreground">Возврат к разнообразию, цифровизация</p>
                </div>
              </div>
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
                Долгое время ведущим методом было пассивное заучивание и воспроизведение материала. 
                Но с усложнением содержания образования стало очевидно, что такой подход не дает нужного результата.
              </p>
              
              <div className="relative py-12">
                <div className="flex items-center justify-center gap-12">
                  {/* Единый метод (слева) */}
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
                  
                  {/* Стрелки перехода */}
                  <div className="flex flex-col gap-2">
                    <Icon name="ArrowRight" size={36} className="text-primary" />
                    <Icon name="ArrowRight" size={36} className="text-primary" />
                    <Icon name="ArrowRight" size={36} className="text-primary" />
                  </div>
                  
                  {/* Методическое разнообразие (справа) */}
                  <div className="text-center">
                    <div className="relative w-64 h-64 flex items-center justify-center">
                      {/* Множество кругов разного размера */}
                      <div className="absolute w-16 h-16 rounded-full bg-blue-600 top-0 left-12 animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="absolute w-24 h-24 rounded-full bg-blue-500 top-8 right-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="absolute w-12 h-12 rounded-full bg-blue-700 top-16 left-4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="absolute w-20 h-20 rounded-full bg-blue-400 bottom-16 left-16 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                      <div className="absolute w-14 h-14 rounded-full bg-blue-600 bottom-8 right-12 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                      <div className="absolute w-18 h-18 rounded-full bg-blue-500 bottom-4 left-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute w-16 h-16 rounded-full bg-blue-700 top-20 right-16 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
                      <div className="absolute w-22 h-22 rounded-full bg-blue-400 top-12 left-24 animate-pulse" style={{ animationDelay: '1.4s' }}></div>
                      <div className="absolute w-28 h-28 rounded-full bg-blue-600 opacity-60" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
                    </div>
                    <p className="text-sm font-semibold text-foreground mt-2">МЕТОДИЧЕСКОЕ<br/>РАЗНООБРАЗИЕ</p>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground italic text-center mt-6">
                Рис. 4. Методическая многовекторная эволюция учебной книги — от единого подхода к разнообразию методов
              </p>
              
              <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} className="text-purple-600" />
                  Примеры методических подходов в истории
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>• Теоретическое переупрощенность:</strong> пассивное заучивание наизусть и воспроизведение</p>
                  <p><strong>• Наглядность:</strong> проектно-исследовательские задания, эффективность доказана</p>
                  <p><strong>• Геймификация:</strong> игровые механики в современных учебниках</p>
                  <p><strong>• Дифференциация:</strong> адаптация под разные уровни подготовки</p>
                </div>
              </div>
            </Card>

          </TabsContent>

          <TabsContent value="editions" className="animate-fade-in">
            <Card className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3 font-serif">
                  <Icon name="Library" size={24} />
                  Перечень исторических изданий
                </h3>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-muted-foreground">Период:</label>
                  <select 
                    className="px-3 py-2 border rounded-lg text-sm"
                    value={filterPeriod}
                    onChange={(e) => setFilterPeriod(e.target.value)}
                  >
                    <option value="all">Все периоды</option>
                    {periods.map(p => (
                      <option key={p.id} value={p.id}>{p.century} век</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {periods.map(period => {
                  const periodEditions = editions.filter(e => e.period === period.id);
                  if (filterPeriod !== 'all' && filterPeriod !== period.id) return null;
                  if (periodEditions.length === 0) return null;

                  return (
                    <div key={period.id} className="border-l-4 pl-6" style={{ borderColor: period.style.accent.replace('bg-', '#') }}>
                      <div className="mb-4">
                        <Badge className={`${period.style.accent} text-white mb-2`}>
                          {period.century} век
                        </Badge>
                        <h4 className="text-xl font-bold font-serif">{period.title}</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {periodEditions.map((edition, idx) => (
                          <div 
                            key={idx} 
                            className="p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <Icon name="BookMarked" size={18} className="text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-semibold text-foreground">{edition.title}</p>
                                {edition.year && (
                                  <p className="text-sm text-muted-foreground mt-1">{edition.year}</p>
                                )}
                              </div>
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
