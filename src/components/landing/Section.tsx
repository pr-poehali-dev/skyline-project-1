import { motion } from "framer-motion"

interface SectionProps {
  id: string
  type: string
  isActive: boolean
}

function HeroSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-none shadow-xl overflow-hidden border-4 border-white rotate-[-2deg]">
              <img
                src="https://cdn.poehali.dev/projects/6d2a15f5-dce3-4d17-9f25-aa60f2a08e25/bucket/9ff6174e-52cc-4d3b-8a6a-1ffe6d3377ad.jpg"
                alt="Михаил и Анна"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-4xl sm:text-5xl font-light" style={{ fontFamily: 'Georgia, serif', color: '#c9a96e' }}>+</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-2" style={{ color: '#a89070' }}>приглашение на свадьбу</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-2" style={{ fontFamily: "'Dancing Script', cursive", color: '#5c4a32' }}>
            Михаил & Анна
          </h1>
          <div className="w-16 h-px mx-auto my-4" style={{ background: '#c9a96e' }} />
          <p className="text-xl sm:text-2xl tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif', color: '#8a7560' }}>
            10 июля 2026
          </p>
          <p className="mt-3 text-base" style={{ color: '#a89070', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            Мы выросли, и теперь нам можно ♡
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 flex flex-col items-center gap-1"
        >
          <div className="w-px h-8" style={{ background: '#c9a96e' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: '#c9a96e' }}>листайте вниз</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ChildhoodSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-8 max-w-lg"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#c9a96e' }}>они были вот такими</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Dancing Script', cursive", color: '#5c4a32' }}>
            С самого начала
          </h2>
        </div>

        <div className="flex items-end gap-6 sm:gap-10">
          <motion.div
            initial={{ opacity: 0, rotate: -5 }}
            animate={isActive ? { opacity: 1, rotate: -3 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-28 h-36 sm:w-36 sm:h-44 overflow-hidden border-4 border-white shadow-lg rotate-[-3deg]">
              <img
                src="https://cdn.poehali.dev/projects/6d2a15f5-dce3-4d17-9f25-aa60f2a08e25/bucket/9ff6174e-52cc-4d3b-8a6a-1ffe6d3377ad.jpg"
                alt="Михаил в детстве"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-lg" style={{ fontFamily: "'Dancing Script', cursive", color: '#8a7560' }}>Михаил</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl mb-8"
            style={{ color: '#e8a0a0' }}
          >
            ♡
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 5 }}
            animate={isActive ? { opacity: 1, rotate: 3 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-28 h-36 sm:w-36 sm:h-44 overflow-hidden border-4 border-white shadow-lg rotate-[3deg]">
              <img
                src="https://cdn.poehali.dev/projects/6d2a15f5-dce3-4d17-9f25-aa60f2a08e25/bucket/9ff6174e-52cc-4d3b-8a6a-1ffe6d3377ad.jpg"
                alt="Анна в детстве"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p className="text-lg" style={{ fontFamily: "'Dancing Script', cursive", color: '#8a7560' }}>Анна</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base italic"
          style={{ color: '#a89070', fontFamily: 'Georgia, serif' }}
        >
          А + М = ♡
        </motion.p>
      </motion.div>
    </section>
  )
}

function LocationSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-6 max-w-sm w-full"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#c9a96e' }}>ждём вас</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Dancing Script', cursive", color: '#5c4a32' }}>
            Дорогой Гость!
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base leading-relaxed"
          style={{ color: '#7a6a55', fontFamily: 'Georgia, serif' }}
        >
          Мы рады сообщить Вам, что <strong>10.07.2026</strong> состоится самое главное торжество в нашей жизни — день нашей свадьбы! Приглашаем Вас разделить с нами радость этого незабываемого дня.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full rounded-xl overflow-hidden shadow-md border-2 border-white"
        >
          <img
            src="https://cdn.poehali.dev/projects/6d2a15f5-dce3-4d17-9f25-aa60f2a08e25/bucket/8951e280-0da3-450a-b281-1b72f146c174.jpg"
            alt="Место проведения"
            className="w-full object-cover"
            style={{ maxHeight: '180px' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="font-semibold text-base" style={{ color: '#5c4a32', fontFamily: 'Georgia, serif' }}>
            Пятница, 10 июля 2026 года
          </p>
          <p className="text-base" style={{ color: '#7a6a55', fontFamily: 'Georgia, serif' }}>
            в 17:00 · «Банкет» Золотой зал
          </p>
          <p className="text-base" style={{ color: '#7a6a55', fontFamily: 'Georgia, serif' }}>
            ул. Гагарина, 6
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base italic"
          style={{ fontFamily: "'Dancing Script', cursive", color: '#8a7560', fontSize: '1.2rem' }}
        >
          Там, где посеяна любовь, растёт радость
        </motion.p>
      </motion.div>
    </section>
  )
}

