import { useState, useEffect } from 'react';
import { Heart, Gift, Sparkles, Calendar, GiftIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './LoveLetter.css';

const sectionAnimations = [
  'animate-fade-in-up',
  'animate-fade-in-left',
  'animate-fade-in-right',
  'animate-fade-in-scale',
  'animate-fade-in-down',
  'animate-fade-in-rotate',
  'animate-fade-in-up',
  'animate-fade-in-left',
  'animate-fade-in-right',
  'animate-fade-in-scale',
  'animate-fade-in-down',
  'animate-fade-in-rotate',
  'animate-fade-in-up',
  'animate-fade-in-left',
  'animate-fade-in-right',
  'animate-fade-in-scale',
  'animate-fade-in-down',
];

const letterSections = [
  {
    text: "Hi loveeeeeee,",
    delay: 0,
    className: "text-3xl sm:text-4xl md:text-6xl font-dancing text-center mb-6 sm:mb-8 text-pink-600"
  },
  {
    text: "First of all, and last of all too — I LOVE YOU SO MUCH BABYYY ❤️",
    delay: 1000,
    className: "text-xl sm:text-2xl md:text-3xl font-playfair text-center mb-8 sm:mb-12 text-rose-700 font-semibold"
  },
  {
    text: "You're the kind of girl I've always dreamt of — the one who puts her relationship before anything else.",
    delay: 2000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-4 sm:mb-6 text-gray-700"
  },
  {
    text: "I'm so happy for us.",
    delay: 3000,
    className: "text-lg sm:text-xl md:text-2xl font-playfair italic text-pink-600 text-center mb-4 sm:mb-6"
  },
  {
    text: "We couldn't grasp it in the beginning, and look where we are now.",
    delay: 4000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-4 sm:mb-6 text-gray-700"
  },
  {
    text: "We can't let a day pass without talking to each other — lol.",
    delay: 5000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-6 sm:mb-8 text-gray-700"
  },
  {
    text: "The way I get upset over little things,\nthe way you do everything to make sure everything is alright,\nthe way I patiently listen to your talks\n(they're blessings to my ears anyways) —",
    delay: 6000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-4 sm:mb-6 text-gray-700 whitespace-pre-line"
  },
  {
    text: "I love you so much.",
    delay: 7000,
    className: "text-xl sm:text-2xl md:text-3xl font-dancing text-center mb-6 sm:mb-8 text-rose-600 font-semibold"
  },
  {
    text: "I love everything about you.\nEvery single cell of you.",
    delay: 8000,
    className: "text-lg sm:text-xl md:text-2xl font-playfair text-center mb-6 sm:mb-8 text-pink-700 whitespace-pre-line"
  },
  {
    text: "Thank you so much for putting your trust in me.",
    delay: 9000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-4 sm:mb-6 text-gray-700"
  },
  {
    text: "I'll make sure you feel every inch of it is valuable\n(you already know that though).",
    delay: 10000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-6 sm:mb-8 text-gray-700 whitespace-pre-line"
  },
  {
    text: "I'll protect this love with everything I have.",
    delay: 11000,
    className: "text-lg sm:text-xl md:text-2xl font-playfair font-semibold text-center mb-4 sm:mb-6 text-rose-700"
  },
  {
    text: "I'll be your peace on the rough days,\nyour loudest cheer when you shine,\nyour quiet place when things get too loud,\nand your warmth when the world feels cold.",
    delay: 12000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-6 sm:mb-8 text-gray-700 whitespace-pre-line italic"
  },
  {
    text: "You've made a home in my heart —\na place no one else can ever reach.",
    delay: 13000,
    className: "text-lg sm:text-xl md:text-2xl font-playfair text-center mb-4 sm:mb-6 text-pink-700 whitespace-pre-line"
  },
  {
    text: "And I promise to keep it safe.\nTo grow it.\nTo fill it with laughter, memories, and love that doesn't fade.",
    delay: 14000,
    className: "text-base sm:text-lg md:text-xl font-crimson leading-relaxed mb-6 sm:mb-8 text-gray-700 whitespace-pre-line"
  },
  {
    text: "You're not just someone I love.\nYou're someone I'll keep choosing —\nevery single day, without a second thought.",
    delay: 15000,
    className: "text-lg sm:text-xl md:text-2xl font-playfair text-center mb-6 sm:mb-8 text-rose-700 whitespace-pre-line font-semibold"
  },
  {
    text: "Forever yours,\nSameer ❤️",
    delay: 16000,
    className: "text-2xl sm:text-3xl md:text-4xl font-dancing text-center text-pink-600 whitespace-pre-line"
  }
];

const videoList = [
  '/first.mp4', // <-- Place first.mp4 in your public folder
  '/second.mp4' // <-- Place second.mp4 in your public folder
];

const LoveLetter = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showVideos, setShowVideos] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (showLetter && currentSection < letterSections.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSection(prev => Math.min(prev + 1, letterSections.length - 1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentSection, showLetter]);

  // Handler for "Open Letter" button
  const handleOpenLetter = () => {
    setShowLetter(true);
  };

  // Handler for "Surprise" button
  const handleSurprise = () => {
    setShowSurprise(true);
    setShowVideos(true);
    setCurrentVideo(0);
  };

  // Handler for video end
  const handleVideoEnded = () => {
    if (currentVideo < videoList.length - 1) {
      setCurrentVideo(currentVideo + 1);
    } else {
      setShowVideos(false);
      setShowSurprise(false);
    }
  };

  // Show videos for surprise
  if (showSurprise && showVideos) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200">
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center px-2">
          <div className="date-badge rounded-full px-4 py-2 shadow-lg max-w-xs w-full flex justify-center">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-pink-600" />
              <span className="font-playfair text-sm font-semibold text-pink-700">
                DEC 1 2024
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4 text-center mt-16 sm:mt-24">
          <p className="font-dancing text-2xl text-pink-600 mb-2">Hehehehe 😘😋❤️...</p>
        </div>
        <video
          src={videoList[currentVideo]}
          controls
          autoPlay
          onEnded={handleVideoEnded}
          className="rounded-2xl shadow-2xl max-w-full w-[90vw] max-h-[60vh] border-4 border-pink-200"
        />
      </div>
    );
  }

