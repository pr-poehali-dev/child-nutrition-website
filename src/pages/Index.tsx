import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedAge, setSelectedAge] = useState('6-8');

  const weeklyMenus = {
    '6-8': {
      title: '6-8 месяцев',
      menu: [
        { day: 'Понедельник', breakfast: 'Грудное молоко / смесь', lunch: 'Пюре из кабачка', dinner: 'Грудное молоко / смесь' },
        { day: 'Вторник', breakfast: 'Грудное молоко / смесь', lunch: 'Пюре из брокколи', dinner: 'Грудное молоко / смесь' },
        { day: 'Среда', breakfast: 'Грудное молоко / смесь', lunch: 'Пюре из цветной капусты', dinner: 'Грудное молоко / смесь' },
        { day: 'Четверг', breakfast: 'Грудное молоко / смесь', lunch: 'Пюре из тыквы', dinner: 'Грудное молоко / смесь' },
        { day: 'Пятница', breakfast: 'Грудное молоко / смесь', lunch: 'Пюре из яблока', dinner: 'Грудное молоко / смесь' },
        { day: 'Суббота', breakfast: 'Грудное молоко / смесь', lunch: 'Пюре из груши', dinner: 'Грудное молоко / смесь' },
        { day: 'Воскресенье', breakfast: 'Грудное молоко / смесь', lunch: 'Пюре из моркови', dinner: 'Грудное молоко / смесь' }
      ]
    },
    '9-12': {
      title: '9-12 месяцев',
      menu: [
        { day: 'Понедельник', breakfast: 'Каша овсяная на молоке', lunch: 'Овощной суп с курицей', dinner: 'Творог с фруктами' },
        { day: 'Вторник', breakfast: 'Каша гречневая', lunch: 'Пюре из индейки с овощами', dinner: 'Кефир с печеньем' },
        { day: 'Среда', breakfast: 'Каша рисовая', lunch: 'Рыбное пюре с картофелем', dinner: 'Фруктовое пюре' },
        { day: 'Четверг', breakfast: 'Каша кукурузная', lunch: 'Мясное рагу с овощами', dinner: 'Йогурт' },
        { day: 'Пятница', breakfast: 'Каша мультизлаковая', lunch: 'Суп-пюре из брокколи', dinner: 'Творожная запеканка' },
        { day: 'Суббота', breakfast: 'Молочная каша с фруктами', lunch: 'Котлета на пару с гарниром', dinner: 'Кефир' },
        { day: 'Воскресенье', breakfast: 'Омлет паровой', lunch: 'Овощное рагу с мясом', dinner: 'Фруктовый салат' }
      ]
    },
    '1-2': {
      title: '1-2 года',
      menu: [
        { day: 'Понедельник', breakfast: 'Каша молочная с ягодами', lunch: 'Суп с фрикадельками, компот', dinner: 'Творожная запеканка, молоко' },
        { day: 'Вторник', breakfast: 'Омлет с овощами', lunch: 'Рыба запеченная с картофелем', dinner: 'Кефир с печеньем' },
        { day: 'Среда', breakfast: 'Творог с фруктами', lunch: 'Куриные котлеты с гречкой', dinner: 'Йогурт с ягодами' },
        { day: 'Четверг', breakfast: 'Каша овсяная с яблоком', lunch: 'Овощное рагу с говядиной', dinner: 'Молоко, фрукты' },
        { day: 'Пятница', breakfast: 'Сырники со сметаной', lunch: 'Суп овощной, паровые котлеты', dinner: 'Кефир' },
        { day: 'Суббота', breakfast: 'Каша пшенная с тыквой', lunch: 'Индейка с овощами', dinner: 'Творог с медом' },
        { day: 'Воскресенье', breakfast: 'Блинчики с творогом', lunch: 'Борщ детский, хлеб', dinner: 'Запеканка, молоко' }
      ]
    },
    '2-3': {
      title: '2-3 года',
      menu: [
        { day: 'Понедельник', breakfast: 'Каша молочная, бутерброд', lunch: 'Борщ, котлета с макаронами', dinner: 'Запеканка творожная' },
        { day: 'Вторник', breakfast: 'Омлет, какао', lunch: 'Суп с курицей, гречка', dinner: 'Йогурт, фрукты' },
        { day: 'Среда', breakfast: 'Сырники со сметаной', lunch: 'Рыба с рисом, овощи', dinner: 'Кефир, печенье' },
        { day: 'Четверг', breakfast: 'Каша с фруктами', lunch: 'Щи, тефтели с картофелем', dinner: 'Творог с ягодами' },
        { day: 'Пятница', breakfast: 'Творожная запеканка', lunch: 'Суп овощной, курица с овощами', dinner: 'Молоко, банан' },
        { day: 'Суббота', breakfast: 'Блинчики с джемом', lunch: 'Плов детский, салат', dinner: 'Кефир, яблоко' },
        { day: 'Воскресенье', breakfast: 'Каша молочная, какао', lunch: 'Борщ, рыбные котлеты', dinner: 'Йогурт, печенье' }
      ]
    }
  };

  const products = [
    { name: 'Овощные пюре', description: 'Из натуральных овощей без добавок', icon: 'Carrot' },
    { name: 'Фруктовые пюре', description: 'Сладкие и полезные десерты', icon: 'Apple' },
    { name: 'Каши', description: 'Молочные и безмолочные каши', icon: 'Wheat' },
    { name: 'Мясные пюре', description: 'Источник белка для роста', icon: 'Beef' },
    { name: 'Рыбные пюре', description: 'Омега-3 для развития мозга', icon: 'Fish' },
    { name: 'Соки', description: 'Натуральные витаминные соки', icon: 'Wine' }
  ];

  const recipes = [
    { title: 'Овощное пюре с курицей', time: '20 мин', age: '8+ мес' },
    { title: 'Фруктовый смузи', time: '5 мин', age: '12+ мес' },
    { title: 'Творожная запеканка', time: '40 мин', age: '1+ год' }
  ];

  const tips = [
    { title: 'Введение прикорма', content: 'Начинайте с однокомпонентных пюре из овощей. Вводите новый продукт постепенно, наблюдая за реакцией ребенка в течение 3-5 дней.' },
    { title: 'Режим питания', content: 'Старайтесь кормить малыша в одно и то же время каждый день. Это помогает наладить пищеварение и формирует здоровые привычки.' },
    { title: 'Выбор продуктов', content: 'Отдавайте предпочтение сезонным овощам и фруктам. Внимательно читайте состав готового питания - чем меньше ингредиентов, тем лучше.' }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Baby" className="text-primary" size={32} />
              <h1 className="text-2xl font-heading font-bold text-primary">БэбиВита</h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#products" className="hover:text-primary transition-colors">Продукция</a>
              <a href="#menu" className="hover:text-primary transition-colors">Меню на неделю</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#recipes" className="hover:text-primary transition-colors">Рецепты</a>
              <a href="#tips" className="hover:text-primary transition-colors">Советы</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-20 bg-gradient-to-br from-secondary via-white to-accent overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-heading font-bold mb-6 text-gray-800">
                Здоровое питание — здоровый малыш
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Натуральное детское питание из отборных продуктов. Без консервантов, красителей и ГМО.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="animate-scale-in">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Где купить
                </Button>
                <Button size="lg" variant="outline" className="animate-scale-in">
                  О продукции
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/fcffd5c5-d2c9-47b3-b39d-69936ff0c30c/files/28617ceb-a5f3-451f-854c-738b812940f2.jpg"
                alt="Натуральные продукты для детского питания"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Наша продукция</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Полный ассортимент детского питания для каждого этапа развития вашего малыша
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-4">Готовое меню на неделю</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Сбалансированное питание для разных возрастных групп
          </p>
          
          <Tabs defaultValue="6-8" className="max-w-5xl mx-auto" onValueChange={setSelectedAge}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="6-8">6-8 мес</TabsTrigger>
              <TabsTrigger value="9-12">9-12 мес</TabsTrigger>
              <TabsTrigger value="1-2">1-2 года</TabsTrigger>
              <TabsTrigger value="2-3">2-3 года</TabsTrigger>
            </TabsList>
            
            {Object.entries(weeklyMenus).map(([age, data]) => (
              <TabsContent key={age} value={age} className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">{data.title}</CardTitle>
                    <CardDescription>Рекомендованное меню на неделю</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {data.menu.map((item, index) => (
                        <div key={index} className="grid grid-cols-4 gap-4 p-4 bg-white rounded-lg hover:bg-secondary/20 transition-colors">
                          <div className="font-semibold text-primary">{item.day}</div>
                          <div className="text-sm">{item.breakfast}</div>
                          <div className="text-sm">{item.lunch}</div>
                          <div className="text-sm">{item.dinner}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">О компании</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <CardTitle className="font-heading">Лет опыта</CardTitle>
                  <CardDescription>На рынке детского питания</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <CardTitle className="font-heading">Натурально</CardTitle>
                  <CardDescription>Без консервантов и ГМО</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <CardTitle className="font-heading">Продуктов</CardTitle>
                  <CardDescription>В нашем ассортименте</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              БэбиВита — это российский производитель детского питания премиум-класса. 
              Мы используем только натуральные ингредиенты, выращенные на экологически чистых фермах. 
              Наша продукция проходит строгий контроль качества на каждом этапе производства.
            </p>
          </div>
        </div>
      </section>

      <section id="recipes" className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Рецепты</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recipes.map((recipe, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardHeader>
                  <CardTitle className="font-heading">{recipe.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {recipe.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Baby" size={16} />
                      {recipe.age}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tips" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">Советы родителям</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {tips.map((tip, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="font-heading text-lg hover:text-primary">
                    {tip.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {tip.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-center mb-12">Свяжитесь с нами</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">г. Москва, ул. Здоровья, 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-gray-600">8 (800) 555-35-35</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@babyvita.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Ваше сообщение" rows={4} />
                    <Button className="w-full">
                      <Icon name="Send" className="mr-2" size={18} />
                      Отправить
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Baby" size={28} />
                <h3 className="text-xl font-heading font-bold">БэбиВита</h3>
              </div>
              <p className="text-gray-400">Здоровое питание для здоровых детей</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Пюре</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Каши</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Соки</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Где купить</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 БэбиВита. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
