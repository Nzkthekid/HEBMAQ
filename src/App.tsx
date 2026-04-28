/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  Instagram, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  Factory, 
  ChevronRight,
  CheckCircle2,
  XCircle
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5581989026173?text=Olá! Vim pelo site e gostaria de resgatar meu desconto nos fatiadores.";
const INSTAGRAM_URL = "https://instagram.com/hebmaq";
const TIKTOK_URL = "https://tiktok.com/@hebmaq6";

const ProductCard = ({ 
  title, 
  price, 
  description, 
  isPremium = false,
  badge,
  image,
  waMessage
}: { 
  title: string, 
  price: string, 
  description: string, 
  isPremium?: boolean,
  badge?: string,
  image?: string,
  waMessage: string
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 relative overflow-hidden"
  >
    {badge && (
      <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-sm">
        {badge}
      </div>
    )}
    <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden border border-gray-50">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="p-4 text-center text-gray-400 font-medium">
          <span className="text-xs uppercase tracking-widest">Imagem do Produto</span>
        </div>
      )}
    </div>
    <div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 leading-relaxed">{description}</p>
    </div>
    <div className="mt-auto">
      <p className="text-2xl font-bold text-gray-900 tracking-tight">R$ {price}</p>
      <a 
        href={`https://wa.me/5581989026173?text=${encodeURIComponent(waMessage)}`}
        className={`mt-4 w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
          isPremium ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Pedir Agora
      </a>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-900 selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-50 px-6 py-4">
        <div className="max-w-lg mx-auto flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter uppercase">HEBMAQ</span>
          <div className="flex gap-4">
            <a href={INSTAGRAM_URL} className="text-gray-400 hover:text-gray-900 transition-colors">
              <Instagram size={20} />
            </a>
            <a href={WHATSAPP_URL} className="text-gray-400 hover:text-gray-900 transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="pb-24">
        {/* Hero Section */}
        <section className="section-container text-center pt-12 pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-[0.2em] rounded-full mb-6">
              Direto da Fábrica
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Fatiadores HEBMAQ: Direto da Fábrica para seu negócio.
            </h1>
            <p className="text-lg text-gray-500 font-medium leading-relaxed mb-10 px-4">
              Economize até <span className="text-gray-900 font-bold">R$ 400,00</span> comprando pelo canal oficial. Qualidade industrial com entrega em todo o Brasil.
            </p>
            <a href={WHATSAPP_URL} className="btn-primary mx-auto group">
              Resgatar Desconto via WhatsApp
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* Video Section */}
        <section className="bg-gray-50 py-12">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[9/16] bg-black rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-[8px] border-white"
            >
              <iframe
                src="https://www.tiktok.com/embed/v2/7623894713959075080"
                className="absolute inset-0 w-full h-full"
                allow="fullscreen"
                title="TikTok Video HEBMAQ"
              />
            </motion.div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section-container">
          <h2 className="text-2xl font-bold text-center mb-10 tracking-tight">Onde é melhor comprar?</h2>
          <div className="grid grid-cols-2 gap-px bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
            <div className="bg-white p-6 flex flex-col items-center text-center">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2">Venda Terceirizada</span>
              <p className="font-semibold text-gray-600 mb-4">Mercado Livre</p>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-bold text-gray-400 line-through">R$ 1.899,90</span>
                <XCircle className="text-red-400 mt-2" size={24} />
              </div>
            </div>
            <div className="bg-gray-900 p-6 flex flex-col items-center text-center text-white">
              <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-2">Canal Oficial</span>
              <p className="font-semibold mb-4">HEBMAQ Direto</p>
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold">R$ 1.500,00</span>
                <CheckCircle2 className="text-green-400 mt-2" size={24} />
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-sm font-medium text-gray-500">
            Economia real de <span className="text-gray-900 font-bold">R$ 399,90</span> se comprar agora.
          </p>
        </section>

        {/* Product Grid */}
        <section className="bg-gray-50/50 py-16">
          <div className="section-container">
            <h2 className="text-3xl font-bold mb-10 tracking-tight">Nossos Modelos</h2>
            <div className="grid gap-8">
              <ProductCard 
                title="Modelo Standard"
                price="1.500"
                description="Fatiadora com frente em inox. O melhor custo-benefício para alto giro e durabilidade."
                badge="Mais vendido"
                image="/standard.JPG"
                waMessage="Olá! Vim pelo site e gostaria de resgatar meu desconto no fatiador modelo standard."
              />
              <ProductCard 
                title="Modelo Premium"
                price="2.200"
                description="100% Inox 304. Máxima durabilidade e higiene absoluta para rigor industrial."
                isPremium
                image="/premium.PNG"
                waMessage="Olá! Vim pelo site e gostaria de resgatar meu desconto no fatiador modelo premium."
              />
              <ProductCard 
                title="Disco de Reposição"
                price="299"
                description="Lâmina de corte original de alta precisão. Mantenha seu equipamento sempre afiado."
                image="/disco.JPG"
                waMessage="Olá! Vim pelo site e gostaria de comprar o disco de reposição."
              />
            </div>
          </div>
        </section>

        {/* Technical Section */}
        <section className="section-container grid grid-cols-2 gap-8 py-20">
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-sm">Aço Inox 304</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Material de padrão hospitalar e alimentício.</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900">
              <Truck size={24} />
            </div>
            <h3 className="font-bold text-sm">Envio Nacional</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Logística otimizada para todo o território brasileiro.</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900">
              <CreditCard size={24} />
            </div>
            <h3 className="font-bold text-sm">6x Sem Juros</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Facilidade no pagamento direto pelo canal oficial.</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-900">
              <Factory size={24} />
            </div>
            <h3 className="font-bold text-sm">Produção</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Sob encomenda para garantir a melhor qualidade inicial.</p>
          </div>
        </section>

        {/* Footer info */}
        <footer className="border-t border-gray-100 pt-12 pb-32 bg-white">
          <div className="section-container text-center">
            <span className="font-bold text-2xl tracking-tighter uppercase mb-6 block">HEBMAQ</span>
            <p className="text-sm text-gray-400 mb-8 font-medium">
              © 2026 HEBMAQ Indústria Ltda.<br/>
              Excelência em fatiadores industriais.
            </p>
            <div className="flex justify-center gap-6 text-gray-400">
              <a href={INSTAGRAM_URL} className="hover:text-gray-900 transition-colors flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                <Instagram size={16} /> Instagram
              </a>
              <a href={TIKTOK_URL} className="hover:text-gray-900 transition-colors flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
                 TikTok
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp */}
      <motion.a 
        href={WHATSAPP_URL}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-bold text-sm">
          Falar com Consultor
        </span>
      </motion.a>
    </div>
  );
}
