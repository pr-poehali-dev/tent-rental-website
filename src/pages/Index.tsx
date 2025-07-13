import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Tent" size={32} className="text-orange-600" />
              <span className="text-2xl font-bold text-navy-900">ШатерПро</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#rental"
                className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
              >
                Аренда
              </a>
              <a
                href="#pricing"
                className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
              >
                Цены
              </a>
              <a
                href="#delivery"
                className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
              >
                Доставка
              </a>
              <a
                href="#contacts"
                className="text-navy-700 hover:text-orange-600 transition-colors font-medium"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                  🎪 Профессиональная аренда шатров
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
                  Шатры <span className="text-orange-600">3×6м</span> для
                  незабываемых событий
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Создаем идеальное пространство для ваших торжеств.
                  Качественные шатры с доставкой и дополнительным оборудованием.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать
                </Button>

              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/img/7695f2cb-135b-421d-84fa-6415d47a3a25.jpg"
                  alt="Шатер 3x6 метров"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600">
              Профессиональный подход к каждому мероприятию
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Tent" size={32} className="text-orange-600" />
                </div>
                <CardTitle className="text-navy-900">
                  Качественные шатры
                </CardTitle>
                <CardDescription>
                  Размер 3×6 метров, устойчивые к погодным условиям
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-navy-900">
                  Быстрая доставка
                </CardTitle>
                <CardDescription>
                  Доставка и установка в день мероприятия
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-blue-600" />
                </div>
                <CardTitle className="text-navy-900">
                  Дополнительные услуги
                </CardTitle>
                <CardDescription>Столы и стулья в комплекте</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Rental Section */}
      <section id="rental" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Аренда шатров
            </h2>
            <p className="text-xl text-gray-600">
              Идеальное решение для любых мероприятий
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-900">
                    Шатер 3×6 метров
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Вместительность до 20 человек
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Users"
                        size={20}
                        className="text-orange-600"
                      />
                      <span>До 20 человек</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Ruler"
                        size={20}
                        className="text-orange-600"
                      />
                      <span>3×6 метров</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Shield"
                        size={20}
                        className="text-orange-600"
                      />
                      <span>Влагозащита</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Wind" size={20} className="text-orange-600" />
                      <span>Ветроустойчив</span>
                    </div>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    Забронировать сейчас
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-900">
                Что входит в аренду
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-600 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-900">
                      Шатер 3×6 метров
                    </h4>
                    <p className="text-gray-600">
                      Качественный тент с каркасом
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-600 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-900">
                      Столы и стулья
                    </h4>
                    <p className="text-gray-600">
                      Комплект мебели для комфортного размещения
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-600 mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-navy-900">
                      Доставка и установка
                    </h4>
                    <p className="text-gray-600">
                      Профессиональная установка в день мероприятия
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 bg-gradient-to-r from-navy-900 to-navy-800 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Цены на аренду</h2>
            <p className="text-xl text-gray-300">
              Прозрачные цены без скрытых платежей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Базовый пакет
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-orange-400">
                    5000₽
                  </span>
                  <span className="text-gray-300">/день</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Шатер 3×6м</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Доставка в городе</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Установка</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-orange-600 border-orange-500 text-white transform scale-105">
              <CardHeader>
                <div className="text-center mb-2">
                  <span className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </span>
                </div>
                <CardTitle className="text-center text-2xl">
                  Стандартный пакет
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">7500₽</span>
                  <span className="text-orange-100">/день</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-white" />
                  <span>Шатер 3×6м</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-white" />
                  <span>4 стола + 16 стульев</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-white" />
                  <span>Доставка и установка</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Премиум пакет
                </CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-green-400">
                    10000₽
                  </span>
                  <span className="text-gray-300">/день</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Шатер 3×6м</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>6 столов + 24 стула</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Освещение</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Декор</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Зона доставки
            </h2>
            <p className="text-xl text-gray-600">
              Доставляем по Кирову и Кировской области
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="MapPin"
                    size={64}
                    className="text-orange-600 mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    Интерактивная карта
                  </h3>
                  <p className="text-gray-600">
                    Здесь будет карта зоны покрытия
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-navy-900 mb-6">
                  Условия доставки
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="MapPin"
                        size={16}
                        className="text-green-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">
                        Киров в черте города
                      </h4>
                      <p className="text-gray-600">Бесплатная доставка</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Clock"
                        size={16}
                        className="text-orange-600"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">
                        Кировская область
                      </h4>
                      <p className="text-gray-600">
                        До 50 км от Кирова - 1500₽
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon name="Truck" size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">
                        Время доставки
                      </h4>
                      <p className="text-gray-600">
                        Установка за 2 часа до мероприятия
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section
        id="contacts"
        className="py-20 px-4 bg-gradient-to-br from-orange-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы ответить на ваши вопросы
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-orange-600" />
                </div>
                <CardTitle className="text-navy-900">Телефон</CardTitle>
                <CardDescription className="text-lg font-semibold text-orange-600">
                  +7 (495) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-green-600" />
                </div>
                <CardTitle className="text-navy-900">Email</CardTitle>
                <CardDescription className="text-lg font-semibold text-green-600">
                  info@shaterpro.ru
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="MessageCircle"
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle className="text-navy-900">WhatsApp</CardTitle>
                <CardDescription className="text-lg font-semibold text-blue-600">
                  +7 (985) 123-45-67
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 text-lg"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Tent" size={32} className="text-orange-400" />
            <span className="text-2xl font-bold">ШатерПро</span>
          </div>
          <p className="text-gray-400 mb-8">
            Профессиональная аренда шатров для любых мероприятий
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <Icon name="Mail" size={16} className="mr-2" />
              Написать
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2024 ШатерПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;