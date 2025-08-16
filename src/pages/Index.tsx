import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const donationItems = [
    {
      id: 1,
      title: "Алмазная кирка",
      description: "Эффективность V, Неразрушимость III",
      price: 150,
      image: "/img/af9a564f-2f86-43e9-81fd-29bc5c9dca30.jpg",
      category: "Инструменты",
      popular: false
    },
    {
      id: 2,
      title: "VIP Статус",
      description: "30 дней привилегий, особые команды",
      price: 500,
      image: "/img/15c04ff2-67e2-49c1-a964-17031eb9454d.jpg",
      category: "Привилегии",
      popular: true
    },
    {
      id: 3,
      title: "1000 Изумрудов",
      description: "Игровая валюта сервера",
      price: 100,
      image: "/img/4c4af836-4a1a-438d-bd23-b63b71a56087.jpg",
      category: "Валюта",
      popular: false
    },
    {
      id: 4,
      title: "Эндер-сундук",
      description: "Персональное хранилище",
      price: 75,
      image: "/img/af9a564f-2f86-43e9-81fd-29bc5c9dca30.jpg",
      category: "Хранилище",
      popular: false
    },
    {
      id: 5,
      title: "Набор строителя",
      description: "Полный набор блоков для строительства",
      price: 200,
      image: "/img/4c4af836-4a1a-438d-bd23-b63b71a56087.jpg",
      category: "Наборы",
      popular: false
    },
    {
      id: 6,
      title: "Элитра",
      description: "Крылья для полёта",
      price: 300,
      image: "/img/15c04ff2-67e2-49c1-a964-17031eb9454d.jpg",
      category: "Транспорт",
      popular: true
    }
  ];

  const serverStats = {
    online: 247,
    maxPlayers: 500,
    uptime: "99.8%",
    version: "1.20.4"
  };

  return (
    <div className="min-h-screen bg-dark-900 font-minecraft">
      {/* Header */}
      <header className="bg-dark-800/80 backdrop-blur-md border-b border-dark-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">MC</span>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold">MINECRAFT SERVER</h1>
                <p className="text-dark-400 text-sm">Премиум донаты</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-dark-300 hover:text-white transition-colors relative group">
                Главная
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#shop" className="text-dark-300 hover:text-white transition-colors relative group">
                Магазин
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#download" className="text-dark-300 hover:text-white transition-colors relative group">
                Скачать
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <Button className="bg-primary hover:bg-blue-600 text-white">
                <Icon name="Play" className="mr-2" size={16} />
                Играть
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-dark-700">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-dark-800 border-dark-700">
                  <nav className="flex flex-col space-y-6 mt-8">
                    <a href="#home" className="text-dark-300 hover:text-white transition-colors py-2">Главная</a>
                    <a href="#shop" className="text-dark-300 hover:text-white transition-colors py-2">Магазин</a>
                    <a href="#download" className="text-dark-300 hover:text-white transition-colors py-2">Скачать</a>
                    <Button className="bg-primary hover:bg-blue-600 text-white w-full">
                      <Icon name="Play" className="mr-2" size={16} />
                      Играть
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-in">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-primary text-sm font-medium">{serverStats.online} игроков онлайн</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Лучший
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Minecraft </span>
                сервер
              </h1>
              <p className="text-xl text-dark-300 mb-8 animate-fade-in leading-relaxed">
                Поддержи сервер и получи эксклюзивные награды! Более 500 игроков каждый день.
              </p>
              
              {/* Server Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mb-8">
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-4 border border-dark-700">
                  <div className="text-2xl font-bold text-white">{serverStats.online}</div>
                  <div className="text-dark-400 text-sm">Онлайн</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-4 border border-dark-700">
                  <div className="text-2xl font-bold text-white">{serverStats.maxPlayers}</div>
                  <div className="text-dark-400 text-sm">Максимум</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-4 border border-dark-700">
                  <div className="text-2xl font-bold text-primary">{serverStats.uptime}</div>
                  <div className="text-dark-400 text-sm">Аптайм</div>
                </div>
                <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-4 border border-dark-700">
                  <div className="text-2xl font-bold text-white">{serverStats.version}</div>
                  <div className="text-dark-400 text-sm">Версия</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25">
                  <Icon name="Play" className="mr-2" size={20} />
                  Играть сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-dark-600 text-dark-300 hover:bg-dark-800 hover:text-white">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать клиент
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-slate-400/10 to-cyan-400/10 rounded-2xl"></div>
                <img
                  src="https://cdn.poehali.dev/files/28e3a185-7301-4b80-aae9-b5e39c051693.png"
                  alt="Аниме девочка"
                  className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl animate-scale-in group-hover:scale-[1.02] transition-transform duration-500 border border-slate-600/30"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-3 animate-pulse shadow-lg shadow-cyan-400/30">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full p-3 shadow-lg">
                  <Icon name="Star" className="text-cyan-300" size={24} />
                </div>
                <div className="absolute top-1/2 -left-8 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute top-1/4 -right-6 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Shop */}
      <section id="shop" className="py-20 bg-dark-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Премиум магазин
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Поддержи сервер и получи эксклюзивные предметы и привилегии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationItems.map((item) => (
              <Card key={item.id} className="bg-dark-800/80 border-dark-700 hover:border-primary/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
                {item.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-blue-600 text-white border-0">
                      Популярное
                    </Badge>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardHeader className="pb-3 relative">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-dark-700 text-dark-200 border-dark-600">
                      {item.category}
                    </Badge>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-white">{item.price}</span>
                      <span className="text-primary text-lg">₽</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-dark-700 rounded-xl flex items-center justify-center group-hover:bg-dark-600 transition-colors">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 pixelated"
                      />
                    </div>
                  </div>
                  
                  <CardTitle className="text-white text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-dark-400 leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Скачать клиент
          </h2>
          <p className="text-xl text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Скачай наш оптимизированный клиент для лучшего игрового опыта. 
            Стабильное подключение и улучшенная производительность.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="bg-dark-800 border-dark-700 hover:border-primary/50 transition-all group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Monitor" className="text-white" size={32} />
                </div>
                <CardTitle className="text-white text-2xl">Windows</CardTitle>
                <CardDescription className="text-dark-400">Для Windows 10/11</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-blue-600 text-white shadow-lg shadow-primary/25">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать .exe
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-dark-800 border-dark-700 hover:border-primary/50 transition-all group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Smartphone" className="text-white" size={32} />
                </div>
                <CardTitle className="text-white text-2xl">Android</CardTitle>
                <CardDescription className="text-dark-400">Для Android устройств</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/25">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать .apk
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-dark-700">
              <h3 className="text-2xl font-bold text-white mb-4">IP сервера</h3>
              <div className="bg-dark-900 rounded-xl p-4 border border-dark-600">
                <p className="text-2xl font-mono text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  play.minecraft-server.ru
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline" className="border-dark-600 text-dark-300 hover:bg-dark-700 hover:text-white">
                  <Icon name="Copy" className="mr-2" size={16} />
                  Копировать IP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Minecraft Server</h3>
                  <p className="text-dark-400">Премиум игровой опыт</p>
                </div>
              </div>
              <p className="text-dark-400 leading-relaxed max-w-md">
                Лучший игровой опыт для всех любителей Minecraft. 
                Стабильный сервер с постоянными обновлениями и активным сообществом.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Навигация</h3>
              <div className="space-y-3">
                <a href="#rules" className="block text-dark-400 hover:text-primary transition-colors">
                  Правила сервера
                </a>
                <a href="#support" className="block text-dark-400 hover:text-primary transition-colors">
                  Техподдержка
                </a>
                <a href="#forum" className="block text-dark-400 hover:text-primary transition-colors">
                  Форум
                </a>
                <a href="#wiki" className="block text-dark-400 hover:text-primary transition-colors">
                  Wiki
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Социальные сети</h3>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-dark-400 hover:text-primary hover:bg-dark-800 rounded-xl">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-dark-400 hover:text-red-500 hover:bg-dark-800 rounded-xl">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-dark-400 hover:text-blue-500 hover:bg-dark-800 rounded-xl">
                  <Icon name="Users" size={20} />
                </Button>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-2">Статистика</h4>
                <div className="text-sm text-dark-400">
                  <p>Игроков: <span className="text-primary font-semibold">{serverStats.online}</span></p>
                  <p>Аптайм: <span className="text-green-400 font-semibold">{serverStats.uptime}</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-dark-500 text-sm">
              © 2024 Minecraft Server. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-dark-500 hover:text-primary text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#terms" className="text-dark-500 hover:text-primary text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;