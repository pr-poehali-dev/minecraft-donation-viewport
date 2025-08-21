import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface ServerStats {
  online: number;
  maxPlayers: number;
  uptime: string;
  version: string;
}

export default function Index() {
  const [serverStats, setServerStats] = useState<ServerStats>({
    online: 847,
    maxPlayers: 1000,
    uptime: '99.9%',
    version: '1.20.1'
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ nickname: '', promocode: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      setServerStats(prev => ({
        ...prev,
        online: Math.floor(Math.random() * 100) + 800
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const packages = [
    {
      name: 'VIP',
      price: '199₽',
      originalPrice: '299₽',
      features: [
        'Приват территории 100x100 блоков',
        'Доступ к VIP киту с алмазной броней и инструментами',
        '50 игровых монет для покупок в магазине',
        'Цветной ник в чате для выделения среди игроков',
        'Приоритетный вход на сервер при полной загрузке',
        'Доступ к VIP зонам и эксклюзивным локациям'
      ],
      shortFeatures: ['Приват 100x100', 'Кит VIP', '50 монет', 'Цветной ник'],
      description: 'VIP статус предоставляет базовые привилегии для комфортной игры. Идеально подходит для новичков, которые хотят получить преимущества без больших трат.',
      popular: false,
      color: 'from-minecraft-green to-minecraft-green-dark'
    },
    {
      name: 'PREMIUM',
      price: '399₽',
      originalPrice: '599₽',
      features: [
        'Приват территории 200x200 блоков для больших построек',
        'Доступ к PREMIUM киту с незеритовым снаряжением',
        '150 игровых монет для расширенных покупок',
        'Возможность полета на спавне для удобного перемещения',
        'Цветной ник с уникальными символами',
        'Команда /sethome до 5 точек телепортации',
        'Доступ к PREMIUM зонам и эксклюзивным ресурсам',
        'Скидка 20% в игровом магазине'
      ],
      shortFeatures: ['Приват 200x200', 'Кит PREMIUM', '150 монет', 'Флай на спавне'],
      description: 'PREMIUM статус - золотая середина между ценой и возможностями. Включает расширенные привилегии для серьезных игроков.',
      popular: true,
      color: 'from-minecraft-gold to-yellow-600'
    },
    {
      name: 'ELITE',
      price: '699₽',
      originalPrice: '999₽',
      features: [
        'Максимальный приват территории 300x300 блоков',
        'ELITE кит с уникальными зачарованными предметами',
        '300 игровых монет для неограниченных покупок',
        'Полет в любой точке сервера без ограничений',
        'Уникальный цветной ник с анимацией',
        'Команды /heal и /feed для мгновенного восстановления',
        'Команда /sethome до 10 точек телепортации',
        'Доступ ко всем ELITE зонам и секретным локациям',
        'Скидка 35% в игровом магазине',
        'Приоритетная техническая поддержка 24/7'
      ],
      shortFeatures: ['Приват 300x300', 'Кит ELITE', '300 монет', 'Флай везде'],
      description: 'ELITE статус - максимальный уровень привилегий на сервере. Включает все возможные преимущества для профессиональных игроков.',
      popular: false,
      color: 'from-minecraft-diamond to-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50 bg-gray-900/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-minecraft-green rounded pixelated shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold text-white font-minecraft">MineCraft Server</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-minecraft-green transition-colors">Главная</a>
              <a href="#shop" className="text-gray-300 hover:text-minecraft-green transition-colors">Магазин</a>
              <a href="#rules" className="text-gray-300 hover:text-minecraft-green transition-colors">Правила</a>
              <a href="#contact" className="text-gray-300 hover:text-minecraft-green transition-colors">Контакты</a>
            </nav>

            {/* Server Status */}
            <div className="hidden lg:flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-1">
              <div className="w-2 h-2 bg-minecraft-green rounded-full animate-pulse"></div>
              <span className="text-minecraft-green text-sm font-medium">{serverStats.online} игроков онлайн</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/98 border-b border-gray-700 z-50 backdrop-blur-sm">
              <nav className="flex flex-col space-y-4 p-4">
                <a 
                  href="#home" 
                  className="text-gray-300 hover:text-minecraft-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </a>
                <a 
                  href="#shop" 
                  className="text-gray-300 hover:text-minecraft-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Магазин
                </a>
                <a 
                  href="#rules" 
                  className="text-gray-300 hover:text-minecraft-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Правила
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-300 hover:text-minecraft-green transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
                <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2 self-start">
                  <div className="w-2 h-2 bg-minecraft-green rounded-full animate-pulse"></div>
                  <span className="text-minecraft-green text-sm font-medium">{serverStats.online} онлайн</span>
                </div>
              </nav>
            </div>
          )}
          
          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/50 z-40" 
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden mt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322C55E' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Server Status Badge */}
              <div className="inline-flex items-center space-x-2 bg-minecraft-green/20 border border-minecraft-green/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-minecraft-green rounded-full animate-pulse"></div>
                <span className="text-minecraft-green text-sm font-medium">{serverStats.online} игроков онлайн</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in font-minecraft">
                Лучший
                <span className="bg-gradient-to-r from-minecraft-green to-minecraft-green-light bg-clip-text text-transparent block lg:inline"> Minecraft </span>
                сервер
              </h1>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in leading-relaxed max-w-2xl">
                Присоединяйся к нашему сообществу! Выживание, мини-игры, кланы и многое другое. 
                Поддержи сервер и получи крутые привилегии!
              </p>
              
              {/* Server Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0 mb-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-white">{serverStats.online}</div>
                  <div className="text-gray-400 text-sm">Онлайн</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-white">{serverStats.maxPlayers}</div>
                  <div className="text-gray-400 text-sm">Слотов</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-minecraft-green">{serverStats.uptime}</div>
                  <div className="text-gray-400 text-sm">Аптайм</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center">
                  <div className="text-2xl font-bold text-white">{serverStats.version}</div>
                  <div className="text-gray-400 text-sm">Версия</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-minecraft-green hover:bg-minecraft-green-dark text-white shadow-lg shadow-minecraft-green/25 border-2 border-minecraft-green-light pixelated">
                  <Icon name="Play" className="mr-2" size={20} />
                  Играть сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white pixelated">
                  <Icon name="Download" className="mr-2" size={20} />
                  IP: play.server.ru
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 max-w-lg lg:max-w-none">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-minecraft-green/20 to-minecraft-green-light/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-400/10 to-minecraft-green/10 rounded-2xl"></div>
                <img
                  src={`/img/c8b822ed-a2bb-4d09-8336-0ebde2ea1bf8.jpg`}
                  alt="Minecraft Character"
                  className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl animate-scale-in group-hover:scale-[1.02] transition-transform duration-500 border border-gray-600/30 pixelated"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-minecraft-green to-minecraft-green-light rounded-lg p-3 animate-pulse shadow-lg shadow-minecraft-green/30 pixelated">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg p-3 shadow-lg pixelated">
                  <Icon name="Gamepad2" className="text-minecraft-green" size={24} />
                </div>
                {/* Floating Pixels */}
                <div className="absolute top-1/2 -left-8 w-2 h-2 bg-minecraft-green rounded-sm animate-ping pixelated"></div>
                <div className="absolute top-1/4 -right-6 w-1 h-1 bg-minecraft-green-light rounded-sm animate-bounce delay-300 pixelated"></div>
                <div className="absolute bottom-1/3 -left-4 w-1 h-1 bg-minecraft-gold rounded-sm animate-pulse delay-500 pixelated"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Shop */}
      <section id="shop" className="py-20 bg-gray-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-minecraft">
              Премиум магазин
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Поддержи сервер и получи эксклюзивные привилегии! Все донаты идут на развитие проекта.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-minecraft-green/50 transition-all duration-300 group ${pkg.popular ? 'scale-105 border-minecraft-green' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-minecraft-green to-minecraft-green-light text-white px-4 py-1 rounded-full text-sm font-bold pixelated">
                      ПОПУЛЯРНЫЙ
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-minecraft">{pkg.name}</h3>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-3xl font-bold text-minecraft-green">{pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.shortFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Icon name="Check" className="text-minecraft-green mr-3 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full bg-gradient-to-r ${pkg.color} text-white hover:scale-105 transition-transform shadow-lg pixelated border-2 border-white/20`}
                  size="lg"
                  onClick={() => {
                    setSelectedPackage(pkg);
                    setPurchaseDialogOpen(true);
                  }}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Купить {pkg.name}
                </Button>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Способы оплаты:</p>
            <div className="flex justify-center items-center space-x-6 flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-2">
                <Icon name="CreditCard" className="text-minecraft-green" size={20} />
                <span className="text-white text-sm">Банковская карта</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-2">
                <Icon name="Smartphone" className="text-minecraft-green" size={20} />
                <span className="text-white text-sm">СБП</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-2">
                <Icon name="Wallet" className="text-minecraft-green" size={20} />
                <span className="text-white text-sm">Электронные кошельки</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-minecraft">
              Особенности сервера
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Уникальные возможности, которые сделают твою игру незабываемой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Sword",
                title: "PvP Арены",
                description: "Сражайся с другими игроками на специальных аренах с уникальными правилами"
              },
              {
                icon: "Home",
                title: "Приваты",
                description: "Защити свою территорию от грифферов. Различные размеры приватов для каждого статуса"
              },
              {
                icon: "Users",
                title: "Кланы",
                description: "Создавай кланы, объявляй войны, захватывай территории и сражайся за господство"
              },
              {
                icon: "Gem",
                title: "Уникальные предметы",
                description: "Эксклюзивные предметы и материалы, которых нет в ванильном Minecraft"
              },
              {
                icon: "Trophy",
                title: "Достижения",
                description: "Система достижений с наградами. Покажи всем свои успехи!"
              },
              {
                icon: "Zap",
                title: "Мини-игры",
                description: "BedWars, SkyWars, BuildBattle и многие другие захватывающие мини-игры"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-minecraft-green/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-minecraft-green/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-minecraft-green/30 transition-colors pixelated">
                  <Icon name={feature.icon as any} className="text-minecraft-green" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-minecraft">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-minecraft-green rounded pixelated shadow-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="text-xl font-bold text-white font-minecraft">MineCraft Server</span>
              </div>
              <p className="text-gray-400 mb-4">
                Лучший Minecraft сервер в России. Присоединяйся к нашему сообществу и начни свое приключение!
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white pixelated">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white pixelated">
                  <Icon name="Youtube" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:text-white pixelated">
                  <Icon name="Users" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 font-minecraft">Полезные ссылки</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors">Правила сервера</a></li>
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors">Карта мира</a></li>
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors">Форум</a></li>
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors">Discord</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 font-minecraft">Подключение</h4>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-400 text-sm mb-2">IP адрес сервера:</p>
                <p className="text-minecraft-green font-mono text-lg font-bold">play.server.ru</p>
                <p className="text-gray-400 text-sm mt-2">Версия: {serverStats.version}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MineCraft Server. Все права защищены. Этот сервер не связан с Mojang Studios.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Purchase Dialog */}
      <Dialog open={purchaseDialogOpen} onOpenChange={setPurchaseDialogOpen}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-minecraft text-minecraft-green">
              Покупка привилегии {selectedPackage?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedPackage && (
            <div className="space-y-6">
              {/* Package Info */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{selectedPackage.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-minecraft-green">{selectedPackage.price}</span>
                    <span className="text-gray-400 line-through">{selectedPackage.originalPrice}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">{selectedPackage.description}</p>
              </div>
              
              {/* Full Features List */}
              <div>
                <h4 className="font-bold text-white mb-3 font-minecraft">Все возможности:</h4>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 max-h-60 overflow-y-auto">
                  <ul className="space-y-2">
                    {selectedPackage.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <Icon name="Check" className="text-minecraft-green mr-2 flex-shrink-0 mt-0.5" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Purchase Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="nickname" className="text-white font-medium">Игровой ник *</Label>
                  <Input 
                    id="nickname"
                    placeholder="Введите ваш игровой ник"
                    value={formData.nickname}
                    onChange={(e) => setFormData(prev => ({ ...prev, nickname: e.target.value }))}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="promocode" className="text-white font-medium">Промокод (необязательно)</Label>
                  <Input 
                    id="promocode"
                    placeholder="Введите промокод для скидки"
                    value={formData.promocode}
                    onChange={(e) => setFormData(prev => ({ ...prev, promocode: e.target.value }))}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 mt-1"
                  />
                </div>
              </div>
              
              {/* Payment Methods */}
              <div>
                <h4 className="font-bold text-white mb-3 font-minecraft">Способы оплаты:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2 border border-gray-600">
                    <Icon name="CreditCard" className="text-minecraft-green" size={16} />
                    <span className="text-white text-sm">Карта</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2 border border-gray-600">
                    <Icon name="Smartphone" className="text-minecraft-green" size={16} />
                    <span className="text-white text-sm">СБП</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-3 py-2 border border-gray-600">
                    <Icon name="Wallet" className="text-minecraft-green" size={16} />
                    <span className="text-white text-sm">Кошелек</span>
                  </div>
                </div>
              </div>
              
              {/* Purchase Button */}
              <Button 
                className={`w-full bg-gradient-to-r ${selectedPackage.color} text-white text-lg py-6 pixelated border-2 border-white/20`}
                disabled={!formData.nickname.trim()}
                onClick={() => {
                  // Handle purchase logic here
                  alert(`Покупка ${selectedPackage.name} для игрока ${formData.nickname}`);
                  setPurchaseDialogOpen(false);
                  setFormData({ nickname: '', promocode: '' });
                }}
              >
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Купить за {selectedPackage.price}
              </Button>
              
              <p className="text-xs text-gray-400 text-center">
                После оплаты привилегия будет выдана автоматически в течение 5 минут
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}