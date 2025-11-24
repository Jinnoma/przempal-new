export default function About() {
    return (
      <section id="about" className="bg-gray-100 py-20">
        {/* Hero section */}
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <h2 className="text-4xl font-light mb-6 text-center">O firmie</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Od 2005 roku dostarczamy najwyższej jakości palety i europalety, 
            budując zaufane relacje z klientami w całej Polsce.
          </p>
        </div>

        {/* Key features */}
        <div className="max-w-6xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Doświadczenie</h3>
              <p className="text-gray-600">
                Od 2005 roku zdobywamy doświadczenie i zaufanie klientów, 
                specjalizując się w skupie oraz sprzedaży palet i europalet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🚛</div>
              <h3 className="text-xl font-semibold mb-3">Zasięg</h3>
              <p className="text-gray-600">
                Działamy nie tylko w Łowiczu, ale na terenie całego kraju. 
                Dysponujemy własną flotą samochodów dostawczych.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-3">Jakość</h3>
              <p className="text-gray-600">
                Nasze palety spełniają wszelkie normy i standardy europejskie. 
                Stawiamy na najwyższą jakość usług.
              </p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-light mb-6">Nasza filozofia</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    W firmie Przempal podstawą działania jest rzetelna obsługa każdego Klienta. 
                    Zatrudniamy doświadczonych, kompetentnych pracowników, co gwarantuje miłą i fachową obsługę.
                  </p>
                  <p>
                    Zdajemy sobie sprawę, że liczy się szybkość działania, dlatego możecie Państwo 
                    liczyć na ekspresową realizację zleceń z zakresu sprzedaży oraz skupu palet.
                  </p>
                  <p>
                    Oferujemy profesjonalne doradztwo i pomoc w wyborze odpowiednich palet. 
                    Nie ma znaczenia, czy jesteście Państwo dużym przedsiębiorstwem, czy mniejszą firmą 
                    - nasza oferta skierowana jest do każdego.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Ekspresowa realizacja</h4>
                      <p className="text-gray-600">Szybka obsługa zamówień</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl">💡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Profesjonalne doradztwo</h4>
                      <p className="text-gray-600">Pomoc w wyborze produktów</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-xl">🤝</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Długofalowa współpraca</h4>
                      <p className="text-gray-600">Budujemy trwałe relacje</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}