import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Period {
  century: string;
  years: string;
  title: string;
  description: string;
  keyBooks: string[];
  style: {
    bg: string;
    text: string;
    accent: string;
  };
}

const periods: Period[] = [
  {
    century: 'X-XV',
    years: '988-1500',
    title: 'Эпоха рукописных книг',
    description: 'Первые учебные тексты на старославянском языке. Монастырские школы и княжеские библиотеки.',
    keyBooks: ['Остромирово Евангелие (1056-1057)', 'Изборник Святослава (1073)', 'Азбуковники'],
    style: {
      bg: 'from-amber-50 to-orange-50',
      text: 'text-amber-900',
      accent: 'bg-amber-700'
    }
  },
  {
    century: 'XVI-XVII',
    years: '1500-1700',
    title: 'Начало книгопечатания',
    description: 'Появление первых печатных учебников. Иван Федоров и развитие типографского дела.',
    keyBooks: ['Азбука (1574) - Иван Федоров', 'Букварь Василия Бурцова (1634)', 'Грамматика Мелетия Смотрицкого (1619)'],
    style: {
      bg: 'from-stone-100 to-slate-100',
      text: 'text-stone-800',
      accent: 'bg-stone-700'
    }
  },
  {
    century: 'XVIII',
    years: '1700-1800',
    title: 'Петровские реформы образования',
    description: 'Создание светских школ и академий. Научные учебники по математике, геометрии, навигации.',
    keyBooks: ['Арифметика Магницкого (1703)', 'Грамматика Ломоносова (1755)', 'Российская грамматика (1757)'],
    style: {
      bg: 'from-blue-50 to-indigo-50',
      text: 'text-blue-900',
      accent: 'bg-blue-800'
    }
  },
  {
    century: 'XIX',
    years: '1800-1900',
    title: 'Золотой век учебной книги',
    description: 'Развитие гимназического и реального образования. Классические учебники для всех слоев общества.',
    keyBooks: ['Родное слово К.Д. Ушинского (1864)', 'Арифметика А. Гольденберга (1885)', 'Задачник Рыбкина (1890)'],
    style: {
      bg: 'from-emerald-50 to-teal-50',
      text: 'text-emerald-900',
      accent: 'bg-emerald-700'
    }
  },
  {
    century: 'XX',
    years: '1900-2000',
    title: 'Советская школа',
    description: 'Всеобщее образование и единые программы. Стандартизация учебников.',
    keyBooks: ['Букварь Н.С. Вашкевича (1945)', 'Алгебра А.Н. Колмогорова (1975)', 'Родная речь (серия)'],
    style: {
      bg: 'from-red-50 to-rose-50',
      text: 'text-red-900',
      accent: 'bg-red-700'
    }
  },
  {
    century: 'XXI',
    years: '2000-наст.вр.',
    title: 'Цифровая трансформация',
    description: 'Электронные учебники, интерактивные платформы, адаптивное обучение.',
    keyBooks: ['МЭШ (Московская электронная школа)', 'РЭШ (Российская электронная школа)', 'Учи.ру, Яндекс.Учебник'],
    style: {
      bg: 'from-purple-50 to-violet-50',
      text: 'text-purple-900',
      accent: 'bg-purple-700'
    }
  }
];

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(0);
  const currentPeriod = periods[selectedPeriod];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentPeriod.style.bg} transition-all duration-700 paper-texture`}>
      <header className="border-b border-primary/20 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="BookOpen" size={32} className="text-primary" />
              <h1 className="text-3xl font-bold text-primary">Эволюция учебной книги</h1>
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <Icon name="Scroll" size={32} className="text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-4 text-primary">О проекте</h2>
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
          <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
            <Icon name="Calendar" size={28} />
            Хронологическая шкала
          </h2>
          
          <div className="relative">
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max">
                {periods.map((period, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPeriod(index)}
                    className={`flex-shrink-0 w-48 p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                      selectedPeriod === index
                        ? `${period.style.accent} text-white border-transparent shadow-lg`
                        : 'bg-card border-border hover:border-primary'
                    }`}
                  >
                    <div className="text-2xl font-bold mb-1">{period.century}</div>
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
                  <h3 className={`text-3xl font-bold mb-2 ${currentPeriod.style.text}`}>
                    {currentPeriod.title}
                  </h3>
                  <p className="text-muted-foreground">{currentPeriod.years}</p>
                </div>
              </div>
              
              <p className="text-lg mb-6 leading-relaxed">{currentPeriod.description}</p>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Icon name="Star" size={20} />
                  Ключевые издания периода
                </h4>
                <ul className="space-y-2">
                  {currentPeriod.keyBooks.map((book, idx) => (
                    <li key={idx} className="flex items-start gap-3 animate-slide-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <Icon name="BookMarked" size={18} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{book}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>
        </section>

        <Tabs defaultValue="gallery" className="mb-12">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="gallery">Галерея</TabsTrigger>
            <TabsTrigger value="schemes">Схемы</TabsTrigger>
            <TabsTrigger value="maps">Карты</TabsTrigger>
            <TabsTrigger value="research">Исследования</TabsTrigger>
            <TabsTrigger value="tech">Технологии</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="animate-fade-in">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Images" size={24} />
                Галерея учебных изданий
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {periods.map((period, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className={`h-48 bg-gradient-to-br ${period.style.bg} flex items-center justify-center`}>
                      <Icon name="BookOpen" size={64} className={period.style.text} />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2">{period.century} век</h4>
                      <p className="text-sm text-muted-foreground">{period.title}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="schemes" className="animate-fade-in">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="GitBranch" size={24} />
                Генеалогическое древо учебной литературы
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-700">
                  <Icon name="Circle" size={16} className="text-amber-700" />
                  <div>
                    <div className="font-semibold">Рукописные книги (X-XV вв.)</div>
                    <div className="text-sm text-muted-foreground">Религиозные тексты и азбуковники</div>
                  </div>
                </div>
                <div className="ml-8 border-l-2 border-stone-400 pl-8 py-2">
                  <div className="flex items-center gap-4 p-4 bg-stone-100 rounded-lg border-l-4 border-stone-700">
                    <Icon name="Circle" size={16} className="text-stone-700" />
                    <div>
                      <div className="font-semibold">Первые печатные учебники (XVI-XVII вв.)</div>
                      <div className="text-sm text-muted-foreground">Азбуки и буквари</div>
                    </div>
                  </div>
                </div>
                <div className="ml-16 border-l-2 border-blue-400 pl-8 py-2">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-800">
                    <Icon name="Circle" size={16} className="text-blue-800" />
                    <div>
                      <div className="font-semibold">Научные учебники (XVIII в.)</div>
                      <div className="text-sm text-muted-foreground">Математика, грамматика, навигация</div>
                    </div>
                  </div>
                </div>
                <div className="ml-24 border-l-2 border-emerald-400 pl-8 py-2">
                  <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-700">
                    <Icon name="Circle" size={16} className="text-emerald-700" />
                    <div>
                      <div className="font-semibold">Классические учебники (XIX в.)</div>
                      <div className="text-sm text-muted-foreground">Систематизация знаний</div>
                    </div>
                  </div>
                </div>
                <div className="ml-32 border-l-2 border-red-400 pl-8 py-2">
                  <div className="flex items-center gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-700">
                    <Icon name="Circle" size={16} className="text-red-700" />
                    <div>
                      <div className="font-semibold">Советские стандарты (XX в.)</div>
                      <div className="text-sm text-muted-foreground">Единые программы</div>
                    </div>
                  </div>
                </div>
                <div className="ml-40 pl-8 py-2">
                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-700">
                    <Icon name="Circle" size={16} className="text-purple-700" />
                    <div>
                      <div className="font-semibold">Цифровые платформы (XXI в.)</div>
                      <div className="text-sm text-muted-foreground">Интерактивное обучение</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="maps" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Map" size={20} />
                  Территориальное распространение
                </h3>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={48} className="text-blue-700" />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Карта показывает основные центры книгопечатания и образования в России
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Социальные карты образования
                </h3>
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={48} className="text-emerald-700" />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Распространение грамотности по регионам и социальным группам
                </p>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="research" className="animate-fade-in">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="FileText" size={24} />
                Исследования и диаграммы
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Динамика роста числа учебников
                  </h4>
                  <div className="h-64 bg-gradient-to-t from-primary/10 to-transparent rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-primary"></div>
                    <div className="absolute bottom-0 left-[16%] w-1 h-[10%] bg-amber-700"></div>
                    <div className="absolute bottom-0 left-[33%] w-1 h-[20%] bg-stone-700"></div>
                    <div className="absolute bottom-0 left-[50%] w-1 h-[35%] bg-blue-800"></div>
                    <div className="absolute bottom-0 left-[67%] w-1 h-[60%] bg-emerald-700"></div>
                    <div className="absolute bottom-0 left-[83%] w-1 h-[85%] bg-red-700"></div>
                    <div className="absolute bottom-0 right-[5%] w-1 h-[95%] bg-purple-700"></div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon name="PieChart" size={20} />
                    Основные вехи развития
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 bg-amber-50 border-amber-200">
                      <div className="text-3xl font-bold text-amber-900 mb-2">988</div>
                      <div className="text-sm">Крещение Руси - начало письменности</div>
                    </Card>
                    <Card className="p-4 bg-stone-100 border-stone-200">
                      <div className="text-3xl font-bold text-stone-900 mb-2">1574</div>
                      <div className="text-sm">Первая печатная азбука Ивана Федорова</div>
                    </Card>
                    <Card className="p-4 bg-blue-50 border-blue-200">
                      <div className="text-3xl font-bold text-blue-900 mb-2">1703</div>
                      <div className="text-sm">Арифметика Магницкого - первый светский учебник</div>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="tech" className="animate-fade-in">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Icon name="Zap" size={24} />
                Технологические прорывы
              </h3>
              
              <div className="space-y-6">
                {[
                  { icon: 'Feather', title: 'Рукописное дело', period: 'X-XV вв.', desc: 'Пергамент, уставное письмо, миниатюры' },
                  { icon: 'Printer', title: 'Первые печатные станки', period: 'XVI-XVII вв.', desc: 'Типографии, ксилография, гравюры' },
                  { icon: 'Cog', title: 'Промышленное книгопечатание', period: 'XVIII-XIX вв.', desc: 'Литография, фотография, ротационные машины' },
                  { icon: 'Cpu', title: 'Офсетная печать', period: 'XX в.', desc: 'Массовое производство, цветная печать' },
                  { icon: 'Monitor', title: 'Цифровые технологии', period: 'XXI в.', desc: 'E-books, интерактивные платформы, AR/VR' }
                ].map((tech, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Icon name={tech.icon as any} size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold">{tech.title}</h4>
                        <span className="text-sm text-muted-foreground">{tech.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-b border-primary/20 bg-card/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 Эволюция учебной книги в России
            </p>
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Образовательный проект</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
