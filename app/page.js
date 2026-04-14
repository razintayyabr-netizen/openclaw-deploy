'use client';
import { useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Install OpenClaw',
    desc: 'One command to install. Works on Windows, macOS, and Linux.',
    code: `npm i -g openclaw@beta`,
    lang: 'bash'
  },
  {
    num: '02',
    title: 'Run Setup Wizard',
    desc: 'Interactive onboarding walks you through everything in 3 minutes.',
    code: `openclaw onboard`,
    lang: 'bash'
  },
  {
    num: '03',
    title: 'Connect Your AI',
    desc: 'Choose Claude, GPT, Gemini, or run local with Ollama. Your keys stay on your machine.',
    code: `? Choose your AI provider\n  ❯ Anthropic (Claude)\n    OpenAI (GPT-4o)\n    Google (Gemini)\n    Ollama (Local)`,
    lang: 'text'
  },
  {
    num: '04',
    title: 'Link Chat Platform',
    desc: 'WhatsApp, Telegram, Discord, or WebChat. Scan a QR or paste a token.',
    code: `? Connect a chat platform\n  ❯ WhatsApp (scan QR)\n    Telegram (bot token)\n    Discord (bot token)\n    WebChat (built-in)`,
    lang: 'text'
  },
  {
    num: '05',
    title: "You're Live",
    desc: "Send a message. Your AI assistant responds. That's it.",
    code: `✓ Connected to Telegram\n✓ AI provider: Claude\n✓ OpenClaw is running\n\n→ Send "Hey" to your bot!`,
    lang: 'text'
  },
];

const features = [
  { icon: '🔒', title: 'Your Keys, Your Machine', desc: 'API keys never leave your device. Everything runs locally. Zero cloud dependency.' },
  { icon: '💬', title: 'Multi-Platform', desc: 'WhatsApp, Telegram, Discord, WebChat - connect them all simultaneously.' },
  { icon: '🧠', title: 'Any AI Model', desc: 'Claude, GPT-4o, Gemini, Llama, Mistral - switch providers anytime.' },
  { icon: '⚡', title: 'Skills System', desc: 'GitHub issues, web search, image analysis, weather - extend with skills.' },
  { icon: '🔄', title: 'Always On', desc: 'Runs as a background service. Your assistant never sleeps.' },
  { icon: '🎨', title: 'Fully Customizable', desc: 'Personality, tone, memory, tools - shape your AI however you want.' },
  { icon: '📱', title: 'Mobile Companion', desc: 'iOS and Android apps. Scan QR to pair your phone.' },
  { icon: '🌐', title: 'Web Dashboard', desc: 'Built-in web UI for configuration, logs, and monitoring.' },
  { icon: '🛡️', title: 'Open Source', desc: 'Audit the code. Fork it. Contribute. No black boxes.' },
];

const platforms = [
  { name: 'WhatsApp', icon: '💬' },
  { name: 'Telegram', icon: '✈️' },
  { name: 'Discord', icon: '🎮' },
  { name: 'WebChat', icon: '🌐' },
  { name: 'iOS', icon: '🍎' },
  { name: 'Android', icon: '🤖' },
];

const providers = [
  { name: 'Claude', color: '#D97706', desc: 'Anthropic' },
  { name: 'GPT-4o', color: '#22C55E', desc: 'OpenAI' },
  { name: 'Gemini', color: '#3B82F6', desc: 'Google' },
  { name: 'Llama', color: '#8B5CF6', desc: 'Meta via Ollama' },
  { name: 'Mistral', color: '#EF4444', desc: 'via Ollama' },
  { name: 'Qwen', color: '#F59E0B', desc: 'via Ollama' },
];

