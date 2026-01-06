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
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="TrendingUp" size={24} />
                Композиционная векторная эволюция учебной книги
              </h3>
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/3.png" 
                  alt="Композиционная эволюция" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                С точки зрения композиции русские учебные книги еще в XII-XIII веках строились авторами по 
                принципу «от простого к сложному», и сохранили эту тенденцию на протяжении почти тысячелетия, 
                несмотря на различное содержательное и идеологическое наполнение. Одновременно на протяжении всего 
                исследуемого периода наблюдается система постепенного усвоения учебного материала по принципу 
                «информация → тренировка → (контроль)». Схема представлена на Рисунке 2.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Info" size={18} className="text-blue-600" />
                    ИНФОРМАЦИЯ
                  </div>
                  <p className="text-sm text-muted-foreground">теоретический материал</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="Zap" size={18} className="text-green-600" />
                    ПРОДУКТИВНАЯ ДЕЯТЕЛЬНОСТЬ
                  </div>
                  <p className="text-sm text-muted-foreground">упражнения, тренировка</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <div className="font-semibold mb-2 flex items-center gap-2">
                    <Icon name="CheckCircle" size={18} className="text-amber-600" />
                    КОНТРОЛЬ
                  </div>
                  <p className="text-sm text-muted-foreground">проверка усвоения, творческие задания</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="Activity" size={24} />
                Содержательная волновая эволюция учебной книги
              </h3>
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/3.png" 
                  alt="Содержательная эволюция" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Динамика содержания учебного материала, на наш взгляд, развивалась волнообразно с 
                постепенным ускорением. За основу взята характеристика унификации – диверсификация материала 
                учебной книги, в том числе с позиции транслируемой идеологии. Так, первым трем периодам развития 
                учебной литературы свойственна высокая степень религиозно-нравственного содержания и универсальная 
                грамматика материала и познаний православной культуры.
              </p>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="BarChart3" size={20} className="text-indigo-600" />
                  Динамика содержания по периодам
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>10-16 век:</strong> Высокое религиозное содержание</p>
                  <p><strong>17-19 век:</strong> Снижение религиозности, диверсификация</p>
                  <p><strong>20 век:</strong> Пик унификации, марксистская идеология</p>
                  <p><strong>21 век:</strong> Возврат к разнообразию подходов</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-serif">
                <Icon name="Layers" size={24} />
                Методическая многовекторная эволюция учебной книги
              </h3>
              <div className="mb-6">
                <img 
                  src="https://cdn.poehali.dev/files/4.png" 
                  alt="Методическая эволюция" 
                  className="w-full rounded-lg shadow-md"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Развитие методических подходов к организации учебной книги показывает устойчивую тенденцию к поиску 
                новых решений. Сохраняя базовый принцип «от простого к сложному», в целом педагоги и авторы учебников 
                на протяжении веков не оставляют попыток найти и внедрить успешные методические приемы и технологии.
              </p>
              <div className="flex items-center justify-center gap-8 py-6">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-lg">ЕДИНЫЙ<br/>МЕТОД</span>
                  </div>
                  <p className="text-sm text-muted-foreground">заучивание,<br/>повторение</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Icon name="ArrowRight" size={32} className="text-primary" />
                  <Icon name="ArrowRight" size={32} className="text-primary" />
                  <Icon name="ArrowRight" size={32} className="text-primary" />
                </div>
                <div className="text-center">
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full bg-blue-600 opacity-80"
                        style={{ width: `${Math.random() * 20 + 20}px`, height: `${Math.random() * 20 + 20}px` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-semibold">МЕТОДИЧЕСКОЕ<br/>РАЗНООБРАЗИЕ</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic mt-4">
                Долгое время на начальных этапах ведущим методом было пассивное заучивание и воспроизведение материала. 
                Но с усложнением содержания образования стало очевидно, что такой подход не дает нужного результата, 
                поэтому происходит постоянная смена ведущих методов обучения, а вместе с ними и организация учебника.
              </p>
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