function GiftsSection({ isActive }: { isActive: boolean }) {
  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-6 max-w-sm"
      >
        <div className="flex flex-row gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
          >
            <img
              src="https://cdn.poehali.dev/projects/6d2a15f5-dce3-4d17-9f25-aa60f2a08e25/bucket/a3bfe347-a0a0-4849-b0c4-ef5109c3e647.jpg"
              alt="Жених и невеста"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#c9a96e' }}>пожелания по подаркам</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Dancing Script', cursive", color: '#5c4a32' }}>
            О подарках
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-3"
        >
          <p className="text-base" style={{ color: '#7a6a55', fontFamily: 'Georgia, serif' }}>
            Ваше присутствие в день нашей свадьбы — самый значимый подарок для нас!
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#7a6a55', fontFamily: 'Georgia, serif' }}>
            Мы уже вместе, но пока живём в разных городах. Поэтому мечтаем, что ваши подарки помогут нам собрать первый общий бюджет — на путешествие. Будем рады, если вы поддержите нас тёплым конвертом ❤️
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="px-6 py-3 rounded-full text-sm uppercase tracking-widest"
          style={{ background: '#f0e8dc', color: '#8a7560', border: '1px solid #c9a96e', fontFamily: 'Georgia, serif' }}
        >
          Подтвердите присутствие до 20 июня 2026
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl italic"
          style={{ fontFamily: "'Dancing Script', cursive", color: '#5c4a32', fontSize: '1.6rem' }}
        >
          Ждём Вас на нашей свадьбе!
        </motion.p>
      </motion.div>
    </section>
  )
}

function DresscodeSection({ isActive }: { isActive: boolean }) {
  const forbidden = [
    { color: '#e53e3e', label: 'красный' },
    { color: '#3b5bdb', label: 'ярко-синий' },
    { color: '#f6d860', label: 'кислотный' },
    { color: '#00d2ff', label: 'бирюзовый' },
  ]

  return (
    <section className="relative h-screen w-full snap-start flex flex-col items-center justify-center px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-6 max-w-sm"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#c9a96e' }}>дресс-код</p>
          <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: "'Dancing Script', cursive", color: '#5c4a32' }}>
            Как одеться
          </h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base leading-relaxed"
          style={{ color: '#7a6a55', fontFamily: 'Georgia, serif' }}
        >
          Мы будем рады видеть вас в любых нарядах, но небольшая просьба — пожалуйста, <strong>избегайте этих цветов:</strong> красного, ярко-кислотных цветов, белого (только дамам).
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <p className="text-sm" style={{ color: '#a89070', fontFamily: 'Georgia, serif' }}>Пример НЕ подходящих цветов:</p>
          <div className="flex gap-4">
            {forbidden.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-full shadow-md border-2 border-white"
                  style={{ background: item.color }}
                />
                <span className="text-xs" style={{ color: '#a89070' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full rounded-xl overflow-hidden shadow-md border-2 border-white"
        >
          <img
            src="https://cdn.poehali.dev/projects/6d2a15f5-dce3-4d17-9f25-aa60f2a08e25/bucket/b302ed49-9c8c-4b2b-8965-fba40b09df7a.jpg"
            alt="Карта"
            className="w-full object-cover"
            style={{ maxHeight: '160px', objectPosition: 'bottom' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base italic"
          style={{ fontFamily: "'Dancing Script', cursive", color: '#8a7560', fontSize: '1.4rem' }}
        >
          С любовью, Михаил & Анна ♡
        </motion.p>
      </motion.div>
    </section>
  )
}

export default function Section({ id, type, isActive }: SectionProps) {
  if (type === 'hero') return <HeroSection isActive={isActive} />
  if (type === 'childhood') return <ChildhoodSection isActive={isActive} />
  if (type === 'location') return <LocationSection isActive={isActive} />
  if (type === 'gifts') return <GiftsSection isActive={isActive} />
  if (type === 'dresscode') return <DresscodeSection isActive={isActive} />
  return null
}
