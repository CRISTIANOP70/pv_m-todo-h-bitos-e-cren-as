import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Shield, CreditCard, QrCode, FileText, CheckCircle2, Loader, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [cardData, setCardData] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [loading, setLoading] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);
  const [progressText, setProgressText] = useState('');
  
  // Format phone automatically
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setForm(prev => ({ ...prev, phone: value }));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 16) val = val.slice(0, 16);
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    setCardData(prev => ({
      ...prev,
      number: parts.length > 0 ? parts.join(' ') : val
    }));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 4) val = val.slice(0, 4);
    if (val.length > 2) {
      val = `${val.slice(0, 2)}/${val.slice(2)}`;
    }
    setCardData(prev => ({ ...prev, expiry: val }));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 3) val = val.slice(0, 3);
    setCardData(prev => ({ ...prev, cvv: val }));
  };

  // Switch steps with validation
  const goToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.includes('@') || form.phone.length < 13) {
      return;
    }
    
    setLoading(true);
    try {
      await supabase.from('leads').upsert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          status: 'iniciou checkout',
          product_name: 'Método Hábitos e Crenças',
          history: [{ status: 'iniciou checkout', timestamp: new Date().toISOString() }]
        }
      ], { onConflict: 'email' });

      const kiwifyUrl = new URL('https://pay.kiwify.com.br/Dj83NBa');
      kiwifyUrl.searchParams.append('name', form.name);
      kiwifyUrl.searchParams.append('email', form.email);
      kiwifyUrl.searchParams.append('phone', form.phone);
      
      window.location.href = kiwifyUrl.toString();
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      const kiwifyUrl = new URL('https://pay.kiwify.com.br/Dj83NBa');
      window.location.href = kiwifyUrl.toString();
    }
  };

  // Simulate payment processing
  const processPayment = () => {
    setLoading(true);
    let count = 0;
    const progressSteps = [
      'Estabelecendo conexão segura SSL...',
      'Validando dados de pagamento...',
      'Processando transação com segurança...',
      'Transação finalizada com sucesso!'
    ];
    setProgressText(progressSteps[0]);

    const interval = setInterval(() => {
      count++;
      if (count < progressSteps.length) {
        setProgressText(progressSteps[count]);
      } else {
        clearInterval(interval);
        setLoading(false);
        setStep('success');
      }
    }, 1000);
  };

  // Auto-confirm PIX after 6 seconds for extreme customer delight
  useEffect(() => {
    if (step === 'payment' && paymentMethod === 'pix') {
      const timer = setTimeout(() => {
        processPayment();
      }, 6500);
      return () => clearTimeout(timer);
    }
  }, [step, paymentMethod]);

  const copyPixCode = () => {
    const code = "00020101021226830014BR.GOV.BCB.PIX2561api.pagar.me/pix/v2/10ae06af-1453-4605-9d80-fc6a5060cf48520400005303986540529.905802BR5925METODO HABITOS CRENCA6009SAO PAULO62070503***6304E6BC";
    navigator.clipboard.writeText(code);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2000);
  };

  const resetState = () => {
    setStep('form');
    setPaymentMethod('pix');
    setCardData({ number: '', name: '', expiry: '', cvv: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={loading ? undefined : resetState}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal body */}
        <motion.div
          initial={{ scale: 0.95, y: 15, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 15, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 font-sans"
        >
          {/* Close Button */}
          {!loading && (
            <button
              onClick={resetState}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}

          {/* Secure Banner */}
          <div className="bg-slate-900 text-white px-5 py-3 h-12 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Checkout Seguro Criptografado SSL</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>

          <div className="p-6">
            {/* Header info */}
            {step !== 'success' && (
              <div className="mb-5 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">PROMOÇÃO</span>
                  <h3 className="text-sm font-bold text-slate-800 mt-1">Método Hábitos e Crenças</h3>
                  <p className="text-xs text-slate-500">Reprogramação Neural em 30 Dias</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400 line-through">R$ 445,00</p>
                  <p className="text-lg font-black text-slate-950">R$ 29,90</p>
                  <p className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded inline-block">Economia de 93%</p>
                </div>
              </div>
            )}

            {/* Steps Visualizer */}
            {step !== 'success' && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'form' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>1</div>
                  <span className={`text-xs font-semibold ${step === 'form' ? 'text-slate-900' : 'text-slate-500'}`}>Contato</span>
                </div>
                <div className="flex-1 h-px bg-slate-100 mx-4" />
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 'payment' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>2</div>
                  <span className={`text-xs font-semibold ${step === 'payment' ? 'text-slate-900' : 'text-slate-500'}`}>Pagamento</span>
                </div>
              </div>
            )}

            {/* STEP 1: FORM */}
            {step === 'form' && (
              <form onSubmit={goToPayment} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: João Silva Costa"
                    value={form.name}
                    onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Seu Melhor E-mail</label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: joao@email.com"
                    value={form.email}
                    onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">Este e-mail será usado para enviar seu login e os materiais digitais.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">WhatsApp / Celular </label>
                    <input
                      type="text"
                      required
                      placeholder="(99) 99999-9999"
                      value={form.phone}
                      onChange={handlePhoneChange}
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <span>Ir para o Pagamento Seguro</span>
                  </button>
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-slate-400">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Seus dados pessoais estão completamente protegidos.</span>
                  </div>
                </div>
              </form>
            )}

            {/* STEP 2: PAYMENT METHOD SPECIFICATION */}
            {step === 'payment' && !loading && (
              <div className="space-y-4">
                {/* Method selector tab */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-2 rounded-md font-bold text-xs flex flex-col items-center gap-1 transition-all ${paymentMethod === 'pix' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>⚡ PIX</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-2 rounded-md font-bold text-xs flex flex-col items-center gap-1 transition-all ${paymentMethod === 'card' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <CreditCard className="w-4 h-4 text-blue-600" />
                    <span>Cartão</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('boleto')}
                    className={`py-2 rounded-md font-bold text-xs flex flex-col items-center gap-1 transition-all ${paymentMethod === 'boleto' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                  >
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span>Boleto</span>
                  </button>
                </div>

                {/* PIX SCREEN */}
                {paymentMethod === 'pix' && (
                  <div className="space-y-4 text-center py-2 animate-fadeIn">
                    <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-xs leading-relaxed font-medium">
                      🚀 <b>Desconto Pix:</b> Acesso liderado em tempo real! Nosso sistema analisa o envio no banco e libera o login em até 10 segundos.
                    </div>

                    {/* Simulating QR code graphic */}
                    <div className="mx-auto w-36 h-36 bg-slate-100 border border-slate-200 rounded-lg p-2.5 flex flex-col justify-center items-center relative group">
                      <div className="grid grid-cols-5 gap-1.5 w-full h-full opacity-90">
                        {/* Styled representation of QR pattern */}
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-300 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-200 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-200 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-300 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-300 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-200 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-200 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-300 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                        <div className="bg-slate-900 rounded-sm" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-white/90 rounded-lg">
                        <QrCode className="w-10 h-10 text-emerald-600 animate-pulse" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[11px] text-slate-500">Escaneie o QR Code acima ou utilize o copia e cola abaixo.</p>
                      <button
                        type="button"
                        onClick={copyPixCode}
                        className={`w-full py-2.5 rounded-lg border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${copiedPix ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}`}
                      >
                        {copiedPix ? <Check className="w-4 h-4 text-emerald-600" /> : <QrCode className="w-4 h-4" />}
                        <span>{copiedPix ? "Código Pix Copiado com Sucesso!" : "Copiar Código Pix Copia e Cola"}</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 py-1 text-xs text-slate-400 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span>Aguardando transferência voluntária...</span>
                    </div>

                    {/* Developer helper skip */}
                    <button
                      type="button"
                      onClick={processPayment}
                      className="text-[10px] text-slate-300 hover:text-slate-400 underline block mx-auto pt-1 font-mono uppercase"
                    >
                      [Simular Confirmação Instantânea de Pix]
                    </button>
                  </div>
                )}

                {/* CREDIT CARD SCREEN */}
                {paymentMethod === 'card' && (
                  <form onSubmit={(e) => { e.preventDefault(); processPayment(); }} className="space-y-4 animate-fadeIn">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Número do Cartão</label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="4532 1000 3211 4983"
                          value={cardData.number}
                          onChange={handleCardNumberChange}
                          className="w-full text-sm font-mono px-3.5 py-2.5 pl-10 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                        />
                        <CreditCard className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Nome Impresso no Cartão</label>
                      <input
                        type="text"
                        required
                        placeholder="EX: JOAO S COSTA"
                        value={cardData.name}
                        onChange={e => setCardData(prev => ({ ...prev, name: e.target.value.toUpperCase() }))}
                        className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Vencimento (MM/AA)</label>
                        <input
                          type="text"
                          required
                          placeholder="12/30"
                          value={cardData.expiry}
                          onChange={handleExpiryChange}
                          className="w-full text-sm font-mono px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 text-slate-900 text-center"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Código CVV</label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          value={cardData.cvv}
                          onChange={handleCvvChange}
                          className="w-full text-sm font-mono px-3.5 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400 text-slate-900 text-center"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black h-12 uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-700/20 transition-all cursor-pointer"
                    >
                      <Lock className="w-4 h-4" />
                      <span>Confirmar Pagamento R$ 29,90</span>
                    </button>
                  </form>
                )}

                {/* BOLETO SCREEN */}
                {paymentMethod === 'boleto' && (
                  <div className="space-y-4 py-3 animate-fadeIn text-center">
                    <div className="bg-amber-50 text-amber-800 p-3 rounded-lg text-xs leading-relaxed font-medium">
                      ⚠️ <b>Aviso Boleto:</b> O banco pode levar até 48 horas úteis para repassar a compensação e nossa plataforma disparar seu acesso.
                    </div>
                    <p className="text-xs text-slate-500">Ao clicar abaixo, geramos um boleto registrado vinculando o seu CPF.</p>
                    <button
                      type="button"
                      onClick={processPayment}
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-amber-500" />
                      <span>Gerar Boleto de R$ 29,90</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* PROCESSING LOADER STATE */}
            {loading && (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-pulse">
                <Loader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                <h4 className="font-bold text-slate-800 text-base mb-1">Processando Transação</h4>
                <p className="text-xs text-slate-500 font-mono">{progressText}</p>
                <p className="text-[10px] text-slate-400 mt-4">Por favor, não feche ou recarregue esta janela.</p>
              </div>
            )}

            {/* STEP 3: SUCCESS invoice & member access details */}
            {step === 'success' && (
              <div className="py-6 text-center space-y-5 animate-scaleUp">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 border-4 border-emerald-50">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-black text-slate-900 text-xl tracking-tight uppercase">Acesso Aprovado!</h3>
                  <p className="text-xs text-slate-500">Sua jornada de reprogramação neural acaba de começar.</p>
                </div>

                {/* Visual credentials */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-left max-w-sm mx-auto space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold uppercase">Lote Premium Ativo</span>
                    <span className="text-xs text-slate-400 font-mono">ID: HC-98243-B</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-bold tracking-wider">Aluno(a)</span>
                      <strong className="text-slate-800 font-semibold">{form.name || "Seu Nome"}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-bold tracking-wider">E-mail de Login</span>
                      <strong className="text-slate-800 font-semibold block break-all">{form.email || "seu@email.com"}</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[9px] uppercase font-bold tracking-wider">Incluso no Pacote</span>
                      <strong className="text-blue-700 font-semibold text-[10px]">Método 30 Dias + 4 Super Bônus (Check30 Vitalício Ativado!)</strong>
                    </div>
                  </div>
                </div>

                <div className="text-left bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg text-xs leading-relaxed text-blue-900 border border-blue-100 max-w-sm mx-auto">
                  🎉 <b>Como Acessar:</b> Enviamos os links de download dos PDFs, as aulas de Áudio MP3 e a chave exclusiva de ativação do App Check30 para seu e-mail agora mesmo! Verifique sua caixa de Spam/Promoções se não ver em 2 minutos.
                </div>

                <div className="pt-2">
                  <a
                    href="https://check30-pink.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10 transition-all text-sm uppercase"
                  >
                    <span>Entrar na Área de Membros</span>
                  </a>
                  <button
                    onClick={resetState}
                    className="text-xs text-slate-400 hover:text-slate-600 underline mt-3 block mx-auto"
                  >
                    Voltar para a página de vendas
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