const faqs = [
  { q: 'Is OpenClaw free?', a: 'Yes, OpenClaw is free and open source. You only pay for AI API usage (Claude, GPT, etc.) if you use cloud models. Local models via Ollama are completely free.' },
  { q: 'Do I need a server?', a: 'No. OpenClaw runs on your laptop, desktop, or a $5/month VPS. It\'s designed to run anywhere Node.js works.' },
  { q: 'Is my data safe?', a: 'Your API keys and conversations stay on your machine. OpenClaw never sends your data anywhere except to your chosen AI provider for processing.' },
  { q: 'Can I use it without coding?', a: 'Absolutely. The `openclaw onboard` wizard handles everything. No coding required. Just install, run, and chat.' },
  { q: 'What AI models work?', a: 'Any model from Anthropic, OpenAI, Google, or local models via Ollama. You can switch providers anytime in your config.' },
  { q: 'Can multiple people use one instance?', a: 'Yes. Connect multiple chat platforms and each gets its own context. You can also set up different personalities per channel.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(5,5,7,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🐾</div>
            <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>OpenClaw</span>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#install" className="nav-link">Install</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" className="nav-link">GitHub ↗</a>
            <a href="#install" className="cta-btn" style={{ padding: '8px 20px', fontSize: 14 }}>Deploy Now</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', padding: '120px 24px 80px', textAlign: 'center' }} className="hero-gradient grid-bg">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.2)', fontSize: 13, color: '#A855F7', marginBottom: 24, fontFamily: 'JetBrains Mono, monospace' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', animation: 'pulse-glow 2s infinite' }} />
            Open Source · Free to Use · Deploy in 5 Min
          </div>
          <h1 className="hero-title" style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 20 }}>
            Your Personal<br />
            <span style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7, #C084FC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }}>AI Assistant</span>
          </h1>
          <p style={{ fontSize: 18, color: '#6B6B7B', lineHeight: 1.6, maxWidth: 560, margin: '0 auto 36px' }}>
            Deploy OpenClaw on your machine. Connect it to WhatsApp, Telegram, or Discord. Powered by Claude, GPT, Gemini, or local models. Your data stays yours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#install" className="cta-btn">Deploy Now →</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" className="cta-btn-outline">View on GitHub</a>
          </div>
        </div>

        {/* Terminal Preview */}
        <div style={{ maxWidth: 640, margin: '60px auto 0' }} className="code-block">
          <div className="code-header">
            <div className="code-dot" style={{ background: '#EF4444' }} />
            <div className="code-dot" style={{ background: '#F59E0B' }} />
            <div className="code-dot" style={{ background: '#22C55E' }} />
            <span style={{ fontSize: 12, color: '#6B6B7B', marginLeft: 8, fontFamily: 'JetBrains Mono, monospace' }}>terminal</span>
          </div>
          <div className="code-body">
            <div><span className="prompt">$</span> <span className="cmd">npm i -g openclaw@beta</span></div>
            <div><span className="output">✓ Installed openclaw v2026.3.12</span></div>
            <div><span className="prompt">$</span> <span className="cmd">openclaw onboard</span></div>
            <div><span className="output">? Choose AI provider: </span><span className="flag">Anthropic (Claude)</span></div>
            <div><span className="output">? Connect platform: </span><span className="flag">Telegram</span></div>
            <div><span className="output">✓ Connected! Send a message to your bot.</span></div>
            <div><span className="prompt">$</span> <span className="cursor" /></div>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section style={{ padding: '40px 24px 60px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ textAlign: 'center', marginBottom: 24, fontSize: 12, color: '#6B6B7B', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>Connect To</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 600, margin: '0 auto' }}>
          {platforms.map(p => (
            <div key={p.name} className="platform-badge">{p.icon} {p.name}</div>
          ))}
        </div>
      </section>

      {/* AI PROVIDERS */}
      <section style={{ padding: '0 24px 60px' }}>
        <div style={{ textAlign: 'center', marginBottom: 24, fontSize: 12, color: '#6B6B7B', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>Powered By</div>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 700, margin: '0 auto' }}>
          {providers.map(p => (
            <div key={p.name} className="platform-badge" style={{ borderColor: `${p.color}33` }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color }} />
              {p.name} <span style={{ color: '#4B4B5B', fontSize: 11 }}>{p.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Why OpenClaw</div>
            <h2 className="section-title" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Built Different</h2>
          </div>
          <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALL STEPS */}
      <section id="install" style={{ padding: '80px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Get Started</div>
            <h2 className="section-title" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Deploy in 5 Minutes</h2>
            <p style={{ fontSize: 16, color: '#6B6B7B', marginTop: 8 }}>No servers. No DevOps. No credit card.</p>
          </div>

          <div className="step-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: 20 }}>
            {steps.map((s, i) => (
              <div key={i} className="step-card" style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1fr', gap: 24, alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 700, color: '#A855F7', fontFamily: 'JetBrains Mono, monospace' }}>{s.num}</div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.5 }}>{s.desc}</p>
                </div>
                <div className="code-block" style={{ fontSize: 13 }}>
                  <div className="code-body" style={{ padding: '14px 16px', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                    {s.code.split('\n').map((line, li) => (
                      <div key={li}>
                        {line.startsWith('?') || line.startsWith('  ❯') || line.startsWith('✓') || line.startsWith('→') ?
                          <span className="output">{line}</span> :
                          line.startsWith('$') ?
                            <><span className="prompt">$</span> <span className="cmd">{line.replace('$ ', '')}</span></> :
                            <span style={{ color: '#6B6B7B' }}>{line}</span>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alternative install methods */}
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <p style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 16, fontFamily: 'JetBrains Mono, monospace' }}>// Other install methods</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <div className="code-block" style={{ display: 'inline-block', fontSize: 12 }}>
                <div className="code-body" style={{ padding: '10px 16px' }}>
                  <span style={{ color: '#6B6B7B' }}>macOS/Linux:</span>{' '}
                  <span className="cmd">curl -fsSL https://openclaw.ai/install.sh | bash</span>
                </div>
              </div>
              <div className="code-block" style={{ display: 'inline-block', fontSize: 12 }}>
                <div className="code-body" style={{ padding: '10px 16px' }}>
                  <span style={{ color: '#6B6B7B' }}>Docker:</span>{' '}
                  <span className="cmd">docker pull openclaw/openclaw:latest</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORACLE FREE TIER DEPLOY */}
      <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.04)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(239,68,68,0.06) 0%, transparent 60%)' }} />
        <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 999, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', fontSize: 13, color: '#EF4444', marginBottom: 16, fontFamily: 'JetBrains Mono, monospace' }}>
              🔥 FREE FOREVER
            </div>
            <h2 className="section-title" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Deploy on Oracle Cloud Free Tier</h2>
            <p style={{ fontSize: 16, color: '#6B6B7B', marginTop: 8 }}>4 ARM CPUs · 24GB RAM · 200GB Storage · $0/month · Runs 24/7</p>
          </div>

          {/* Oracle Specs Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 40 }}>
            {[
              { icon: '⚡', label: 'ARM CPUs', val: '4 OCPU', highlight: true },
              { icon: '🧠', label: 'RAM', val: '24 GB', highlight: true },
              { icon: '💾', label: 'Storage', val: '200 GB', highlight: false },
              { icon: '💰', label: 'Cost', val: '$0/mo', highlight: true },
              { icon: '⏰', label: 'Uptime', val: '24/7 Always On', highlight: false },
            ].map((r, i) => (
              <div key={i} style={{ background: 'var(--surface)', border: r.highlight ? '1px solid rgba(239,68,68,0.3)' : '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{r.icon}</div>
                <div style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: r.highlight ? '#EF4444' : '#E8E8ED' }}>{r.val}</div>
              </div>
            ))}
          </div>

          {/* Oracle Deploy Steps */}
          <div style={{ display: 'grid', gap: 12 }}>
            <div className="step-card" style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#EF4444' }}>1</div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Create Oracle Cloud Account</h4>
                <p style={{ fontSize: 13, color: '#6B6B7B' }}>Sign up at <a href="https://cloud.oracle.com/free" target="_blank" style={{ color: '#A855F7' }}>cloud.oracle.com/free</a> — requires email + credit card (won't be charged)</p>
              </div>
            </div>
            <div className="step-card" style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#EF4444' }}>2</div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Create ARM Instance</h4>
                <p style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 10 }}>Image: Ubuntu 24.04 (aarch64) · Shape: VM.Standard.A1.Flex · 2-4 OCPU · 12-24GB RAM · 50-200GB Boot</p>
                <div className="code-block" style={{ fontSize: 12 }}><div className="code-body" style={{ padding: '8px 14px' }}><span className="output">Shape: VM.Standard.A1.Flex</span>\n<span className="output">Image: Ubuntu 24.04 aarch64</span>\n<span className="output">OCPU: 4 · RAM: 24GB · Disk: 200GB</span></div></div>
              </div>
            </div>
            <div className="step-card" style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#EF4444' }}>3</div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>SSH In & Install</h4>
                <div className="code-block" style={{ fontSize: 12, marginTop: 8 }}>
                  <div className="code-body" style={{ padding: '10px 14px', lineHeight: 1.8 }}>
                    <div><span className="prompt">$</span> <span className="cmd">ssh ubuntu@YOUR_PUBLIC_IP</span></div>
                    <div><span className="prompt">$</span> <span className="cmd">sudo apt update && sudo apt upgrade -y</span></div>
                    <div><span className="prompt">$</span> <span className="cmd">curl -fsSL https://openclaw.ai/install.sh | bash</span></div>
                    <div><span className="prompt">$</span> <span className="cmd">openclaw onboard</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-card" style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 16, alignItems: 'start' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(239,68,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700, color: '#EF4444' }}>4</div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Connect with Ollama Cloud</h4>
                <p style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 10 }}>Use Ollama cloud models for free — no local GPU needed. Set your AI provider during onboard.</p>
                <div className="code-block" style={{ fontSize: 12 }}>
                  <div className="code-body" style={{ padding: '10px 14px', lineHeight: 1.8 }}>
                    <div><span className="output">? Choose AI provider:</span> <span className="flag">Ollama (Cloud)</span></div>
                    <div><span className="output">? Model:</span> <span className="flag">glm-5.1 / llama3 / mistral</span></div>
                    <div><span className="output">✓ Connected — send messages to your bot!</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tip */}
          <div style={{ marginTop: 24, padding: '16px 20px', borderRadius: 12, background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', fontSize: 13, color: '#9CA3AF' }}>
            💡 <strong style={{ color: '#E8E8ED' }}>Pro tip:</strong> If instance creation fails with "Out of capacity" — retry during off-peak hours or try a different availability domain. Oracle free tier is popular!
          </div>
        </div>
      </section>

      {/* DEPLOY FOR A FRIEND */}
      <section style={{ padding: '60px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: 12, color: '#22C55E', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// Share with friends</div>
            <h2 className="section-title" style={{ fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em' }}>Deploy for a Friend</h2>
            <p style={{ fontSize: 16, color: '#6B6B7B', marginTop: 8 }}>Each Oracle account = 1 free instance. You + your friend = 2 free AI assistants.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <div style={{ background: 'var(--bg)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>🧑‍💻</div>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Your Instance</h4>
              <p style={{ fontSize: 13, color: '#6B6B7B', lineHeight: 1.5 }}>Your Oracle account. 4 OCPU + 24GB RAM. Your API keys. Your data. 100% private.</p>
              <div style={{ marginTop: 12, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: '#22C55E' }}>✓ Your AI, your rules</div>
            </div>
            <div style={{ background: 'var(--bg)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 24, marginBottom: 12 }}>👥</div>
              <h4 style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>Friend's Instance</h4>
              <p style={{ fontSize: 13, color: '#6B6B7B', lineHeight: 1.5 }}>Their Oracle account. Same free specs. They control their AI, you just help set it up.</p>
              <div style={{ marginTop: 12, fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: '#22C55E' }}>✓ Independent & private</div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section style={{ padding: '60px 24px', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>System Requirements</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
            {[
              { icon: '🟢', label: 'Node.js', val: '22+' },
              { icon: '💻', label: 'OS', val: 'Win/Mac/Linux' },
              { icon: '🧠', label: 'RAM', val: '2GB min' },
              { icon: '💾', label: 'Disk', val: '~500MB' },
              { icon: '🌐', label: 'Network', val: 'Required' },
            ].map((r, i) => (
              <div key={i} style={{ background: 'var(--surface)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: 20, textAlign: 'center' }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{r.icon}</div>
                <div style={{ fontSize: 13, color: '#6B6B7B', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{r.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 24px', background: 'var(--surface)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, color: '#A855F7', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 8 }}>// FAQ</div>
            <h2 className="section-title" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-0.03em' }}>Questions?</h2>
          </div>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: 16, fontWeight: 500 }}>{f.q}</h4>
                <span style={{ color: '#A855F7', fontSize: 20, transition: 'transform 0.2s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </div>
              {openFaq === i && (
                <p style={{ fontSize: 14, color: '#6B6B7B', lineHeight: 1.6, marginTop: 12 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.15) 0%, transparent 70%)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 16 }}>
            Ready to Deploy?
          </h2>
          <p style={{ fontSize: 18, color: '#6B6B7B', marginBottom: 32 }}>
            Your AI assistant is one command away.
          </p>
          <div style={{ display: 'inline-block' }} className="code-block">
            <div className="code-body" style={{ padding: '16px 28px', fontSize: 16 }}>
              <span className="prompt">$</span> <span className="cmd">npm i -g openclaw@beta</span> <span style={{ marginLeft: 16, color: '#6B6B7B' }}>&&</span> <span className="cmd">openclaw onboard</span>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <a href="https://github.com/openclaw/openclaw" target="_blank" className="cta-btn" style={{ marginRight: 12 }}>View on GitHub →</a>
            <a href="https://discord.com/invite/clawd" target="_blank" className="cta-btn-outline">Join Discord</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 6, background: 'linear-gradient(135deg, #7C3AED, #A855F7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🐾</div>
            <span style={{ fontWeight: 600, fontSize: 14 }}>OpenClaw</span>
            <span style={{ fontSize: 12, color: '#6B6B7B', marginLeft: 8 }}>Open Source AI Assistant</span>
          </div>
          <div style={{ display: 'flex', gap: 20, fontSize: 13, color: '#6B6B7B' }}>
            <a href="https://docs.openclaw.ai" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Docs</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>GitHub</a>
            <a href="https://discord.com/invite/clawd" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>Discord</a>
            <a href="https://clawhub.ai" target="_blank" style={{ color: '#6B6B7B', textDecoration: 'none' }}>ClawHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}