// ...existing code...

// Show the letter
if (showLetter) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fluid-gradient-bg"></div>
      {/* Responsive pin-style date badge: absolute on desktop, fixed on small screens */}
      <div
        className="
          z-50
          absolute top-4 left-4
          sm:absolute sm:top-4 sm:left-4
          xs:fixed xs:top-2 xs:left-1/2 xs:-translate-x-1/2
        "
        style={{
          // Use fixed positioning on small screens
          position: window.innerWidth < 640 ? 'fixed' : 'absolute'
        }}
      >
        <div className="bg-white/80 border border-pink-200 rounded-full px-4 py-2 shadow-md flex items-center gap-2 max-w-[90vw]">
          <Calendar className="w-4 h-4 text-pink-600" />
          <span className="font-playfair text-sm font-semibold text-pink-700 whitespace-nowrap">
            13th June 2025
          </span>
        </div>
      </div>
      {/* Floating hearts in background */}
      {Array.from({ length: 25 }, (_, i) => (
        <FloatingHeart key={i} delay={i * 0.4} />
      ))}
      {Array.from({ length: 30 }, (_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} />
      ))}
      {/* Floating hearts on the letter */}
      <div className="absolute inset-0 pointer-events-none z-30">
        {Array.from({ length: 10 }, (_, i) => (
          <FloatingHeart key={i} delay={i * 0.7 + 0.2} small />
        ))}
      </div>
      <div className="container mx-auto mobile-padding py-8 sm:py-12 relative z-40">
        <div className="max-w-4xl mx-auto">
          <div className="letter-card glass-bg rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-16 relative overflow-hidden">
            {/* Extra floating hearts inside the letter */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {Array.from({ length: 8 }, (_, i) => (
                <FloatingHeart key={i} delay={i * 0.9 + 0.5} small />
              ))}
            </div>
            <div className="relative z-20">
              {letterSections.map((section, index) => (
                <div
                  key={index}
                  className={`glow-text ${section.className} transition-all duration-1000 ${
                    isVisible && index <= currentSection
                      ? `opacity-100 ${sectionAnimations[index % sectionAnimations.length]}`
                      : 'opacity-0'
                  }`}
                  style={{
                    animationFillMode: 'forwards'
                  }}
                >
                  {section.text}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 sm:mt-12 text-center animate-fade-in flex flex-col items-center gap-4" style={{ animationDelay: '17s' }}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Heart className="animate-heart-pulse w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
              <span className="font-playfair text-sm sm:text-lg font-semibold">6 Months Anniversary</span>
              <Heart className="animate-heart-pulse w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
            </div>
            <Button
              onClick={handleSurprise}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg font-playfair text-base sm:text-lg font-semibold transition-all duration-300"
            >
              <GiftIcon className="w-5 h-5" />
              Surprise!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ...existing code...

// ...existing code...

  // Intro page
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="fluid-gradient-bg"></div>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-full flex justify-center px-2">
        <div className="date-badge rounded-full px-4 py-2 shadow-lg max-w-xs w-full flex justify-center">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-pink-600" />
            <span className="font-playfair text-sm font-semibold text-pink-700">
              13th June 2025
            </span>
          </div>
        </div>
      </div>
      {Array.from({ length: 20 }, (_, i) => (
        <FloatingHeart key={i} delay={i * 0.3} />
      ))}
      {Array.from({ length: 15 }, (_, i) => (
        <FloatingParticle key={i} delay={i * 0.5} />
      ))}
      <div className="container mx-auto mobile-padding relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="letter-card glass-bg rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 animate-fade-in">
            <div className="mb-6 sm:mb-8">
              <Gift className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 mx-auto text-pink-500 animate-heart-pulse" />
            </div>
            <h1 className="glow-text text-2xl sm:text-3xl md:text-5xl font-dancing text-pink-600 mb-4 sm:mb-6">
              A Special Message Awaits...
            </h1>
            <p className="glow-text text-lg sm:text-xl font-playfair text-pink-500 mb-2">
              to the love of my life<br />
              Varshini Rajeshwari ❤️
            </p>
            <p className="glow-text text-base sm:text-lg md:text-xl font-crimson text-gray-700 mb-6 sm:mb-8">
              Click the button below to open your love letter!
            </p>
            <div className="flex justify-center">
              <Button
                onClick={handleOpenLetter}
                className="relative bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full text-lg sm:text-2xl font-dancing shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <span className="absolute left-2 -top-2 animate-sparkle">
                  <Sparkles className="text-yellow-400 w-6 h-6" />
                </span>
                Open Letter
                <span className="absolute right-2 -bottom-2 animate-sparkle">
                  <Sparkles className="text-yellow-400 w-6 h-6" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// FloatingHeart and FloatingParticle components
function FloatingHeart({ delay, small }: { delay: number; small?: boolean }) {
  return (
    <div
      className={`floating-heart ${small ? 'opacity-60' : ''}`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        fontSize: small
          ? `${Math.random() * 0.5 + 0.3}rem`
          : `${Math.random() * 0.8 + 0.6}rem`
      }}
    >
      <Heart className="text-pink-300 animate-heart-pulse" fill="currentColor" />
    </div>
  );
}

function FloatingParticle({ delay }: { delay: number }) {
  return (
    <div
      className="floating-particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${Math.random() * 6 + 8}s`
      }}
    />
  );
}

export default LoveLetter;