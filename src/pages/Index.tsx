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
      category: "Инструменты"
    },
    {
      id: 2,
      title: "VIP Статус",
      description: "30 дней привилегий, особые команды",
      price: 500,
      image: "/img/15c04ff2-67e2-49c1-a964-17031eb9454d.jpg",
      category: "Привилегии"
    },
    {
      id: 3,
      title: "1000 Изумрудов",
      description: "Игровая валюта сервера",
      price: 100,
      image: "/img/4c4af836-4a1a-438d-bd23-b63b71a56087.jpg",
      category: "Валюта"
    },
    {
      id: 4,
      title: "Эндер-сундук",
      description: "Персональное хранилище",
      price: 75,
      image: "/img/af9a564f-2f86-43e9-81fd-29bc5c9dca30.jpg",
      category: "Хранилище"
    },
    {
      id: 5,
      title: "Набор строителя",
      description: "Полный набор блоков для строительства",
      price: 200,
      image: "/img/4c4af836-4a1a-438d-bd23-b63b71a56087.jpg",
      category: "Наборы"
    },
    {
      id: 6,
      title: "Элитра",
      description: "Крылья для полёта",
      price: 300,
      image: "/img/15c04ff2-67e2-49c1-a964-17031eb9454d.jpg",
      category: "Транспорт"
    }
  ];

  const serverStats = {
    online: 247,
    maxPlayers: 500,
    uptime: "99.8%",
    version: "1.20.4"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-minecraft-lightGreen to-minecraft-green font-minecraft">
      {/* Header */}
      <header className="bg-minecraft-darkGreen shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-minecraft-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MC</span>
              </div>
              <h1 className="text-white text-2xl font-bold">MINECRAFT DONATIONS</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-minecraft-lightGreen transition-colors">Главная</a>
              <a href="#shop" className="text-white hover:text-minecraft-lightGreen transition-colors">Магазин</a>
              <a href="#download" className="text-white hover:text-minecraft-lightGreen transition-colors">Скачать</a>
              <a href="#contact" className="text-white hover:text-minecraft-lightGreen transition-colors">Контакты</a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white">
                    <Icon name="Menu" size={24} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-minecraft-darkGreen border-minecraft-green">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <a href="#home" className="text-white hover:text-minecraft-lightGreen transition-colors py-2">Главная</a>
                    <a href="#shop" className="text-white hover:text-minecraft-lightGreen transition-colors py-2">Магазин</a>
                    <a href="#download" className="text-white hover:text-minecraft-lightGreen transition-colors py-2">Скачать</a>
                    <a href="#contact" className="text-white hover:text-minecraft-lightGreen transition-colors py-2">Контакты</a>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                ЛУЧШИЙ MINECRAFT СЕРВЕР
              </h1>
              <p className="text-xl md:text-2xl text-minecraft-white mb-8 animate-fade-in">
                Поддержи сервер и получи эксклюзивные награды!
              </p>
              
              {/* Server Stats */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{serverStats.online}</div>
                  <div className="text-minecraft-white text-sm">Онлайн</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{serverStats.maxPlayers}</div>
                  <div className="text-minecraft-white text-sm">Максимум</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{serverStats.uptime}</div>
                  <div className="text-minecraft-white text-sm">Аптайм</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">{serverStats.version}</div>
                  <div className="text-minecraft-white text-sm">Версия</div>
                </div>
              </div>

              <Button size="lg" className="bg-minecraft-darkGreen hover:bg-minecraft-darkGreen/90 text-white border-2 border-white">
                <Icon name="Play" className="mr-2" size={20} />
                Играть сейчас
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative group">
                <img
                  src="https://cdn.poehali.dev/files/3eb09920-b1eb-4fe6-912b-18d21d845954.jpeg"
                  alt="Minecraft аниме арт"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl animate-scale-in group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 bg-minecraft-green rounded-full p-3 animate-bounce">
                  <Icon name="Heart" className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-minecraft-darkGreen rounded-full p-3">
                  <Icon name="Gamepad2" className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Shop */}
      <section id="shop" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-minecraft-darkGreen mb-12">
            Магазин донатов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-minecraft-lightGreen">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-minecraft-lightGreen text-minecraft-darkGreen">
                      {item.category}
                    </Badge>
                    <span className="text-2xl font-bold text-minecraft-green">{item.price}₽</span>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 mx-auto mb-3 pixelated"
                  />
                  <CardTitle className="text-minecraft-darkGreen">{item.title}</CardTitle>
                  <CardDescription className="text-minecraft-gray">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-minecraft-lightGreen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-minecraft-darkGreen mb-8">
            Скачать клиент
          </h2>
          <p className="text-xl text-minecraft-darkGreen mb-8 max-w-2xl mx-auto">
            Скачай наш оптимизированный клиент для лучшего игрового опыта
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white border-minecraft-green">
              <CardHeader>
                <CardTitle className="text-minecraft-darkGreen flex items-center justify-center">
                  <Icon name="Download" className="mr-2" size={24} />
                  Windows
                </CardTitle>
                <CardDescription>Для Windows 10/11</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                  Скачать .exe
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-minecraft-green">
              <CardHeader>
                <CardTitle className="text-minecraft-darkGreen flex items-center justify-center">
                  <Icon name="Download" className="mr-2" size={24} />
                  Android
                </CardTitle>
                <CardDescription>Для Android устройств</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-minecraft-green hover:bg-minecraft-green/90 text-white">
                  Скачать .apk
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-white/50 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-minecraft-darkGreen mb-2">IP сервера:</h3>
            <p className="text-2xl font-mono text-minecraft-darkGreen bg-white px-4 py-2 rounded border-2 border-minecraft-green">
              play.minecraft-server.ru
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-minecraft-darkGreen text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Minecraft Server</h3>
              <p className="text-minecraft-lightGreen">
                Лучший игровой опыт для всех любителей Minecraft
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
              <div className="space-y-2">
                <a href="#rules" className="block text-minecraft-lightGreen hover:text-white transition-colors">
                  Правила сервера
                </a>
                <a href="#support" className="block text-minecraft-lightGreen hover:text-white transition-colors">
                  Техподдержка
                </a>
                <a href="#forum" className="block text-minecraft-lightGreen hover:text-white transition-colors">
                  Форум
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-minecraft-lightGreen hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-minecraft-lightGreen hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-minecraft-lightGreen hover:text-white">
                  <Icon name="Users" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-minecraft-green mt-8 pt-8 text-center">
            <p className="text-minecraft-lightGreen">
              © 2024 Minecraft Server. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;